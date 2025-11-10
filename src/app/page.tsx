import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ExamTypesSection from '@/components/ExamTypesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="exam-types">
        <ExamTypesSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <CTASection />
    </main>
  );
}
