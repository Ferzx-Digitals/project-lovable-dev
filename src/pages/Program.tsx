import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const schedule = [
  { day: 'Friday 18 April', events: 'Arrival & Registration, Welcome Reception' },
  { day: 'Saturday 19 April', events: 'Opening Ceremony, Plenary Sessions, Cultural Night' },
  { day: 'Sunday 20 April', events: 'Plenary Sessions, Concurrent Workshops, Press Conference' },
  { day: 'Monday 21 April', events: 'Field Trips (Full Day)' },
  { day: 'Tuesday 22 April', events: 'Plenary Sessions, Open Discussions, Cultural Night' },
  { day: 'Wednesday 23 April', events: 'Closing Ceremony, Iguazu Declaration, Farewell' },
];

const activities = [
  { title: 'Plenary Talks', desc: 'Sessions by prominent conservation experts addressing inclusive workforce, welfare of rangers, conduct, and capacity building.', count: '8-10 sessions', img: `${WRC_IMG}/congress-introduction/Plenary%20Talks.jpg` },
  { title: 'Concurrent Workshops', desc: 'Thematic workshops on equity & equality, indigenous people, one health, youth involvement, and more.', count: '12-15 workshops', img: `${WRC_IMG}/congress-introduction/Concurrent%20Workshops.jpg` },
  { title: 'Open Discussions', desc: 'Informal platforms for Indigenous Peoples, female rangers, youth leaders, volunteers, and retired rangers.', count: '6-8 sessions', img: `${WRC_IMG}/congress-introduction/Open%20Discussions.jpg` },
  { title: 'Cultural Nights', desc: 'Evening entertainment featuring music, art, and cultural expressions from ranger communities worldwide.', count: '2 evenings', img: `${WRC_IMG}/congress-introduction/Cultural%20Nights.jpg` },
  { title: 'Field Trips', desc: 'Excursions to Iguazu National Park, Devil\'s Throat walkways.', count: '1 excursion', img: `${WRC_IMG}/congress-introduction/Field%20Trips.jpg` },
];

const fieldTrips = [
  { title: "Devil's Throat Walkways", country: 'Argentina', desc: 'Walk along 2,200 metres of footbridges to the iconic Devil\'s Throat viewpoint at Iguazu Falls.', img: `${WRC_IMG}/congress-events/Iguazu%20National%20Park.jpg` },
  { title: 'Iguazu National Park (Full Park)', country: 'Argentina', desc: 'Explore the stunning Iguazu Falls and surrounding subtropical rainforest, a UNESCO World Heritage Site.', img: `${WRC_IMG}/congress-events/Iguazu%20National%20Park.jpg` },
  { title: 'Guira Oga Wildlife Rescue', country: 'Argentina', desc: 'Visit a wildlife rehabilitation center dedicated to rescuing and caring for injured native animals.', img: `${WRC_IMG}/congress-events/Guira%20Oga%20Wildlife%20Rescue.jpg` },
  { title: 'Minas de Wanda', country: 'Argentina', desc: 'Discover the famous semi-precious gemstone mines of Wanda.', img: `${WRC_IMG}/congress-events/Minas%20de%20Wanda.jpg` },
  { title: 'Jesuitical Missions', country: 'Argentina', desc: 'Full-day excursion to the historic Jesuit missions, a UNESCO World Heritage Site.', img: `${WRC_IMG}/congress-events/Jesuitical%20Missions.jpg` },
  { title: 'Parque Nacional Do Iguaçu', country: 'Brazil', desc: 'Experience the Brazilian side of Iguazu Falls with panoramic views.', img: `${WRC_IMG}/congress-events/Parque%20Nacional%20Do.jpg` },
  { title: 'Parque Das Aves', country: 'Brazil', desc: 'Walk through aviaries housing over 1,300 birds of 130 species.', img: `${WRC_IMG}/congress-events/Parque%20Das%20Aves.jpg` },
];

const tabs = ['overview', 'schedule', 'activities', 'fieldTrips'] as const;

const Program = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabLabels: Record<string, string> = {
    overview: t('program.overview'),
    schedule: t('program.detailedSchedule'),
    activities: t('program.activities'),
    fieldTrips: t('program.fieldTrips'),
  };

  return (
    <div>
      <PageBanner title={t('program.banner')} subtitle={t('program.bannerSub')} backgroundImage={`${WRC_IMG}/congress-program/Banner.jpg`} />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={cn('px-5 py-2.5 rounded-full text-sm font-medium transition-colors', activeTab === tab ? 'bg-forest-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-forest-primary/10')}>
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-forest-deep mb-6">{t('program.overviewTitle')}</h2>
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-md">
                <table className="w-full">
                  <thead><tr className="bg-forest-deep"><th className="text-left p-4 text-primary-foreground font-semibold">{t('program.day')}</th><th className="text-left p-4 text-primary-foreground font-semibold">{t('program.events')}</th></tr></thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                        <td className="p-4 font-medium text-forest-deep whitespace-nowrap">{row.day}</td>
                        <td className="p-4 text-foreground/80">{row.events}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              {schedule.map((day, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-forest-deep mb-3">{day.day}</h3>
                  <p className="text-foreground/80">{day.events}</p>
                  <p className="text-sm text-muted-foreground mt-2 italic">Detailed times to be announced</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((a, i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-md border border-border group">
                  <div className="h-48 overflow-hidden"><img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-5">
                    <h3 className="font-bold text-forest-deep mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{a.desc}</p>
                    <span className="text-xs text-forest-primary font-semibold">{a.count}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'fieldTrips' && (
            <div>
              <p className="text-foreground/80 mb-8">{t('program.devilsThroatDesc')}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fieldTrips.map((trip, i) => (
                  <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-md border border-border group">
                    <div className="h-48 overflow-hidden"><img src={trip.img} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                    <div className="p-5">
                      <span className="text-xs text-forest-primary font-semibold">{trip.country}</span>
                      <h3 className="font-bold text-forest-deep mt-1">{trip.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{trip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Program;
