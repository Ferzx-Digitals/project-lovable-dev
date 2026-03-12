import { useEffect, useState } from 'react';
import floatingElements from '@/assets/floating-elements.png';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random floating elements
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 20 + Math.random() * 40,
          duration: 8 + Math.random() * 12,
          delay: Math.random() * 5
        });
      }
      setElements(newElements);
    };

    generateElements();
    
    // Regenerate on window resize
    const handleResize = () => generateElements();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute float-leaves opacity-30"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${floatingElements})`,
              filter: 'hue-rotate(120deg)',
            }}
          />
        </div>
      ))}
      
      {/* Additional individual leaf elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 opacity-20 float-gentle" style={{ animationDelay: '1s' }}>
        🍃
      </div>
      <div className="absolute top-1/3 right-20 w-6 h-6 opacity-20 float-gentle" style={{ animationDelay: '3s' }}>
        🦋
      </div>
      <div className="absolute top-2/3 left-1/4 w-10 h-10 opacity-15 float-gentle" style={{ animationDelay: '2s' }}>
        🍃
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-7 h-7 opacity-20 float-gentle" style={{ animationDelay: '4s' }}>
        🦋
      </div>
    </div>
  );
};

export default FloatingElements;