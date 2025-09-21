import bscscanLogo from "../assets/partners/bsc.png";
import pancakeswapLogo from "../assets/partners/PancakeSwap.png";
import dextoolsLogo from "../assets/partners/dextools.png";
import poocoinLogo from "../assets/partners/poocoin.png";
import dexscreenerLogo from "../assets/partners/dexscreener.png";
import gemfinderLogo from "../assets/partners/gemfinder.png";
import coindiscoveryLogo from "../assets/partners/coindiscovery.png";
import coinbrainLogo from "../assets/partners/coinbrain.png";
import floozLogo from "../assets/partners/flooz.png";

const partners = [
  { name: "Bscscan", logo: bscscanLogo, link: "https://bscscan.com/token/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "PancakeSwap", logo: pancakeswapLogo, link: "https://pancakeswap.finance/swap?outputCurrency=0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Dextools", logo: dextoolsLogo, link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x80207cf77e38c1dee35d364890ab5f80c0deca14" },
  { name: "Poocoin", logo: poocoinLogo, link: "https://poocoin.app/tokens/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Dexscreener", logo: dexscreenerLogo, link: "https://dexscreener.com/bsc/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6" },
  { name: "Gemfinder", logo: gemfinderLogo, link: "https://gemfinder.cc/gem/27779" },
  { name: "CoinDiscovery", logo: coindiscoveryLogo, link: "https://coindiscovery.app/coin/kingofworld/overview" },
  { name: "Coinbrain", logo: coinbrainLogo, link: "https://coinbrain.com/coins/bnb-0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6" },
  { name: "Flooz", logo: floozLogo, link: "https://flooz.xyz/trade/0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6" },
];

const Partners = () => {
  return (
    <section
      id="partners"
      className="min-h-screen flex items-center py-10 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/10" />

      <div className="relative max-w-7xl mx-auto text-center px-3">
        <h2 className="text-7xl sm:text-5xl font-extrabold mb-1 text-gold">
          🤝 Our Partners
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-16">
          Trusted platforms and explorers supporting the{" "}
          <span className="text-gold">KOW</span> ecosystem.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 border border-gold/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-110 hover:border-gold/70 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="relative h-20 w-auto object-contain mx-auto transition duration-500"
              />
              <p className="relative mt-4 text-base font-bold text-gray-300 group-hover:text-gold transition duration-300">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
