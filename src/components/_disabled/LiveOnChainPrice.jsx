import { useEffect, useState } from "react";
import { ethers } from "ethers";

const PAIR_ADDRESS = "0xabcbc9f66c5955a4a71dec40c9da2c61d28ca3b6"; // KOW/WBNB
const WBNB_DECIMALS = 18;
const TOKEN_DECIMALS = 18;

const LiveOnChainPrice = () => {
  const [priceUSD, setPriceUSD] = useState(null);
  const [loading, setLoading] = useState(true);

  const PAIR_ABI = [
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
    "function token0() external view returns (address)",
    "function token1() external view returns (address)"
  ];

  const fetchPrice = async () => {
    try {
      const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
      const pair = new ethers.Contract(PAIR_ADDRESS, PAIR_ABI, provider);

      const [reserve0, reserve1] = await pair.getReserves();
      const token0 = await pair.token0();
      const token1 = await pair.token1();

      // Ανάλογα τη σειρά token0/token1 — ποιο είναι το WBNB;
      const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c".toLowerCase();

      let kowReserve, wbnbReserve;
      if (token0.toLowerCase() === WBNB) {
        wbnbReserve = reserve0;
        kowReserve = reserve1;
      } else {
        wbnbReserve = reserve1;
        kowReserve = reserve0;
      }

      // Υπολόγισε την τιμή σε WBNB
      const priceInWBNB = parseFloat(ethers.formatUnits(wbnbReserve, WBNB_DECIMALS)) /
                          parseFloat(ethers.formatUnits(kowReserve, TOKEN_DECIMALS));

      // Πάρε την τιμή WBNB σε USD από CoinGecko
      const bnbPriceRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
      const bnbPriceData = await bnbPriceRes.json();
      const bnbPriceUSD = bnbPriceData?.binancecoin?.usd || 0;

      const finalPrice = priceInWBNB * bnbPriceUSD;
      setPriceUSD(finalPrice.toFixed(6));
      setLoading(false);
    } catch (err) {
      console.error("on-chain price fetch error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 15000); // κάθε 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 text-center bg-black text-white">
      <h2 className="text-2xl font-bold mb-2">💰 Τιμή $KOW (on‑chain)</h2>
      {loading ? (
        <p className="text-gray-400">0.0000030</p>
      ) : (
        <p className="text-4xl text-yellow-400 font-mono">${priceUSD}</p>
      )}
    </section>
  );
};

export default LiveOnChainPrice;
