// src/app/page.tsx
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import SkillSection from "./components/sections/SkillSection";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
}
