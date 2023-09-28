'use client'
import { useState, useEffect } from 'react';

// Custom hook for tracking media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean|null>(null);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery ;