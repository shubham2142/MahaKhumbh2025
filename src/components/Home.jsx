import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Pricing from "./Pricing";
import ScopeSection from "./ScopeSection";

const HomePage = () => {
  return (
    <div className="bg-neutral-900 ">
      {/* Hero Section */}
      <section id="hero" className="bg-neutral-900 text-white py-20">
        <HeroSection />
      </section>

      {/* Features Section - Add background */}
      <section id="features" className="bg-neutral-800 text-white py-20">
        <FeatureSection />
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="bg-neutral-900 text-white py-20">
        <ScopeSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-neutral-800 text-white py-20">
        <Pricing />
      </section>
    </div>
  );
};

export default HomePage;
