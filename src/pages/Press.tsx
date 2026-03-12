import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONTACT_EMAIL, PHOTO_GALLERY_DRIVE, IRF_WEBSITE, SIGUNARA_WEBSITE } from '@/data/constants';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const pressReleases = [
  { date: 'February 2026', title: '11th IRF World Ranger Congress Announced', desc: 'The International Ranger Federation announces the 11th World Ranger Congress will be held in Argentina.' },
  { date: 'February 2026', title: 'Registration Opens for WRC 2027', desc: 'Online registration is now open for rangers and conservation professionals worldwide.' },
  { date: 'March 2026', title: 'Congress Theme Revealed', desc: '"Recognising Rangers: Advancing the profession to safeguard our future" — the theme for the 11th WRC.' },
  { date: 'April 2026', title: 'Call for Expressions of Interest', desc: 'Speakers and workshop leaders are invited to submit expressions of interest.' },
];

const Press = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageBanner title={t('press.banner')} subtitle={t('press.bannerSub')} backgroundImage={`${WRC_IMG}/titles/press.jpg`} />

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-8">{t('press.conferenceTitle')}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: t('common.date'), value: t('press.conferenceDate') },
              { label: t('common.time'), value: t('press.conferenceTime') },
              { label: t('common.location'), value: t('press.conferenceLocation') },
              { label: t('common.remoteAccess'), value: t('press.remoteAccess') },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-forest-primary font-semibold mb-1">{item.label}</p>
                <p className="text-foreground/80 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-forest-tint">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-4">{t('press.pressKit')}</h2>
          <p className="text-muted-foreground mb-6">{t('press.pressKitDesc')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {['English', 'Español', 'Français'].map((lang) => (
              <div key={lang} className="bg-card rounded-xl p-5 border border-border text-center shadow-sm">
                <p className="font-medium text-foreground">Press Kit ({lang})</p>
                <span className="text-sm text-muted-foreground">— {t('press.comingSoon')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-8">{t('press.releasesTitle')}</h2>
          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <div key={i} className="card-nature p-6 flex flex-col md:flex-row gap-4 items-start">
                <span className="text-sm text-forest-primary font-semibold whitespace-nowrap">{pr.date}</span>
                <div>
                  <h3 className="font-bold text-forest-deep">{pr.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-earth-tint">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-4">{t('press.galleryTitle')}</h2>
          <p className="text-muted-foreground mb-8">{t('press.galleryDesc')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={`${WRC_IMG}/photo_gallery/${i + 1}.jpg`} alt={`Congress photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={PHOTO_GALLERY_DRIVE} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors shadow-forest">
              {t('press.downloadAll')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-4">{t('press.whoAreRangers')}</h2>
          <p className="text-foreground/80 mb-8">{t('press.whoAreRangersDesc')}</p>
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-4">{t('press.whyImportant')}</h2>
          <p className="text-foreground/80">{t('press.whyImportantDesc')}</p>
        </div>
      </section>

      <section className="py-16 px-4 forest-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-2xl font-bold font-montserrat text-primary-foreground mb-4">{t('press.pressContact')}</h2>
          <p className="text-primary-foreground/80 mb-6">{t('press.pressContactDesc')}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-warm text-lg font-semibold hover:underline">{CONTACT_EMAIL}</a>
        </div>
      </section>
    </div>
  );
};

export default Press;
