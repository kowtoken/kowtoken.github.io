import React, { useState } from "react";
import avaxLogo from "../assets/pics/logo-kouros-sun.png";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  const data = [
    { title: "📘 Token Name", value: "KingOfWorld" },
    { title: "⚜️ Symbol", value: "KOW" },
    { title: "🔢 Decimals", value: "18" },
    { title: "🪙 Total Supply", value: "1,000,000,000,000" },
    { title: "🛠️ Blockchain", value: "BNB Smart Chain (BEP-20)" },
  ];

  const contractAddress = "0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="tokenomics"
      className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gold">
          📊 Tokenomics
        </h2>

        {/* Grid με στοιχεία + εικόνα */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Token Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 text-center hover:scale-105 hover:border-gold/60 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Right: Static Image */}
          <div className="w-full flex justify-center">
            <img
              src={avaxLogo}
              alt="KOW Logo"
              className="w-full max-w-2xl object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>

        {/* Contract Address κάτω */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gold mb-3">
            📜 Contract Address
          </h3>
          <p
            onClick={handleCopy}
            className={`text-xl font-bold cursor-pointer px-6 py-4 inline-block rounded-xl border transition-all duration-300 break-all ${
              copied
                ? "bg-gold/20 border-gold/50 text-gold"
                : "bg-white/10 border-gold/30 text-gold hover:bg-gold/20 hover:text-yellow-200"
            }`}
          >
            {copied ? "✅ Copied to clipboard!" : contractAddress}
          </p>

          {/* 🔗 Link στο BscScan */}
          <div className="mt-4">
            <a
              href={`https://bscscan.com/token/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold hover:text-yellow-300 font-semibold underline"
            >
              🔎 View on BscScan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
