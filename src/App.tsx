import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogosSection from './components/LogosSection';
import QuoteSection from './components/QuoteSection';
import RealitySection from './components/RealitySection';
import RebelPathSection from './components/RebelPathSection';
import CareerHighlightsSection from './components/CareerHighlightsSection';
import UnleashedQuoteSection from './components/UnleashedQuoteSection';
import WhyWorkWithMeSection from './components/WhyWorkWithMeSection';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import RebelMovementSection from './components/RebelMovementSection';
import AboutDominicSection from './components/AboutDominicSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <QuoteSection />
      <RealitySection />
      <RebelPathSection />
      <CareerHighlightsSection />
      <UnleashedQuoteSection />
      <WhyWorkWithMeSection />
      <TestimonialsMarquee />
      <RebelMovementSection />
      <AboutDominicSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}