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

      {/* Join the Movement */}
      <section className="py-20 px-4 forest-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-forest-light blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gold-warm blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-montserrat">Join the Movement</h2>
            <p className="text-base text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Be part of the global effort to protect our planet's most precious ecosystems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, title: t('contact.getInTouch'), content: <a href={`mailto:${CONTACT_EMAIL}`} className="text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors">{CONTACT_EMAIL}</a> },
                { icon: <MapPin className="w-6 h-6" />, title: t('contact.venueLabel'), content: <><p className="text-base text-primary-foreground/70">{t('contact.venueName')}</p><p className="text-primary-foreground/50 text-sm">{t('contact.venueLocation')}</p></> },
                { icon: <Calendar className="w-6 h-6" />, title: 'When', content: <><p className="text-base text-primary-foreground/70">April 19-23, 2027</p><p className="text-primary-foreground/50 text-sm">Five days of conservation excellence</p></> },
              ].map((item) => (
                <div key={item.title} className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur flex items-center justify-center mr-4 text-primary-foreground">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground mb-1">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur rounded-xl p-6 border border-primary-foreground/10">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground mr-3" />
                <h3 className="text-lg font-bold text-primary-foreground">Event Partners</h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-primary-foreground/10 pb-3">
                  <h4 className="text-base font-semibold text-primary-foreground mb-1">International Ranger Federation</h4>
                  <p className="text-primary-foreground/60 text-sm">Global organization connecting rangers worldwide</p>
                  <a href={IRF_WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold-warm text-xs hover:underline mt-1 inline-block">Visit Website →</a>
                </div>
                <div className="border-b border-primary-foreground/10 pb-3">
                  <h4 className="text-base font-semibold text-primary-foreground mb-1">SIGUNARA</h4>
                  <p className="text-primary-foreground/60 text-sm">Argentine National Parks Rangers Union</p>
                  <a href={SIGUNARA_WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold-warm text-xs hover:underline mt-1 inline-block">Visit Website →</a>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-primary-foreground mb-1">plan.A</h4>
                  <p className="text-primary-foreground/60 text-sm">Event planning and coordination specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Cards */}
      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.fullName')}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.email')}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.subject')}</label>
                  <select value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none text-sm">
                    {(t('contact.subjectOptions') as unknown as string[]).map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('contact.message')}</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 outline-none resize-none text-sm" />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors shadow-forest flex items-center justify-center gap-2 text-sm">
                  <Send className="w-4 h-4" />
                  {t('contact.send')}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('contact.getInTouch')}</h2>
              <div className="space-y-3">
                <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm">
                  <span className="text-xl mb-2 block">📧</span>
                  <h3 className="font-bold text-forest-deep text-sm mb-1">{t('contact.generalInquiries')}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{t('contact.generalInquiriesDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-xs hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm border-l-3 border-l-gold-warm">
                  <span className="text-xl mb-2 block">🤝</span>
                  <h3 className="font-bold text-forest-deep text-sm mb-1">{t('contact.sponsorshipTitle')}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{t('contact.sponsorshipDesc')}</p>
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-xs hover:underline">{CONTACT_EMAIL}</a>
                    <a href={SPONSORSHIP_PROSPECTUS_URL} target="_blank" rel="noopener noreferrer" className="text-forest-primary text-xs font-medium hover:underline flex items-center gap-1">
                      <Download className="w-3 h-3" /> {t('contact.downloadProspectus')}
                    </a>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm">
                  <span className="text-xl mb-2 block">📰</span>
                  <h3 className="font-bold text-forest-deep text-sm mb-1">{t('contact.pressTitle')}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{t('contact.pressDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-xs hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm">
                  <span className="text-xl mb-2 block">📍</span>
                  <h3 className="font-bold text-forest-deep text-sm mb-1">{t('contact.venueLabel')}</h3>
                  <p className="text-foreground/80 text-sm">{t('contact.venueName')}</p>
                  <p className="text-xs text-muted-foreground">{t('contact.venueLocation')}</p>
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
          <div className="rounded-xl overflow-hidden shadow-sm border border-border/50 h-[350px]">
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

      {/* CTA */}
      <section className="py-16 px-4 section-leaf-pattern">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-xl p-10 shadow-sm border border-border/50 text-center">
            <h3 className="text-2xl font-bold text-forest-deep mb-4 font-montserrat">
              Ready to Shape the Future of Conservation?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mark your calendars and prepare to be part of something extraordinary.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-forest">
                {t('common.registerNow')}
              </a>
              <Link to={`/${language}/submit`} className="px-8 py-3 border-2 border-forest-primary text-forest-primary font-bold rounded-full hover:bg-forest-primary/10 transition-colors">
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
