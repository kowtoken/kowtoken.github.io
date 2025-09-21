import { useState } from "react";
import { ethers } from "ethers";

// 👉 Βάλε εδώ τη διεύθυνση του contract
const CONTRACT_ADDRESS = "0xYourAirdropContractAddress";

// 👉 ABI με μόνο το claim()
const CONTRACT_ABI = [
  "function claim() public"
];

const ClaimAirdrop = () => {
  const [account, setAccount] = useState(null);
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) return alert("❌ MetaMask δεν βρέθηκε");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
  };

  const claimAirdrop = async () => {
    try {
      setStatus("⏳ Γίνεται επεξεργασία...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.claim();
      await tx.wait();

      setStatus("✅ Επέτυχες! Το airdrop στάλθηκε.");
    } catch (err) {
      console.error(err);
      setStatus("❌ Αποτυχία ή δεν είσαι δικαιούχος.");
    }
  };

  return (
    <section id="airdrop" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center animate-fade-in">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">🎁 Claim Airdrop</h2>

        {!account ? (
          <button
            onClick={connectWallet}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold"
          >
            Σύνδεση με MetaMask
          </button>
        ) : (
          <>
            <p className="mb-4 text-yellow-400">Συνδεδεμένος: {account.slice(0, 6)}...{account.slice(-4)}</p>
            <button
              onClick={claimAirdrop}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
            >
              Claim Airdrop
            </button>
            {status && <p className="mt-4 text-gray-300">{status}</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default ClaimAirdrop;
