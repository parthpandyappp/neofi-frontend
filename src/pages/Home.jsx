import { cryptocurrencies } from "../data";
import { useEffect, useState } from "react";
import { BuyCard, CryptoCoinPopUp } from "../components";

const Home = () => {
  const [openCoinSelectionPopup, setOpenCoinSelectionPopup] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(
    JSON.parse(localStorage.getItem("selectedCoin")) ?? cryptocurrencies[0]
  );
  const [investment, setInvestment] = useState("");
  const [estimation, setEstimation] = useState("");
  const [ltsPrice, setLtsPrice] = useState();

  useEffect(() => {
    setEstimation(investment.length > 0 ? +investment / (ltsPrice * 80) : "");
  }, [investment, ltsPrice]);

  return (
    <main class="flex justify-center items-center grow h-screen w-full bg-black z-0">
      {openCoinSelectionPopup && (
        <CryptoCoinPopUp
          selectedCoin={selectedCoin}
          chooseCoin={setSelectedCoin}
          togglePopup={setOpenCoinSelectionPopup}
        />
      )}
      <BuyCard
        setOpenCoinSelectionPopup={setOpenCoinSelectionPopup}
        selectedCoin={selectedCoin}
        investment={investment}
        setInvestment={setInvestment}
        estimation={estimation}
        setLtsPrice={setLtsPrice}
      />
    </main>
  );
};

export { Home };
