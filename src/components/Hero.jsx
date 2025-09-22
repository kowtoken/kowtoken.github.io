import logo from "../assets/logo.png"; // ✅ βεβαιώσου ότι υπάρχει

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative bg-gradient-to-br from-black to-gray-900 text-white m-0 p-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 via-transparent to-darkblue/70" />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* ✅ LOGO */}
        <img
          src={logo}
          alt="KOW Logo"
          className="h-32 sm:h-56 mb-6 mx-auto"
        />

        {/* 👑 Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-gold">👑 King of World Token</span>{" "}
          <span className="text-gold">(KOW)</span>
        </h1>

        {/* 💬 Subtitle */}
        <p className="text-xl sm:text-2xl mb-10 text-gray-300">
          The Token designed to reward belief.
          <br />
          <span className="text-gold font-semibold">
            ✨ The Gold Token built for everyone.
          </span>
          <br />
          <span className="italic">“ Buy • Stake • Earn ”</span>
        </p>

        {/* 🎯 CTA Button */}
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gold to-white text-darkblue px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
        >
          🚀 BUY KOW
        </a>
      </div>
    </section>
  );
};

export default Hero;
