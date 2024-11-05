import React from "react";
import HeroSection from "./heroSection";
import AboutSection from "./aboutSection";
import DisciplinesSection from "./disciplinesSection";
import AntiDopingSection from "./antiDopingSection";
import NewsSection from "./newsSection";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto space-y-28 my-12">
        <AboutSection />
        <DisciplinesSection />
        <AntiDopingSection />
        <NewsSection />
      </div>
    </>
  );
};

export default React.memo(HomePage);
