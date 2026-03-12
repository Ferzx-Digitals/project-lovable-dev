import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { VISA_PORTAL_URL } from '@/data/constants';
import { cn } from '@/lib/utils';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const transportTabs = ['air', 'brazil', 'bus', 'car', 'paraguay'] as const;

const airlines = [
  { name: 'Aerolineas Argentinas', logo: `${WRC_IMG}/airlines/aerolineas-argentinas.png`, url: 'https://www.aerolineas.com.ar/' },
  { name: 'Flybondi', logo: `${WRC_IMG}/airlines/flybondi.png`, url: 'https://www.flybondi.com/' },
  { name: 'JetSMART', logo: `${WRC_IMG}/airlines/jetsmart.png`, url: 'https://www.jetsmart.com/' },
];

const Travel = () => {
  const { t } = useTranslation();
  const [activeTransport, setActiveTransport] = useState('air');

  const transportLabels: Record<string, string> = {
    air: '✈️ ' + t('travel.byAir'),
    brazil: '🛫 ' + t('travel.viaBrazil'),
    bus: '🚌 ' + t('travel.byBus'),
    car: '🚗 ' + t('travel.byCar'),
    paraguay: '🌉 ' + t('travel.viaParaguay'),
  };

  const transportContent: Record<string, { title: string; desc: string; note: string }> = {
    air: { title: t('travel.byAirTitle'), desc: t('travel.byAirDesc'), note: t('travel.byAirAirlines') },
    brazil: { title: t('travel.viaBrazilTitle'), desc: t('travel.viaBrazilDesc'), note: t('travel.viaBrazilNote') },
    bus: { title: t('travel.byBus'), desc: t('travel.byBusDesc'), note: t('travel.byBusCompanies') },
    car: { title: t('travel.byCar'), desc: t('travel.byCarDesc'), note: t('travel.byCarRoute') },
    paraguay: { title: t('travel.viaParaguay'), desc: t('travel.viaParaguayDesc'), note: t('travel.viaParaguayNote') },
  };

  return (
    <div>
      <PageBanner title={t('travel.banner')} subtitle={t('travel.bannerSub')} backgroundImage={`${WRC_IMG}/titles/travel.jpg`} />

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-4">{t('travel.visaTitle')}</h2>
          <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <span className="text-2xl mb-2 block">🛂</span>
            <h3 className="text-lg font-bold text-forest-deep mb-2">{t('travel.visaSubtitle')}</h3>
            <p className="text-foreground/80 text-sm mb-3">{t('travel.visaDesc')}</p>
            <a href={VISA_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-forest-primary text-sm font-semibold hover:underline">{t('travel.visaPortal')}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-forest-tint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('travel.gettingThere')}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {transportTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTransport(tab)} className={cn('px-4 py-2 rounded-full text-xs font-medium transition-all', activeTransport === tab ? 'bg-forest-primary text-primary-foreground' : 'bg-card text-muted-foreground border border-border/50 hover:bg-forest-primary/10')}>
                {transportLabels[tab]}
              </button>
            ))}
          </div>
          <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <h3 className="text-lg font-bold text-forest-deep mb-2">{transportContent[activeTransport].title}</h3>
            <p className="text-foreground/80 text-sm mb-3">{transportContent[activeTransport].desc}</p>
            <p className="text-xs text-forest-primary font-medium">{transportContent[activeTransport].note}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep text-center mb-6">{t('travel.airlinesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {airlines.map((airline) => (
              <a key={airline.name} href={airline.url} target="_blank" rel="noopener noreferrer" className="bg-card rounded-xl p-5 border border-border/50 shadow-sm text-center hover:shadow-md transition-all group">
                <img src={airline.logo} alt={airline.name} className="h-10 mx-auto mb-2 object-contain" />
                <p className="font-medium text-foreground text-sm group-hover:text-forest-primary transition-colors">{airline.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
