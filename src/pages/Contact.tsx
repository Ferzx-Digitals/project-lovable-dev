import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONTACT_EMAIL, SPONSORSHIP_PROSPECTUS_URL, REGISTRATION_URL } from '@/data/constants';
import { Link } from 'react-router-dom';

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

      <section className="py-16 px-4">
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
                <button type="submit" className="w-full px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors">
                  {t('contact.send')}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-forest-deep mb-6">{t('contact.getInTouch')}</h2>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.emailLabel')}</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.venueLabel')}</h3>
                  <p className="text-foreground/80">{t('contact.venueName')}</p>
                  <p className="text-sm text-muted-foreground">{t('contact.venueLocation')}</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.generalInquiries')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.generalInquiriesDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <span className="text-2xl mb-2 block">🤝</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.sponsorshipTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.sponsorshipDesc')}</p>
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                    <a href={SPONSORSHIP_PROSPECTUS_URL} target="_blank" rel="noopener noreferrer" className="text-forest-primary text-sm font-medium hover:underline">{t('contact.downloadProspectus')}</a>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <span className="text-2xl mb-2 block">📰</span>
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.pressTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.pressDesc')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary text-sm hover:underline">{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>
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

      {/* Countdown + CTAs */}
      <section className="py-16 px-4">
        <CountdownTimer />
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-forest-primary text-primary-foreground font-bold rounded-full hover:bg-forest-deep transition-colors shadow-lg text-center">
            {t('common.registerNow')}
          </a>
          <Link to={`/${language}/submit`} className="px-8 py-3 border-2 border-forest-primary text-forest-primary font-bold rounded-full hover:bg-forest-primary/10 transition-colors text-center">
            {t('common.submitInterest')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
