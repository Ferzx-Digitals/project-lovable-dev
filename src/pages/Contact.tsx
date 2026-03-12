import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONTACT_EMAIL, SPONSORSHIP_PROSPECTUS_URL, REGISTRATION_URL, IRF_WEBSITE, SIGUNARA_WEBSITE } from '@/data/constants';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar, Users, Send, Download } from 'lucide-react';

const WRC_IMG = 'https://wrc-lake.vercel.app/images';

const Contact = () => {
  const { t, language } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
  };

  return (
    <div>
      <PageBanner title={t('contact.banner')} subtitle={t('contact.bannerSub')} />

      {/* Join the Movement - Earth Gradient Section */}
      <section className="py-20 px-4 earth-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-forest-light blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-white/15 text-7xl md:text-8xl font-bold mb-4 font-montserrat">CONNECT</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 -mt-12 relative font-montserrat">Join the Movement</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Be part of the global effort to protect our planet's most precious ecosystems. Your voice matters in shaping the future of conservation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              {[
                { icon: <Mail className="w-8 h-8" />, title: t('contact.getInTouch'), content: <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl text-white/80 hover:text-white transition-colors">{CONTACT_EMAIL}</a> },
                { icon: <MapPin className="w-8 h-8" />, title: t('contact.venueLabel'), content: <><p className="text-xl text-white/80">{t('contact.venueName')}</p><p className="text-white/60">{t('contact.venueLocation')}</p></> },
                { icon: <Calendar className="w-8 h-8" />, title: 'When', content: <><p className="text-xl text-white/80">April 19-23, 2027</p><p className="text-white/60">Five days of conservation excellence</p></> },
              ].map((item) => (
                <div key={item.title} className="flex items-center group">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mr-6 group-hover:bg-white/30 transition-colors text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Event Partners */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Event Partners</h3>
              </div>
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-xl font-semibold text-white mb-2">International Ranger Federation</h4>
                  <p className="text-white/70">Global organization connecting rangers worldwide</p>
                  <a href={IRF_WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold-warm text-sm hover:underline mt-1 inline-block">Visit Website →</a>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h4 className="text-xl font-semibold text-white mb-2">SIGUNARA</h4>
                  <p className="text-white/70">Argentine National Parks Rangers Union</p>
                  <a href={SIGUNARA_WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold-warm text-sm hover:underline mt-1 inline-block">Visit Website →</a>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">plan.A</h4>
                  <p className="text-white/70">Event planning and coordination specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Cards */}
      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.fullName')}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.email')}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.subject')}</label>
                  <select value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none">
                    {(t('contact.subjectOptions') as unknown as string[]).map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.message')}</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none resize-none" />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors shadow-forest flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {t('contact.send')}
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('contact.getInTouch')}</h2>
              <div className="space-y-4">
                <div className="card-nature p-6">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.generalInquiries')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.generalInquiriesDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="card-gold p-6">
                  <span className="text-2xl mb-2 block">🤝</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.sponsorshipTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.sponsorshipDesc')}</p>
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                    <a href={SPONSORSHIP_PROSPECTUS_URL} target="_blank" rel="noopener noreferrer" className="text-forest-primary text-sm font-medium hover:underline flex items-center gap-1">
                      <Download className="w-3 h-3" /> {t('contact.downloadProspectus')}
                    </a>
                  </div>
                </div>
                <div className="card-nature p-6">
                  <span className="text-2xl mb-2 block">📰</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.pressTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.pressDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="card-nature p-6">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.venueLabel')}</h3>
                  <p className="text-foreground/80">{t('contact.venueName')}</p>
                  <p className="text-sm text-muted-foreground">{t('contact.venueLocation')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 section-forest-tint">
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

      {/* CTA Card */}
      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card/95 backdrop-blur rounded-3xl p-12 shadow-floating border border-border text-center">
            <h3 className="text-3xl font-bold text-forest-deep mb-6 font-montserrat">
              Ready to Shape the Future of Conservation?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Mark your calendars and prepare to be part of something extraordinary. Together, we can protect the world's most precious natural heritage for generations to come.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-forest text-lg">
                {t('common.registerNow')}
              </a>
              <Link to={`/${language}/submit`} className="px-8 py-4 border-2 border-forest-primary text-forest-primary font-bold rounded-full hover:bg-forest-primary/10 transition-colors text-lg">
                {t('common.submitInterest')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-16 px-4">
        <CountdownTimer />
      </section>
    </div>
  );
};

export default Contact;
