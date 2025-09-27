const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center px-6 space-y-12">
        {/* Title */}
        <h2
          id="about-title"
          className="text-4xl sm:text-5xl font-extrabold text-gold"
        >
          🧠 About $KOW
        </h2>

        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          <span className="text-gold font-semibold">King of World Token</span>{" "}
          is more than just a cryptocurrency. It’s{" "}
          <span className="text-gold font-semibold">
            a legend and a prophecy in the making
          </span>
          , powered by community, humor, and innovation.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission */}
          <article
            role="group"
            aria-label="Mission"
            className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-3xl mb-3" aria-hidden="true">🎯</div>
            <h3 className="text-xl font-bold text-gold mb-2">Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A new meme coin aspiring to be{" "}
              <span className="text-gold">King of cryptocurrencies</span>. It
              proves that community power and humor can spark a global
              movement.
            </p>
          </article>

          {/* Vision */}
          <article
            role="group"
            aria-label="Vision"
            className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-3xl mb-3" aria-hidden="true">🚀</div>
            <h3 className="text-xl font-bold text-gold mb-2">Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Starting humbly as a meme token, KOW evolves step by step into{" "}
              <span className="text-gold">a strong and recognizable currency</span>{" "}
              in the market.
            </p>
          </article>

          {/* Community */}
          <article
            role="group"
            aria-label="Community"
            className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-3xl mb-3" aria-hidden="true">🤝</div>
            <h3 className="text-xl font-bold text-gold mb-2">Community</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Not just a <span className="text-gold">crypto myth</span> — but a
              living prophecy written day by day through the{" "}
              <span className="text-gold">dedication and faith</span> of the
              community.
            </p>
          </article>

          {/* Future */}
          <article
            role="group"
            aria-label="Future"
            className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-3xl mb-3" aria-hidden="true">💎</div>
            <h3 className="text-xl font-bold text-gold mb-2">Future</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              If it maintains community interest,{" "}
              <span className="text-gold">KOW</span> may rise as one of the true{" "}
              <span className="text-gold">Kings of the crypto world</span>.
            </p>
          </article>
        </div>

        {/* Outro */}
        <p className="text-2xl font-bold text-gold mt-12 italic">
          🚀 Join the movement. Be part of the Legend.  
          <br /> The King! 👑
        </p>
      </div>
    </section>
  );
};

export default About;
