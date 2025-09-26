import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import logoBg from "../assets/LOGO.png";
import pdfFile from "../assets/KingOfWorld_Whitepaper.pdf";

// 👇 Εικόνες
import liquidityImg from "../assets/liquidity01.png";
import blockchainImg from "../assets/blockchain-tech.png";
import communityImg from "../assets/team.png";
import governanceImg from "../assets/governance.png";

// --- Keyword highlighter
const HIGHLIGHT_TERMS = [
  "KOW",
  "King of World",
  "Binance Smart Chain",
  "BSC",
  "BEP20",
  "burn",
  "liquidity",
  "reflections",
  "project fee",
  "on-chain",
  "DAO",
  "decentralized",
  "digital asset",
  "marketing wallet",
  "max transaction",
];
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function applyHighlight(text) {
  let html = text;
  HIGHLIGHT_TERMS.forEach((term) => {
    const re = new RegExp(`\\b(${escapeRegex(term)})\\b`, "gi");
    html = html.replace(re, `<span class="text-gold">$1</span>`);
  });
  return html;
}

// Sections
const sections = [
  {
    id: "about",
    title: "1. About KOW",
    content: `
<span class="text-gold">King of World (KOW)</span> is more than just a cryptocurrency — it is a prophecy in the making, a symbol of humor, creativity, and collective power.

Its mission is to demonstrate that <span class="text-gold">community-driven energy</span> and <span class="text-gold">meme culture</span> can spark a global movement. While protective mechanisms and owner oversight provide stability at this stage, the long-term goal is to remain accessible, entertaining, and inclusive, powered by the collective faith of the community.

Starting as a simple meme token, KOW follows a clear path of gradual evolution — from accessibility and community-building toward recognition as a <span class="text-gold">unique digital asset</span> with expanding use cases.

The <span class="text-gold">KOW community</span> is not just an audience but the foundation of the project. Through memes, creativity, and active participation, holders shape the identity, strength, and direction of the token.

If the community continues to grow and engage, KOW has the potential to establish itself as a <span class="text-gold">distinctive and recognizable presence</span> in the global cryptocurrency landscape.
`,
  },

  {
    id: "info",
    title: "2. Info",
    content: `
The official <span class="text-gold">King Of World (KOW)</span> smart contract is deployed on <span class="text-gold">Binance Smart Chain (BSC)</span> and fully verified on BscScan.  
Contract Address: <span class="text-gold">0xAbCbc9f66C5955A4A71DEc40c9dA2C61d28Ca3b6</span>

KOW is implemented as a <span class="text-gold">BEP20 token</span> on BSC. Each transaction integrates built-in mechanisms including <span class="text-gold">burn</span>, <span class="text-gold">liquidity</span>, <span class="text-gold">reflections</span>, and a dedicated <span class="text-gold">project fee</span>. These features are designed to enhance long-term scarcity, maintain stability, and support sustainable growth.

For example, <span class="text-gold">1% of every transaction</span> is automatically burned, reducing supply over time and increasing scarcity. This mechanism ensures that the token becomes rarer the more it is used.

KOW is not just about the present moment. It is structured with a <span class="text-gold">long-term vision</span>, combining meme culture with sustainable tokenomics. The project’s growth strategy is designed to be gradual and organic, positioning KOW as a <span class="text-gold">recognizable and resilient digital asset</span> for the future.
`,
  },

  {
    id: "blockchain",
    title: "3. Blockchain & Technology",
    content: `
KOW operates on <span class="text-gold">Binance Smart Chain (BSC)</span>, chosen for its balance of speed, cost, and accessibility. BSC enables fast block times and low transaction fees, making it practical both for everyday users and for large-scale adoption.

The chain is fully compatible with major wallets such as MetaMask and TrustWallet, which ensures ease of access for the community. Security and transparency are further strengthened by the fact that the <span class="text-gold">KOW smart contract</span> is verified on BscScan, allowing anyone to audit and track activity <span class="text-gold">on-chain</span>.

Beyond immediate utility, BSC also provides seamless integration with decentralized exchanges, liquidity platforms, and DeFi applications. This gives KOW direct access to a growing ecosystem and ensures opportunities for collaboration.

Looking forward, BSC’s interoperability paves the way for <span class="text-gold">cross-chain expansion</span>. This creates future opportunities in NFT ecosystems, DeFi partnerships, and bridges to other major blockchains.
`,
    image: blockchainImg,
  },

  {
    id: "tokenomics",
    title: "4. Tokenomics",
    items: [
      {
        phase: "📦 Token Details",
        goals: [
          <>
            📘 Token Name: <span className="text-gold font-bold">KingOfWorld</span>
          </>,
          <>
            ⚜️ Symbol: <span className="text-gold font-bold">KOW</span>
          </>,
          "🔢 Decimals: 18",
          "📊 Total Supply: 1,000,000,000,000 KOW (1 Trillion tokens)",
          "🛠️ Blockchain: BNB Smart Chain (BEP-20)",
        ],
      },
      {
        phase: "💰 Transaction Fees (Current 11%)",
        goals: [
          "5% Marketing",
          "3% Reflection (temporary, later reduced to 0%)",
          "2% Liquidity",
          "1% Burn",
        ],
      },
      {
        phase: "📉 Future Fee Reductions",
        goals: [
          "Target 2,918 holders → 3% burn + fees reduced to 8%",
          "Reflection fee (3%) returns to 0%",
          "At 5,000 holders → fees drop from 8% → 6%",
          "At 10,000 holders → further fee reduction planned",
          "👉 The more interest in KOW, the more the fees will fall",
        ],
      },
    ],
  },

  {
    id: "liquidity",
    title: "5. Liquidity Strategy",
    content: `
KOW did not launch with a large predefined liquidity pool. Instead, liquidity will be built progressively, in line with community demand and market activity. This approach ensures <span class="text-gold">organic development</span> and supports a <span class="text-gold">sustainable long-term trajectory</span> for the token.

By allowing liquidity to grow alongside adoption, the project strengthens stability while avoiding artificial inflation or unsustainable practices.
`,
    image: liquidityImg,
  },

  {
    id: "roadmap",
    title: "6. Roadmap",
    items: [
      {
        phase: "🌐🗺️ 2025",
        goals: [
          "Token creation",
          "Launch of community channels",
          "Strengthening branding and global community growth",
          "Create PancakeSwap liquidity pool",
          "Initial DEX listing",
          "Achievement of the target of 2,918 holders",
          "🔥 3% of all tokens will be burned",
          "Reflection fee (3%) returns to 0%",
          "Fees reduced to 8%",

        ],
      },
      {
        phase: "🌐🗺️ 2026 (Phase 1)",
        goals: [
          "Achievement of the target of 2,918 holders",
          "🔥 Additional 3% burn",
          "Reflection fee (3%) returns to 0%",
          "Fees reduced to 8%",
          "Expansion of the KOW ecosystem with new utilities",
          "At 5,000 holders → Fees reduced from 8% → 6%",

        ],
      },
      {
        phase: "🌐🗺️ 2026 (Phase 2)",
        goals: [
          "Listings on major crypto information platforms",
          "Listings on centralized exchanges (CEX)",
          "At 10,000 holders → further fee reduction planned",
          "Cross-chain integration",
        ],
      },
      {
        phase: "🌐🗺️ 2026 (Phase 3)",
        goals: [
          "NFT collections inspired by KOW",
          "DeFi collaborations",
          "🌐 Establish KOW as a recognizable token currency in the global crypto market",
        ],
      },
    ],
  },

  {
    id: "community",
    title: "7. Community",
    content: `
The community is the heartbeat of <span class="text-gold">KOW</span>. It is through creativity, memes, and collective participation that holders shape not only the culture but also the value of the token.

Community engagement is fueled by contests, discussions, and the sharing of ideas. This constant activity strengthens bonds among members and drives momentum. Transparency also plays a central role, as every action within the ecosystem remains visible <span class="text-gold">on-chain</span> and supported by open communication.

Beyond numbers, the community forms the identity of KOW. It is more than a token — it is a cultural movement powered by humor, trust, and collaboration.

KOW thrives on <span class="text-gold">collective action</span>. When people unite around a vision, even a meme coin has the power to grow into something truly impactful.
`,
    image: communityImg,
  },

  {
    id: "governance",
    title: "8. Governance",
    content: `
KOW governance is designed to be <span class="text-gold">simple, transparent, and protective</span>. The smart contract is managed by the owner, who has the authority to adjust key parameters such as fees, maximum transaction limits, and liquidity settings.

Built-in safeguards — including <span class="text-gold">anti-whale limits</span> and a <span class="text-gold">blacklist function</span> — are implemented to protect the community from unfair practices and malicious actors. No DAO exists at this stage; decision-making remains centralized to provide clarity and security during early growth.

All adjustments and actions are fully visible <span class="text-gold">on-chain</span>, reinforcing the project’s transparency. As the community grows, governance is expected to evolve, with progressive fee reductions and the potential introduction of community-driven mechanisms.
`,
    image: governanceImg,
  },

  {
    id: "legal",
    title: "9. Legal Disclaimer",
    content: `
<span class="text-gold">KOW</span> is a decentralized digital asset created for community use and cultural engagement. It is not a security, share, or financial product and does not guarantee profit or returns.

The value of the token is determined solely by <span class="text-gold">market dynamics</span> and the level of <span class="text-gold">community participation</span>. As with all cryptocurrencies, trading and holding KOW involves risk, including price volatility and potential loss of capital.

Nothing in this document should be interpreted as financial advice, investment guidance, or a solicitation to purchase. Each participant is responsible for their own decisions and must assess their own risk tolerance.

<span class="text-gold">Always do your own research (DYOR)</span> before making any financial commitments.
`,
  },
];

export default function WhitepaperPage() {
  const [active, setActive] = useState("about");

  const activeIndex = sections.findIndex((s) => s.id === active);
  const activeSection = sections[activeIndex];
  const prevSection = activeIndex > 0 ? sections[activeIndex - 1] : null;
  const nextSection =
    activeIndex < sections.length - 1 ? sections[activeIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/90 border-r border-gold/30 p-6 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold text-gold mb-6">Chapters</h2>
          <ul className="space-y-3">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => setActive(s.id)}
                  className={`block w-full text-left px-3 py-2 rounded-l border-l-4 ${active === s.id
                      ? "bg-gold text-black font-bold border-yellow-400"
                      : "hover:bg-gold/20 border-transparent"
                    }`}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 relative">
          {/* 👑 Logo background */}
          <img
            src={logoBg}
            alt="KOW Logo Background"
            className="absolute inset-0 w-[500px] h-[500px] opacity-20 m-auto pointer-events-none select-none"
          />

          {/* Header */}
          <div className="relative p-6 border-b border-gold/20 z-10 flex justify-between items-center bg-black/50">
            <h1 className="text-xl font-bold text-gold">📑 KOW Whitepaper</h1>
            <a
              href={pdfFile}
              download="KOW_Whitepaper.pdf"
              className="flex items-center gap-2 bg-gold text-black font-bold px-4 py-2 rounded hover:scale-105 transition"
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          {/* Κείμενο / Items / Εικόνα */}
          {activeSection && (
            <section className="relative p-10 z-10 pb-32">
              <h1 className="text-3xl font-extrabold text-gold mb-6">
                {activeSection.title}
              </h1>

              {activeSection.items ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeSection.items.map((phase, idx) => (
                    <div
                      key={idx}
                      className="bg-black/50 border border-gold/30 rounded-xl p-6"
                    >
                      <h2 className="text-xl font-bold text-gold mb-4">
                        {phase.phase}
                      </h2>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {phase.goals.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : activeSection.image ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="bg-black/50 border border-gold/30 rounded-xl p-6">
                    <p
                      className="text-gray-300 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: applyHighlight(activeSection.content),
                      }}
                    />
                  </div>
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="rounded-xl border border-gold/30"
                  />
                </div>
              ) : (
                <div className="bg-black/50 border border-gold/30 rounded-xl p-6">
                  <p
                    className="text-gray-300 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: applyHighlight(activeSection.content),
                    }}
                  />
                </div>
              )}
            </section>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center sticky bottom-4 px-6 z-20">
            {prevSection ? (
              <button
                onClick={() => setActive(prevSection.id)}
                className="flex items-center gap-10 bg-black/60 border border-gold/40 text-gold font-bold py-3 px-6 rounded-xl w-auto"
              >
                <FaArrowLeft /> Prev
              </button>
            ) : (
              <div />
            )}

            {nextSection ? (
              <button
                onClick={() => setActive(nextSection.id)}
                className="flex items-center gap-10 bg-black/60 border border-gold/40 text-gold font-bold py-3 px-6 rounded-xl w-auto"
              >
                Next <FaArrowRight />
              </button>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
