import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../abi.json";
import bytecode from "../bytecode.json";
import ConnectWallet from "./ConnectWallet";

const DeployHelloContract = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [deployStatus, setDeployStatus] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [txHash, setTxHash] = useState("");

  const handleDeploy = async () => {
    try {
      if (!window.ethereum) {
        setDeployStatus("Please install MetaMask");
        return;
      }

      if (!walletAddress || walletAddress.length < 10) {
        setDeployStatus("Please connect the wallet first.");
        return;
      }

      setDeployStatus("Deploying the contract...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();
      if (Number(network.chainId) !== 8408) {
        setDeployStatus("Please connect to ZenChain (Chain ID: 8408)");
        return;
      }

      const factory = new ethers.ContractFactory(abi, bytecode.object || bytecode, signer);
      const contract = await factory.deploy();
      const tx = await contract.waitForDeployment();
      const address = await contract.getAddress();
      setContractAddress(address);
      setTxHash(tx.transactionHash);
      setDeployStatus("Deployment successful!");
    } catch (err) {
      console.error("Deployment error:", err);
      setDeployStatus("Error: " + err.message);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <div style={{
        backgroundColor: "#131313ff",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 4px 12px rgba(72, 255, 0, 0.52)",
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "rgba(255, 255, 255, 1)"  , marginBottom: "20px" }}>Deploy Hello Contract</h2>

        {/* Connect Wallet inside the card */}
        <ConnectWallet onConnect={(address) => setWalletAddress(address)} />

        {/* Deploy Button */}
        <button
          onClick={handleDeploy}
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(0, 255, 13, 1)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#000",
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          Deploy Contract
        </button>

        {/* Deployment Status */}
        {deployStatus && (
          <p style={{ color: "rgba(21, 255, 0, 1)", marginTop: "10px" }}>{deployStatus}</p>
        )}
        {contractAddress && (
          <p style={{ color: "rgba(0, 255, 34, 1)", fontSize: "14px" }}>
            Contract Address: {contractAddress}
          </p>
        )}
        {txHash && (
          <p style={{ color: "rgba(0, 255, 34, 1)", fontSize: "14px" }}>
            Tx Hash: {txHash}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeployHelloContract;