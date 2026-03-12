import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { congressHistory } from '@/data/congress-history';
import { teamMembers } from '@/data/team';
import { REGISTRATION_URL } from '@/data/constants';
import { Calendar, MapPin, Users, Target, Globe, Heart, Leaf, Shield, TreePine } from 'lucide-react';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const regions = [
  { key: 'southAmerica', img: 'https://i.imgur.com/U2s9hxi.jpg' },
  { key: 'africa', img: 'https://i.imgur.com/THs7nV5.jpg' },
  { key: 'centralAmerica', img: 'https://i.imgur.com/EpncZyP.jpg' },
  { key: 'asia', img: 'https://i.imgur.com/RsDfF4o.png' },
  { key: 'oceania', img: 'https://i.imgur.com/Khqk79L.jpg' },
  { key: 'northAmerica', img: 'https://i.imgur.com/d58ev2N.jpg' },
  { key: 'europe', img: 'https://i.imgur.com/8Vqc1Yo.jpg' },
];

const Index = () => {
  const { t, language } = useTranslation();

  return (
    <div>
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep mb-4">{t('welcome.title')}</h2>
              <p className="text-sm uppercase tracking-wider text-gold-warm font-semibold mb-6">{t('welcome.subtitle')}</p>
              <p className="text-foreground/80 mb-4 leading-relaxed">{t('welcome.description')}</p>
              <p className="text-foreground/80 leading-relaxed">{t('welcome.description2')}</p>
              <Link to={`/${language}/about`} className="inline-block mt-6 px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors shadow-forest">
                {t('common.learnMore')}
              </Link>
            </div>
            <div className="relative">
              <img src={`${WRC_IMG}/home/9-iguazu-map.png`} alt="Iguazu region map" className="rounded-2xl shadow-xl" />
              {/* Decorative toucan */}
              <img src="/images/toucan.png" alt="" className="absolute -top-10 -right-6 w-24 h-24 object-contain float-gentle hidden lg:block" style={{ transform: 'scaleX(-1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Congress Matters */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/5 via-transparent to-gold-warm/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-forest-deep heading-decorated">{t('congressWelcome.title')}</h2>
            <p className="text-xl text-gold-warm italic mt-4">{t('congressWelcome.theme')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: 'Conservation Innovation', desc: 'Discover cutting-edge techniques in wildlife protection and ecosystem management', color: 'bg-forest-primary' },
              { icon: <Shield className="w-8 h-8" />, title: 'Biodiversity Focus', desc: 'Learn from the Atlantic Forest, one of Earth\'s most biodiverse ecosystems', color: 'bg-earth-warm' },
              { icon: <Globe className="w-8 h-8" />, title: 'Global Network', desc: 'Build lasting partnerships with conservation heroes from around the world', color: 'bg-water-deep' },
            ].map((item) => (
              <div key={item.title} className="card-nature p-8 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 text-primary-foreground group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-deep mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto text-center text-lg">{t('congressWelcome.description')}</p>
        </div>
      </section>

      {/* Congress Info Block with Toucan */}
      <section className="py-20 px-4 bg-forest-deep relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-forest-light blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Toucan + 2027 */}
            <div className="lg:w-1/3 text-center relative">
              <img src="/images/toucan.png" alt="Toucan" className="w-48 h-48 mx-auto object-contain float-gentle" />
              <div className="text-[120px] font-montserrat font-extrabold text-forest-light/15 leading-none -mt-8">2027</div>
            </div>
            {/* Right: Info */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-gold-warm" />
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary-foreground">11th IRF World Ranger Congress</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: <Calendar className="w-8 h-8" />, label: t('congressInfo.date'), value: t('congressInfo.dateValue'), sub: t('congressInfo.dateDesc') },
                  { icon: <MapPin className="w-8 h-8" />, label: t('congressInfo.venue'), value: t('congressInfo.venueName'), sub: t('congressInfo.venueLocation') },
                  { icon: <TreePine className="w-8 h-8" />, label: t('congressInfo.setting'), value: t('congressInfo.settingName'), sub: t('congressInfo.settingDesc') },
                ].map((card) => (
                  <div key={card.label} className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 border border-primary-foreground/10">
                    <div className="text-gold-warm mb-3">{card.icon}</div>
                    <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-primary-foreground font-bold mb-1">{card.value}</p>
                    <p className="text-primary-foreground/60 text-sm">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 px-4 section-earth-tint">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('regions.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {regions.map((r) => (
              <div key={r.key} className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                <img src={r.img} alt={t(`regions.${r.key}`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                <p className="absolute bottom-3 left-0 right-0 text-center text-primary-foreground text-sm font-semibold">{t(`regions.${r.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Congress History Timeline */}
      <section className="py-20 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('congressHistory.title')}</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {congressHistory.map((event) => (
              <div key={event.year} className="flex flex-col items-center p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border min-w-[120px]">
                <span className="text-2xl mb-2">{event.icon}</span>
                <span className="text-lg font-bold text-forest-deep">{event.year}</span>
                <span className="text-sm text-foreground/70">{event.city}</span>
                <span className="text-xs text-muted-foreground">{event.flag} {event.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President Message */}
      <section className="py-20 px-4 bg-gradient-to-r from-forest-deep to-forest-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-2xl font-bold font-montserrat text-primary-foreground text-center mb-10">{t('president.title')}</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={`${WRC_IMG}/team/irf/Chris%20Galliers%20-%20Presidnet.jpg`} alt="Chris Galliers" className="w-32 h-32 rounded-full object-cover border-4 border-gold-warm shadow-lg shrink-0" />
            <div>
              <blockquote className="text-primary-foreground/90 text-lg italic leading-relaxed mb-4">{t('president.quote')}</blockquote>
              <p className="text-gold-warm font-semibold">{t('president.name')}</p>
              <p className="text-primary-foreground/60 text-sm">{t('president.role')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-20 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('organizers.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { logo: `${WRC_IMG}/logos/irf.png`, name: t('organizers.irf.name'), desc: t('organizers.irf.description'), founded: t('organizers.irf.founded') },
              { logo: `${WRC_IMG}/logos/sigunara.png`, name: t('organizers.sigunara.name'), desc: t('organizers.sigunara.description'), founded: t('organizers.sigunara.founded') },
            ].map((org) => (
              <div key={org.name} className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <img src={org.logo} alt={org.name} className="h-20 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-bold text-forest-deep mb-2">{org.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{org.desc}</p>
                <span className="text-xs text-forest-primary font-semibold uppercase tracking-wider">{org.founded}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20 px-4 section-forest-tint">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {teamMembers.slice(0, 10).map((member) => (
              <div key={member.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-forest-primary/10 text-forest-primary font-medium">{member.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 px-4 section-leaf-pattern">
        <CountdownTimer />
      </section>

      {/* CTA */}
      <section className="py-20 px-4 earth-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold-warm blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-forest-light blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-primary-foreground/95 backdrop-blur rounded-3xl p-12 shadow-floating border border-primary-foreground/50">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-forest-deep mb-4">{t('cta.title')}</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">{t('cta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-forest text-lg">
                {t('cta.register')}
              </a>
              <Link to={`/${language}/submit`} className="px-8 py-4 border-2 border-forest-primary text-forest-primary font-bold rounded-full hover:bg-forest-primary/10 transition-colors text-lg">
                {t('cta.submit')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
