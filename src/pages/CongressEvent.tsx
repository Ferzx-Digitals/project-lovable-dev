import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const CongressEvent = () => {
  const { t, language } = useTranslation();

  const activities = [
    { icon: '🎤', title: t('about.plenaryTalks'), desc: t('about.plenaryDesc'), img: `${WRC_IMG}/congress-introduction/Plenary%20Talks.jpg`, count: '8-10 sessions' },
    { icon: '🔬', title: t('about.workshops'), desc: t('about.workshopsDesc'), img: `${WRC_IMG}/congress-introduction/Concurrent%20Workshops.jpg`, count: '12-15 workshops' },
    { icon: '💬', title: t('about.discussions'), desc: t('about.discussionsDesc'), img: `${WRC_IMG}/congress-introduction/Open%20Discussions.jpg`, count: '6-8 sessions' },
    { icon: '🎭', title: t('about.culturalNights'), desc: t('about.culturalDesc'), img: `${WRC_IMG}/congress-introduction/Cultural%20Nights.jpg`, count: '2 evenings' },
    { icon: '🌿', title: t('about.fieldTrips'), desc: t('about.fieldTripsDesc'), img: `${WRC_IMG}/congress-introduction/Field%20Trips.jpg`, count: '1 full day' },
  ];

  const fieldTrips = [
    { title: "Devil's Throat Walkways", country: 'Argentina', desc: "Walk along 2,200 metres of footbridges to the iconic Devil's Throat viewpoint at Iguazu Falls.", img: `${WRC_IMG}/congress-events/Iguazu%20National%20Park.jpg` },
    { title: 'Iguazu National Park (Full Park)', country: 'Argentina', desc: 'Explore the stunning Iguazu Falls and surrounding subtropical rainforest, a UNESCO World Heritage Site.', img: `${WRC_IMG}/congress-events/Iguazu%20National%20Park.jpg` },
    { title: 'Guira Oga Wildlife Rescue', country: 'Argentina', desc: 'Visit a wildlife rehabilitation center dedicated to rescuing and caring for injured native animals.', img: `${WRC_IMG}/congress-events/Guira%20Oga%20Wildlife%20Rescue.jpg` },
    { title: 'Minas de Wanda', country: 'Argentina', desc: 'Discover the famous semi-precious gemstone mines of Wanda.', img: `${WRC_IMG}/congress-events/Minas%20de%20Wanda.jpg` },
    { title: 'Jesuitical Missions', country: 'Argentina', desc: 'Full-day excursion to the historic Jesuit missions, a UNESCO World Heritage Site.', img: `${WRC_IMG}/congress-events/Jesuitical%20Missions.jpg` },
    { title: 'Parque Nacional Do Iguaçu', country: 'Brazil', desc: 'Experience the Brazilian side of Iguazu Falls with panoramic views.', img: `${WRC_IMG}/congress-events/Parque%20Nacional%20Do.jpg` },
    { title: 'Parque Das Aves', country: 'Brazil', desc: 'Walk through aviaries housing over 1,300 birds of 130 species.', img: `${WRC_IMG}/congress-events/Parque%20Das%20Aves.jpg` },
  ];

  const schedule = [
    { day: 'Friday 18 April', events: 'Arrival & Registration, Welcome Reception', icon: '📋' },
    { day: 'Saturday 19 April', events: 'Opening Ceremony, Plenary Sessions, Cultural Night', icon: '🎉' },
    { day: 'Sunday 20 April', events: 'Plenary Sessions, Concurrent Workshops, Press Conference', icon: '🎤' },
    { day: 'Monday 21 April', events: 'Field Trips (Full Day)', icon: '🌿' },
    { day: 'Tuesday 22 April', events: 'Plenary Sessions, Open Discussions, Cultural Night', icon: '💬' },
    { day: 'Wednesday 23 April', events: 'Closing Ceremony, Iguazu Declaration, Farewell', icon: '🏆' },
  ];

  return (
    <div>
      <PageBanner title={t('congressEvent.banner')} subtitle={t('congressEvent.bannerSub')} backgroundImage={`${WRC_IMG}/congress-program/Banner.jpg`} />

      {/* Schedule Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-4">{t('congressEvent.scheduleTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">{t('congressEvent.scheduleDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((day, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{day.icon}</span>
                <h3 className="font-bold text-forest-deep mb-2">{day.day}</h3>
                <p className="text-sm text-muted-foreground">{day.events}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4 bg-forest-mist/20">
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
                  <p className="text-sm text-muted-foreground mb-2">{a.desc}</p>
                  <span className="text-xs text-forest-primary font-semibold">{a.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Trips */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-4">{t('congressEvent.fieldTripsTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">{t('congressEvent.fieldTripsDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldTrips.map((trip, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-md border border-border group hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src={trip.img} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-forest-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{trip.country}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-forest-deep mb-2">{trip.title}</h3>
                  <p className="text-sm text-muted-foreground">{trip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devil's Throat Highlight */}
      <section className="py-16 px-4 forest-gradient">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src={`${WRC_IMG}/congress-events/Iguazu%20National%20Park.jpg`} alt="Devil's Throat" className="rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold font-montserrat text-primary-foreground mb-4">{t('program.devilsThroat')}</h2>
              <p className="text-primary-foreground/80 leading-relaxed">{t('program.devilsThroatDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown + CTA */}
      <section className="py-16 px-4">
        <CountdownTimer />
        <div className="text-center mt-8">
          <Link to={`/${language}/register`} className="px-8 py-4 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-lg">
            {t('common.registerNow')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CongressEvent;
