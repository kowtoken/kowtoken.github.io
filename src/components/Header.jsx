import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/LOGO.png";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Info", to: "info" },
  { label: "Partners", to: "partners" },
  { label: "Tokenomics", to: "tokenomics" },
  { label: "Roadmap", to: "roadmap" },
  { label: "Whitepaper", to: "whitepaper" }, // scroll στο home, route με κουμπί
  { label: "Social Media", to: "social-media" },
  { label: "FAQ", to: "faq" },
  { label: "Contact Us", to: "contact-us" },
];

const Header = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (!onHome && location.hash) {
      setActiveHash(location.hash.replace("#", ""));
    }
  }, [location, onHome]);

  return (
    <header className="bg-darkblue text-white sticky top-0 z-50 border-b border-gold/30">
      <div className="w-full flex items-center justify-between px-6 py-4 relative">
        
        {/* 👑 Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="KOW Logo" className="h-12 w-12" />
          <span className="text-2xl font-extrabold tracking-wide text-gold">
            KOW
          </span>
        </div>

        {/* 📌 Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 whitespace-nowrap">
          {navLinks.map((link) =>
            onHome ? (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="relative cursor-pointer text-base font-semibold text-gold transition duration-300 hover:text-white"
                activeClass="text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
              >
                {link.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.to}
                to={`/#${link.to}`}
                className={`relative cursor-pointer text-base font-semibold transition duration-300 ${
                  activeHash === link.to
                    ? "text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
                    : "text-gold hover:text-white"
                }`}
              >
                {link.label}
              </RouterLink>
            )
          )}
        </nav>

        {/* 🚀 CTA Button */}
        <div>
          {onHome ? (
            <ScrollLink
              to="buytoken"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer bg-gradient-to-r from-gold to-white text-darkblue px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              🚀 Buy KOW
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#buytoken"
              className="cursor-pointer bg-gradient-to-r from-gold to-white text-darkblue px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              🚀 Buy KOW
            </RouterLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
