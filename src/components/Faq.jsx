import { useState } from "react";

const faqData = [
  {
    question: "How do I buy KingOfWorld?",
    answer: (
      <>
        You can obtain the token through decentralized exchanges (e.g.,
        <span className="text-gold"> PancakeSwap</span>,{" "}
        <span className="text-gold">Poocoin</span>,{" "}
        <span className="text-gold">BinanceWeb3</span> and more) by connecting
        your wallet (MetaMask, Trust Wallet, or any other). Simply select the
        trading pair <span className="text-gold">(BNB / KOW)</span> and make the
        swap.
        <br />
        <br />
        For a full list of available exchanges, please check the{" "}
        <span className="text-gold">Partners</span> section where we provide
        up-to-date information about all exchanges.
      </>
    ),
  },
  {
    question: "Where can I view the contract and its information?",
    answer: (
      <>
        The official contract is available on{" "}
        <a
          href="https://bscscan.com/token/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline hover:text-yellow-300"
        >
          BscScan
        </a>
        . Always make sure you are using the correct contract address before any
        transaction:{" "}
        <span className="text-gold">
          0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6
        </span>
      </>
    ),
  },
  {
    question: "Why choose KOW?",
    answer: (
      <>
        The token is designed to be fast, accessible, and community-focused. Our
        philosophy is to build a strong community that truly supports{" "}
        <span className="text-gold">decentralization</span>.
        <br />
        <br />
        Beyond accessibility, <span className="text-gold">KOW</span> gradually
        reduces its supply through{" "}
        <span className="text-gold">burning mechanisms</span>. This ensures that
        over time, the token becomes increasingly{" "}
        <span className="text-gold">rare and valuable</span>, rewarding
        long-term loyalists and strengthening its position in the market.
      </>
    ),
  },
  {
    question: "Is KOW safe?",
    answer: (
      <>
        <span className="text-gold">KOW</span> was launched on the{" "}
        <span className="text-gold">Binance Smart Chain (BEP-20)</span> and its
        smart contract is{" "}
        <a
          href="https://bscscan.com/token/0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline hover:text-yellow-300"
        >
          verified on BscScan
        </a>
        .
        <br />
        <br />
        It includes protective mechanisms such as{" "}
        <span className="text-gold">anti-whale limits</span>,{" "}
        <span className="text-gold">burning mechanisms</span>, and{" "}
        <span className="text-gold">liquidity locks</span> to support stability
        and protect holders.
        <br />
        <br />
        While no project can be 100% risk-free,{" "}
        <span className="text-gold">KOW</span> is built with transparency and
        long-term community trust in mind.
      </>
    ),
  },
  {
    question: "Where can I join (KOW) community?",
    answer: (
      <>
        You can connect with the <span className="text-gold">KOW</span>{" "}
        community through our official social channels:{" "}
        <span className="text-gold">Telegram</span>,{" "}
        <span className="text-gold">Twitter / X</span>,{" "}
        <span className="text-gold">Discord</span> and <span className="text-gold">more.</span> Stay tuned for
        announcements and community events that help strengthen the project.
      </>
    ),
  },
  {
  question: "What makes KOW different?",
  answer: (
    <>
      <span className="text-gold">KOW</span> is not just another meme coin — it
      has been created as a living{" "}
      <span className="text-gold">prophecy</span>.
      <br />
      <br />
      Each milestone on our{" "}
      <span className="text-gold">roadmap</span> is written as a chapter of the
      prophecy. From the birth of the token, each step marks the evolution of
      the story.
      <br />
      <br />
      <span className="text-gold">Holders</span> are characters in this
      prophecy, shaping the coin's destiny together. This unique feature sets{" "}
      <span className="text-gold">KOW</span> apart from the crowd of meme coins,
      turning simple milestones into{" "}
      <span className="text-gold">legendary events</span>.
    </>
  ),
},


];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-4xl mx-auto px-6 w-full">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gold">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gold/40 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gold">
                  {item.question}
                </span>
                <span className="text-white text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
