import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const About = () => {
  const { t, language } = useTranslation();

  const activities = [
    { icon: '🎤', title: t('about.plenaryTalks'), desc: t('about.plenaryDesc'), img: `${WRC_IMG}/congress-introduction/Plenary%20Talks.jpg` },
    { icon: '🔬', title: t('about.workshops'), desc: t('about.workshopsDesc'), img: `${WRC_IMG}/congress-introduction/Concurrent%20Workshops.jpg` },
    { icon: '💬', title: t('about.discussions'), desc: t('about.discussionsDesc'), img: `${WRC_IMG}/congress-introduction/Open%20Discussions.jpg` },
    { icon: '🎭', title: t('about.culturalNights'), desc: t('about.culturalDesc'), img: `${WRC_IMG}/congress-introduction/Cultural%20Nights.jpg` },
    { icon: '🌿', title: t('about.fieldTrips'), desc: t('about.fieldTripsDesc'), img: `${WRC_IMG}/congress-introduction/Field%20Trips.jpg` },
  ];

  const objectives = [
    { num: '01', title: t('about.obj1Title'), desc: t('about.obj1Desc'), img: `${WRC_IMG}/congress-introduction/Ranger%20Recognition.jpg` },
    { num: '02', title: t('about.obj2Title'), desc: t('about.obj2Desc'), img: `${WRC_IMG}/congress-introduction/Ranger%20Experiences.jpg` },
    { num: '03', title: t('about.obj3Title'), desc: t('about.obj3Desc'), img: `${WRC_IMG}/congress-introduction/Ranger%20Solutions.jpg` },
    { num: '04', title: t('about.obj4Title'), desc: t('about.obj4Desc'), img: `${WRC_IMG}/congress-introduction/Ranger%20Declaration.jpg` },
  ];

  return (
    <div>
      <PageBanner title={t('about.banner')} subtitle={t('about.bannerSub')} backgroundImage={`${WRC_IMG}/congress-introduction/Banner.jpg`} />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-6">{t('about.rangersTitle')}</h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">{t('about.rangersDesc')}</p>
          <p className="text-foreground/80 leading-relaxed">{t('about.rangersDesc2')}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-forest-mist/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep mb-2">{t('about.aboutTitle')}</h2>
          <p className="text-gold-warm font-semibold mb-6">{t('about.aboutLocation')}</p>
          <p className="text-foreground/80 mb-4">{t('about.aboutDesc')}</p>
          <p className="text-foreground/80 mb-4">{t('about.aboutDesc2')}</p>
          <p className="text-foreground/80">{t('about.aboutDesc3')}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <CountdownTimer />
        </div>
      </section>

      <section className="py-16 px-4 bg-forest-mist/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('about.activitiesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group">
                <div className="h-48 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{a.icon}</span>
                    <h3 className="text-lg font-bold text-forest-deep">{a.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 forest-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-montserrat text-primary-foreground mb-4">{t('about.themeTitle')}</h2>
          <p className="text-2xl text-gold-warm italic mb-6">{t('about.themeQuote')}</p>
          <p className="text-primary-foreground/80">{t('about.themeDesc')}</p>
          <Link to={`/${language}/congress-theme`} className="inline-block mt-6 px-6 py-3 bg-gold-warm text-forest-deep font-semibold rounded-full hover:bg-gold-bright transition-colors">
            {t('common.learnMore')}
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-4">{t('about.objectivesTitle')}</h2>
          <p className="text-center text-muted-foreground mb-12">{t('about.objectivesHover')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj) => (
              <div key={obj.num} className="relative group bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={obj.img} alt={obj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-3xl font-bold text-forest-primary/20">{obj.num}</span>
                  <h3 className="text-lg font-bold text-forest-deep mt-1">{obj.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
