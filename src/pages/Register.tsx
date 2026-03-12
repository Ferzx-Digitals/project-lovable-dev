import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { REGISTRATION_URL, CONTACT_EMAIL } from '@/data/constants';
import { Check } from 'lucide-react';

const Register = () => {
  const { t } = useTranslation();
  const includes = t('register.includes') as unknown as string[];
  const capacityItems = t('register.capacityItems') as unknown as string[];
  const rulesItems = t('register.rulesItems') as unknown as string[];
  const spousesItems = t('register.spousesItems') as unknown as string[];

  return (
    <div>
      <PageBanner title={t('register.banner')} subtitle={t('register.bannerSub')} />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden max-w-lg mx-auto">
            <div className="bg-forest-deep p-8 text-center">
              <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-2">Congress Registration</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gold-warm">{t('register.price')}</span>
                <span className="text-primary-foreground/60">{t('register.currency')}</span>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-3">{t('register.priceDesc')}</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 mb-6">
                {Array.isArray(includes) && includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm">
                    <Check className="w-4 h-4 text-forest-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground text-center mb-6">{t('register.registrationPeriod')}</p>
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold text-center hover:bg-forest-deep transition-colors">
                {t('common.registerNow')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-forest-mist/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-8">{t('register.paymentTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <span className="text-3xl mb-3 block">🇦🇷</span>
              <h3 className="text-xl font-bold text-forest-deep mb-2">{t('register.argTitle')}</h3>
              <p className="text-foreground/80 font-medium">{t('register.argMethod')}</p>
              <p className="text-sm text-muted-foreground mt-2">{t('register.argNote')}</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <span className="text-3xl mb-3 block">🌍</span>
              <h3 className="text-xl font-bold text-forest-deep mb-2">{t('register.intTitle')}</h3>
              <p className="text-foreground/80 font-medium">{t('register.intMethod')}</p>
              <p className="text-sm text-muted-foreground mt-2">{t('register.intNote')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-8">{t('register.importantInfo')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t('register.capacity'), items: capacityItems },
              { title: t('register.rules'), items: rulesItems },
              { title: t('register.spouses'), items: spousesItems },
            ].map((block) => (
              <div key={block.title} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-forest-deep mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {Array.isArray(block.items) && block.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-forest-primary">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-forest-mist/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('register.cancellation')}</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {[
              { period: t('register.cancel1'), value: t('register.cancel1Value') },
              { period: t('register.cancel2'), value: t('register.cancel2Value') },
              { period: t('register.cancel3'), value: t('register.cancel3Value') },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between p-4 ${i < 2 ? 'border-b border-border' : ''}`}>
                <span className="text-foreground/80 text-sm">{row.period}</span>
                <span className="font-semibold text-forest-deep text-sm">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <CountdownTimer />
        <p className="text-center text-muted-foreground mt-4">{t('register.limitedSpaces')}</p>
      </section>
    </div>
  );
};

export default Register;
