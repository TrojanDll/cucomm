import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PromoSection from "./components/PromoSection";
import ScaleUsSection from "./components/ScaleUsSection";
import BenefitsSection from "./components/BenefitsSection";

function App() {
  const [isPromoFilter, setIsPromoFilte] = useState(true);

  const toggleIsPromoFilter = () => {
    setIsPromoFilte(!isPromoFilter);
  };

  return (
    <>
      <Header toggleIsPromoFilter={toggleIsPromoFilter} />
      <main>
        <PromoSection isPromoFilter={isPromoFilter} />
        <ScaleUsSection />
        <BenefitsSection />
      </main>
    </>
  );
}

export default App;
