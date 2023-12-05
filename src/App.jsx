import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import ScaleUsSection from './components/ScaleUsSection';
import BenefitsSection from './components/BenefitsSection';
import ProductSection from './components/ProductSection';
import KillerFeatureSection from './components/KillerFeatureSection';
import AgenciesSection from './components/AgenciesSection';

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
        <ProductSection />
        <KillerFeatureSection />
        <AgenciesSection />
      </main>
    </>
  );
}

export default App;
