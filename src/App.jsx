import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import About from "./components/sections/About";
import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/sections/Footer";
import EventSection from "./components/sections/EventSection";
import Nav from "./components/layout/Nav";
import HeroSection from "./components/sections/HeroSection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,  
      smooth: true,
      lerp: 0.05,  
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div id="scroll-section" className="min-h-screen bg-[#0a0118]">
      <Nav />
      <HeroSection />
      <EventSection />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
