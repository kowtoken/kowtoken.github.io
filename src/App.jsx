import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Tokenomics from "./components/Tokenomics";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import SocialLinks from "./components/SocialLinks";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import BuyToken from "./components/BuyToken";
import Footer from "./components/Footer";

import WhitepaperPage from "./pages/WhitepaperPage";
import ScrollToTop from "./components/ScrollToTop"; // 👈 πρόσθεσε το import

// ✅ Home Page sections
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace("#", "");
      // μικρή καθυστέρηση για να υπάρχει χρόνος το DOM να φορτωθεί
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100);
    }
  }, [location]);

  return (
    <main id="main-content" className="bg-black text-white">
      <Hero />
      <About />
      <Info />
      <Partners />
      <Tokenomics />
      <Roadmap />
      <Whitepaper />
      <SocialLinks />
      <Faq />
      <Contact />
      <BuyToken />
    </main>
  );
}

// ✅ Main App
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 👇 Global scroll reset */}
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<WhitepaperPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
