import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abitoken.json';
import bytecode from '../bytecodetoken.json';
const TokenDeployer = () => {
     const [tokenName, setTokenName] = useState(''); 
     const [tokenSymbol, setTokenSymbol] = useState('');
     const [totalSupply, setTotalSupply] = useState('');
     const [contractAddress, setContractAddress] = useState('');

      const handleSubmit = async (e) => {
     e.preventDefault();
     if (window.ethereum) { 
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
             const signer = provider.getSigner();
             const feeWallet = "0xF54Ba60205dE2E82b8070eAE8e0C791a51673A57"; // آدرس کیف‌پولت رو اینجا بذار

            // چک کن شبکه درست باشه 
            // (Chain ID 8408)        
            const network = await provider.getNetwork();
             if (network.chainId !== 8408) {
                 alert("Please switch to Zenchain Testnet (Chain ID 8408)");
                 return;
                 }

             const factory = new ethers.ContractFactory(abi, bytecode.bytecode, signer);
             const token = await factory.deploy(tokenName, tokenSymbol, ethers.utils.parseUnits(totalSupply, 18), feeWallet);
              await token.deployed();
 
             setContractAddress(token.address); 
            } catch (error) { 
                console.error("Error deploying token:", error); 
                alert("Failed to deploy token. Check console for details.");
             }
            } else {
                 alert('Please install MetaMask!');

              }
             };
return (
<div>
     <h2>Build Your Token</h2>
      <form onSubmit={handleSubmit}> 
        <label>
            Token Name:
            <input
            type="text"
            value={tokenName}
             onChange={(e) => setTokenName(e.target.value)} 
             required 
             />
             </label>
              <br />
             <label>
                 Token Symbol:
                <input
                type="text" 
                value={tokenSymbol} 
                onChange={(e) => setTokenSymbol(e.target.value)}
                required 
                />
                </label>
                <br />
                <label>
                     Total Supply:
                     <input
                      type="number"
                       value={totalSupply}
                        onChange={(e) => setTotalSupply(e.target.value)}
                         required
                         /> 
                         </label>
                         <br />
                          <button type="submit">Create Token</button>
                          </form>
                          {contractAddress && <p>Token deployed at: {contractAddress}</p>}
                           </div>
                            );};
export default TokenDeployer;