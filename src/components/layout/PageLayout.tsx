import { ReactNode } from 'react';
import Header from './Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
