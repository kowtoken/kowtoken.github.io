import { FaDownload } from "react-icons/fa";
import bscscanLogo from "../assets/pics/5.png";
import ethLogo from "../assets/pics/1.png";
import solanaLogo from "../assets/pics/2.png";
import polygonLogo from "../assets/pics/3.png";
import avaxLogo from "../assets/pics/4.png";

const Whitepaper = () => {
  return (
    <section
      id="whitepaper"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0f1a] via-black to-[#0b0f1a] text-white relative"
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/60 via-black/40 to-darkblue/60" />

      <div className="relative z-10 w-full px-6 text-center">
        {/* Title */}
        <h2 className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-extrabold mb-6 text-gold">
          <span role="img" aria-label="document">📄</span>
          Whitepaper
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
          Dive into our{" "}
          <span className="text-gold font-semibold">vision</span>,{" "}
          <span className="text-gold font-semibold">technology</span>, and{" "}
          <span className="text-gold font-semibold">tokenomics</span> of KOW.
        </p>

        {/* Button */}
        <a
          href="https://www.dropbox.com/scl/fi/3ol64y0qhp3tcnogqar8l/KingOfWorld_Whitepaper.pdf?rlkey=0sgi1s8xgkearesvtclm509pd&e=1&st=7cg3fnth&dl=0" // ✨ Βάλε το δικό σου link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-200 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaDownload className="text-lg" />
          View / Download Whitepaper
        </a>

        {/* Εικόνες κολλητές */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 w-full">
          <img src={bscscanLogo} alt="BscScan" className="w-full h-full object-cover" />
          <img src={ethLogo} alt="Coinbrain" className="w-full h-full object-cover" />
          <img src={solanaLogo} alt="Flooz" className="w-full h-full object-cover" />
          <img src={polygonLogo} alt="Poocoin" className="w-full h-full object-cover" />
          <img src={avaxLogo} alt="Gemfinder" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
