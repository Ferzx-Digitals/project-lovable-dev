import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const slides = [
  {
    image: `${WRC_IMG}/home/banner-1.jpg`,
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
    descKey: 'hero.slide1.description',
  },
  {
    image: `${WRC_IMG}/home/banner-2.jpg`,
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
    descKey: 'hero.slide2.description',
  },
  {
    image: `${WRC_IMG}/home/banner-3.jpg`,
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
    descKey: 'hero.slide3.description',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t, language } = useTranslation();

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-forest-deep/70" />

          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-16 sm:pt-0">
              <div
                className={`max-w-4xl transition-all duration-700 ${
                  i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: i === current ? '300ms' : '0ms' }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-tight mb-6 text-gold-warm">
                  {t(slide.titleKey)}
                </h2>
                <p className="text-lg sm:text-xl text-gold-bright font-semibold mb-3">
                  {t(slide.subtitleKey)}
                </p>
                <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
                  {t(slide.descKey)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/${language}/register`}
                    className="px-8 py-4 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-lg text-lg"
                  >
                    {t('common.registerNow')}
                  </Link>
                  <Link
                    to={`/${language}/about`}
                    className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-lg"
                  >
                    {t('common.learnMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gold-warm scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
