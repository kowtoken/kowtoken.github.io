const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* ✨ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5" />

      <div className="relative max-w-6xl mx-auto text-center px-6">
        {/* 👑 Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gold">
          🧠 About $KOW
        </h2>

        {/* 📝 Intro */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
          👑 <span className="text-gold font-semibold">King of World Token</span> is more than just a cryptocurrency.  
          It’s a <span className="text-gold font-semibold">legend it's prophecy in the making</span>,  
          powered by community, humor, and innovation.
        </p>

        {/* 🌟 Cards Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gold mb-2">Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Is a new meme coin that aspires to be <span className="text-gold">King of cryptocurrencies. </span>  
               It is a digital asset that proves that community power and humor can spark a global movement.
            </p>
          </div>

          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-gold mb-2">Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Starting humbly as a meme token accessible to everyone, KOW aspires to evolve step by step into  
              <span className="text-gold"> a powerful and recognizable currency in the market.</span>
            </p>
          </div>

          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-gold mb-2">Community</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
               It is not just a<span className="text-gold"> crypto myth</span>  – it is a living prophecy written day by day by the passion and faith of the community. <span className="text-gold">KOW </span>
              wants to follow this path, combining the power of memes with an active and dedicated community. The dedication and participation of its supporters is the driving <span className="text-gold">force. </span>
            </p>
          </div>

          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="text-xl font-bold text-gold mb-2">Future</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              If it manages to maintain the interest and participation of the community, <span className="text-gold">KOW </span> may indeed live up to its name and emerge as one of the true <span className="text-gold">King of the cryptocurrency world.</span> 
            </p>
          </div>
        </div>

        {/* Outro */}
        <p className="text-2xl font-bold text-gold mt-16 italic">
          🚀 Join the movement. Be part of the Legend.  
          <br /> The King! 👑
        </p>
      </div>
    </section>
  );
};

export default About;
