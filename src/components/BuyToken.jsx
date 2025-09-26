import { useState } from "react";
import { ethers } from "ethers";

// 👑 Contract address του KOW
const contractAddress = "0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6";

// 🖼️ Logos από τον φάκελο assets
import kowLogo from "../assets/LOGO.png";
import pancakeswapLogo from "../assets/partners/pancakeswap.png";
import poocoinLogo from "../assets/partners/poocoin.png";
import coinbrainLogo from "../assets/partners/coinbrain.png";
import floozLogo from "../assets/partners/flooz.png";
import dextoolsLogo from "../assets/partners/dextools.png";
import dexviewLogo from "../assets/partners/dexview.png";
import binanceLogo from "../assets/partners/binance.png";

const BuyToken = () => {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState(null);
  const [txStatus, setTxStatus] = useState("");

  // 🔗 Links για αγορά
  const buyLinks = [
    {
      name: "PancakeSwap",
      url: `https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`,
      logo: pancakeswapLogo,
      color: "from-yellow-400 to-orange-400 text-darkblue",
    },
    {
      name: "PooCoin",
      url: "https://poocoin.app/swap",
      logo: poocoinLogo,
      color: "from-pink-500 to-red-500 text-white",
    },
    {
      name: "CoinBrain",
      url: `https://coinbrain.com/coins/bnb-${contractAddress}`,
      logo: coinbrainLogo,
      color: "from-blue-600 to-cyan-400 text-white",
    },
    {
      name: "Flooz",
      url: `https://flooz.xyz/trade/${contractAddress}?`,
      logo: floozLogo,
      color: "from-purple-500 to-indigo-400 text-white",
    },
    {
      name: "Dextools",
      url: "https://www.dextools.io/app/en/bnb/pair-explorer/0x80207cf77e38c1dee35d364890ab5f80c0deca14",
      logo: dextoolsLogo,
      color: "from-gray-700 to-gray-900 text-white",
    },
    {
      name: "Dexview",
      url: "https://www.dexview.com/bsc/0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6",
      logo: dexviewLogo,
      color: "from-blue-700 to-gray-900 text-white",
    },
    {
      name: "Binance",
      url: "https://web3.binance.com/en/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6",
      logo: binanceLogo,
      color: "from-blue-700 to-gray-900 text-white",
    },
  ];

  return (
    <section
      id="buytoken"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/80 via-black/50 to-darkblue/80" />

      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Title */}
        <div className="flex flex-col items-center space-y-4">
          <img src={kowLogo} alt="KOW Logo" className="h-40" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gold">
            💳 Buy KOW
          </h2>
          <p className="text-gray-300 text-lg">
            Choose your favorite platform to{" "}
            <span className="text-gold font-semibold">
              buy King Of World Token
              
            </span>
            <p>Connect your wallet and amount to swap.</p>
          </p>
        </div>

        {/* 🛒 Buy Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
          {buyLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${link.color} border-2 border-transparent hover:border-gold hover:scale-105 transition-all duration-300`}
            >
              <img src={link.logo} alt={link.name} className="h-12 w-12" />
              <span className="font-bold">{link.name}</span>
            </a>
          ))}
        </div>

        {/* 📌 Fees Info */}
        <div className="mt-10 bg-white/10 backdrop-blur-md border border-gold/30 rounded-xl p-6 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gold mb-3">ℹ️ Trading Fees</h3>
          <p className="text-gray-300 text-lg">
            <span className="text-gold font-semibold">Buy Tax:</span> 11% <br />
            <span className="text-gold font-semibold">Sell Tax:</span> 9%
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuyToken;
