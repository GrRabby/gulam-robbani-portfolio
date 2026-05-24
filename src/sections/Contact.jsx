import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactMethods = [
  {
    label: 'Email',
    value: 'grrabby9@gmail.com',
    href: 'mailto:grrabby9@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+880 1624-695215',
    href: 'tel:+8801XXXXXXXXX',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Sylhet, Bangladesh',
    href: 'https://maps.app.goo.gl/McVRQDR6CuaokpPw7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const socials = [
  {
    name: 'GitHub',
    handle: '@grrabby9',
    href: 'https://github.com/GrRabby',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: '/in/gulam-robbani',
    href: 'https://www.linkedin.com/in/gulam-robbani/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: '/grrabby9',
    href: 'https://www.facebook.com/gr.rabby.599952',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="contact" className="px-6 md:px-12 py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Top CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 border border-accent/30"
          style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 40%, #2563EB 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="ctaGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="100,0 400,0 400,300 200,300" fill="url(#ctaGrad)" />
              <polygon points="200,0 400,0 400,200 300,300 100,300" fill="url(#ctaGrad)" opacity="0.5" />
            </svg>
          </div>
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accentLight/30 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
              Your vision, my expertise. Let's create something{' '}
              <span className="text-accentLight">exceptional.</span>
            </h2>
            <p className="text-soft text-base md:text-lg mb-8 max-w-lg">
              Ready to start? Reach out through any of the channels below.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowContact(!showContact)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-bg font-medium text-sm hover:bg-bg2 hover:text-white transition-all duration-300"
              >
                {showContact ? 'Hide details' : 'Book a call'}
                <motion.span
                  animate={{ rotate: showContact ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  ↓
                </motion.span>
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence initial={false}>
          {showContact && (
            <motion.div
              key="contact-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {contactMethods.map((m, i) => (
                  <motion.a
                    key={m.label}
                    href={m.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="card p-6 group hover:border-accent/40 transition-all duration-500 flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(15,23,41,0.3))',
                        border: '1px solid rgba(59,130,246,0.25)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                      }}
                    >
                      {m.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted uppercase tracking-widest font-mono mb-1">
                        {m.label}
                      </div>
                      <div className="text-sm font-medium truncate group-hover:text-accent transition-colors">
                        {m.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="card p-7 md:p-8 mt-5"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Find me elsewhere</h3>
                  <span className="text-xs text-muted font-mono">0{socials.length}</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.45 + i * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(15,23,41,0.3))',
                        border: '1px solid rgba(59,130,246,0.15)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                      }}
                    >
                      <div className="w-11 h-11 rounded-full flex items-center justify-center text-soft group-hover:text-accent group-hover:bg-accent/10 transition-all">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-accent transition-colors">
                          {s.name}
                        </div>
                        <div className="text-xs text-muted mt-0.5 truncate">
                          {s.handle}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}