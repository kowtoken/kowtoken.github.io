import kowLogo from "../assets/LOGO.png";
import pancakeswapLogo from "../assets/partners/pancakeswap.png";
import poocoinLogo from "../assets/partners/poocoin.png";
import coinbrainLogo from "../assets/partners/coinbrain.png";
import floozLogo from "../assets/partners/flooz.png";
import dextoolsLogo from "../assets/partners/dextools.png";
import dexviewLogo from "../assets/partners/dexview.png";
import binanceLogo from "../assets/partners/binance.png";
import gateLogo from "../assets/partners/gatelogo.png";
import okxLogo from "../assets/partners/okxlogo.png";
import matchaLogo from "../assets/partners/matchalogo.jpg";
import mexcLogo from "../assets/partners/mexclogo.jpg";

const contractAddress = "0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6";

const buyLinks = [
  { name: "PancakeSwap", url: `https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`, logo: pancakeswapLogo, gradient: "from-cyan-400 to-orange-400", textColor: "text-darkblue" },
  { name: "PooCoin", url: "https://poocoin.app/swap", logo: poocoinLogo, gradient: "from-blue-500 to-brown-500", textColor: "text-white" },
  { name: "CoinBrain", url: `https://coinbrain.com/coins/bnb-${contractAddress}`, logo: coinbrainLogo, gradient: "from-blue-600 to-cyan-400", textColor: "text-white" },
  { name: "Flooz", url: `https://flooz.xyz/trade/${contractAddress}?`, logo: floozLogo, gradient: "from-purple-500 to-indigo-400", textColor: "text-white" },
  { name: "Dextools", url: "https://www.dextools.io/app/en/bnb/pair-explorer/0x80207cf77e38c1dee35d364890ab5f80c0deca14", logo: dextoolsLogo, gradient: "from-gray-700 to-gray-900", textColor: "text-white" },
  { name: "Dexview", url: "https://www.dexview.com/bsc/0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6", logo: dexviewLogo, gradient: "from-blue-700 to-gray-900", textColor: "text-white" },
  { name: "Binance", url: "https://web3.binance.com/en/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6", logo: binanceLogo, gradient: "from-yellow-400 to-yellow-600", textColor: "text-black" },
  { name: "Gate", url: "https://web3.gate.com/en/trade/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6", logo: gateLogo, gradient: "from-rose-500 to-red-600", textColor: "text-white" },
  { name: "OKX", url: "https://web3.okx.com/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6", logo: okxLogo, gradient: "from-gray-900 to-gray-700", textColor: "text-white" },
  { name: "Matcha", url: "https://matcha.xyz/tokens/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6", logo: matchaLogo, gradient: "from-green-500 to-emerald-700", textColor: "text-white" },
  { name: "MEXC", url: "https://www.mexc.com/el-GR/dex/trade?pair_ca=0x80207cf77E38c1DEE35d364890AB5f80c0DECA14&chain_id=56&token_ca=0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6&from=search", logo: mexcLogo, gradient: "from-green-400 to-lime-600", textColor: "text-white" },
];

const BuyToken = () => {
  return (
    <section
      id="buytoken"
      aria-labelledby="buytoken-title"
      className="min-h-screen flex items-center py-16 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/80 via-black/50 to-darkblue/80" />

      <div className="relative max-w-7xl mx-auto px-6 text-center space-y-10 w-full">
        {/* Title */}
        <div className="flex flex-col items-center space-y-3">
          <img src={kowLogo} alt="King of World Logo" className="h-24 w-auto" />
          <h2 id="buytoken-title" className="text-3xl sm:text-4xl font-extrabold text-gold">
            💳 Buy KOW
          </h2>
          <p className="text-gray-300 text-base max-w-2xl">
            Choose your favorite platform to{" "}
            <span className="text-gold font-semibold">buy King Of World Token</span>.
          </p>
        </div>

        {/* Buy Links */}
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {buyLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy KOW on ${link.name}`}
              className={`relative group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br ${link.gradient} ${link.textColor} border border-transparent hover:border-gold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-gold/30`}
            >
              <img src={link.logo} alt={`${link.name} logo`} className="h-8 w-8" />
              <span className="text-sm font-semibold">{link.name}</span>

              {/* Tooltip */}
              <div
                className={`absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300 bg-gradient-to-r ${link.gradient} text-white text-xs font-medium px-2 py-1 rounded shadow-md`}
              >
                Buy on {link.name}
                <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-inherit rotate-45 transform -translate-x-1/2"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Fees Info */}
        <div className="mt-6 bg-white/10 backdrop-blur-md border border-gold/30 rounded-lg p-4 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-gold mb-2">ℹ️ Trading Fees</h3>
          <p className="text-gray-300 text-sm">
            <span className="text-gold font-semibold">Buy Tax:</span> 11% <br />
            <span className="text-gold font-semibold">Sell Tax:</span> 9%
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuyToken;
