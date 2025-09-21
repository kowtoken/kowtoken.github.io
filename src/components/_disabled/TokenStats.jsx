import { useEffect, useState } from "react";

const PAIR_ADDRESS = "0x80207cf77E38c1DEE35d364890AB5f80c0DECA14"; // 👉 Βάλε το πραγματικό Pancake pair address

const TokenStats = () => {
  const [stats, setStats] = useState({
    priceUsd: null,
    priceBnb: null,
    liquidity: null,
    volume: null,
    loading: true,
  });

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/latest/dex/pairs/bsc/${PAIR_ADDRESS}`
        );
        const data = await res.json();
        const pair = data.pair;

        setStats({
          priceUsd: `$${Number(pair.priceUsd).toFixed(6)}`,
          priceBnb: `${Number(pair.priceNative).toFixed(6)} BNB`,
          liquidity: `$${Number(pair.liquidity.usd).toLocaleString()}`,
          volume: `$${Number(pair.volume.h24).toLocaleString()}`,
          loading: false,
        });
      } catch (err) {
        console.error("❌ Error fetching price:", err);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchPrice();
  }, []);

  return (
    <section
      id="tokenstats"
      className="py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white relative overflow-hidden"
    >
      {/* ✨ Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gold">
          📊 Live Price & Stats
        </h2>

        {stats.loading ? (
          <p className="text-gray-400 animate-pulse">Φόρτωση στοιχείων...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* USD Price */}
            <div className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-gold/60 transition-all duration-500">
              <p className="text-sm text-gray-300 mb-2">Price (USD)</p>
              <p className="text-2xl font-bold text-gold">{stats.priceUsd}</p>
            </div>

            {/* BNB Price */}
            <div className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-gold/60 transition-all duration-500">
              <p className="text-sm text-gray-300 mb-2">Price (BNB)</p>
              <p className="text-2xl font-bold text-gold">{stats.priceBnb}</p>
            </div>

            {/* Liquidity */}
            <div className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-gold/60 transition-all duration-500">
              <p className="text-sm text-gray-300 mb-2">Liquidity</p>
              <p className="text-2xl font-bold text-gold">{stats.liquidity}</p>
            </div>

            {/* Volume */}
            <div className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-gold/60 transition-all duration-500">
              <p className="text-sm text-gray-300 mb-2">Volume (24h)</p>
              <p className="text-2xl font-bold text-gold">{stats.volume}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TokenStats;
