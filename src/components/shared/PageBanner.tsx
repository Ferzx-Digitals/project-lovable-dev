import forestBackground from '@/assets/forest-background.jpg';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-forest-deep/80 via-forest-deep/60 to-forest-deep/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-4 text-gold-warm">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
