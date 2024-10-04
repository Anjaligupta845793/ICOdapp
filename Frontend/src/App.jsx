import "./App.css";
import React from "react";
import TokenCard from "./components/TokenCard";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <Toaster />
        <Hero />
        <TokenCard />
        <Features />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default App;
