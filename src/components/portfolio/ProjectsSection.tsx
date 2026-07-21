import { Github, ExternalLink } from 'lucide-react';
import {
  Reveal,
  FadeInStagger,
  FadeInItem,
} from '@/components/animations/Reveal';
import Cryptoplus from '../../../public/images/dfvbkd.png';
import Book from '../../../public/images/book.png';
import Markit from '../../../public/images/dashboard-preview.png';
import lms from '../../../public/images/image.png';
import vidoe from '../../../public/images/images.png';
import patient from '../../../public/images/dsvsvs.png';
import banking from '../../../public/images/imageqw.png'
import sdk from '../../../public/images/sdv.png'
import livedocs from '../../../public/images/livedioc.png'
import google from '../../../public/images/google.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = () => {
  const featuredProjects = [
    // {
    //     title: "CryptoPulse Dashboard",
    //     description: "CryptoPulse is a comprehensive cryptocurrency dashboard built with Next.js, React, TypeScript, Tailwind CSS, Supabase, and JWT. It provides real-time market data, portfolio tracking, and personalized insights to help users stay informed and make informed decisions in the dynamic world of cryptocurrencies.",
    //     image: Cryptoplus,
    //     technologies: ["Next.js", "CoinGecko API", "TypeScript", "Tailwind CSS", "WebSockets"],
    //     github: "https://github.com/webcoding44/CryptoPulse",
    //     live: "https://crypto-pulse-eta.vercel.app/",
    // },
    // {
    //     title: "Stock Market Platform",
    //     description: "A modern AI-powered stock market platform built with Next.js that delivers real-time market data, interactive charts, and intelligent financial insights. Users can track live stock prices, manage watchlists, receive smart alerts, and explore detailed company analytics including news, financial metrics, and sentiment analysis. The platform also features an admin dashboard for managing stocks and publishing updates, with event-driven workflows enabling automated notifications and AI-powered market summaries.",
    //     image: Markit,
    //     technologies: ["Next.js", "TypeScript", "Better Auth", "Finnhub API", "Tailwindcss"],
    //     github: "https://github.com/webcoding44/Markit-App",
    //     live: "",
    // },
    // {
    //     title: "Advance Chat Application",
    //     description: "",
    //     image: "",
    //     technologies: ["Next.js", "TypeScript", "JWT", "Supabase", "Tailwindcss"],
    //     github: "",
    //     live: "",
    // },
  ];

  const otherProjects = [
    {
      title: 'AI Chat bot',
      description:
        'This is an AI chatbot built with Next.js and TypeScript for answering programming-related questions. It uses the AI SDK (ai-sdk.dev) with Llama 3.3 (Groq), and responses are streamed through a Next.js API route for real-time interaction. The UI is built with Tailwind CSS and designed to be simple and fast.',
      technologies: ['Tailwindcss', 'Next.js', 'Ai-SDK'],
      github: 'https://github.com/webcoding44/Chat_bot',
      live: 'https://chat-bot-two-topaz.vercel.app/',
    },
    {
      title: 'Review & Scan Your Resume by AI',
      description:
        'This project allows users to upload their resumes and receive AI-powered feedback and analysis. It utilizes natural language processing to evaluate content, structure, and keyword optimization.',
      technologies: ['React.JS', 'Vite', 'API AI'],
      github: 'https://github.com/webcoding44/Review_Scan_your_Resume_by_Al',
      live: 'https://review-scan-your-resume-by-al.vercel.app/',
    },
    {
      title: 'Restaurant Website',
      description:
        'A modern restaurant website with smooth and eye-catching animations, designed to deliver a unique user experience. The project features a clean and professional UI, responsive design, and an attractive layout that works perfectly across all devices.',
      technologies: ['HTML', 'CSS-Advance Animation', 'JAVASCRIPT'],
      github:
        'https://github.com/webcoding44/Advance-Restaurant-with-Animation',
      live: 'https://webcoding44.github.io/Advance-Restaurant-with-Animation/',
    },
    {
      title: 'E-Commerce Website(template)',
      description:
        'A modern and stylish online store template designed with a clean and attractive user interface. This project focuses on beautiful design and smooth user experience. It is currently a front-end template without functionality, but it can be a great base for a complete e-commerce website in the future.',
      technologies: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com/webcoding44',
      live: 'https://webcoding44.github.io/E-Commerce-Website-template-/',
    },
    {
      title: 'CRM Dashboard',
      description:
        'A modern React CRM dashboard with secure authentication, real-time kanban collaboration, sales and company management, interactive analytics charts, and fully responsive design across all devices. Built with scalable architecture and reusable components for a smooth and efficient business workflow.',
      technologies: ['React.TS', 'TypeScript', 'CRM', 'Refine', 'Tailwindcss'],
      github: 'https://github.com/webcoding44/CRM-Dashboard',
      live: 'https://crm-dashboard-omega-fawn.vercel.app/',
    },
    {
      title: 'Caffe Website',
      description:
        'Built and deployed a modern interactive website using React and Tailwind CSS with advanced GSAP animations and scroll-based effects. Implemented parallax scrolling, SplitText reveals, pinned sections, scroll-synced animations, and a custom responsive UI for a smooth and engaging user experience across all devices.',
      technologies: ['React.JS', 'GSAP.JS', 'Tailwindcss'],
      github: 'https://github.com/webcoding44/Caffe-WEB',
      live: 'https://caffe-web-ochre.vercel.app/',
    },
  ];

  const projectSections = [
            //1
    {
      title: 'Trading & Finance',
      projects: [
        {
          title: 'Crypto Trading Dashboard',
          description:
            'CryptoPulse is a real-time cryptocurrency analytics platform built with Next.js, combining live market data, TradingView charts, and advanced asset discovery. Powered by CoinGecko API and WebSockets, it delivers a fast, responsive, and data-rich trading experience.',
          image: Cryptoplus,
          technologies: [
            'Next.js',
            'CoinGecko API',
            'TypeScript',
            'Tailwind CSS',
            'WebSockets',
          ],
          github: 'https://github.com/webcoding44/CryptoPulse',
          live: 'https://crypto-pulse-eta.vercel.app/',
        },

        {
          title: 'Stock Market Platform',
          description:
            'A modern AI-powered stock market platform built with Next.js, combining real-time price tracking, company analytics, and personalized watchlists. With AI-driven insights and event-based workflows, it delivers smart alerts, market summaries, and earnings notifications in a fast and intuitive experience.',
          image: Markit,
          technologies: [
            'Next.js',
            'TypeScript',
            'Better Auth',
            'Finnhub API',
            'Tailwindcss',
          ],
          github: 'https://github.com/webcoding44/Markit-App',
          live: '',
        },
      ],
    },

          // 2
    {
      title: 'AI Communication',
      projects: [
        {
          title: 'AI LMS Platform',
          description:
          'An AI-powered mock interview platform built with Next.js, Vapi AI, and Google Gemini. The platform conducts realistic voice-based interviews, generates role-specific questions, provides detailed AI feedback, and helps users improve their communication',
          image: lms,
          technologies: [
            'Next.js',
            'TypeScript',
            'Vapi',
            'Tailwind CSS',
            'Clerk',
            'Supabase',
          ],
          github: 'https://github.com/webcoding44/LMS-SaaS-Platform',
          live: 'https://lms-saa-s-platform.vercel.app/',
        },
        {
          title: 'Bookified AI',
          description:
            'A full-stack AI-powered book companion platform that allows users to upload PDFs, chat with their books through real-time voice conversations, generate intelligent summaries, and explore content using personalized AI voice assistants and contextual retrieval.',
          image: Book,
          technologies: [
            'Next.js',
            'Vapi',
            'TypeScript',
            'Tailwind CSS',
            'MongoDB',
            'Clerk',
          ],
          github: 'https://github.com/webcoding44/Bookified-AI',
          live: 'https://bookified-ai-mu.vercel.app/',
        },
      ]
    },
        
    // 3
    {
      title: 'Productivity & Services',
      projects: [
                {
          title: 'CaptureHub',
          description:
            'A full-stack screen recording and video sharing platform that allows users to capture their screens, upload videos, and share them through unique links. The platform includes AI-generated transcripts, public and private privacy controls, advanced search, and secure user authentication for a seamless content-sharing experience.',
          image: vidoe,
          technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Arcjet',
            'Bunny.net',
            'Better Auth',
            'Drizzle ORM '
          ],
          github: 'https://github.com/webcoding44/Screen-Recorder',
          live: 'https://screen-recorder-navy-phi.vercel.app/',
        },
              {
          title: 'Patient Management System',
          description:
            'A modern healthcare patient management platform that streamlines patient registration, doctor appointment scheduling, and appointment management. It enables administrators to confirm or cancel bookings, send SMS notifications, securely upload medical documents, and deliver a seamless healthcare experience across all devices.',
          image: patient,
          technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Twilio',
            'ShadCN',
            'Supabase',
          ],
          github: 'https://github.com/webcoding44/Patient-Management-System',
          live: 'https://patient-management-system-vert.vercel.app/',
        },
      ]
    },
    
      // 4
      {
            title: 'Advance Dashboards',
      projects: [
                {
          title: 'Finova - Banking Dashboard',
          description:
            'A modern digital banking platform that allows users to securely connect multiple bank accounts, monitor balances and transactions in real time, transfer funds, and manage their finances through a clean and intuitive dashboard. "This project uses Dwolla and Plaid Sandbox. A US bank account is required to complete the bank-linking flow."',
          image: banking,
          technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Appwrite',
            'Plaid',
            'Dwolla',
          ],
          github: 'https://github.com/webcoding44/Banking-Dashboard',
          live: 'https://banking-dashboard-plum-theta.vercel.app/',
        },
              {
          title: 'Pulse Dashboard',
          description:
            "A modern and responsive admin dashboard built with React and Tailwind CSS. It features reusable components, a clean dark UI, and simple data visualization elements. This project focuses on UI design and front-end structure.",
          image: sdk,
          technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Rapid api',
          ],
          github: 'https://github.com/webcoding44/Bueatiful-Dashboard-App',
          live: 'https://bueatiful-dashboard-app.vercel.app/',
        },
      ]
    },

    // 5

          {
            title: 'Collaboration & Storage',
      projects: [
        {
    title: 'Google-Drive Clone',
    description:
      'A modern cloud storage and file sharing platform that enables users to upload, organize, manage, and securely share files with ease. The platform features file previews, downloads, storage analytics, global search, and an intuitive dashboard for efficient file management across all devices.',
    image: google,
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Appwrite',
      'Shad/cn',
    ],
    github: 'https://github.com/webcoding44/Google-Drive-Clone',
    live: 'https://google-drive-clone-mauve.vercel.app/',
  },
        {
          title: 'Live-Docs',
          description:
            'A real-time collaborative document platform that enables multiple users to create, edit, comment on, and share documents simultaneously. The platform features live collaboration, threaded comments, document permissions, notifications, and seamless teamwork across all devices.',
          image: livedocs,
          technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Clerk',
            'Liveblocks',
            'Lexical Editor',
            'Shad/CN',
          ],
          github: 'https://github.com/webcoding44/Live-Docs',
          live: 'https://live-docs-kappa-ebon.vercel.app',
        },
      ]
    },
  ];




  return (
    <section
      id='projects'
      className='min-h-screen py-24 px-4'
    >
      <div className='container mx-auto max-w-6xl'>
        <Reveal>
          <h2 className='section-title text-center'>My Projects</h2>
        </Reveal>


<div className="space-y-24 mt-16">
  {projectSections.map((section) => (
    <div key={section.title} className="mb-32">
      <h2 className="text-4xl font-bold mb-12">
        {section.title}
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {section.projects.map((project, index) => (
          <SwiperSlide key={project.title}>
            <Reveal>
              <div className="grid md:grid-cols-2 gap-12 items-center neobrutalist-card md:relative">
                <div className="relative group overflow-hidden rounded-lg ring-1 ring-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
                      Featured Project
                    </p>

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
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="opacity-90"
                      >
                        {tech}

                        {techIndex <
                          project.technologies.length - 1 && (
                          <span className="mx-2 text-foreground/40">
                            •
                          </span>
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

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                        aria-label="View live project"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ))}
</div>
        {/* ///////////////////////////////////////////////////////////// */}


        <Reveal className='mt-24'>
          <h3 className='text-3xl font-bold text-foreground mb-12 text-center'>
            Other Noteworthy Projects
          </h3>
          <FadeInStagger className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {otherProjects.map((project, index) => (
              <FadeInItem
                key={index}
                className='relative neobrutalist-card h-full flex flex-col group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl after:pointer-events-none after:absolute after:-right-10 after:-top-10 after:h-24 after:w-24 after:rounded-full after:bg-primary/20 after:blur-3xl after:opacity-0 group-hover:after:opacity-100'
              >
                <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent' />
                <div className='flex items-center justify-between mb-6'>
                  <h4 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                    {project.title}
                  </h4>
                  <div className='flex items-center gap-4'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200'
                      aria-label='View source code on GitHub'
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='rounded-full border border-primary/40 p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200'
                      aria-label='View live project'
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className='text-foreground/80 leading-relaxed mb-6 flex-1'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/60'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='text-[11px] font-mono text-secondary/90 bg-secondary/5 border border-secondary/30 rounded-full px-2.5 py-1 transition-colors group-hover:bg-secondary/10'
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