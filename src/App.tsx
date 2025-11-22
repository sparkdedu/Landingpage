import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ProcessSection } from "./components/ProcessSection";
import { CTASection } from "./components/CTASection";
import { StarfieldBackground } from "./components/StarfieldBackground";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0b1e]">
      <StarfieldBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </div>
  );
}