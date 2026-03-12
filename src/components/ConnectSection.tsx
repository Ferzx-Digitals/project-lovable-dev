import { Mail, MapPin, Calendar, Users, Send, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ConnectSection = () => {
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
    <section ref={sectionRef} className="relative py-32 earth-gradient overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-forest-light opacity-10" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gold-warm opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-light opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`}>
            <div className="text-primary-foreground/20 text-8xl font-bold mb-4">CONNECT</div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 relative -mt-12">
              Join the Movement
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Be part of the global effort to protect our planet's most precious ecosystems. Your voice matters in shaping the future of conservation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact info */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-20'}`} style={{ animationDelay: '0.2s' }}>
              {[
                { icon: Mail, title: 'Get in Touch', content: <a href="mailto:wrc@internationalrangers.org" className="text-xl text-primary-foreground/80 hover:text-primary-foreground transition-smooth">wrc@internationalrangers.org</a> },
                { icon: MapPin, title: 'Location', content: <><p className="text-xl text-primary-foreground/80">Puerto Iguazú, Argentina</p><p className="text-primary-foreground/60">Gateway to the Atlantic Forest</p></> },
                { icon: Calendar, title: 'When', content: <><p className="text-xl text-primary-foreground/80">April 19-23, 2027</p><p className="text-primary-foreground/60">Five days of conservation excellence</p></> },
              ].map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-center group">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center mr-6 group-hover:bg-primary-foreground/30 transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">{title}</h3>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* Partners card */}
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-3xl p-8 border border-primary-foreground/20">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-primary-foreground mr-3" />
                  <h3 className="text-2xl font-bold text-primary-foreground">Event Partners</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'International Ranger Federation', desc: 'Global organization connecting rangers worldwide' },
                    { name: 'SIGUNARA', desc: 'Argentine National Parks Rangers Union' },
                    { name: 'plan.A', desc: 'Event planning and coordination specialists' },
                  ].map(({ name, desc }, i, arr) => (
                    <div key={name} className={i < arr.length - 1 ? 'border-b border-primary-foreground/20 pb-4' : ''}>
                      <h4 className="text-xl font-semibold text-primary-foreground mb-2">{name}</h4>
                      <p className="text-primary-foreground/70">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.6s' }}>
            <div className="bg-primary-foreground/95 backdrop-blur rounded-3xl p-12 shadow-floating border border-primary-foreground/50">
              <h3 className="text-3xl font-bold text-forest-deep mb-6">
                Ready to Shape the Future of Conservation?
              </h3>
              <p className="text-lg text-forest-primary mb-8 max-w-3xl mx-auto">
                Mark your calendars and prepare to be part of something extraordinary. Together, we can protect the world's most precious natural heritage for generations to come.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="forest-gradient text-primary-foreground shadow-forest hover:scale-105 transition-bounce px-8 py-4 text-lg rounded-md inline-flex items-center group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                  Register Interest
                </button>
                <button className="bg-transparent border-2 border-forest-primary text-forest-primary hover:bg-forest-mist transition-smooth px-8 py-4 text-lg rounded-md inline-flex items-center group">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-smooth" />
                  Download Poster
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating emojis */}
      <div className="absolute bottom-20 right-20 opacity-30">
        <div className="text-6xl text-primary-foreground/50 float-gentle">🦎</div>
      </div>
      <div className="absolute top-32 left-32 opacity-20">
        <div className="text-4xl text-primary-foreground/50 float-gentle" style={{ animationDelay: '2s' }}>🐒</div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-25">
        <div className="text-5xl text-primary-foreground/50 float-gentle" style={{ animationDelay: '4s' }}>🦋</div>
      </div>
    </section>
  );
};

export default ConnectSection;
