import { useState, useEffect } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import { CONGRESS_DATE } from '@/data/constants';

interface CountdownTimerProps {
  showTitle?: boolean;
  className?: string;
}

const CountdownTimer = ({ showTitle = true, className = '' }: CountdownTimerProps) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = CONGRESS_DATE.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: t('countdown.days') },
    { value: timeLeft.hours, label: t('countdown.hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds') },
  ];

  return (
    <div className={`text-center ${className}`}>
      {showTitle && (
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-forest-deep mb-8">
          {t('countdown.title')}
        </h2>
      )}
      <div className="flex items-center justify-center gap-3 md:gap-6">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-forest-deep/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-forest-primary/20">
                <span className="text-2xl md:text-4xl font-bold text-gold-warm font-montserrat">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm text-earth-brown mt-2 font-medium uppercase tracking-wide">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="text-2xl md:text-4xl font-bold text-forest-primary/40 -mt-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
