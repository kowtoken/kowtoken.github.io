import leftImg from "../assets/pics/Imageupolympos.png";
import rightImg from "../assets/pics/Imagedownolympos.png";

const roadmapItems = [
  {
    title: "🌐🗺️ 2025",
    description: [
      "Token creation",
      "Launch of community channels",
      "Strengthening branding and global community growth",
    ],
    completed: true,
  },
  {
    title: "🌐🗺️ 2025",
    description: [
      "Create PancakeSwap liquidity pool",
      "Initial DEX listing",
      "Achievement of the target of 2,918 holders",
      "🔥 3% of all tokens burned, fees reduced to 8%",
    ],
    completed: true,
  },
  {
    title: "🌐🗺️ 2026",
    description: [
      "Expansion of the KOW ecosystem with new utilities",
      "At 5,000 holders → fees drop from 8% → 6%",
    ],
    completed: false,
  },
  {
    title: "🌐🗺️ 2026",
    description: [
      "Listings on major crypto info platforms",
      "Listings on centralized exchanges (CEX)",
      "At 10,000 holders → further fee reduction planned",
    ],
    completed: false,
  },
  {
    title: "🌐🗺️ 2026",
    description: [
      "NFT collections inspired by KOW",
      "DeFi collaborations",
      "Establish KOW as a recognizable token currency",
    ],
    completed: false,
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      {}
      <img
        src={leftImg}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-1/3 -translate-y-1/2 w-[250px] md:w-[350px] opacity-0 animate-fade-in-left pointer-events-none"
      />
      <img
        src={rightImg}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] md:w-[350px] opacity-0 animate-fade-in-right pointer-events-none"
      />

      {}
      <h2
        id="roadmap-title"
        className="relative text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gold"
      >
        🚀 Roadmap
      </h2>

      {}
      <ul className="relative max-w-6xl mx-auto space-y-12 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gold/30 before:-translate-x-1/2">
        {roadmapItems.map((item, index) => (
          <li
            key={index}
            aria-label={`Milestone: ${item.title}`}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2">
              <article
                className={`bg-white/5 backdrop-blur-lg border rounded-2xl p-6 transition-transform hover:scale-105 ${
                  item.completed ? "border-green-400" : "border-gold/40"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    item.completed ? "text-green-400" : "text-gold"
                  }`}
                >
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-sm space-y-2">
                  {item.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </article>
            </div>

            {}
            <div
              className={`absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10 ${
                item.completed
                  ? "border-green-400 bg-green-400 animate-pulse"
                  : "border-gold bg-darkblue"
              }`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Roadmap;
