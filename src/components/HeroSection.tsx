import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import forestBackground from '@/assets/forest-background.jpg';
import forestForeground from '@/assets/forest-foreground.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background Layer - Slowest */}
      <div 
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url(${forestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Sky Gradient Overlay */}
      <div className="parallax-layer sky-gradient opacity-30" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Poster Container */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/ec2e9621-1882-466f-917b-90e9f614bcf1.png"
                alt="11th IRF World Ranger Congress 2027 - Puerto Iguazú, Argentina"
                className="w-full max-w-md mx-auto rounded-2xl shadow-floating transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-forest-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-forest-deep mb-4 animate-fade-up">
            <span className="block sunset-gradient bg-clip-text text-transparent">
              Save the Date
            </span>
          </h1>
          
          {/* Date */}
          <div className="text-2xl md:text-3xl font-semibold text-earth-brown mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            April 19-23, 2027
          </div>
          
          {/* Location */}
          <div className="text-xl md:text-2xl text-forest-primary mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Puerto Iguazú, Argentina
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="forest-gradient text-white shadow-forest hover:scale-105 transition-bounce px-8 py-4 text-lg"
            >
              Save the Date
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/90 backdrop-blur text-forest-deep border-forest-primary hover:bg-forest-mist transition-smooth px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Foreground Layer - Fastest */}
      <div 
        className="parallax-layer pointer-events-none z-10"
        style={{
          transform: `translateY(${scrollY * 0.8}px)`,
          backgroundImage: `url(${forestForeground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-forest-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-forest-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;