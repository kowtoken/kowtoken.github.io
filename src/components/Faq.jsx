import { useState } from "react";

const faqData = [
  {
    question: "How do I buy KingOfWorld?",
    answer:
      "You can obtain the token through decentralized exchanges (e.g., PancakeSwap) by connecting your wallet (MetaMask, Trust Wallet, or any other). Simply select the trading pair (BNB / KOW) and make the swap.",
  },
  {
    question: "Where can I view the contract and its information?",
    answer:
      "The official contract is available on BscScan. Always make sure you are using the correct contract address before any transaction.",
  },
  {
    question: "Why should I choose (KOW)?",
    answer:
      "The token is designed to be fast, accessible, and community-focused. Our philosophy is to build a strong community that truly supports decentralization.",
  },
  {
    question: "Where can I join (KOW) community?",
    answer:
      "You can connect with the KOW community through our social channels (Telegram, Twitter, Discord). The official contract address is 0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6 on Bscscan.",
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-4xl mx-auto px-6 w-full">
        {/* 🏷️ Title */}
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
