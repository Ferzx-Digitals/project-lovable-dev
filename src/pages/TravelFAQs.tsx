import { useState } from 'react';
import PageBanner from '@/components/shared/PageBanner';
import { useTranslation } from '@/i18n/LanguageContext';
import { faqItems } from '@/data/faq';
import { ChevronDown, Search } from 'lucide-react';
import { CONTACT_EMAIL } from '@/data/constants';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const travelCategories = ['all', 'accommodation', 'general'] as const;

const TravelFAQs = () => {
  const { t, language } = useTranslation();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const travelFaqItems = faqItems.filter(
    (item) => item.category === 'accommodation' || item.category === 'general'
  );

  const categoryLabels: Record<string, string> = {
    all: t('faq.allQuestions'),
    accommodation: t('faq.accommodation'),
    general: t('faq.general'),
  };

  const filtered = travelFaqItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = !search || item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageBanner title={t('travelFAQs.banner')} subtitle={t('travelFAQs.bannerSub')} backgroundImage="https://wrc-lake.vercel.app/images/titles/travel.jpg" />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-forest-primary/30 focus:border-forest-primary outline-none transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {travelCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === cat
                    ? 'bg-forest-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-forest-primary/10'
                )}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{item.question}</span>
                    <ChevronDown className={cn('w-5 h-5 text-muted-foreground shrink-0 transition-transform', openIndex === i && 'rotate-180')} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                      <p>{item.answer}</p>
                      {item.link && (
                        <a href={item.link.url} className="inline-block mt-3 text-forest-primary font-medium hover:underline">{item.link.text} →</a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground font-medium">{t('faq.noResults')}</p>
              <p className="text-muted-foreground text-sm mt-1">{t('faq.noResultsSub')}</p>
            </div>
          )}

          {/* Still have questions */}
          <div className="mt-16 text-center bg-forest-mist/20 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-forest-deep mb-2">{t('faq.stillHaveQuestions')}</h3>
            <p className="text-muted-foreground mb-6">{t('faq.stillHaveQuestionsSub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/${language}/contact`} className="px-6 py-3 bg-forest-primary text-primary-foreground rounded-full font-semibold hover:bg-forest-deep transition-colors">
                {t('faq.contactUs')}
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="px-6 py-3 border-2 border-forest-primary text-forest-primary rounded-full font-semibold hover:bg-forest-primary/10 transition-colors">
                {t('faq.emailUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelFAQs;
