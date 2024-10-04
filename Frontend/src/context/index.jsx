import { createContext, useState, useCallback, useEffect } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import { TokenAddress, TokenABI } from "../ABI/Token";
import { ICOAddress, ICOABI } from "../ABI/ICO";

export const myContext = createContext();

export const MyProvider = ({ children }) => {
  const [token, settoken] = useState([]);
  const [ico, setico] = useState([]);
  const [userBalance, setuserBalance] = useState(null);
  const [userInput, setuserInput] = useState("");

  const [state, setState] = useState({
    provider: null,
    account: null,
    balance: null,
    chainId: null,
    isConnected: false,
  });

  // Connect to the user's wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        toast.promise(provider.send("eth_requestAccounts", []), {
          loading: "connecting please wait 😊",
          success: " you are connected😄",
          error: " failed😢 try again ",
        });

        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const chainid = await signer.getChainId();
        const balance = await signer.getBalance();

        setState({
          provider,
          chainId: chainid,
          account: address,
          balance,
          Isconnected: true,
        });

        // Initialize token contract
        const tokenContract = new ethers.Contract(
          TokenAddress,
          TokenABI,
          signer
        );
        settoken(tokenContract);
        console.log(tokenContract);

        // Initialize ICO contract
        const icoContract = new ethers.Contract(ICOAddress, ICOABI, signer);
        setico(icoContract);
        console.log(icoContract);

        // Fetch user balance
        const userBalance = await icoContract.getTokenOfUser();
        const etherValue = ethers.utils.formatUnits(userBalance, "ether"); // Converts wei back to ether
        setuserBalance(parseInt(etherValue));
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("install metamask first", { position: "bottom-left" });
    }
  };

  // Send tokens to the ICO contract
  const send = async (e) => {
    e.preventDefault();

    const num = Number(userInput);

    if (num <= 0 || isNaN(num) || !Number.isInteger(num)) {
      toast.error("value must be non zero and integer 😥", {
        position: "bottom-left",
      });
      return;
    }

    console.log(userInput);

    const amount = ethers.utils.parseUnits(userInput, 18);
    console.log(amount);

    const sendingToken = await ico.send({ value: amount });

    toast.promise(sendingToken.wait(), {
      loading: "Processing...👨‍💻",
      success: "transfer successful 😄",
      error: "transfer failed 😢 try again ",
    });
  };

  // Get user balance from the ICO contract
  const getUserBalance = async () => {
    console.log("getting user balance");

    const userBalance = await ico.getTokenOfUser();
    const etherValue = ethers.utils.formatUnits(userBalance, "ether"); // Converts wei back to ether
    setuserBalance(parseInt(etherValue));
  };

  // Handle chain changes
  const handleChainChanged = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();

        console.log("chain is changing");

        setState((prevState) => ({
          ...prevState,
          provider,
          chainId: network.chainId.toString(),
        }));

        if (network.chainId != 80002) {
          toast.error("unsupported network!", { position: "bottom-left" });
        }
      } catch (error) {
        console.error("Chain change error:", error);
      }
    }
  }, []);

  // Handle account changes
  const handleAccountsChanged = useCallback(async (accounts) => {
    if (accounts.length > 0) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();

        const address = await signer.getAddress();

        setState((prevState) => ({
          ...prevState,
          account: address,
          provider,
          isConnected: true,
        }));
      } catch (error) {
        console.error("Account change error:", error);
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        account: null,
        isConnected: false,
      }));
    }
  }, []);

  // Effect to handle Ethereum events
  useEffect(() => {
    if (window.ethereum) {
      const connected = window.ethereum.isConnected();

      setState((prevState) => ({ ...prevState, isConnected: connected }));

      window.ethereum.on("chainChanged", handleChainChanged);
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.off("chainChanged", handleChainChanged);
        window.ethereum.off("accountsChanged", handleAccountsChanged);
      };
    }
  }, [handleChainChanged, handleAccountsChanged]);

  return (
    <myContext.Provider
      value={{
        connectWallet,
        state,
        send,
        userBalance,
        getUserBalance,
        userInput,
        setuserInput,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
