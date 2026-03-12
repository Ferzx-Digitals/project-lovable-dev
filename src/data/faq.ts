export interface FAQItem {
  question: string;
  answer: string;
  category: 'registration' | 'accommodation' | 'general' | 'payment' | 'sponsorship';
  link?: { text: string; url: string };
}

export const faqItems: FAQItem[] = [
  {
    question: 'How do I register for the Congress?',
    answer: 'Visit the website and navigate to the Registration section. Complete the registration form and proceed with payment via Mercado Pago (Argentina) or PayPal (international).',
    category: 'registration',
    link: { text: 'Register Now', url: '/en/register' },
  },
  {
    question: 'What is the registration cost?',
    answer: '$395 USD per person. Registration is open from 20 February 2026 until 31 March 2027. There is a cap of 75 delegates per region and 150 for the host region, with a total maximum of 600 attendees.',
    category: 'registration',
  },
  {
    question: 'Are there any discounts available?',
    answer: 'No, there is a single standard fee of $395 USD for all participants to ensure fairness and equality.',
    category: 'registration',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Up to 6 months before the congress (October 2026): 80% refund. Up to 4 months before (December 2026): 50% refund. Within 2 months of the congress (February 2027): no refund.',
    category: 'registration',
  },
  {
    question: 'Do I need to be a ranger to attend?',
    answer: 'No. The congress is open to conservation professionals, wildlife experts, researchers, policymakers, NGO representatives, and community members passionate about conservation.',
    category: 'general',
  },
  {
    question: 'How do I apply for a visa to Argentina?',
    answer: 'Check your visa requirements through the Argentine visa portal. Many nationalities can obtain an electronic travel authorization (AVE) online.',
    category: 'general',
  },
  {
    question: 'What languages will be used at the Congress?',
    answer: 'The primary language is English. Simultaneous translation to French and Spanish will be provided during plenary sessions. Volunteer translators may assist during workshops and field trips.',
    category: 'general',
  },
  {
    question: 'Is there funding available for speakers?',
    answer: 'No, there is no dedicated funding for speakers. However, Expressions of Interest forms are available for all delegates seeking funding support. If funding becomes available, it will be distributed fairly and equally, taking into consideration region, gender, Indigenous Peoples and Local Communities (IPLC), and whether the delegate is a speaker.',
    category: 'general',
    link: { text: 'Submit EOI Form', url: 'https://forms.gle/MTJmr4A3Nogk8GhV8' },
  },
  {
    question: 'Can my spouse or partner attend?',
    answer: 'Yes. Spouses and partners pay the same $395 registration fee and take a registration spot.',
    category: 'registration',
  },
  {
    question: 'Where will accommodation be?',
    answer: 'We have partnered with the Amerian Portal del Iguazú Hotel, situated right next to the Iguazú Convention Centre where the congress will take place. Congress participants receive a 13% discount on the daily room rate. The standard rate is USD 130 + VAT per room per night, applicable to single or double rooms. Triple rooms are not available; however, an extra bed can be added at an additional cost of USD 60 + VAT per night. There are also numerous accommodation options available in Puerto Iguazú, ranging from backpacker to 5-star hotels, within walking distance from the Convention Centre.',
    category: 'accommodation',
    link: { text: 'Book Accommodation', url: 'mailto:reservasiguazu@amerian.com' },
  },
  {
    question: 'What activities are available for non-attending spouses?',
    answer: 'Puerto Iguazú and the surrounding area offer a fantastic range of activities and excursions. From visiting the world-famous Iguazú Falls to exploring bird parks, gemstone mines, and historic Jesuit missions, there is plenty to see and do.',
    category: 'accommodation',
    link: { text: 'View Field Trips', url: '/en/program' },
  },
  {
    question: 'Where can I find more information?',
    answer: 'Visit the WRC website, IRF website, and follow us on Facebook, Instagram, LinkedIn, and SIGUNARA social media channels.',
    category: 'general',
  },
  {
    question: 'Are there limitations to registrations?',
    answer: 'Yes. Maximum 600 total attendees, 75 per region, and 150 for the host region (Argentina). Registration is individual and personal, non-transferable.',
    category: 'registration',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Argentina: Mercado Pago (ARS) or bank transfer. International: PayPal (USD). We advise avoiding American Express and Mastercard due to high fees. Bank transfer is recommended for South American delegates.',
    category: 'payment',
  },
  {
    question: 'Can I volunteer at the Congress?',
    answer: 'Yes! We are accepting volunteers, especially multilingual individuals. Contact wrc@internationalrangers.org for more information.',
    category: 'general',
    link: { text: 'Contact Us', url: 'mailto:wrc@internationalrangers.org' },
  },
  {
    question: 'How does sponsorship work?',
    answer: 'Ranger sponsorship helps fund rangers from around the world to attend the congress. Sponsors contribute towards a ranger\'s registration ($395), travel (~$1,000), and accommodation (~$650). If funding becomes available, it is distributed fairly and equally, taking into consideration region, gender, Indigenous Peoples and Local Communities (IPLC), and whether the delegate is a speaker.',
    category: 'sponsorship',
    link: { text: 'Sponsor a Ranger', url: 'https://forms.gle/bYpTj2FcLtTkxsPb9' },
  },
  {
    question: 'Can my partner stay at the hotel without attending the congress?',
    answer: 'Yes. Partners can book accommodation separately at the Amerian Portal del Iguazú Hotel by contacting reservasiguazu@amerian.com.',
    category: 'accommodation',
  },
  {
    question: 'Can my partner attend the congress with me?',
    answer: 'Yes. Your partner pays the same $395 registration fee and can book accommodation together with you.',
    category: 'registration',
  },
  {
    question: 'Can I get a private room?',
    answer: 'Yes. The standard room rate at the Amerian Portal del Iguazú Hotel is USD 130 + VAT per room per night, applicable to single or double occupancy. Book directly at reservasiguazu@amerian.com.',
    category: 'accommodation',
  },
  {
    question: 'Can I attend without staying at the congress hotel?',
    answer: 'Yes. There are numerous accommodation options available in Puerto Iguazú, ranging from backpacker to 5-star hotels, within walking distance from the Convention Centre.',
    category: 'accommodation',
  },
  {
    question: 'Can I stay at alternative accommodation?',
    answer: 'Yes, alternative accommodation is available in Puerto Iguazú within walking distance from the Convention Centre. However, transport and meals would be at your own expense.',
    category: 'accommodation',
  },
  {
    question: 'Who is the IRF?',
    answer: 'The International Ranger Federation is a worldwide, non-profit membership-based organisation established in 1992, representing rangers across 50+ countries on 6 continents and 7 regions.',
    category: 'general',
  },
  {
    question: 'Who is SIGUNARA?',
    answer: 'The Syndicate of National Rangers of Argentina Republic (SIGUNARA), established in 1990, is Argentina\'s National Rangers union recognized by the National Government.',
    category: 'general',
  },
  {
    question: 'What is the best payment method?',
    answer: 'We advise avoiding American Express and Mastercard due to high international fees. Bank transfer is recommended for South American delegates.',
    category: 'payment',
  },
  {
    question: 'Are donation coupons available?',
    answer: 'Donation options are being finalized. Please check back for updates.',
    category: 'payment',
  },
  {
    question: 'What is the World Ranger Congress?',
    answer: 'The WRC is an initiative of the International Ranger Federation, co-hosted with a local ranger association, held every 3-4 years in a different global region.',
    category: 'general',
  },
  {
    question: 'What are the congress details?',
    answer: 'The 11th IRF World Ranger Congress takes place in Puerto Iguazú, Misiones, Argentina from 19-23 April 2027, with up to 600 rangers and conservation professionals.',
    category: 'general',
  },
  {
    question: 'What is the congress theme?',
    answer: '"Recognising Rangers: Advancing the profession to safeguard our future" — focusing on improved working conditions, better equipment and training, and empowering rangers for biodiversity protection.',
    category: 'general',
  },
  {
    question: 'What are the congress objectives?',
    answer: 'Skills development, knowledge sharing, building partnerships, and finding strategic conservation ways through four key pillars: Ranger Recognition & 30x30, Ranger Experiences, Ranger Solutions, and the Ranger Declaration.',
    category: 'general',
  },
  {
    question: 'Is there an investment opportunity?',
    answer: 'Yes. Congress sponsorship tiers are available: Platinum, Gold, Silver, and Bronze. Download the sponsorship prospectus for full details.',
    category: 'sponsorship',
    link: { text: 'Download Prospectus', url: 'https://tinyurl.com/3tpck2mu' },
  },
  {
    question: 'How can I sponsor a ranger?',
    answer: 'Fill out the Sponsor a Ranger form to express your interest. The estimated total cost per ranger is approximately $2,045 (Registration $395, Travel ~$1,000, Accommodation ~$650). Every contribution makes a difference in supporting rangers from underrepresented regions.',
    category: 'sponsorship',
    link: { text: 'Sponsor a Ranger', url: 'https://forms.gle/bYpTj2FcLtTkxsPb9' },
  },
];
