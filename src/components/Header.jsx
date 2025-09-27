import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "#hero" },
  { label: "About", to: "#about" },
  { label: "Info", to: "#info" },
  { label: "Partners", to: "#partners" },
  { label: "Tokenomics", to: "#tokenomics" },
  { label: "Roadmap", to: "#roadmap" },
  { label: "Whitepaper", to: "#whitepaper" },
  { label: "Social Media", to: "#social-media" },
  { label: "FAQ", to: "#faq" },
  { label: "Contact Us", to: "#contact-us" },
];

// 👇 Custom smooth scroll με easing
function smoothScroll(el) {
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.pageYOffset - 70; // μικρό offset για το header
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const duration = 700; // διάρκεια σε ms
  let startTime = null;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const Header = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (location.hash) {
      setActiveHash(location.hash);
    } else {
      setActiveHash("");
    }
  }, [location]);

  return (
    <header className="bg-darkblue text-white sticky top-0 z-50 border-b border-gold/30">
      <div className="w-full flex items-center justify-between px-6 py-4 relative">
        {/* 👑 Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="KOW Logo"
            className="h-12 w-12"
            loading="lazy"
          />
          <span className="text-2xl font-extrabold tracking-wide text-gold">
            KOW
          </span>
        </div>

        {/* 📌 Menu */}
        <nav
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.to}
              to={`/${link.to}`}
              scroll={smoothScroll} // 👈 custom scroll
              className={`relative cursor-pointer text-base font-semibold transition duration-300 ${
                activeHash === link.to
                  ? "text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
                  : "text-gold hover:text-white"
              }`}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        {/* 🚀 CTA Button */}
        <div>
          <HashLink
            to="/#buytoken"
            scroll={smoothScroll} // 👈 ίδιο και στο CTA
            className="cursor-pointer bg-gradient-to-r from-gold to-white text-darkblue px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300"
          >
            🚀 Buy KOW
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
