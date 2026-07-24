import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useLenis from './hooks/useLenis';
import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import FAQs from './sections/FAQs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Cursor from './components/Cursor';
import BackToTop from './components/BackToTop';

function Loader({ onDone }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let p = 0;
        const id = setInterval(() => {
            p += Math.random() * 18;
            if (p >= 100) {
                p = 100;
                clearInterval(id);
                setTimeout(onDone, 400);
            }
            setProgress(Math.floor(p));
        }, 80);
        return () => clearInterval(id);
    }, [onDone]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-bg flex flex-col"
        >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="blue-glow w-[600px] h-[600px] top-1/3 left-1/2 -translate-x-1/2" />

            <div className="relative flex-1 flex items-center justify-center px-6">
                <div className="text-center">
                    <div className="status-pill mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                        Loading portfolio
                    </div>
                    <div className="font-bold text-[18vw] md:text-[12vw] tracking-[-0.05em] leading-none tabular-nums">
                        {String(progress).padStart(3, '0')}<span className="text-accent">%</span>
                    </div>
                </div>
            </div>

            <div className="relative px-6 md:px-12 pb-6">
                <div className="h-px bg-border relative overflow-hidden mb-3">
                    <motion.div
                        animate={{ scaleX: progress / 100 }}
                        transition={{ duration: 0.2, ease: 'linear' }}
                        className="absolute inset-0 bg-accent origin-left"
                        style={{ boxShadow: '0 0 10px #3B82F6' }}
                    />
                </div>
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
                    <span>Gulam Robbani — Portfolio 2026</span>
                    <span>v3.0.0</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function App() {
    const [loading, setLoading] = useState(true);
    useLenis();

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
            </AnimatePresence>



            <main className="relative">
                <Cursor />
                <NavBar />
                <Hero />
                <About />
                <TechStack />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <FAQs />
                <Contact />
                <BackToTop />
            </main>

            <Footer />
        </>
    );
}
