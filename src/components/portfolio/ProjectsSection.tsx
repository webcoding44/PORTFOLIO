import { Github, ExternalLink } from "lucide-react";
// import ledgerProjectImage from "../../../public/images/book.png";
// import apexscriptImage from "../../../public/images/dashboard-preview.png";
// import tradeproImage from "../../../public/images/dfvbkd.png"
// import tradeproImage from "../../../public/images/dfvbkd.png"
// import tradeproImage from "../../../public/images/dfvbkd.png"
// import { E-commerce , Ai , ooo , oooo ,oooo } from "../../../public/images"
import ai from '../../../public/images/ai.png'
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ProjectsSection = () => {


    const Projects = [
        {
            title: "Full-Functionality E-Commerce",
            description: "",
            image: "",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Strip" , "API" , "Sentry" ,],
            github: "https://github.com/webcoding44/Full-Functionality-E-Commerce",
            live: "https://full-functionality-e-commerce.vercel.app/",
        },
                {
            title: "Chat-App",
            description: "Ledger is a responsive web application that allows users to create, manage, and organize their notes. It features user authentication, a clean dashboard interface, and a RESTful API for note management operations.",
            image: "",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "JWT"],
            github: "https://github.com/YashPalav-26/Ledger",
            live: "https://ledger-notesmanager.vercel.app/",
        },
                {
            title: "ArchFlow-AI",
            description: "Ghost AI is an AI-powered, real-time collaborative system-architecture builder. Users describe a system in plain English and a Gemini-powered agent autonomously draws nodes and edges onto a shared React Flow canvas — while teammates watch live and co-design with synced cursors, presence avatars, inline label editing, resizing, and a 12-color palette. A second AI task then converts the finalized graph into a comprehensive, multi-page Markdown technical specification, downloadable in one click.",
            image: ai,
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Liveblock", "Trigger.dev", "Gemini API" , "Clerk"],
            github: "https://github.com/webcoding44/ArchFlow-AI",
            live: "https://arch-flow-ai-theta.vercel.app/",
        },
        {
            title: "Calender ",
            description: "ApexScript is a sleek, user-friendly code editor using HTML, CSS, React, and Tailwind CSS. Designed for all skill levels, it offers a clean interface and powerful features to enhance your coding experience across multiple languages, ensuring a seamless workflow.",
            image: "",
            technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
            github: "https://github.com/YashPalav-26/ApexScript-CodeEditor",
            live: "https://yash-apexscript.vercel.app",
        },
        {
            title: "Advance Crypto and tranding dashboard",
            description: "TradePro is a feature-rich, simulated trading platform designed to provide users with a realistic yet risk-free environment to practice trading strategies, monitor market data, and manage virtual portfolios.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/YashPalav-26/TradePro",
            live: "https://yash-tradepro.vercel.app/",
        },
    ];

    const Projectsmall = [
        {
            title: " Modern Digital Banking Platform",
            description: "Ledger is a responsive web application that allows users to create, manage, and organize their notes. It features user authentication, a clean dashboard interface, and a RESTful API for note management operations.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Gsap.JS", "Tailwind CSS", "Supabase", "ai-sdk" , "API" , ],
            github: "",
            live: "",
        },
                {
            title: "Bookified-AI",
            description: "Ledger is a responsive web application that allows users to create, manage, and organize their notes. It features user authentication, a clean dashboard interface, and a RESTful API for note management operations.",
            image: "",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "JWT"],
            github: "https://github.com/YashPalav-26/Ledger",
            live: "https://ledger-notesmanager.vercel.app/",
        },
                {
            title: "OfferPilot",
            description: "Ghost AI is an AI-powered, real-time collaborative ",
            image: ai,
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Liveblock", "Trigger.dev", "Gemini API" , "Clerk"],
            github: "https://github.com/webcoding44/ArchFlow-AI",
            live: "https://arch-flow-ai-theta.vercel.app/",
        },
        {
            title: "LMS-SaaS-Platform",
            description: "ApexScript is a sleek, user-friendly code editor using HTML, CSS, React, and Tailwind CSS. Designed for all skill levels, it offers a clean interface and powerful features to enhance your coding experience across multiple languages, ensuring a seamless workflow.",
            image: "",
            technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
            github: "https://github.com/YashPalav-26/ApexScript-CodeEditor",
            live: "https://yash-apexscript.vercel.app",
        },
        {
            title: "Screen-Recorder",
            description: "TradePro is a feature-rich, simulated trading platform designed to provide users with a realistic yet risk-free environment to practice trading strategies, monitor market data, and manage virtual portfolios.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/YashPalav-26/TradePro",
            live: "https://yash-tradepro.vercel.app/",
        },
               {
            title: "Live-Docs",
            description: "TradePro is a feature-rich, simulated trading platform designed to provide users with a realistic yet risk-free environment to practice trading strategies, monitor market data, and manage virtual portfolios.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/YashPalav-26/TradePro",
            live: "https://yash-tradepro.vercel.app/",
        },
    ];



    return (
        <section id="projects" className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="section-title text-center">Projects</h2>
                </Reveal>

                <div className="space-y-24 mt-16">
                    {Projects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="grid md:grid-cols-2 gap-12 items-center neobrutalist-card md:relative">
                                <div className="relative group overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative bg-card border-2 border-border p-6 md:p-8 md:-ml-16 shadow-brutal">
                                        <p className="text-foreground/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary font-mono text-sm">
                                        {project.technologies.map((tech, index) => (
                                            <span key={tech} className="opacity-90">
                                                {tech}
                                                {index < project.technologies.length - 1 && (
                                                    <span className="mx-2 text-foreground/40">•</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View source code on GitHub"
                                        >
                                            <Github size={24} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View live project"
                                        >
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-24">
                    <h2 className="section-title text-center">other project</h2>
                    <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Projectsmall.map((project, index) => (
                            <FadeInItem
                                key={index}
                                className="relative neobrutalist-card h-full flex flex-col group overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-brutal"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View source code on GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View live project"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/60">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-secondary/90 bg-secondary/5 border border-secondary/30 px-2 py-1 transition-colors group-hover:bg-secondary/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </Reveal>
            </div>
        </section>
    );
};

export default ProjectsSection;