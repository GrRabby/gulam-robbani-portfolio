import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSmoothScroll from '../hooks/useSmoothScroll';
const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stak', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'FAQs', href: '#faqs' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-3"
    >
      <div
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 rounded-full p-1.5 sm:p-2 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border border-borderLight shadow-2xl shadow-accent/10'
            : 'bg-surface/60 backdrop-blur-md border border-border'
        }`}
      >
        <a
          href="#top"
          onClick={(e) => smoothScroll(e, '#top')}
          className="hidden lg:flex items-center gap-2 px-3 group whitespace-nowrap"
        >
          <span
            className="font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #93C5FD 0%, #3B82F6 50%, #2563EB 100%)',
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
            }}
          >
            Gulam Robbani
          </span>
        </a>
        <div className="flex items-center gap-0.5 sm:gap-1 mx-1 sm:mx-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-soft hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => smoothScroll(e, "#contact")}
          className="btn-primary !py-1.5 sm:!py-2 !px-3 sm:!px-4 !text-xs sm:!text-sm whitespace-nowrap"
        >
          Book a call
        </a>
      </div>
    </motion.nav>
  );
}