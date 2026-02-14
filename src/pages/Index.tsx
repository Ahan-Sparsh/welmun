import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SecretariatSection from "@/components/SecretariatSection";

const Index = () => {
  const [introVisible, setIntroVisible] = useState(() => {
    return !sessionStorage.getItem("welmun-intro-seen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("welmun-intro-seen", "true");
    setIntroVisible(false);
  };

  return (
    <>
      <CustomCursor isIntroVisible={introVisible} />
      <ParticleCanvas />
      {introVisible && <IntroScreen onEnter={handleEnter} />}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/home-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <SecretariatSection />
      </div>
    </>
  );
};

export default Index;
