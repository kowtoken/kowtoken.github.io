import bscscanLogo from "../assets/partners/bsc.png";
import pancakeswapLogo from "../assets/partners/PancakeSwap.png";
import poocoinLogo from "../assets/partners/poocoin.png";
import dextoolsLogo from "../assets/partners/dextools.png";

import dexscreenerLogo from "../assets/partners/dexscreener.png";
import gemfinderLogo from "../assets/partners/gemfinder.png";
import coindiscoveryLogo from "../assets/partners/coindiscovery.png";
import coinbrainLogo from "../assets/partners/coinbrain.png";
import floozLogo from "../assets/partners/flooz.png";
import dexviewLogo from "../assets/partners/dexview.png";
import binanceLogo from "../assets/partners/binance.png";
import gateLogo from "../assets/partners/gatelogo.png";
import okxLogo from "../assets/partners/okxlogo.png";
import matchaLogo from "../assets/partners/matchalogo.jpg";
import mexcLogo from "../assets/partners/mexclogo.jpg";

const partners = [
  { name: "Bscscan", logo: bscscanLogo, link: "https://bscscan.com/token/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "PancakeSwap", logo: pancakeswapLogo, link: "https://pancakeswap.finance/swap?outputCurrency=0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Poocoin", logo: poocoinLogo, link: "https://poocoin.app/tokens/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Dextools", logo: dextoolsLogo, link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x80207cf77e38c1dee35d364890ab5f80c0deca14" },
  { name: "Dexscreener", logo: dexscreenerLogo, link: "https://dexscreener.com/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Gemfinder", logo: gemfinderLogo, link: "https://gemfinder.cc/gem/27779" },
  { name: "CoinDiscovery", logo: coindiscoveryLogo, link: "https://coindiscovery.app/coin/kingofworld/overview" },
  { name: "Coinbrain", logo: coinbrainLogo, link: "https://coinbrain.com/coins/bnb-0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6" },
  { name: "Flooz", logo: floozLogo, link: "https://flooz.xyz/trade/0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6" },
  { name: "Dexview", logo: dexviewLogo, link: "https://www.dexview.com/bsc/0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6" },
  { name: "Binance", logo: binanceLogo, link: "https://web3.binance.com/en/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Gate", logo: gateLogo, link: "https://web3.gate.com/en/trade/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "OKX", logo: okxLogo, link: "https://web3.okx.com/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Matcha", logo: matchaLogo, link: "https://web3.okx.com/token/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "MEXC", logo: mexcLogo, link: "https://www.mexc.com/el-GR/dex/trade?pair_ca=0x80207cf77E38c1DEE35d364890AB5f80c0DECA14&chain_id=56&token_ca=0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6&from=search" },
];

const Partners = () => {
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/10" />

      <div className="relative max-w-7xl mx-auto text-center px-6">
        {/* Title */}
        <h2
          id="partners-title"
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-gold"
        >
          🤝 Our Partners
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          Trusted platforms and explorers supporting the{" "}
          <span className="text-gold">KOW</span> ecosystem.
        </p>

        {/* Partners grid */}
        <ul
  className="
    grid 
    grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
    gap-8 w-full
  "
>
  {partners.map((partner, index) => (
    <li key={index} className="flex">
      <a
        href={partner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center justify-center 
                   w-full rounded-2xl p-6
                   bg-white/5 backdrop-blur-lg shadow-md border border-gold/20
                   hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]
                   transition-all duration-500"
      >
        {/* Logo container */}
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center 
                        border border-gold/30 shadow-inner mb-4 group-hover:bg-gold/10 transition">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Partner name */}
        <p className="mt-2 text-sm sm:text-base font-semibold text-gray-300 
                      group-hover:text-gold transition duration-300 text-center">
          {partner.name}
        </p>
      </a>
    </li>
  ))}
</ul>


      </div>
    </section>
  );
};

export default Partners;
