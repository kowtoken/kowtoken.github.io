import { FaCogs, FaEye, FaRoute } from "react-icons/fa";
import tothemoon from "../assets/pics/tothemoon.png";

const Info = () => {
  return (
    <section
      id="info"
      aria-labelledby="info-title"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white overflow-hidden"
    >
      {}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/50 to-darkblue/70" />

      {}
      <img
        src={tothemoon}
        alt="KOW to the moon"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] max-w-[40%] opacity-90 pointer-events-none"
      />

      {}
      <div className="relative max-w-5xl mx-auto text-center px-6 space-y-12">
        {}
        <h2
          id="info-title"
          className="text-4xl sm:text-5xl font-extrabold text-gold"
        >
          ℹ️ Info
        </h2>

        {}
        <div className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          <p>
            Contract Address:{" "}
            <span className="text-gold font-semibold">
              0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6
            </span>
          </p>
          <p className="mt-2 italic">
            “The official <span className="text-gold">KOW</span> contract —
            verified and live on Binance Smart Chain.”
          </p>
        </div>

        {}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Here’s how <span className="text-gold">$KOW</span> works, what it{" "}
          <span className="text-gold">stands for</span>, and where it’s going 🚀
        </p>

        {}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {}
          <article
            role="group"
            aria-label="How it works"
            className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <FaCogs className="text-gold text-4xl mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gold mb-2">How It Works</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-gold">KOW is a gold coin</span> on Binance
              Smart Chain (BEP-20).  
              Every transaction: 1% is{" "}
              <span className="text-gold">burned</span> and permanently removed
              from circulation, making the coin rarer and more valuable. Holders
              can freely trade <span className="text-gold">KOW</span> without
              restrictions.
            </p>
          </article>

          {}
          <article
            role="group"
            aria-label="Vision"
            className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <FaEye className="text-gold text-4xl mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gold mb-2">Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              From meme token → to iconic scarce currency.  
              <span className="text-gold">KOW</span> expands into staking,
              NFTs, DeFi, and cross-chain integration.  
              Built for community, humor, and future growth.
            </p>
          </article>

          {}
          <article
            role="group"
            aria-label="Plan Ahead"
            className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform"
          >
            <FaRoute className="text-gold text-4xl mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gold mb-2">Plan Ahead</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-gold">KOW</span> is built for the long term.
              Rare, valuable, and future-ready.  
              <span className="text-gold">The old Token prophecy</span>{" "}
              continues with each milestone achieved.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Info;
