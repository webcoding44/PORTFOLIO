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
            title: "Full-Functionality E-Commerce with Admin Panel",
            description: "",
            image: "",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Strip" , "API" , "Sentry" ,],
            github: "https://github.com/webcoding44/Full-Functionality-E-Commerce",
            live: "https://full-functionality-e-commerce.vercel.app/",
        },
                {
            title: "Full-Functionality Chat-Application",
            description: "",
            image: "",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "Postgres", "JWT"],
            github: "https://github.com/YashPalav-26/Ledger",
            live: "https://ledger-notesmanager.vercel.app/",
        },
                {
            title: "ArchFlow-AI",
            description: "ArchFlow-AI is an agentic planning workspace for software teams. Submit a natural-language prompt — \"Design a scalable e-commerce backend\" — and an autonomous AI architect places nodes and edges onto a shared React Flow canvas in real time. Your team watches the system take shape live, jumps in to refine it together, and when the design is right, a second AI task converts the visual graph into a comprehensive, multi-page Markdown technical specification ready to download and share.",
            image: ai,
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Liveblock", "Trigger.dev", "Gemini API" , "Clerk"],
            github: "https://github.com/webcoding44/ArchFlow-AI",
            live: "https://arch-flow-ai-theta.vercel.app/",
        },
        {
            title: "Google Drive Storage Management",
            description: "ApexScript is a sleek, user-friendly code editor using HTML, CSS, React, and Tailwind CSS. Designed for all skill levels, it offers a clean interface and powerful features to enhance your coding experience across multiple languages, ensuring a seamless workflow.",
            image: "",
            technologies: ["Next.js", "Typescript", "Tailwind CSS", "...." , "......"],
            github: "https://github.com/YashPalav-26/ApexScript-CodeEditor",
            live: "https://yash-apexscript.vercel.app",
        },
        {
            title: "Cryptocurrency Dashboard",
            description: "TradePro is a feature-rich, simulated trading platform designed to provide users with a realistic yet risk-free environment to practice trading strategies, monitor market data, and manage virtual portfolios.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Neon", "Better Auth", "API"],
            github: "https://github.com/YashPalav-26/TradePro",
            live: "https://yash-tradepro.vercel.app/",
        },
    ];

    const Projectsmall = [
        {
            title: " Modern Digital Banking Platform",
            description: "A modern digital banking platform that allows users to securely connect multiple bank accounts, monitor balances and transactions in real time, transfer funds, and manage their finances through a clean and intuitive dashboard.\n" +
                "\n",
            image: "",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Appwrite", "Plaid", "Dwolla"],
            github: "https://github.com/webcoding44/Banking-Dashboard",
            live: "https://banking-dashboard-plum-theta.vercel.app/",
        },
                {
            title: "Bookified-AI",
            description: "Bookified AI is a modern AI-powered platform that transforms traditional PDF books into intelligent conversational companions.\n" +
                "\n" +
                "Instead of simply reading static content, users can upload books, ask questions through natural voice conversations, generate AI-powered summaries, and interact with personalized voice assistants.",
            image: "",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vapi", "Mongodb", "Clerk"],
            github: "https://github.com/webcoding44/Bookified-AI",
            live: "https://bookified-ai-seven.vercel.app/",
        },
                {
            title: "OfferPilot",
            description: "JobPilot is an autonomous, full-stack AI agent that transforms how technical job seekers find work. It simultaneously browses LinkedIn, Wellfound, and YC Jobs to discover roles, scores each against the user's profile with GPT-4o, and ranks them by match percentage in a filterable inventory dashboard\n" +
                "\n",
            image: ai,
            technologies: ["Next.js", "Typescript", "PostgreSQL", "Tailwind CSS", "PostHog", "GPT-4o", "Browserbase",],
            github: "https://github.com/webcoding44/OfferPilot#how-it-works",
            live: "https://offer-pilot-rsid-two.vercel.app/",
        },
        {
            title: "LMS-SaaS-Platform",
            description: "This project is a full-stack AI-powered LMS SaaS platform built with modern web technologies.\n" +
                "\n" +
                "It allows users to learn through interactive AI voice tutors, manage subscriptions, and access personalized learning sessions in a scalable and production-ready system.\n" +
                "\n" +
                "Users can create learning sessions, interact with AI tutors, and experience real-time conversational education powered by Vapi AI.",
            image: "",
            technologies: ["Next.js", "Tailwind CSS", "Vapi", "Supabase" , "Clerk"],
            github: "https://github.com/webcoding44/LMS-SaaS-Platform",
            live: "https://lms-saa-s-platform.vercel.app/",
        },
        {
            title: "Screen-Recorder",
            description: "ScreenFlow is a modern full-stack screen recording and video sharing platform that enables users to record their screens, upload videos, generate AI-powered transcripts, and share content securely.\n" +
                "\n" +
                "Built with Next.js, Bunny.net, Better Auth, Arcjet, Xata, and Drizzle ORM, the platform combines high-performance video hosting, secure authentication, intelligent search, and scalable infrastructure into a production-ready application.",
            image: "",
            technologies: ["Next.js", "TypeScript", "Bunny", "ORM", "xata" , "BetterAuth"],
            github: "https://github.com/webcoding44/Screen-Recorder",
            live: "https://screen-recorder-navy-phi.vercel.app/sign-in",
        },
               {
            title: "Live-Docs",
            description: "A real-time collaborative document platform that enables multiple users to create, edit, comment on, and share documents simultaneously. The platform features live collaboration, threaded comments, document permissions, notifications, and seamless teamwork across all devices.\n" +
                "\n",
            image: "",
            technologies: ["Next.js", "TypeScript", "Liveblocks", "BetterAuth", "Tailwindcss"],
            github: "https://github.com/webcoding44/Live-Docs",
            live: "https://live-docs-kappa-ebon.vercel.app/",
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