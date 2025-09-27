import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-b from-black via-darkblue to-black"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/80 via-black/60 to-darkblue/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center space-y-8">
        {/* Logo */}
        <img
          src={logo}
          alt="King of World Token Logo"
          className="h-32 sm:h-48 md:h-56 mb-4 drop-shadow-xl"
        />

        {/* Title */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gold drop-shadow-lg leading-tight text-center"
        >
          ✨King Of World Token (KOW)
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
          ✨The token designed to reward long-term belief. <br />
          Is the <span className="text-gold font-semibold">gold</span> token built for everyone. <br />
          <span className="text-gold font-semibold">“ Buy • Stake • Earn ”</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <ScrollLink
            to="buytoken"
            smooth={true}
            duration={500}
            offset={-80}
            aria-label="Go to Buy Token section"
            className="bg-gradient-to-r from-gold to-white text-darkblue px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            🚀 Buy Now
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            aria-label="Scroll to About section"
            className="border-2 border-gold px-6 py-3 rounded-full font-bold hover:bg-gold hover:text-darkblue transition duration-300 cursor-pointer"
          >
            Learn More
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
