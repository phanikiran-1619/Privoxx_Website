import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export const useScrollTracking = () => {
  const lastTrackedDepth = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depth at 25%, 50%, 75%, and 100%
      const trackingPoints = [25, 50, 75, 100];
      
      trackingPoints.forEach(point => {
        if (scrollPercent >= point && lastTrackedDepth.current < point) {
          trackScrollDepth(point);
          lastTrackedDepth.current = point;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}; 