import { useState, useEffect } from "react";

const RealTimePrice = ({ symbol, setLatestPrice }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
    );

    ws.onmessage = (event) => {
      const tradeData = JSON.parse(event.data);
      setPrice(Math.round(tradeData.p * 100) / 100);
      setLatestPrice(Math.round(tradeData.p * 100) / 100);
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  useEffect(() => {
    const interval = setInterval(() => {}, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [price, symbol]);

  return (
    <span className="text-lg text-[#627EEA] font-semibold">
      ₹ {Math.round(price * 80 * 100) / 100}
    </span>
  );
};

export { RealTimePrice };
