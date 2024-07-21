import "./App.css";
import About from "./components/About";
import DataAnalytic from "./components/DataAnalytic";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntelligenceHub from "./components/IntelligenceHub";
import NewsLetter from "./components/NewsLetter";
import WhatWe from "./components/WhatWe";

function App() {
  return (
    <>
      <HeroSection />
      <IntelligenceHub />
      <DataAnalytic />
      <About />
      <WhatWe/>
      {/* <Footer /> */}
      {/* <NewsLetter/> */}
    </>
  );
}

export default App;
