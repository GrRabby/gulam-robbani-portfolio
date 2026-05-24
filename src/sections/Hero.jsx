import { motion } from 'framer-motion';
import MyPhoto from "../assets/GR.png"

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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
            >
              Hi! I'm <br></br><span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #93C5FD 0%, #3B82F6 50%, #2563EB 100%)',
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
                }}
              >
                Gulam Robbani
              </span>,<br></br> <span className="font-semi-bold">Building Digital Experiences.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 text-base md:text-lg text-soft leading-relaxed max-w-md"
            >
              MERN Full-Stack Developer (React, Node.js, MongoDB) | Python Automation Engineer | PyQt Desktop Applications | REST API Integration & Automation Tool | Python | JavaScript(ES6+) | Entrepreneur
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="#projects" className="btn-secondary">
                See My Work
              </a>
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
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 480">
                <circle cx="190" cy="240" r="180" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
                <circle cx="190" cy="240" r="160" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 flex items-end justify-center">
                <img src={MyPhoto} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
