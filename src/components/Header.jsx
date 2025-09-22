import { Link } from "react-scroll";
import logo from "../assets/LOGO.png";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Info", to: "info" },
  { label: "Partners", to: "partners" },
  { label: "Tokenomics", to: "tokenomics" },
  { label: "Roadmap", to: "roadmap" },
  { label: "Whitepaper", to: "whitepaper" },
  { label: "Social Media", to: "social-media" },
  { label: "FAQ", to: "faq" },
  { label: "Contact Us", to: "contact-us" },
];

const Header = () => {
  return (
    <header className="bg-darkblue text-white sticky top-0 z-50 border-b border-gold/30">
      <div className="w-full flex items-center justify-between px-6 py-4 relative">
        
        {/* 👑 Logo αριστερά */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="KOW Logo" className="h-12 w-12" />
          <span className="text-2xl font-extrabold tracking-wide text-gold">
            KOW
          </span>
        </div>

        {/* 📌 Μενού στο κέντρο */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              hashSpy={false}   // 🚫 Δεν θα αλλάζει το URL
              offset={-80}
              className="relative cursor-pointer text-base font-semibold text-gold transition duration-300 hover:text-white"
              activeClass="text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 🚀 CTA Button δεξιά */}
        <div>
          <Link
            to="buytoken"
            smooth={true}
            duration={500}
            hashSpy={false}   // 🚫 Δεν θα αλλάζει το URL
            offset={-80}
            className="cursor-pointer bg-gradient-to-r from-gold to-white text-darkblue px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300"
          >
            🚀 Buy KOW
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
