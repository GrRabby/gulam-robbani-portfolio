import { motion } from 'framer-motion';

const footerLinks = ['Home', 'About', 'Skills', 'FAQs', 'Contact'];
const socials = [
  { l: 'in', name: 'LinkedIn', link : "https://www.linkedin.com/in/gulam-robbani/" },
  { l: 'f', name: 'Facebook', link : "https://www.facebook.com/gr.rabby.599952" },
  { l: 'Git', name: 'GitHub', link : "https://github.com/GrRabby" },
  { l: '@', name: 'Email', link : "mailto:grrabby9@gmail.com" },
];
const legal = ['Privacy Policy', 'Terms of Use', 'Cookies', 'License'];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-64 rounded-[50%] bg-accent/10 blur-3xl pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-12 mb-12 relative"
      >
        <div
          className="font-bold leading-[0.85] tracking-[-0.06em] text-8xl text-center select-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(59, 130, 246, 0.6) 60%, rgba(59, 130, 246, 0.1) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          GULAM ROBBANI
        </div>
      </motion.div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 order-2 md:order-1">
            {footerLinks.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-soft hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 order-1 md:order-2">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.link}
                aria-label={s.name}
                className="w-10 h-10 rounded-full flex items-center justify-center text-soft hover:border-accent hover:text-accent transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(15,23,41,0.3))',
                  border: '1px solid rgba(59,130,246,0.18)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                }}
              >
                <span className="text-sm">{s.l}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-muted">
          <div>© 2026 Gulam Robbani. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {legal.map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
