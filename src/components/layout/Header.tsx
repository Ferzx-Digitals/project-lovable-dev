import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';
import { REGISTRATION_URL } from '@/data/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t, language, setLanguage, languages } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { label: t('nav.home'), path: `/${language}` },
    {
      label: t('nav.about'),
      path: `/${language}/about`,
      children: [
        { label: t('nav.about'), path: `/${language}/about` },
        { label: t('nav.congressTheme'), path: `/${language}/congress-theme` },
      ],
    },
    { label: t('nav.submit'), path: `/${language}/submit` },
    { label: t('nav.faq'), path: `/${language}/faq` },
    { label: t('nav.program'), path: `/${language}/program` },
    {
      label: t('nav.travel'),
      path: `/${language}/travel`,
      children: [
        { label: t('nav.travel'), path: `/${language}/travel` },
      ],
    },
    { label: t('nav.contact'), path: `/${language}/contact` },
    { label: t('nav.press'), path: `/${language}/press` },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHome
          ? 'bg-forest-deep/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center space-x-3 shrink-0">
            <img
              src="/images/logo_1.png"
              alt="WRC 2027"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 flex items-center gap-1',
                    location.pathname === item.path
                      ? 'text-gold-warm'
                      : 'text-primary-foreground/90 hover:text-gold-warm'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-forest-deep/95 backdrop-blur-md rounded-lg shadow-xl border border-forest-primary/20 py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-gold-warm hover:bg-forest-primary/10 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Language + Register */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-primary-foreground/90 hover:text-gold-warm transition-colors rounded-md">
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
                <ChevronDown className="w-3 h-3" />
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-forest-deep/95 backdrop-blur-md rounded-lg shadow-xl border border-forest-primary/20 py-2 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2',
                        language === lang.code
                          ? 'text-gold-warm bg-forest-primary/10'
                          : 'text-primary-foreground/80 hover:text-gold-warm hover:bg-forest-primary/10'
                      )}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Register CTA */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-forest-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('nav.register')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-primary-foreground/90"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-forest-deep/98 backdrop-blur-md border-t border-forest-primary/20">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    location.pathname === item.path
                      ? 'text-gold-warm bg-forest-primary/10'
                      : 'text-primary-foreground/90 hover:text-gold-warm hover:bg-forest-primary/5'
                  )}
                >
                  {item.label}
                </Link>
                {item.children?.filter(c => c.path !== item.path).map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="block px-8 py-2 text-sm text-primary-foreground/70 hover:text-gold-warm"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Mobile Language */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-forest-primary/20 mt-2 pt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-full transition-colors',
                    language === lang.code
                      ? 'bg-forest-primary text-primary-foreground'
                      : 'text-primary-foreground/70 hover:bg-forest-primary/20'
                  )}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Register */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 px-5 py-3 bg-forest-primary text-primary-foreground text-sm font-semibold rounded-full text-center hover:bg-forest-light transition-colors"
            >
              {t('nav.register')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
