import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Calendar, Users, Download, Send } from 'lucide-react';

const ContactSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 earth-gradient overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-forest-light opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})`,
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gold-warm opacity-15"
          style={{
            transform: `translateX(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-light opacity-5"
          style={{
            transform: `translateX(-50%) translateY(-50%) rotate(${scrollY * -0.01}deg)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Flowing Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`}>
            <div className="text-white/20 text-8xl font-bold mb-4">CONNECT</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative -mt-12">
              Join the Movement
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Be part of the global effort to protect our planet's most precious ecosystems. 
              Your voice matters in shaping the future of conservation.
            </p>
          </div>

          {/* Contact Information Flow */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left: Contact Details */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mr-6 group-hover:bg-white/30 transition-smooth">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                  <a 
                    href="mailto:info@plan-aeventos.com" 
                    className="text-xl text-white/80 hover:text-white transition-smooth"
                  >
                    info@plan-aeventos.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mr-6 group-hover:bg-white/30 transition-smooth">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
                  <p className="text-xl text-white/80">Puerto Iguazú, Argentina</p>
                  <p className="text-white/60">Gateway to the Atlantic Forest</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mr-6 group-hover:bg-white/30 transition-smooth">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">When</h3>
                  <p className="text-xl text-white/80">April 19-23, 2027</p>
                  <p className="text-white/60">Five days of conservation excellence</p>
                </div>
              </div>
            </div>

            {/* Right: Partners & Organizations */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">Event Partners</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-b border-white/20 pb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">International Ranger Federation</h4>
                    <p className="text-white/70">Global organization connecting rangers worldwide</p>
                  </div>
                  
                  <div className="border-b border-white/20 pb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">SINIGARA</h4>
                    <p className="text-white/70">Argentine National Parks Rangers Union</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">plan.A</h4>
                    <p className="text-white/70">Event planning and coordination specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Flow */}
          <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/95 backdrop-blur rounded-3xl p-12 shadow-floating border border-white/50">
              <h3 className="text-3xl font-bold text-forest-deep mb-6">
                Ready to Shape the Future of Conservation?
              </h3>
              <p className="text-lg text-forest-primary mb-8 max-w-3xl mx-auto">
                Mark your calendars and prepare to be part of something extraordinary. 
                Together, we can protect the world's most precious natural heritage for generations to come.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="forest-gradient text-white shadow-forest hover:scale-105 transition-bounce px-8 py-4 text-lg group"
                  onClick={() => window.location.href = 'mailto:info@plan-aeventos.com?subject=IRF World Ranger Congress 2027 Interest'}
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                  Register Interest
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-forest-primary text-forest-primary hover:bg-forest-mist transition-smooth px-8 py-4 text-lg group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-smooth" />
                  Download Poster
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Conservation Icons */}
      <div className="absolute bottom-20 right-20 opacity-30">
        <div 
          className="text-6xl text-white/50 float-gentle"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          🦎
        </div>
      </div>
      <div className="absolute top-32 left-32 opacity-20">
        <div 
          className="text-4xl text-white/50 float-gentle" 
          style={{ 
            animationDelay: '2s',
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        >
          🐒
        </div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-25">
        <div 
          className="text-5xl text-white/50 float-gentle" 
          style={{ 
            animationDelay: '4s',
            transform: `translateY(${scrollY * -0.04}px)`,
          }}
        >
          🦋
        </div>
      </div>
    </section>
  );
};

export default ContactSection;