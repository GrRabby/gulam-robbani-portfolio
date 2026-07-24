import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { getLenis } from '../hooks/useLenis';
import { BrandIcon } from './TechStack';
import {
    siReact,
    siNextdotjs,
    siTypescript,
    siJavascript,
    siPython,
    siHtml5,
    siCss,
    siTailwindcss,
    siDaisyui,
    siGreensock,
    siFramer,
    siNodedotjs,
    siExpress,
    siMongodb,
    siMysql,
    siPandas,
    siQt,
    siDocker,
    siVercel,
    siFigma,
    siGit,
    siGithub,
    siVite,
    siStripe,
    siSqlite,
    siSelenium,
} from 'simple-icons';
const lenisIcon = {
    title: 'Lenis',
    hex: '3B82F6',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9h8v2H8v-2z',
};
const vbaIcon = {
    title: 'VBA',
    hex: 'A4373A',
    path: 'M8.5 4l3.5 14h-2L8 8 6 18H4L7.5 4h1zM18 4l-2 7-2-7h-2l3 10v4h2v-4l3-10h-2z',
};
const excelIcon = {
    title: 'Excel',
    hex: '21A366',
    path: 'M2.86 2.04A1 1 0 0 0 2 3.03v17.94a1 1 0 0 0 .86.99l11 1.5a1 1 0 0 0 1.14-.99V2.53A1 1 0 0 0 13.86 1.54l-11 .5zM16 4v2h2v3h-2v2h2v3h-2v2h2v3h-2v2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5zm-9.5 4.5h2L10 11l1.5-2.5h2L11 12l2.5 3.5h-2L10 13l-1.5 2.5h-2L9 12 6.5 8.5z',
};
const awsIcon = {
    title: 'AWS',
    hex: 'FF9900',
    path: 'M6.76 10.06c0 .35.04.63.1.84.07.21.16.43.29.68.05.07.07.14.07.21 0 .09-.06.18-.18.27l-.59.39a.45.45 0 0 1-.25.09c-.1 0-.2-.05-.3-.14a3.1 3.1 0 0 1-.36-.47 7.7 7.7 0 0 1-.31-.59c-.73.86-1.65 1.29-2.76 1.29-.79 0-1.42-.23-1.88-.68-.46-.45-.7-1.06-.7-1.81 0-.8.28-1.45.85-1.94.57-.49 1.33-.73 2.3-.73.32 0 .65.03.99.08.34.05.7.13 1.07.22V7.1c0-.71-.15-1.21-.44-1.5-.3-.29-.81-.43-1.54-.43-.33 0-.67.04-1.02.12-.35.08-.69.18-1.02.31a2.71 2.71 0 0 1-.33.12.58.58 0 0 1-.15.03c-.13 0-.2-.09-.2-.29v-.46c0-.15.02-.27.07-.34.05-.07.14-.14.28-.21.33-.17.73-.31 1.19-.42a5.73 5.73 0 0 1 1.47-.18c1.12 0 1.94.25 2.47.76.52.51.79 1.28.79 2.31v3.04zm-3.81 1.43c.31 0 .63-.06.97-.17.34-.11.64-.32.9-.6.15-.18.27-.38.32-.6.06-.22.09-.49.09-.81v-.39a7.78 7.78 0 0 0-.85-.16 6.96 6.96 0 0 0-.87-.05c-.62 0-1.07.12-1.37.37-.3.25-.45.6-.45 1.06 0 .43.11.75.34.96.22.22.55.32.97.32zm7.54 1.02c-.17 0-.28-.03-.36-.09-.07-.06-.14-.18-.19-.36L7.78 4.74a1.62 1.62 0 0 1-.08-.37c0-.15.07-.23.22-.23h.92c.18 0 .3.03.37.09.07.06.13.18.18.36l1.55 6.12 1.45-6.12c.04-.18.1-.3.17-.36.07-.06.2-.09.37-.09h.75c.18 0 .3.03.37.09.07.06.13.18.17.36l1.46 6.2 1.6-6.2a.83.83 0 0 1 .18-.36c.07-.06.19-.09.37-.09h.87c.15 0 .23.07.23.23 0 .05-.01.1-.02.16-.01.06-.03.14-.07.25l-2.23 7.32c-.05.18-.11.3-.18.36-.07.06-.2.09-.37.09h-.81c-.18 0-.3-.03-.37-.09-.07-.06-.13-.18-.17-.37l-1.44-5.97-1.43 5.96c-.04.18-.1.3-.17.37-.07.06-.2.09-.37.09zm12.04.25c-.46 0-.91-.05-1.35-.16-.44-.11-.78-.23-1.01-.36-.14-.08-.24-.17-.27-.25a.65.65 0 0 1-.05-.25v-.48c0-.2.07-.29.21-.29.06 0 .11.01.17.03.06.02.15.06.25.1.34.15.71.27 1.1.35.4.08.79.12 1.19.12.63 0 1.12-.11 1.46-.33.34-.22.51-.54.51-.95 0-.28-.09-.51-.27-.7-.18-.19-.52-.36-1-.51l-1.43-.45c-.72-.23-1.25-.57-1.58-1.02a2.38 2.38 0 0 1-.5-1.45c0-.42.09-.79.27-1.11.18-.32.42-.6.72-.82.3-.23.64-.4 1.04-.52.4-.12.82-.17 1.26-.17.22 0 .45.01.67.04.23.03.44.07.65.11.2.05.39.1.57.16.18.06.32.12.42.18.14.08.24.16.3.25.06.08.09.19.09.33v.44c0 .2-.07.3-.21.3-.07 0-.2-.04-.36-.11a4.34 4.34 0 0 0-1.83-.37c-.58 0-1.03.09-1.35.28-.32.19-.48.48-.48.89 0 .28.1.51.3.7.2.19.57.38 1.09.55l1.4.44c.71.23 1.22.55 1.53.96.31.41.46.88.46 1.4 0 .43-.09.81-.26 1.15-.18.34-.42.63-.73.86-.31.24-.68.42-1.11.54-.45.13-.92.19-1.43.19z',
};
export const rechartsIcon = {
    title: "Recharts",
    hex: "8884D8",
    path: "M3 18h18v2H1V4h2v14zm3-2h2V9H6v7zm5 0h2V5h-2v11zm5 0h2v-4h-2v4z",
};
export const betterAuthIcon = {
    title: "Better Auth",
    hex: "000000",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
};
export const framerMotionIcon = {
    title: "Framer Motion",
    hex: "0055FF",
    path: "M14.5 0H24L9.5 24H0L14.5 0ZM14.5 12H24L9.5 24H0L14.5 12ZM24 0H14.5L0 24H9.5L24 0Z",
};
export const mongooseIcon = {
    title: "Mongoose",
    hex: "880000",
    path: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.8c4 0 7.2 3.2 7.2 7.2s-3.2 7.2-7.2 7.2-7.2-3.2-7.2-7.2 3.2-7.2 7.2-7.2z",
};
export const grokIcon = {
    title: "Grok",
    hex: "000000",
    path: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.8c4 0 7.2 3.2 7.2 7.2s-3.2 7.2-7.2 7.2-7.2-3.2-7.2-7.2 3.2-7.2 7.2-7.2z",
};
export const tech_stack_icons = {
    React: siReact,
    "Next.js": siNextdotjs,
    TypeScript: siTypescript,
    JavaScript: siJavascript,
    Python: siPython,
    HTML5: siHtml5,
    CSS: siCss,
    "Tailwind CSS": siTailwindcss,
    DaisyUI: siDaisyui,
    GSAP: siGreensock,
    "framer-motion": siFramer,
    Lenis: lenisIcon,
    "Node.js": siNodedotjs,
    Express: siExpress,
    MongoDB: siMongodb,
    MySQL: siMysql,
    Pandas: siPandas,
    PyQt: siQt,
    Excel: excelIcon,
    VBA: vbaIcon,
    Docker: siDocker,
    AWS: awsIcon,
    Vercel: siVercel,
    Figma: siFigma,
    Git: siGit,
    GitHub: siGithub,
    Vite: siVite,
    Recharts: rechartsIcon,
    'Better Auth': betterAuthIcon,
    Mongoose: mongooseIcon,
    Stripe: siStripe,
    SQLite: siSqlite,
    Selenium: siSelenium,
    Asyncio: siPython,
    aiomysql: siMysql,
    'Grok AI': grokIcon,
};
const projects = [
    {
        category: 'Full-Stack Web Application',
        name: 'GymCraft',
        url: "https://gym-craft-client.vercel.app/",
        imageUrl: "https://github.com/user-attachments/assets/67af0e91-a303-49d5-8d4b-968711c10b53",
        desc: 'A production-grade gym & fitness management platform with role-based dashboards, Stripe-powered class booking, a community forum, and rich platform analytics.',
        techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Better Auth', 'framer-motion', 'Recharts', 'Mongoose', 'Stripe'],
        githubClient: 'https://github.com/GrRabby/gym-craft-client',
        challenges: 'Handling real-time availability and complex booking state across multiple users concurrently.',
        improvements: 'Implementing a AI assistant to suggest a class based on users interest and fitness level.',
        logo: "/GymCraftLogo.png"
    },
    {
        category: 'Desktop Application',
        name: 'Bizom Automizer',
        url: "https://drive.google.com/file/d/1ZDKXlBnZ3ijVwe2yr8_Kb2a_MvsHsufm/view",
        imageUrl: "/Bizom.png",
        desc: "𝐁𝐢𝐳𝐨𝐦 𝐀𝐮𝐭𝐨𝐦𝐢𝐳𝐞𝐫 is a desktop software designed to enhance the operational workflow of the retail intelligence platform Bizom.",
        techStack: ['Python', 'PyQt', 'MySQL', 'SQLite', 'Pandas', 'Selenium', 'Asyncio', 'aiomysql'],
        githubClient: null,
        challenges: 'Calling the backend APIs to fetch the data, posting updates to the backend APIs with matching payload structure and ensuring the UI remains responsive during long-running automation tasks.',
        improvements: 'Extending support for more custom workflows.',
        logo: "/BizomLogo.png"
    },
    {
        category: 'Full-Stack Web Application',
        name: 'CarFleet',
        url: "https://car-fleet-rho.vercel.app/",
        imageUrl: "https://github.com/user-attachments/assets/ef57c7be-8378-461c-a843-a53aac750fba",
        desc: 'A modern, full-stack car rental marketplace where users can browse, book, and list vehicles for rent. Built with a cockpit-inspired UI featuring molded buttons, telemetry-style readouts, and a premium automotive aesthetic.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Better Auth', 'framer-motion', 'Mongoose', 'Stripe'],
        githubClient: 'https://github.com/GrRabby/car-fleet',
        challenges: 'Optimizing image loading for vehicle galleries and managing complex authentication flows.',
        improvements: 'Adding GraphQL for more efficient data fetching and integrating a CI/CD pipeline.',
        logo: "/CarFleetLogo.png"
    },
    {
        title: 'PlantPal',
        category: 'Full-Stack Web Application',
        name: 'PlantPal',
        url: "https://plantpal-inky.vercel.app/",
        imageUrl: "https://github.com/user-attachments/assets/ebf95222-a6d0-4e31-bbb5-c4141c7523f7",
        desc: 'A modern plant marketplace and plant management platform built with Next.js, TypeScript, and Tailwind CSS. PlantPal allows users to discover plants, filter by categories, browse detailed information, and manage their plant collection through a clean and responsive interface.',
        techStack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Grok AI', 'MongoDB', 'Express', 'Tailwind CSS', 'Better Auth', 'framer-motion', 'Recharts', 'Mongoose'],
        githubClient: 'https://github.com/GrRabby/plantpal',
        challenges: 'Implementing Grok AI to recognise plants from user uploaded images',
        improvements: 'Adding backend support to save user preferences and a wider variety of plant data.',
        logo: "/PlantPalLogo.png"
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        const lenis = getLenis();
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = 'unset';
            if (lenis) lenis.start();
        }
        return () => {
            document.body.style.overflow = 'unset';
            if (lenis) lenis.start();
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="px-6 md:px-12 py-20 md:py-28 relative">
            <SectionHeader
                title="Recent Projects"
                description="A curated mix of projects — scalable, fast, and future-ready — blending design, code, and creativity."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        onClick={() => setSelectedProject(p)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="card overflow-hidden group hover:border-accent/40 transition-all duration-500 block cursor-pointer"
                    >
                        <div className="relative bg-cover bg-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-accent2/40 via-accent/20 to-bg2 border-b border-border max-h-60 min-h-60"
                            style={{
                                backgroundImage: `url(${p.imageUrl})`,
                            }}>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg/60 to-transparent" />
                        </div>

                        <div className="p-5">
                            <div className="text-xs text-muted mb-2">{p.category}</div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-sm text-soft leading-relaxed line-clamp-3">{p.desc}</p>
                            <div className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="card-solid w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                            data-lenis-prevent="true"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-accent transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <div className="relative w-full h-48 md:h-72 bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${selectedProject.imageUrl})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                                <div className="absolute bottom-0 left-6 md:left-8 translate-y-1/2">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#1d293f]/60 flex items-center justify-center border border-white/20">
                                        <img src={selectedProject.logo} className="w-full h-full object-contain" alt={selectedProject.name} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col gap-8 mt-6">
                                <div>
                                    <div className="text-sm text-accent font-medium mb-2 uppercase tracking-widest">{selectedProject.category}</div>
                                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">{selectedProject.name}</h2>
                                </div>

                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <p className="text-soft leading-relaxed text-sm md:text-base">{selectedProject.desc}</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-white/90 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack?.map((tech, idx) =>
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.025, ease: [0.16, 1, 0.3, 1] }}
                                                whileHover={{ y: -3, transition: { delay: 0 } }}
                                                className="tech-pill group cursor-default flex items-center gap-1"
                                            >
                                                <BrandIcon icon={tech_stack_icons[tech]} name={tech} />
                                                <span className="text-sm">{tech}</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                                        <h4 className="text-lg font-semibold mb-3 text-red-300 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                            Challenges
                                        </h4>
                                        <p className="text-soft text-sm leading-relaxed">{selectedProject.challenges}</p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/10">
                                        <h4 className="text-lg font-semibold mb-3 text-green-300 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
                                            Future Improvements
                                        </h4>
                                        <p className="text-soft text-sm leading-relaxed">{selectedProject.improvements}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-2 pt-6 border-t border-white/10">
                                    <a href={selectedProject.url} target="_blank" rel="noreferrer" className="btn-primary">
                                        Live Project
                                    </a>
                                    {
                                        selectedProject.githubClient && (
                                            <a href={selectedProject.githubClient} target="_blank" rel="noreferrer" className="btn-secondary">
                                                GitHub Client
                                            </a>
                                        )
                                    }

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
