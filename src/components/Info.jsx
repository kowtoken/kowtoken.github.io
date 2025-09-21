import { FaCogs, FaEye, FaRoute } from "react-icons/fa";
import tothemoon from "../assets/pics/tothemoon.png"; // τσέκαρε το path σου

const Info = () => {
  return (
    <section
      id="info"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/50 to-darkblue/70" />

      {/* 🚀 Εικόνα σταθερά αριστερά */}
      <img
        src={tothemoon}
        alt="KOW to the moon"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] max-w-[40%] opacity-90 pointer-events-none"
      />

      {/* Περιεχόμενο */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gold">
          ℹ️ Info
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
          Contract Address :{" "}
          <span className="text-gold">
            0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6
          </span>
          <p>
            “The official <span className="text-gold">KOW</span> contract —
            verified and live on Binance Smart Chain.”
          </p>
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
          Here’s how <span className="text-gold">$KOW</span> works, what it{" "}
          <span className="text-gold">stands for</span>, and where it’s going 🚀
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* How it Works */}
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform relative z-10">
            <FaCogs className="text-gold text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gold mb-2">How It Works</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-gold">KOW is a gold coin</span> on the
              blockchain built on Binance Smart Chain (BEP-20). With every
              transaction: 1% is automatically burned and permanently removed
              from circulation. This means that over time, the coin becomes
              rarer and more valuable. Holders have complete freedom to trade
              <span className="text-gold"> KOW</span> on the market without
              restrictions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform relative z-10">
            <FaEye className="text-gold text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gold mb-2">Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              From a simple meme token to a global, iconic, and scarce digital
              currency. Our vision is fueled by community power, unstoppable
              meme culture, and constant evolution. The journey doesn’t stop at
              being just a token <span className="text-gold">KOW</span> is set
              to expand into staking, NFTs, DeFi, and cross-chain integration,
              building a vibrant ecosystem for the future, combining humor,
              accessibility, and community power.
            </p>
          </div>

          {/* Plan Ahead */}
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 hover:scale-105 transition-transform relative z-10">
            <FaRoute className="text-gold text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gold mb-2">Plan Ahead</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-gold">KOW</span> isn’t just about today —
              it's built with an eye on the future. That's what sets us apart.{" "}
              <span className="text-gold">Ready for the future →</span>. Our
              plan is simple but ambitious. A rare and valuable currency.
            </p>
            <p>
              <span className="text-gold">The old Token prophecy.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
