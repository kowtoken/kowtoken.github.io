import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import bscscanLogo from "../assets/pics/5.png";
import ethLogo from "../assets/pics/1.png";
import solanaLogo from "../assets/pics/2.png";
import polygonLogo from "../assets/pics/3.png";
import avaxLogo from "../assets/pics/4.png";

const Whitepaper = () => {
  return (
    <section
      id="whitepaper"
      aria-labelledby="whitepaper-title"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0f1a] via-black to-[#0b0f1a] text-white relative pt-24"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/60 via-black/40 to-darkblue/60" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 text-center">
        {/* Title */}
        <h2
          id="whitepaper-title"
          className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-extrabold mb-6 text-gold"
        >
          <span role="img" aria-label="document">📄</span>
          Whitepaper
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Dive into our{" "}
          <span className="text-gold font-semibold">vision</span>,{" "}
          <span className="text-gold font-semibold">technology</span>, and{" "}
          <span className="text-gold font-semibold">tokenomics</span> of <span className="text-gold font-semibold">KOW.</span>
        </p>

        {/* CTA Button */}
        <Link
          to="/whitepaper"
          aria-label="View or download the Whitepaper"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-200 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaDownload className="text-lg" />
          View / Download Whitepaper
        </Link>

        {/* Logos */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full">
          <img
            src={bscscanLogo}
            alt="BscScan logo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={ethLogo}
            alt="Ethereum logo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={solanaLogo}
            alt="Solana logo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={polygonLogo}
            alt="Polygon logo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={avaxLogo}
            alt="Avalanche logo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
