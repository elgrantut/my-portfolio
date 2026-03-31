import { useCallback } from 'react';

export function useScrollTo() {
  const scrollTo = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
}
