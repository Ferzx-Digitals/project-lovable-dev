import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const CongressTheme = () => {
  const { t, language } = useTranslation();

  const streams = [
    { title: t('congressTheme.stream1'), desc: t('congressTheme.stream1Desc'), img: `${WRC_IMG}/congress-theme/ranger-recognition.jpg` },
    { title: t('congressTheme.stream2'), desc: t('congressTheme.stream2Desc'), img: `${WRC_IMG}/congress-theme/community-engagement-and-partnerships.jpg` },
    { title: t('congressTheme.stream3'), desc: t('congressTheme.stream3Desc'), img: `${WRC_IMG}/congress-theme/inclusive-and-representative-workforce.jpg` },
    { title: t('congressTheme.stream4'), desc: t('congressTheme.stream4Desc'), img: `${WRC_IMG}/congress-theme/welfare-and-working-conditions.jpg` },
    { title: t('congressTheme.stream5'), desc: t('congressTheme.stream5Desc'), img: `${WRC_IMG}/congress-theme/capacity-building-and-training.jpg` },
  ];

  const objectives = [
    { title: t('about.obj1Title'), desc: t('about.obj1Desc'), img: `${WRC_IMG}/congress-theme/ranger-recognition.jpg` },
    { title: t('about.obj2Title'), desc: t('about.obj2Desc'), img: `${WRC_IMG}/congress-theme/ranger-experiences.jpg` },
    { title: t('about.obj3Title'), desc: t('about.obj3Desc'), img: `${WRC_IMG}/congress-theme/ranger-solutions.jpg` },
    { title: t('about.obj4Title'), desc: t('about.obj4Desc'), img: `${WRC_IMG}/congress-theme/ranger-declaration.jpg` },
  ];

  const topics = [
    { icon: '🏔️', title: t('congressTheme.topic1'), desc: t('congressTheme.topic1Desc') },
    { icon: '🩺', title: t('congressTheme.topic2'), desc: t('congressTheme.topic2Desc') },
    { icon: '🌱', title: t('congressTheme.topic3'), desc: t('congressTheme.topic3Desc') },
    { icon: '📡', title: t('congressTheme.topic4'), desc: t('congressTheme.topic4Desc') },
    { icon: '🌡️', title: t('congressTheme.topic5'), desc: t('congressTheme.topic5Desc') },
  ];

  return (
    <div>
      <PageBanner title={t('congressTheme.banner')} subtitle={t('congressTheme.bannerSub')} backgroundImage={`${WRC_IMG}/congress-theme/Banner.jpg`} />

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">{t('congressTheme.themeDesc')}</p>
        </div>
      </section>

      <section className="py-16 px-4 section-forest-tint">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('congressTheme.streamsTitle')}</h2>
          <div className="space-y-6">
            {streams.map((s, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all`}>
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-xl font-bold text-forest-deep mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('congressTheme.objectivesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="relative group bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={obj.img} alt={obj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-forest-deep">{obj.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 section-earth-tint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('congressTheme.discussionTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-md border border-border text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <span className="text-3xl mb-3 block">{topic.icon}</span>
                <h3 className="text-lg font-bold text-forest-deep mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 forest-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl font-bold font-montserrat text-primary-foreground mb-4">{t('congressTheme.shareTitle')}</h2>
          <p className="text-primary-foreground/80 mb-8">{t('congressTheme.shareDesc')}</p>
          <Link to={`/${language}/submit`} className="px-8 py-4 bg-gold-warm text-forest-deep font-bold rounded-full hover:bg-gold-bright transition-colors shadow-lg">
            {t('congressTheme.submitEOI')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CongressTheme;
