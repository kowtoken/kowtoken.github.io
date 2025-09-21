import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-darkblue via-black to-darkblue text-white py-8 px-4 border-t border-gold/30 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* 👑 Social Icons */}
        <div className="flex gap-4 items-center text-xl">
          <a
            href="https://x.com/Kingofworl32190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-white/10 hover:scale-125 hover:border-gold/60 transition-all duration-300"
          >
            <i className="fa-brands fa-x-twitter text-sky-400" />
          </a>
          <a
            href="https://t.me/kingofworldtoken"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-white/10 hover:scale-125 hover:border-gold/60 transition-all duration-300"
          >
            <i className="fab fa-telegram text-sky-400" />
          </a>
          <a
            href="https://discord.com/invite/XkVMDT59Yz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-white/10 hover:scale-125 hover:border-gold/60 transition-all duration-300"
          >
            <i className="fab fa-discord text-indigo-400" />
          </a>
          <a
            href="https://medium.com/@tokenkingofworld"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-white hover:scale-125 hover:border-gold/60 transition-all duration-300"
          >
            <i className="fab fa-medium text-black" />
          </a>
          
          <a
            href="https://www.reddit.com/user/Token_KingOfWorld/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reddit"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-white/10 hover:scale-125 hover:border-gold/60 transition-all duration-300"
          >
            <i className="fab fa-reddit text-orange-500" />
          </a>
        </div>

        {/* 🖼️ Logo */}
        <img
          src={logo}
          alt="KOW Logo"
          className="h-16 sm:h-12 object-contain"
        />
      </div>

      {/* 📜 Τελικό Κείμενο */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gold font-semibold">King of World Token</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
