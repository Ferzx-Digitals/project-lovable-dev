import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONTACT_EMAIL, IRF_WEBSITE, SIGUNARA_WEBSITE, REGISTRATION_URL } from '@/data/constants';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const Footer = () => {
  const { t, language } = useTranslation();

  const quickLinks = [
    { label: t('nav.home'), path: `/${language}` },
    { label: t('nav.about'), path: `/${language}/about` },
    { label: t('nav.program'), path: `/${language}/program` },
    { label: t('nav.faq'), path: `/${language}/faq` },
    { label: t('nav.contact'), path: `/${language}/contact` },
    { label: t('nav.press'), path: `/${language}/press` },
  ];

  return (
    <footer className="bg-forest-deep text-primary-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: 'url("/images/footer_background.png")' }} />
      </div>
      <div className="absolute inset-0 bg-forest-deep/85" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-forest-light" />
              <span className="font-bold text-lg">WRC 2027</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">{t('footer.protecting')}</p>
            <div className="flex items-center gap-3">
              <img src={`${WRC_IMG}/logos/irf.png`} alt="IRF" className="h-8 object-contain opacity-80" />
              <img src={`${WRC_IMG}/logos/sigunara.png`} alt="SIGUNARA" className="h-8 object-contain opacity-80" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-forest-light mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-gold-warm text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-forest-light mb-4 text-sm uppercase tracking-wider">{t('footer.when')}</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">April 19-23, 2027</p>
            <h4 className="font-semibold text-forest-light mb-2 text-sm uppercase tracking-wider">{t('footer.where')}</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">Puerto Iguazú, Argentina</p>
            <h4 className="font-semibold text-forest-light mb-2 text-sm uppercase tracking-wider">{t('footer.contactTitle')}</h4>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-light hover:text-gold-warm text-sm transition-colors">{CONTACT_EMAIL}</a>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-forest-light mb-4 text-sm uppercase tracking-wider">Get Involved</h4>
            <div className="space-y-3">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 bg-forest-primary text-primary-foreground text-sm font-semibold rounded-full text-center hover:bg-forest-light transition-colors">
                {t('common.registerNow')}
              </a>
              <Link to={`/${language}/submit`} className="block px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground text-sm font-semibold rounded-full text-center hover:bg-primary-foreground/10 transition-colors">
                {t('common.submitInterest')}
              </Link>
            </div>
            <div className="mt-4 space-y-1">
              <a href={IRF_WEBSITE} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/60 hover:text-gold-warm text-xs transition-colors">IRF Website →</a>
              <a href={SIGUNARA_WEBSITE} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/60 hover:text-gold-warm text-xs transition-colors">SIGUNARA Website →</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-xs">
              © {new Date().getFullYear()} {t('footer.madeWith')} • IRF World Ranger Congress
            </p>
            <p className="text-primary-foreground/40 text-xs">
              {t('footer.organizedBy')} IRF • SIGUNARA • plan.A
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="pb-8">
          <div className="p-5 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
            <p className="text-forest-light/80 text-xs italic text-center">{t('footer.quote')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
