import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MyPhoto from "../assets/GR.png"

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Python Automation Expert",
  "PyQt Desktop App Builder",
  "MERN Stack Developer",
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(90deg, #60A5FA, #3B82F6, #2563EB)',
        }}
      >
        {displayed}
      </span>
      <span
        className="ml-[2px] inline-block w-[3px] h-[0.85em] rounded-sm align-middle"
        style={{
          background: 'linear-gradient(180deg, #60A5FA, #2563EB)',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          verticalAlign: 'middle',
          position: 'relative',
          top: '-1px',
        }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-12 flex flex-col justify-center"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="blue-glow w-[700px] h-[700px] top-0 -right-40" />
      <div className="blue-glow w-[500px] h-[500px] bottom-0 -left-32 opacity-50" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.18 },
                },
              }}
            >
              {/* Greeting */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-base md:text-lg font-medium tracking-widest uppercase mb-3"
                style={{ color: '#60A5FA', letterSpacing: '0.18em' }}
              >
                👋 Hello, World!
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                I'm{' '}
                <motion.span
                  className="inline-block bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 40%, #2563EB 70%, #93C5FD 100%)',
                    backgroundSize: '200% 200%',
                    filter: 'drop-shadow(0 0 22px rgba(59, 130, 246, 0.45))',
                  }}
                >
                  Gulam Robbani
                </motion.span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
                }}
                className="mt-4 text-2xl md:text-3xl font-semibold text-white/90 h-10 flex items-center"
              >
                <TypewriterRole />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
                }}
                className="mt-5 text-base md:text-lg text-soft leading-relaxed max-w-md"
              >
                Building elegant, high-performance digital experiences — from full-stack web apps to Python automation tools and desktop software.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Gulam_Robbani_MERN_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group"
                >
                  Download Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" className="btn-secondary"
                >
                  See My Work
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[460px] md:h-[520px] flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-accent/30 to-accent2/10 blur-2xl" />
            </div>
            <div className="relative w-[340px] h-[440px] md:w-[380px] md:h-[480px]">

              <div className="absolute inset-0 flex items-end justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[460px] md:h-[520px] flex items-center justify-center"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-accent/30 to-accent2/10 blur-2xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 480">
                    <circle cx="190" cy="240" r="180" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
                    <circle cx="190" cy="240" r="160" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
                  </svg>
                  <div className="relative w-[340px] h-[440px] md:w-[380px] md:h-[480px]">
                    <div className="absolute inset-0 flex items-end justify-center">
                      <motion.img
                        src={MyPhoto}
                        alt="Gulam Robbani"
                        className="w-full h-full object-contain object-bottom"
                        style={{
                          WebkitMaskImage:
                            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                          maskImage:
                            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

