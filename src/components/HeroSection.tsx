import { useEffect, useState } from 'react';
import forestBackground from '@/assets/forest-background.jpg';
import forestForeground from '@/assets/forest-foreground.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Dynamic Background Layers */}
      <div 
        className="parallax-layer absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1.1 + scrollY * 0.0002})`,
          backgroundImage: `url(${forestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: `${50 + mousePosition.x * 0.02}% ${50 + mousePosition.y * 0.02}%`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Animated Gradient Overlays */}
      <div 
        className="parallax-layer absolute inset-0 z-1"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--forest-deep) / 0.4) 0%, 
            hsl(var(--sky-blue) / 0.3) 40%, 
            hsl(var(--gold-warm) / 0.2) 80%, 
            transparent 100%)`,
        }}
      />
      
      {/* Ambient Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Floating Leaves */}
        <div 
          className="absolute top-20 left-20 text-4xl opacity-30 float-gentle"
          style={{
            transform: `translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.03}px)`,
          }}
        >
          🍃
        </div>
        <div 
          className="absolute bottom-32 right-32 text-3xl opacity-40 float-gentle"
          style={{ 
            animationDelay: '2s',
            transform: `translateX(${mousePosition.x * -0.03}px) translateY(${mousePosition.y * 0.02}px)`,
          }}
        >
          🦋
        </div>
        <div 
          className="absolute top-1/3 right-20 text-2xl opacity-25 float-gentle"
          style={{ 
            animationDelay: '4s',
            transform: `translateX(${mousePosition.x * 0.04}px) translateY(${mousePosition.y * -0.02}px)`,
          }}
        >
          🌺
        </div>
        <div 
          className="absolute bottom-1/4 left-1/4 text-3xl opacity-35 float-gentle"
          style={{ 
            animationDelay: '1s',
            transform: `translateX(${mousePosition.x * -0.02}px) translateY(${mousePosition.y * 0.04}px)`,
          }}
        >
          🍃
        </div>
      </div>
      
      {/* Mystical Light Rays */}
      <div 
        className="absolute inset-0 pointer-events-none z-8"
        style={{
          background: `linear-gradient(${45 + mousePosition.x * 0.1}deg, 
            transparent 20%, 
            hsl(var(--gold-warm) / 0.1) 50%, 
            transparent 80%)`,
        }}
      />
      
      {/* Floating Poster Integration */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-15"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${mousePosition.x * 0.02 - 1}deg)`,
        }}
      >
        <div className="relative group">
          {/* Poster with Creative Effects */}
          <div 
            className="relative w-80 md:w-96 transition-all duration-1000 ease-out"
            style={{
              transform: `scale(${0.9 + mousePosition.y * 0.002}) rotateY(${mousePosition.x * 0.1 - 5}deg)`,
              filter: `brightness(${1.1 + mousePosition.y * 0.001}) contrast(${1.1 + mousePosition.x * 0.001})`,
            }}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-forest-primary to-gold-warm rounded-3xl blur-2xl opacity-50 scale-110"></div>
            
            {/* Floating Particles */}
            <div className="absolute -top-10 -left-10 w-6 h-6 bg-forest-light rounded-full opacity-70 float-gentle"></div>
            <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-gold-warm rounded-full opacity-80 float-gentle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-12 w-3 h-3 bg-sky-blue rounded-full opacity-60 float-gentle" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Foreground Layer */}
      <div 
        className="parallax-layer pointer-events-none z-10"
        style={{
          transform: `translateY(${scrollY * 0.8}px) translateX(${mousePosition.x * 0.02 - 1}px)`,
          backgroundImage: `url(${forestForeground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          filter: `hue-rotate(${mousePosition.x * 0.1}deg)`,
        }}
      />

      {/* Magnificent Save the Date Text */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        {/* Top Text */}
        <div 
          className="text-center mb-8"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="relative">
            {/* Logo above Save the Date */}
            <div className="mb-8">
              <img 
                src="/images/logo_1.png"
                alt="IRF World Ranger Congress Logo"
                className="w-32 md:w-48 mx-auto mb-6 opacity-90"
                style={{
                  filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))`,
                  transform: `scale(${1 + mousePosition.y * 0.001})`,
                }}
              />
            </div>
            
            {/* Animated Background Text */}
            <div 
              className="absolute  text-6xl md:text-8xl font-bold text-forest-deep opacity-5 select-none"
              style={{
                transform: `translateX(${mousePosition.x * 0.1 - 5}px) translateY(${mousePosition.y * 0.05 - 2.5}px)`,
              }}
            >
              SAVE THE DATE
            </div>
            
            
            {/* Main Save the Date */}
            <h1 
              className="text-4xl md:text-7xl font-bold mb-4 relative"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--forest-deep)), 
                  hsl(var(--gold-warm)), 
                  hsl(var(--forest-primary)))`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: `0 2px 10px hsl(var(--forest-deep) / 0.3)`,
              }}
            >
              SAVE THE DATE
            </h1>


            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent"></div>
              <div className="text-2xl">🌿</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Date & Location */}
        <div 
          className="text-center"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          {/* Date Display */}
          <div className="mb-4">
            <div 
              className="text-3xl md:text-5xl font-bold text-earth-brown mb-2"
              style={{
                textShadow: `2px 2px 8px hsl(var(--earth-brown) / 0.3)`,
                transform: `scale(${1 + mousePosition.y * 0.001})`,
              }}
            >
              April 19-23, 2027
            </div>
            <div className="text-xl md:text-xl text-forest-primary">
              Puerto Iguazú, Argentina
            </div>
          </div>
          
          {/* Subtitle */}
          <div
            className="text-md md:text-xl text-forest-deep/80 max-w-2xl mx-auto italic"
            style={{
              transform: `translateY(${mousePosition.y * 0.02}px)`,
            }}
          >
            "Where guardians of nature unite beneath the mist of Iguazú Falls"
          </div>
          
          {/* Partner Logos */}
          <div 
            className="mt-12 mb-8"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="text-center mb-6">
              <p className="text-sm text-earth-brown/70 uppercase tracking-wider font-medium">
                Organized by
              </p>
            </div>
            <div className="flex items-center justify-center space-x-8 md:space-x-12">
              {/* Partner Logo 1 */}
              <div className="group">
                <img 
                  src="/images/organizer_1.png"
                  alt="Partner 1"
                  className="h-16 md:h-24 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
              
              {/* Partner Logo 2 */}
              <div className="group">
                <img 
                  src="/images/organizer_2.png"
                  alt="Partner 2"
                  className="h-16 md:h-24 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 rounded-lg"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;