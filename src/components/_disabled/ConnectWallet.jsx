import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);

  const connect = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {account ? (
        <p className="text-sm font-medium text-gold bg-darkblue/70 px-4 py-2 rounded-full border border-gold/40 shadow-md">
          ✅ Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connect}
          className="bg-gradient-to-r from-gold to-white text-darkblue px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🔗 Σύνδεση με Metamask
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
