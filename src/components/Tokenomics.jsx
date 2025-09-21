import React from "react";
import avaxLogo from "../assets/pics/logo-kouros-sun.png"; // ✅ βάζεις εδώ το path που έχεις αποθηκεύσει την εικόνα σου

const Tokenomics = () => {
  const data = [
    { title: "📘 Token Name", value: "KingOfWorld" },
    { title: "⚜️ Symbol", value: "KOW" },
    { title: "🔢 Decimals", value: "18" },
    { title: "🪙 Total Supply", value: "1,000,000,000,000" },
    { title: "🛠️ Blockchain", value: "BNB Smart Chain (BEP-20)" },
  ];

  return (
    <section
      id="tokenomics"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gold">
          📊 Tokenomics
        </h2>

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

          {/* Right: Static Image instead of Pie Chart */}
          <div className="w-full flex justify-center">
            <img
  src={avaxLogo}
  alt="KOW Logo"
  className="w-full max-w-2xl object-contain drop-shadow-2xl rounded-2xl"
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
