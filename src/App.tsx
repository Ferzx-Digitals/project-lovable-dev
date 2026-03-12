import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import PageLayout from "@/components/layout/PageLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Submit from "./pages/Submit";
import CongressTheme from "./pages/CongressTheme";
import CongressEvent from "./pages/CongressEvent";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Register from "./pages/Register";
import Travel from "./pages/Travel";
import VenueAccommodation from "./pages/VenueAccommodation";
import TravelFAQs from "./pages/TravelFAQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LanguageRoutes = () => (
  <LanguageProvider>
    <PageLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/congress-event" element={<CongressEvent />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/congress-theme" element={<CongressTheme />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/register" element={<Register />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/venue-accommodation" element={<VenueAccommodation />} />
        <Route path="/travel-faqs" element={<TravelFAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          {/* Bare path redirects for direct URL access */}
          <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
          <Route path="/about" element={<Navigate to="/en/about" replace />} />
          <Route path="/faq" element={<Navigate to="/en/faq" replace />} />
          <Route path="/submit" element={<Navigate to="/en/submit" replace />} />
          <Route path="/congress-theme" element={<Navigate to="/en/congress-theme" replace />} />
          <Route path="/congress-event" element={<Navigate to="/en/congress-event" replace />} />
          <Route path="/program" element={<Navigate to="/en/program" replace />} />
          <Route path="/press" element={<Navigate to="/en/press" replace />} />
          <Route path="/register" element={<Navigate to="/en/register" replace />} />
          <Route path="/travel" element={<Navigate to="/en/travel" replace />} />
          <Route path="/venue-accommodation" element={<Navigate to="/en/venue-accommodation" replace />} />
          <Route path="/travel-faqs" element={<Navigate to="/en/travel-faqs" replace />} />
          <Route path="/:lang/*" element={<LanguageRoutes />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
