"use client";
import AboutMeSection from "@/components/AboutMeSection";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden dark:bg-black bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ContactMe />
      <Footer />
    </div>
  );
}
