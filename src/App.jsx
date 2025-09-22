import Header from './components/Header'
import Hero from './components/Hero'
import About from "./components/About";
import Info from "./components/Info";
import Tokenomics from './components/Tokenomics'
import Whitepaper from './components/Whitepaper'
import Roadmap from './components/Roadmap'
import Partners from './components/Partners'
import SocialLinks from './components/SocialLinks'
import Faq from './components/Faq'
import Contact from './components/Contact'
import BuyToken from './components/BuyToken'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />           {/* Home */}
        <About />          {/* About */}
        <Info />           {/* Info */}
        <Partners />       {/* Partners */}
        <Tokenomics />     {/* Tokenomics */}
        <Roadmap />        {/* Roadmap */}
        <Whitepaper />     {/* Whitepaper */}
        <SocialLinks />    {/* Social Media */}
        <Faq />            {/* FAQ */}
        <Contact />        {/* Contact Us */}
        <BuyToken />       {/* Προαιρετικά στο τέλος */}
        
      </main>
      <Footer />
    </div>
  );
}
