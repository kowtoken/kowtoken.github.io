import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";


function smoothScroll(el) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const yOffset = -70;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  if (isIOS) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    const startY = window.scrollY;
    const distance = y - startY;
    const duration = 1000; 
    let startTime = null;

    function easing(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = easing(progress);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }
}

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
    <header
      className="bg-darkblue text-white sticky top-0 z-50 border-b border-gold/30"
      style={{
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 relative">
        {}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="KOW Logo"
            className="h-10 w-10 sm:h-12 sm:w-12"
            loading="lazy"
          />
          <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-gold">
            KOW
          </span>
        </div>

        {}
        <nav
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 lg:space-x-8 whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.to}
              to={`/${link.to}`}
              scroll={smoothScroll}
              smooth={false} 
              className={`relative cursor-pointer text-sm sm:text-base font-semibold transition duration-3000 ${
                activeHash === link.to
                  ? "text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold after:rounded-full"
                  : "text-gold hover:text-white"
              }`}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        {}
        <div>
          <HashLink
            to="/#buytoken"
            scroll={smoothScroll}
            smooth={false}
            className="cursor-pointer bg-gradient-to-r from-gold to-white text-darkblue px-4 sm:px-5 py-2 sm:py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
          >
            🚀 Buy KOW
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
