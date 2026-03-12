import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = scrollY * 0.3;
  const parallaxFg = scrollY * 0.1;
  const parallaxContent = scrollY * 0.15;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxBg}px) scale(1.1)`,
          backgroundImage: 'url(/images/forest-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Color overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(circle at 0% 0%, 
            hsl(var(--forest-deep) / 0.4) 0%, 
            hsl(var(--sky-blue) / 0.3) 40%, 
            hsl(var(--gold-warm) / 0.2) 80%, 
            transparent 100%)`,
        }}
      />

      {/* Floating emojis in hero */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute top-20 left-20 text-4xl opacity-30 float-gentle">🍃</div>
        <div className="absolute bottom-32 right-32 text-3xl opacity-40 float-gentle" style={{ animationDelay: '2s' }}>🦋</div>
        <div className="absolute top-1/3 right-20 text-2xl opacity-25 float-gentle" style={{ animationDelay: '4s' }}>🌺</div>
        <div className="absolute bottom-1/4 left-1/4 text-3xl opacity-35 float-gentle" style={{ animationDelay: '1s' }}>🍃</div>
      </div>

      {/* Light ray overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[8]"
        style={{
          background: `linear-gradient(45deg, 
            transparent 20%, 
            hsl(var(--gold-warm) / 0.1) 50%, 
            transparent 80%)`,
        }}
      />

      {/* Foreground foliage */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          transform: `translateY(${parallaxFg}px)`,
          backgroundImage: 'url(/images/forest-foreground.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8" style={{ transform: `translateY(${-parallaxContent}px)` }}>
          <div className="relative">
            <div className="mb-8">
              <img
                src="/images/logo_1.png"
                alt="IRF World Ranger Congress Logo"
                className="w-32 md:w-48 mx-auto mb-6 opacity-90"
                style={{ filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))' }}
              />
            </div>
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-forest-deep opacity-5 select-none flex items-center justify-center">
              SAVE THE DATE
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 relative gold-text-gradient">
              SAVE THE DATE
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent" />
              <div className="text-2xl">🌿</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent" />
            </div>
          </div>
        </div>

        <div className="text-center" style={{ transform: `translateY(${-parallaxContent}px)` }}>
          <div className="mb-4">
            <div
              className="text-3xl md:text-5xl font-bold text-earth-brown mb-2"
              style={{ textShadow: '2px 2px 8px hsl(30 40% 35% / 0.3)' }}
            >
              April 19-23, 2027
            </div>
            <div className="text-xl md:text-xl text-forest-primary">Puerto Iguazú, Argentina</div>
          </div>
          <div className="text-md md:text-xl text-forest-deep/80 max-w-2xl mx-auto italic">
            "Where guardians of nature unite beneath the mist of Iguazú Falls"
          </div>

          <div className="mt-12 mb-8">
            <p className="text-sm text-earth-brown/70 uppercase tracking-wider font-medium mb-6">Organized by</p>
            <div className="flex items-center justify-center space-x-8 md:space-x-12">
              <img
                src="/images/organizer_1.png"
                alt="International Ranger Federation"
                className="h-16 md:h-24 w-auto opacity-90 hover:opacity-100 transition-smooth rounded-lg"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))' }}
              />
              <img
                src="/images/organizer_2.png"
                alt="SIGUNARA"
                className="h-16 md:h-24 w-auto opacity-90 hover:opacity-100 transition-smooth rounded-lg"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
