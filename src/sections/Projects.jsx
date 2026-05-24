import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    category: 'SaaS Landing Page',
    name: 'CarFleet',
    url : "https://car-fleet-rho.vercel.app/",
    imageUrl : "https://private-user-images.githubusercontent.com/183578993/596735305-ef57c7be-8378-461c-a843-a53aac750fba.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk2NTE2MjksIm5iZiI6MTc3OTY1MTMyOSwicGF0aCI6Ii8xODM1Nzg5OTMvNTk2NzM1MzA1LWVmNTdjN2JlLTgzNzgtNDYxYy1hODQzLWE1M2FhYzc1MGZiYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNFQxOTM1MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02YjA4NjQ5MTM1NzExYmY0MjUyZDQyOWMzMTdiZjgwMGExNmMxYTMxZjQ2MGU1YmQwNTk1ZTNkODhjODRmYTk2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VBugWJGKCIgfpiWhRwscdfYvSJ-qiAhir536ff-Rg30",
    desc: 'A modern, full-stack car rental marketplace where users can browse, book, and list vehicles for rent. Built with a cockpit-inspired UI featuring molded buttons, telemetry-style readouts, and a premium automotive aesthetic.',
  },
    {   
    category: 'Desktop Application',
    name: 'Bizom Automizer',
    url : "https://drive.google.com/file/d/1ZDKXlBnZ3ijVwe2yr8_Kb2a_MvsHsufm/view",
    imageUrl : "https://private-user-images.githubusercontent.com/183578993/597355298-1a7c1e3a-89a7-4be2-a2f1-ad70b5d04c68.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk2NTM0ODEsIm5iZiI6MTc3OTY1MzE4MSwicGF0aCI6Ii8xODM1Nzg5OTMvNTk3MzU1Mjk4LTFhN2MxZTNhLTg5YTctNGJlMi1hMmYxLWFkNzBiNWQwNGM2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNFQyMDA2MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMGUxMDNhZjQ3N2Y1ZDVkNTBkMDkyZTE5MTJhOThlMzVlOGVhOWVmMGExMGFkYTg1OGFmMDVkYTMzNjEzOTM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.plP8Eh5FH-_hA8oi9Z1ZHjeTQ7PQNQXnfBXgxIBzeQ0",
    desc: "𝐁𝐢𝐳𝐨𝐦 𝐀𝐮𝐭𝐨𝐦𝐢𝐳𝐞𝐫 is a desktop software designed to enhance the operational workflow of the retail intelligence platform Bizom.",
  },
  {
    category: 'SaaS Landing Page',
    name: 'Mango Library',
    url : "https://mango-library.vercel.app/",
    imageUrl : "https://private-user-images.githubusercontent.com/183578993/586782632-0f89c4ca-e1ac-473e-875c-79e6618e42a2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk2NTIwNDAsIm5iZiI6MTc3OTY1MTc0MCwicGF0aCI6Ii8xODM1Nzg5OTMvNTg2NzgyNjMyLTBmODljNGNhLWUxYWMtNDczZS04NzVjLTc5ZTY2MThlNDJhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNFQxOTQyMjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNGE2MmEwNzcxMmNhNjA5M2UwNDNlMjQzYmQzN2Q1NTdkODY1NDU3MDI0YWUzODRjNGE4OWQ3NDc5YzAzM2Y2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.jPlPkkGndgjROGMxrT8Mh9VnJKCB6hIjhKsBfSi6L98",
    desc: 'High-performance digital library platform built with the modern web stack. It digitizes the traditional library experience, offering users a seamless way to browse, search, and borrow books with a stunning user interface.',
  },
  {
    title: 'Tech Wave',
    category: 'SaaS Landing Page',
    name: 'Tech Wave',
    url : "https://grrabby.github.io/PH-Assignment-2/",
    imageUrl: "https://private-user-images.githubusercontent.com/183578993/597351310-27de147a-cdec-4e62-a684-7f24992cd5b3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzk2NTAxNDcsIm5iZiI6MTc3OTY0OTg0NywicGF0aCI6Ii8xODM1Nzg5OTMvNTk3MzUxMzEwLTI3ZGUxNDdhLWNkZWMtNGU2Mi1hNjg0LTdmMjQ5OTJjZDViMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyNFQxOTEwNDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMTNjNmFkMWM2OWNjNDNhN2NkYmNmYjc0MDNjYTRjMGNiYTQ2Yzg1N2RiOWQ3N2Y2YWY5YmI1OWMwNjA1NGMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.4FgBTynbaBB7VnT1HXxqHCQJrPxNoV_ce8ucCvJDgWM",
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
