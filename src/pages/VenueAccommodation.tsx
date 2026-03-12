import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { REGISTRATION_URL } from '@/data/constants';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const VenueAccommodation = () => {
  const { t } = useTranslation();

  const hotels = [
    { name: 'Amerian Portal del Iguazú', stars: '⭐⭐⭐⭐⭐', desc: 'Official congress hotel. Premium amenities, on-site conference facilities. Walking distance to the Convention Center.', img: `${WRC_IMG}/home/9-iguazu-map.png`, official: true },
    { name: 'Panoramic Hotel Iguazú', stars: '⭐⭐⭐⭐', desc: 'Modern hotel with panoramic views. Excellent location near the city center and close to the event venue.', img: `${WRC_IMG}/home/9-iguazu-map.png`, official: false },
    { name: 'Boutique Hotel de la Fonte', stars: '⭐⭐⭐', desc: 'Charming boutique hotel surrounded by tropical gardens. Budget-friendly option with comfortable rooms.', img: `${WRC_IMG}/home/9-iguazu-map.png`, official: false },
  ];

  return (
    <div>
      <PageBanner title={t('venueAccommodation.banner')} subtitle={t('venueAccommodation.bannerSub')} backgroundImage={`${WRC_IMG}/titles/travel.jpg`} />

      {/* Venue Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-12">{t('venueAccommodation.venueTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-md">
                <span className="text-4xl mb-4 block">🏛️</span>
                <h3 className="text-xl font-bold text-forest-deep mb-3">{t('congressInfo.venueName')}</h3>
                <p className="text-foreground/80 mb-4">{t('venueAccommodation.venueDesc')}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📍 {t('congressInfo.venueLocation')}</p>
                  <p>📅 {t('congressInfo.dateValue')}</p>
                  <p>👥 {t('venueAccommodation.venueCapacity')}</p>
                </div>
              </div>
            </div>
            <div>
              <img src={`${WRC_IMG}/home/9-iguazu-map.png`} alt="Venue location" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Features */}
      <section className="py-16 px-4 bg-forest-mist/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep text-center mb-10">{t('venueAccommodation.featuresTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎤', title: t('venueAccommodation.feature1'), desc: t('venueAccommodation.feature1Desc') },
              { icon: '🌐', title: t('venueAccommodation.feature2'), desc: t('venueAccommodation.feature2Desc') },
              { icon: '♿', title: t('venueAccommodation.feature3'), desc: t('venueAccommodation.feature3Desc') },
              { icon: '🍽️', title: t('venueAccommodation.feature4'), desc: t('venueAccommodation.feature4Desc') },
              { icon: '📶', title: t('venueAccommodation.feature5'), desc: t('venueAccommodation.feature5Desc') },
              { icon: '🅿️', title: t('venueAccommodation.feature6'), desc: t('venueAccommodation.feature6Desc') },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-6 border border-border shadow-sm text-center">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-forest-deep mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-montserrat text-forest-deep text-center mb-4">{t('venueAccommodation.accommodationTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">{t('venueAccommodation.accommodationDesc')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow">
                {hotel.official && (
                  <div className="bg-gold-warm text-forest-deep text-xs font-bold text-center py-1.5 uppercase tracking-wider">
                    {t('venueAccommodation.officialHotel')}
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm mb-2">{hotel.stars}</p>
                  <h3 className="text-lg font-bold text-forest-deep mb-2">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground">{hotel.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-forest-mist/30 rounded-xl p-6 border border-border text-center">
            <p className="text-foreground/80 mb-2">{t('venueAccommodation.bookingNote')}</p>
            <p className="text-sm text-muted-foreground">{t('venueAccommodation.bookingNote2')}</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 bg-forest-mist/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold font-montserrat text-forest-deep text-center mb-8">{t('contact.findUs')}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.1!2d-54.577!3d-25.597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzQ5LjIiUyA1NMKwMzQnMzcuMiJX!5e0!3m2!1sen!2sar!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Convention Center Location"
            />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 px-4">
        <CountdownTimer />
        <div className="text-center mt-8">
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-lg">
            {t('common.registerNow')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default VenueAccommodation;
