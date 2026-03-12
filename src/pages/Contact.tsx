import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONTACT_EMAIL, SPONSORSHIP_PROSPECTUS_URL } from '@/data/constants';

const Contact = () => {
  const { t } = useTranslation();
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
              <h2 className="text-2xl font-bold text-forest-deep mb-6">{t('contact.formTitle')}</h2>
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
              <h2 className="text-2xl font-bold text-forest-deep mb-6">{t('contact.getInTouch')}</h2>
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="font-bold text-forest-deep">{t('contact.emailLabel')}</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest-primary hover:underline">{CONTACT_EMAIL}</a>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="font-bold text-forest-deep">{t('contact.venueLabel')}</h3>
                  <p className="text-foreground/80">{t('contact.venueName')}</p>
                  <p className="text-sm text-muted-foreground">{t('contact.venueLocation')}</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.generalInquiries')}</h3>
                  <p className="text-sm text-muted-foreground">{t('contact.generalInquiriesDesc')}</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-forest-deep mb-1">{t('contact.sponsorshipTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t('contact.sponsorshipDesc')}</p>
                  <a href={SPONSORSHIP_PROSPECTUS_URL} target="_blank" rel="noopener noreferrer" className="text-forest-primary text-sm font-medium hover:underline">{t('contact.downloadProspectus')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-forest-mist/20">
        <CountdownTimer />
      </section>
    </div>
  );
};

export default Contact;
