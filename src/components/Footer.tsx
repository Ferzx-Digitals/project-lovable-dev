import { Heart, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-deep text-white py-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("/images/footer_background.png")',
          }} 
        />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-forest-deep/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main footer content */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-forest-light mr-2" />
              <h3 className="text-2xl font-bold">IRF World Ranger Congress 2027</h3>
            </div>
            <p className="text-forest-light text-lg mb-6">
              Protecting our planet's natural heritage, one ranger at a time
            </p>
            
            {/* Quick info */}
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <h4 className="font-semibold text-forest-light mb-2">When</h4>
                <p className="text-white/80">April 19-23, 2027</p>
              </div>
              <div>
                <h4 className="font-semibold text-forest-light mb-2">Where</h4>
                <p className="text-white/80">Puerto Iguazú, Argentina</p>
              </div>
              <div>
                <h4 className="font-semibold text-forest-light mb-2">Contact</h4>
                <a 
                  href="mailto:info@plan-aeventos.com" 
                  className="text-forest-light hover:text-white transition-smooth"
                >
                  info@plan-aeventos.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <p className="text-white/80">
                  Made with love for conservation • {new Date().getFullYear()}
                </p>
              </div>
              
              {/* Organization logos/credits */}
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm">Organized by:</span>
                <span className="text-forest-light font-medium">IRF</span>
                <span className="text-white/40">•</span>
                <span className="text-forest-light font-medium">SINIGARA</span>
                <span className="text-white/40">•</span>
                <span className="text-forest-light font-medium">plan.A</span>
              </div>
            </div>
          </div>

          {/* Conservation message */}
          <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
            <p className="text-forest-light text-sm italic">
              "The ultimate goal of the ranger is to protect the wilderness and wildlife for future generations. 
              Every step we take today shapes the world our children will inherit."
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-forest-primary opacity-10 rounded-full transform -translate-x-16 translate-y-16" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-warm opacity-10 rounded-full transform translate-x-12 -translate-y-12" />
    </footer>
  );
};

export default Footer;