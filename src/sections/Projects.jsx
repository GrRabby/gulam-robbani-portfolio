import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    category: 'Full-Stack Web Application',
    name: 'CarFleet',
    url : "https://gym-craft-client.vercel.app/",
    imageUrl : "https://private-user-images.githubusercontent.com/183578993/619000552-67af0e91-a303-49d5-8d4b-968711c10b53.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQ4NTUzMjAsIm5iZiI6MTc4NDg1NTAyMCwicGF0aCI6Ii8xODM1Nzg5OTMvNjE5MDAwNTUyLTY3YWYwZTkxLWEzMDMtNDlkNS04ZDRiLTk2ODcxMWMxMGI1My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcyNFQwMTAzNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2ViYWE0NWVhMzE2NDAzNmIxMTViMmI0NDc3NjY5NzFmOWRhYTM3M2VhODVlYTkyOGIyYzQ3YWQ4NzdlMWI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.NIMAhmqJDThpiBPxdBqojHBqDchaBqCo71vxig06060",
    desc: 'A modern, full-stack car rental marketplace where users can browse, book, and list vehicles for rent. Built with a cockpit-inspired UI featuring molded buttons, telemetry-style readouts, and a premium automotive aesthetic.',
  },
  {
    category: 'SaaS Landing Page',
    name: 'CarFleet',
    url : "https://car-fleet-rho.vercel.app/",
    imageUrl : "https://github.com/user-attachments/assets/ef57c7be-8378-461c-a843-a53aac750fba",
    desc: 'A modern, full-stack car rental marketplace where users can browse, book, and list vehicles for rent. Built with a cockpit-inspired UI featuring molded buttons, telemetry-style readouts, and a premium automotive aesthetic.',
  },
    {   
    category: 'Desktop Application',
    name: 'Bizom Automizer',
    url : "https://drive.google.com/file/d/1ZDKXlBnZ3ijVwe2yr8_Kb2a_MvsHsufm/view",
    imageUrl : "/Bizom.png",
    desc: "𝐁𝐢𝐳𝐨𝐦 𝐀𝐮𝐭𝐨𝐦𝐢𝐳𝐞𝐫 is a desktop software designed to enhance the operational workflow of the retail intelligence platform Bizom.",
  },
  {
    title: 'Tech Wave',
    category: 'SaaS Landing Page',
    name: 'Tech Wave',
    url : "https://grrabby.github.io/PH-Assignment-2/",
    imageUrl: "https://github.com/user-attachments/assets/27de147a-cdec-4e62-a684-7f24992cd5b3",
    desc: 'A web-based project built as part of Programming Hero Assignment 2.This project demonstrates practical implementation of modern web development concepts including UI design, responsiveness, and JavaScript functionality.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Recent Projects"
        description="A curated mix of projects — scalable, fast, and future-ready — blending design, code, and creativity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card overflow-hidden group hover:border-accent/40 transition-all duration-500 block"
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
              <p className="text-sm text-soft leading-relaxed">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
