import React from "react";
import { useContext } from "react";
import { myContext } from "../context";

const Hero = () => {
  const { connectWallet, state } = useContext(myContext);
  return (
    <div className="relative h-screen flex items-center justify-center text-blue-600 bg-white">
      {/* Small Triangles Background */}
      <div className="absolute inset-0 flex justify-center">
        {/* Triangle 1 */}
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-blue-500 z-0"></div>
        {/* Triangle 2 */}
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-500 z-0 transform translate-x-16 translate-y-16"></div>
        {/* Triangle 3 */}
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-blue-500 z-0 transform translate-x-32 translate-y-32"></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our ICO</h1>
        <p className="text-lg mb-8">
          Join us in revolutionizing the future of finance.
        </p>
        <button
          className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={connectWallet}
        >
          {state.Isconnected ? <p>{state.account}</p> : <p>connect</p>}
        </button>
        <h3 className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          {state.chainId !== 80002 ? <p>unsupported</p> : <p>polygon amoy</p>}
        </h3>
      </div>
    </div>
  );
};

export default Hero;
