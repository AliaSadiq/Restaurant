import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BestSeller from "./components/BestSeller";
import SpecialSection from "./components/SpecialSection";
import StatisticsSection from "./components/StatisticsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSeller />
      <SpecialSection />
      <StatisticsSection />
      <InfoCard/>
      <SubscriptionSection />
      <Footer />
   

    </div>
  );
};

export default App;
