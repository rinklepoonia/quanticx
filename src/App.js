import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "./components/About";
import Accordian from "./components/Accordian";
import DataAnalytic from "./components/DataAnalytic";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntelligenceHub from "./components/IntelligenceHub";
import NewsLetter from "./components/NewsLetter";
import WhatWe from "./components/WhatWe";

function App() {
   useEffect(() => {
     AOS.init({
       once: true,
       duration: 1200,
     });
   }, []);
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <IntelligenceHub />
      <DataAnalytic />
      <About />
      <WhatWe />
      <Accordian />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
