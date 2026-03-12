

# Plan: Integrate WRC Full Website Content into Current Save the Date UI

## Understanding

You want to keep the current project's beautiful tropical jungle **look and feel** (parallax hero, forest theme, floating elements, foliage, mist, animations) while bringing in all the **content, pages, and multi-language support** from the WRC site (https://wrc-lake.vercel.app/en/).

**Keep from current project**: Design system (CSS variables, Tailwind config, gradients, animations), HeroSection parallax style, FloatingElements, forest color palette, Poppins/Montserrat fonts, decorative elements.

**Bring from WRC site**: 9 pages of content, navigation header with dropdowns, i18n (EN/ES/FR), team data, FAQ data, congress history, program schedule, travel info, press resources, contact form, countdown timer, organizer/sponsor sections.

## Architecture

```text
src/
├── App.tsx                    # React Router: /:lang/* routes
├── i18n/
│   ├── translations/
│   │   ├── en.ts              # English strings
│   │   ├── es.ts              # Spanish strings
│   │   └── fr.ts              # French strings
│   └── LanguageContext.tsx     # i18n context + useTranslation hook
├── data/
│   ├── team.ts                # Team members (IRF, SIGUNARA, Plan A)
│   ├── faq.ts                 # FAQ items by category
│   ├── congress-history.ts    # Timeline of past congresses
│   └── constants.ts           # Shared constants (dates, links, etc.)
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky nav with logo, nav links, dropdowns, language switcher, Register CTA
│   │   ├── Footer.tsx         # Enhanced from current (keep forest-deep style)
│   │   └── PageLayout.tsx     # Wraps pages with Header + Footer + FloatingElements
│   ├── shared/
│   │   ├── CountdownTimer.tsx  # Live countdown to April 19, 2027
│   │   ├── SectionDivider.tsx  # Nature-themed dividers between sections
│   │   └── PageBanner.tsx      # Reusable hero banner for inner pages (image + title + subtitle)
│   ├── home/                   # Home page sections (enhanced from current)
│   │   ├── HeroSection.tsx     # Keep current parallax (add Register/Learn More CTAs)
│   │   ├── IguazuWelcome.tsx   # Puerto Iguazu welcome section
│   │   ├── RegionsCarousel.tsx # IRF 7 regions
│   │   ├── WelcomeSection.tsx  # Congress welcome + history timeline
│   │   ├── CongressInfo.tsx    # Venue, date, setting cards
│   │   ├── PresidentMessage.tsx# Quote from Chris Galliers
│   │   ├── OrganizersSection.tsx# IRF + SIGUNARA cards
│   │   ├── TeamCarousel.tsx    # Team members carousel
│   │   └── RegisterCTA.tsx     # Bottom call-to-action
│   └── (existing ui/ components stay)
├── pages/
│   ├── Index.tsx               # Home (enhanced with all WRC home sections)
│   ├── About.tsx               # Congress intro, activities, objectives, theme preview
│   ├── FAQ.tsx                 # Searchable FAQ with category tabs
│   ├── Submit.tsx              # Expression of Interest guidelines + form links
│   ├── CongressTheme.tsx       # Thematic streams, objectives, discussion topics
│   ├── Program.tsx             # Schedule overview, activities, field trips
│   ├── Contact.tsx             # Contact form + info cards + map
│   ├── Press.tsx               # Press releases, photo gallery, press FAQs
│   ├── Register.tsx            # Pricing, payment methods, cancellation policy
│   └── Travel.tsx              # Visa, transport, airlines, accommodation
```

## Implementation Phases

### Phase 1: i18n System + Data Layer
- Create `LanguageContext.tsx` with `useTranslation` hook, locale detection from URL (`/:lang/`)
- Create English translation file with all text content from every page
- Create Spanish and French translation files (mirrored structure, fetched from WRC's `/es/` and `/fr/` routes)
- Create data files for team members, FAQ items, congress history timeline
- Create `constants.ts` with shared values (dates, URLs, registration link, email)

### Phase 2: Layout Components
- **Header**: Sticky navbar with WRC logo, nav items (Home, About dropdown [About, Congress Theme], Submit, FAQ, Program, Plan Travel dropdown [Travel, Accommodation], Contact Us, Press), language switcher (EN/ES/FR), green "Register Now" CTA button, mobile hamburger. Styled to match the forest theme (transparent on hero, forest-deep on scroll).
- **Footer**: Enhance current footer with organizer logos grid, social links, quick nav links
- **PageLayout**: Wraps all pages with Header + Footer + FloatingElements
- **PageBanner**: Reusable inner-page hero with background image, title, subtitle, breadcrumb

### Phase 3: Home Page Enhancement
- Keep current HeroSection parallax but add "Register Now" + "Learn More" CTAs
- Add all WRC home sections below hero: IguazuWelcome, RegionsCarousel, WelcomeSection + HistoryTimeline, CongressInfo cards, PresidentMessage, OrganizersSection, TeamCarousel, CountdownTimer, RegisterCTA
- Each section uses the current design language (forest gradients, scroll-triggered animations, floating decorative elements)

### Phase 4: Inner Pages (all 9)
Each page uses `PageLayout` + `PageBanner` + content sections styled with the forest theme:
- **About**: Congress intro, countdown timer, activities grid (Plenary Talks, Workshops, etc.), congress theme preview, president message, objectives cards
- **Congress Theme**: Theme description, 5 thematic streams with images, 4 objectives, 5 discussion topics
- **FAQ**: Search bar, category tabs (All, Registration, Accommodation, General, Payment, Sponsorship), accordion items
- **Submit**: Guidelines, session types, requirements checklist, thematic streams, Google Form links (EN/ES/FR), funding support section
- **Program**: Overview table, detailed day-by-day schedule, activities grid, field trips with cards
- **Contact**: Contact form (Name, Email, Subject dropdown, Message), contact info cards, Google Maps embed
- **Press**: Press conference info, press kit downloads, press releases timeline, photo gallery grid, "Who Are Rangers" section, press FAQs
- **Register**: Pricing card ($395), payment methods, capacity/rules info, cancellation policy table, registration portal link, countdown
- **Travel**: Visa info, transport tabs (Air, Brazil, Bus, Car, Paraguay), airlines logos, accommodation info

### Phase 5: Polish
- Download and reference all images from the WRC site (team photos, congress images, banners, logos, region photos, etc.) using their existing URLs from `wrc-lake.vercel.app`
- Ensure all sections have scroll-triggered reveal animations matching current style
- Mobile responsive for all pages
- SEO meta tags per page

## Design Approach

All new pages and sections will use:
- The existing **forest color palette** (forest-deep, forest-primary, gold-warm, earth-brown, sky-blue)
- **Gradient backgrounds** (forest-gradient, earth-gradient, sky-gradient)
- **Scroll-triggered animations** (IntersectionObserver, animate-fade-up, animate-slide-in-left)
- **Floating decorative elements** (leaves, butterflies emoji overlays)
- **Rounded cards** with backdrop-blur and forest-themed shadows
- **Poppins** for body, **Montserrat** for headings
- Current parallax patterns for visual depth

Images from the WRC site will be referenced directly from `wrc-lake.vercel.app` initially (team photos, banners, gallery, etc.) to avoid downloading hundreds of assets.

## Estimated Scope
- ~15 new components, ~10 new page files, ~3 translation files, ~4 data files
- This is a large implementation that will be done across multiple messages

