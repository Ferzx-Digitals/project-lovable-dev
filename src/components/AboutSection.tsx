import { Calendar, MapPin, Target, Users, Globe, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-forest-mist to-background overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-forest-light opacity-20" />
      <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-gold-warm opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-light opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center justify-center mb-6 relative">
              <div className="w-20 h-1 bg-forest-primary rounded-full mr-4 relative">
                <img
                  src="/images/toucan.png"
                  alt="Toucan"
                  className="absolute -top-24 w-24 h-24 float-gentle hidden md:block"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-forest-deep">
                11th IRF World Ranger Congress
              </h2>
              <div className="w-20 h-1 bg-forest-primary rounded-full ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-forest-primary max-w-3xl mx-auto leading-relaxed">
              Where guardians of nature unite in the heart of the Atlantic Forest
            </p>
          </div>

          <div className="space-y-24">
            {/* Date & Location */}
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-12 h-12 text-forest-primary mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-forest-deep">April 19-23, 2027</h3>
                      <p className="text-forest-primary">Five transformative days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-12 h-12 text-earth-brown mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-forest-deep">Puerto Iguazú</h3>
                      <p className="text-forest-primary">Argentina - Gateway to wonder</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-right">
                  <div className="text-9xl opacity-20 text-forest-light font-bold leading-none">2027</div>
                  <p className="text-lg text-forest-primary mt-4 max-w-md ml-auto">
                    Join us where the mighty Iguazú Falls create a symphony of nature, inspiring our mission to protect the world's wilderness.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full forest-gradient mb-6">
                  <Target className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-forest-deep mb-4">Our Mission</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: 'Unite', desc: 'Bringing together rangers from every corner of the globe to share knowledge and experiences', gradient: 'earth-gradient' },
                  { icon: Globe, title: 'Protect', desc: 'Advancing conservation techniques and wildlife protection strategies for future generations', gradient: 'sunset-gradient' },
                  { icon: Heart, title: 'Inspire', desc: 'Creating a legacy of environmental stewardship that spans across borders and cultures', gradient: 'sky-gradient' },
                ].map(({ icon: Icon, title, desc, gradient }) => (
                  <div key={title} className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full ${gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-forest-deep mb-2">{title}</h4>
                    <p className="text-forest-primary">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why it matters */}
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-r from-forest-deep/5 to-transparent p-12 rounded-3xl backdrop-blur">
                <h3 className="text-3xl font-bold text-forest-deep mb-8 text-center">Why This Congress Matters</h3>
                <div className="space-y-8">
                  {[
                    { emoji: '🌿', title: 'Conservation Innovation', desc: 'Discover cutting-edge techniques in wildlife protection and ecosystem management' },
                    { emoji: '🦋', title: 'Biodiversity Focus', desc: 'Learn from the Atlantic Forest, one of Earth\'s most biodiverse ecosystems' },
                    { emoji: '🤝', title: 'Global Network', desc: 'Build lasting partnerships with conservation heroes from around the world' },
                  ].map(({ emoji, title, desc }) => (
                    <div key={title} className="flex items-center">
                      <div className="text-6xl mr-6">{emoji}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-forest-deep">{title}</h4>
                        <p className="text-forest-primary">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default AboutSection;
