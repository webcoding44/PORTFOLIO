import { Github, ExternalLink } from "lucide-react";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ProjectsSection = () => {
    const featuredProjects = [
        {
            title: "Advance Dashboard",
            description: "This project focuses on designing and developing a modern financial analytics dashboard that clearly and visually presents key performance indicators (KPIs). It provides real-time insights into metrics such as revenue, sales, conversion rate, session duration, profit trends, and traffic sources. With a clean, intuitive UX and a dark-themed UI, the dashboard uses interactive line, bar, and donut charts to help users quickly analyze data and make informed decisions.",
            image: "",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "JWT"],
            github: "https://github.com/webcoding44/Advance-Dashboard-App/tree/main/src",
            live: "https://marvelous-sable-125bec.netlify.app/",
        },
        {
            title: "Advance E-Commerce with Dashboard",
            description: "Shopfinity is a modern and customer-focused online store committed to delivering high-quality products across fashion, electronics, and everyday essentials at competitive prices. With a seamless browsing experience, secure payments, fast shipping, and responsive customer support, Shopfinity makes online shopping simple, reliable, and enjoyable. Our mission is to combine style, innovation, and convenience in one trusted platform where quality meets accessibility for everyone.",
            image: "",
            technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
            github: "https://github.com/webcoding44",
            live: "https://onlin-shop.vercel.app/",
        },
        {
            title: "SaaS Platform",
            description: "This platform offers secure authentication, subscription management, and integrated payments, while functioning as a real-time interactive teaching system powered by Vapi. It features AI voice agents for dynamic tutoring, seamless session management, and an engaging learning experience. Users can sign in securely (including Google), manage billing, bookmark tutors, review session history, and even create custom AI tutors. Built with reusable components and a modular structure, it ensures efficient and scalable development.",
            image: "",
            technologies: ["Next.js", "TypeScript", "JWT", "Supabase", "Tailwindcss"],
            github: "https://github.com/webcoding44",
            live: "https://lambent-arithmetic-ac4d58.netlify.app/",
        },
            {
            title: "Movie Webapplication",
            description: "This platform offers secure authentication, subscription management, and integrated payments, while functioning as a real-time interactive teaching system powered by Vapi. It features AI voice agents for dynamic tutoring, seamless session management, and an engaging learning experience. Users can sign in securely (including Google), manage billing, bookmark tutors, review session history, and even create custom AI tutors. Built with reusable components and a modular structure, it ensures efficient and scalable development.",
            image: "",
            technologies: ["Next.js", "TypeScript", "JWT", "Supabase", "Tailwindcss"],
            github: "https://github.com/webcoding44",
            live: "https://lambent-arithmetic-ac4d58.netlify.app/",
        }
    ];

    const otherProjects = [
        {
            title: "AI Chat bot",
            description: "This is an AI chatbot built with Next.js and TypeScript for answering programming-related questions. It uses the AI SDK (ai-sdk.dev) with Llama 3.3 (Groq), and responses are streamed through a Next.js API route for real-time interaction. The UI is built with Tailwind CSS and designed to be simple and fast.",
            technologies: ["Tailwindcss", "Next.js", "Ai-SDK",],
            github: "https://github.com/webcoding44/Chat_bot",
            live: "https://chat-bot-two-topaz.vercel.app/",
        },
        {
            title: "Review & Scan Your Resume by AI",
            description: "This project allows users to upload their resumes and receive AI-powered feedback and analysis. It utilizes natural language processing to evaluate content, structure, and keyword optimization.",
            technologies: ["React.JS", "Vite", "API AI"],
            github: "https://github.com/webcoding44/Review_Scan_your_Resume_by_Al",
            live: "https://review-scan-your-resume-by-al.vercel.app/",
        },
        {
            title: "Restaurant Website",
            description: "A modern restaurant website with smooth and eye-catching animations, designed to deliver a unique user experience. The project features a clean and professional UI, responsive design, and an attractive layout that works perfectly across all devices.",
            technologies: ["HTML", "CSS-Advance Animation", "JAVASCRIPT"],
            github: "https://github.com/webcoding44/Advance-Restaurant-with-Animation",
            live: "https://webcoding44.github.io/Advance-Restaurant-with-Animation/",
        },
        {
            title: "Chat-Application",
            description: "",
            technologies: ["Next.JS", "Supabse", "Tailwind CSS"],
            github: "",
            live: "",
        },
        {
            title: "Chat-Application Video Call",
            description: "The Chat-Application Video Call project is a real-time communication app built using Agora App Builder. It enables users to make video and voice calls, send text messages, and connect instantly with others through a simple and user-friendly interface.",
            technologies: ["Several Languages", "appbuilder.agora.io"],
            github: "https://github.com/webcoding44/Chat-App_Vidoe_Call/tree/main",
            live: "https://chat-app-vidoe-call.vercel.app/",
        },
        {
            title: "Authentication System",
            description: "",
            technologies: ["Next.JS", "Better Auth", "Neon" , "Drizzle ORM"],
            github: "",
            live: "",
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="section-title text-center">My Projects</h2>
                </Reveal>

                <div className="space-y-24 mt-16">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="grid md:grid-cols-2 gap-12 items-center neobrutalist-card md:relative">
                                <div className="relative group overflow-hidden rounded-lg ring-1 ring-primary/10">
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
                                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative bg-foreground/5 border border-border/60 rounded-xl shadow-lg p-6 md:p-8 md:-ml-16 backdrop-blur-sm">
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
                                            className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View source code on GitHub"
                                        >
                                            <Github size={24} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
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
                    <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Other Noteworthy Projects</h3>
                    <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <FadeInItem
                                key={index}
                                className="relative neobrutalist-card h-full flex flex-col group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl after:pointer-events-none after:absolute after:-right-10 after:-top-10 after:h-24 after:w-24 after:rounded-full after:bg-primary/20 after:blur-3xl after:opacity-0 group-hover:after:opacity-100"
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
                                            className="rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View source code on GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
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
                                            className="text-[11px] font-mono text-secondary/90 bg-secondary/5 border border-secondary/30 rounded-full px-2.5 py-1 transition-colors group-hover:bg-secondary/10"
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