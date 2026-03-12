import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { EOI_FORMS, FUNDING_FORMS } from '@/data/constants';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const Submit = () => {
  const { t } = useTranslation();
  const requirements = t('submit.requirements') as unknown as string[];
  const streams = [t('congressTheme.stream1'), t('congressTheme.stream2'), t('congressTheme.stream3'), t('congressTheme.stream4'), t('congressTheme.stream5')];

  return (
    <div>
      <PageBanner title={t('submit.banner')} subtitle={t('submit.bannerSub')} backgroundImage={`${WRC_IMG}/submit/Banner.jpg`} />

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-4">{t('submit.guidelinesTitle')}</h2>
          <p className="text-foreground/80 mb-3 text-sm">{t('submit.guidelinesDesc')}</p>
          <p className="text-foreground/80 text-sm">{t('submit.guidelinesDesc2')}</p>
        </div>
      </section>

      <section className="py-16 px-4 section-forest-tint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('submit.sessionTypes')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
              <span className="text-2xl mb-3 block">🎤</span>
              <h3 className="text-lg font-bold text-forest-deep mb-2">{t('submit.plenaryTitle')}</h3>
              <p className="text-muted-foreground text-sm mb-2">{t('submit.plenaryDesc')}</p>
              <p className="text-xs text-forest-primary font-semibold">{t('submit.plenaryDuration')}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm border-l-3 border-l-gold-warm">
              <span className="text-2xl mb-3 block">🔬</span>
              <h3 className="text-lg font-bold text-forest-deep mb-2">{t('submit.workshopTitle')}</h3>
              <p className="text-muted-foreground text-sm mb-2">{t('submit.workshopDesc')}</p>
              <p className="text-xs text-forest-primary font-semibold">{t('submit.workshopDuration')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-3">{t('submit.whatYouNeed')}</h2>
          <p className="text-muted-foreground text-sm mb-4">{t('submit.whatYouNeedDesc')}</p>
          <ul className="space-y-2">
            {Array.isArray(requirements) && requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-forest-primary/10 text-forest-primary text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 section-earth-tint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-3">{t('submit.streamsTitle')}</h2>
          <p className="text-muted-foreground text-sm mb-4">{t('submit.streamsDesc')}</p>
          <div className="space-y-2">
            {streams.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-3 border border-border/50 shadow-sm">
                <span className="w-7 h-7 rounded-full bg-forest-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span className="font-medium text-foreground text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 forest-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-2xl font-bold font-montserrat text-primary-foreground mb-3">{t('submit.submitTitle')}</h2>
          <p className="text-primary-foreground/80 text-sm mb-6">{t('submit.submitDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={EOI_FORMS.en} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gold-warm text-forest-deep rounded-full font-semibold hover:bg-gold-bright transition-colors shadow-lg text-sm">{t('submit.englishForm')}</a>
            <a href={EOI_FORMS.es} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">{t('submit.spanishForm')}</a>
            <a href={EOI_FORMS.fr} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">{t('submit.frenchForm')}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold font-montserrat text-forest-deep mb-3">{t('submit.fundingTitle')}</h2>
          <p className="text-muted-foreground text-sm mb-4">{t('submit.fundingDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href={FUNDING_FORMS.en} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-forest-primary text-primary-foreground rounded-full text-xs font-semibold hover:bg-forest-deep transition-colors shadow-forest">{t('submit.fundingEN')}</a>
            <a href={FUNDING_FORMS.es} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-forest-primary text-forest-primary rounded-full text-xs font-semibold hover:bg-forest-primary/10 transition-colors">{t('submit.fundingES')}</a>
            <a href={FUNDING_FORMS.fr} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-forest-primary text-forest-primary rounded-full text-xs font-semibold hover:bg-forest-primary/10 transition-colors">{t('submit.fundingFR')}</a>
          </div>
          <p className="text-xs text-earth-brown font-semibold">{t('submit.deadline')}</p>
          <p className="text-xs text-muted-foreground">{t('submit.notification')}</p>
        </div>
      </section>
    </div>
  );
};

export default Submit;
