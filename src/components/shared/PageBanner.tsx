import forestBackground from '@/assets/forest-background.jpg';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage || forestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-forest-deep/70 via-forest-deep/50 to-forest-deep/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <h1
          className="text-4xl md:text-6xl font-bold font-montserrat mb-4"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary-foreground)), hsl(var(--gold-warm)))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default PageBanner;
