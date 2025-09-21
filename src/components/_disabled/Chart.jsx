import { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const PAIR_ADDRESS = "0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6";

const Chart = () => {
  const [priceData, setPriceData] = useState([]);
  const intervalRef = useRef(null);

  const fetchLivePrice = async () => {
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/pairs/bsc/${PAIR_ADDRESS}`);
      const data = await res.json();

      if (!data?.pair?.priceUsd) return;

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });

      const newPoint = {
        time: currentTime,
        price: parseFloat(data.pair.priceUsd)
      };

      setPriceData((prev) => [...prev.slice(-29), newPoint]); // κρατάει τα τελευταία 30 σημεία
    } catch (err) {
      console.error("Failed to fetch live price", err);
    }
  };

  useEffect(() => {
    fetchLivePrice(); // αρχικό fetch

    intervalRef.current = setInterval(() => {
      fetchLivePrice();
    }, 10000); // κάθε 10s

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="chart" className="py-20 bg-black text-white text-center animate-fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">📉 Live Τιμή $KOW</h2>

        {priceData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" stroke="#aaa" />
              <YAxis stroke="#aaa" domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#222", border: "none" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#ffc107" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#facc15"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-400">Αναμονή για live τιμές...</p>
        )}
      </div>
    </section>
  );
};

export default Chart;
