import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeployHelloContract from "./components/DeployHelloContract";
import DeployToken from "./components/deploytoken";
import DeployNFT from "./components/deployNFT";
import Navbar from "./components/Navbar";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <Router>
      <Navbar />
      <ConnectWallet setWalletAddress={setWalletAddress} />
      <Routes>
        <Route path="/" element={<div style={{ textAlign: "center", color: "#fff" }}>Welcome to ZenChain DApp</div>} />
        <Route path="/deploy-contract" element={<DeployHelloContract walletAddress={walletAddress} />} />
        <Route path="/deploy-token" element={<DeployToken walletAddress={walletAddress} />} />
        <Route path="/deploy-nft" element={<DeployNFT walletAddress={walletAddress} />} />
      </Routes>
    </Router>
  );
}

export default App;