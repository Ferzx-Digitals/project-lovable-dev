import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ConnectSection />
    </div>
  );
};

export default Index;
