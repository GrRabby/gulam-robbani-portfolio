import { useCallback } from 'react';
import { getLenis } from './useLenis';

export default function useSmoothScroll() {
  return useCallback((e, href) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    if (!href || !href.startsWith('#')) return;

    const id = href.slice(1);
    if (!id || id === 'top') {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      history.replaceState(null, '', window.location.pathname);
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.4,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    history.replaceState(null, '', href);
  }, []);
}