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

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-4">{t('about.rangersTitle')}</h2>
          <p className="text-foreground/80 mb-3 leading-relaxed text-sm">{t('about.rangersDesc')}</p>
          <p className="text-foreground/80 leading-relaxed text-sm">{t('about.rangersDesc2')}</p>
        </div>
      </section>

      <section className="py-16 px-4 section-forest-tint">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-2">{t('about.aboutTitle')}</h2>
          <p className="text-gold-warm font-semibold text-sm mb-4">{t('about.aboutLocation')}</p>
          <p className="text-foreground/80 mb-3 text-sm">{t('about.aboutDesc')}</p>
          <p className="text-foreground/80 mb-3 text-sm">{t('about.aboutDesc2')}</p>
          <p className="text-foreground/80 text-sm">{t('about.aboutDesc3')}</p>
        </div>
      </section>

      <section className="py-14 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl text-center">
          <CountdownTimer />
        </div>
      </section>

      <section className="py-16 px-4 section-earth-tint">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep text-center mb-10">{t('about.activitiesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((a) => (
              <div key={a.title} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border/50 group">
                <div className="h-44 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{a.icon}</span>
                    <h3 className="text-base font-bold text-forest-deep">{a.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
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
          <h2 className="text-2xl font-bold font-montserrat text-primary-foreground mb-3">{t('about.themeTitle')}</h2>
          <p className="text-xl text-gold-warm italic mb-4">{t('about.themeQuote')}</p>
          <p className="text-primary-foreground/80 text-sm">{t('about.themeDesc')}</p>
          <Link to={`/${language}/congress-theme`} className="inline-block mt-6 px-6 py-3 bg-gold-warm text-forest-deep font-semibold rounded-full hover:bg-gold-bright transition-colors shadow-lg text-sm">
            {t('common.learnMore')}
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep text-center mb-3">{t('about.objectivesTitle')}</h2>
          <p className="text-center text-muted-foreground text-sm mb-10">{t('about.objectivesHover')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((obj) => (
              <div key={obj.num} className="relative group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={obj.img} alt={obj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-2xl font-bold text-forest-primary/20">{obj.num}</span>
                  <h3 className="text-base font-bold text-forest-deep mt-1">{obj.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{obj.desc}</p>
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
