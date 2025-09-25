import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
        if (onConnect) {
          onConnect(address);
        }
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={connectWallet}
        style={{
          padding: '10px 20px',
          backgroundColor: 'rgba(26, 26, 26, 1)',
          boxShadow: "0 0 10px #39ff14", // افکت نئون
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#00ff0dff',
          fontWeight: 'bold',
        }}
      >
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default ConnectWallet;