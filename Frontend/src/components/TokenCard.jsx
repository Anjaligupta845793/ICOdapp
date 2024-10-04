import React from "react";
import { useContext } from "react";
import { myContext } from "../context";

const TokenCard = () => {
  const { send, userBalance, getUserBalance, userInput, setuserInput } =
    useContext(myContext);
  return (
    <section className="h-screen flex items-center justify-center bg-blue-600">
      {" "}
      {/* Full height section */}
      <div className="container mx-auto p-4">
        {" "}
        {/* Container for centering */}
        <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">Buy Token</h1>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Amount (ETH):
            </label>
            <input
              type="number"
              value={userInput}
              onChange={(e) => setuserInput(e.target.value)}
              min="1" // Set minimum value to 0 (or any desired number)
              className="border bg-white text-black rounded-md p-2 w-full"
              step="1" // Increments by 1
            />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={send}
          >
            Buy Tokens
          </button>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-blue-400">
              Your Token Balance: {userBalance} TOKEN
            </h2>
            <p>Tokens</p>
            <button
              className="bg-green-500 text-white py-1 px-3 rounded-md mt-2 hover:bg-green-600"
              onClick={getUserBalance}
            >
              Refresh Balance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenCard;
