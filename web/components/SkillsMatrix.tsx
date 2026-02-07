"use client";

import { motion } from "motion/react";
import {
    Cpu,
    Globe,
    Server,
    Database,
    BrainCircuit,
    LockKeyhole,
    Code2,
    ShieldCheck
} from "lucide-react";
import {
    whiteRevealVariants,
    whiteRevealTransition
} from "@/lib/effects";

// --- Data Configuration ---

const LANGUAGES = [
    { name: "TypeScript", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "Go", level: "Advanced" },
    { name: "Rust", level: "Intermediate" },
    { name: "Solidity", level: "Intermediate" },
    { name: "SQL", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
];

const DOMAINS = [
    {
        id: "backend",
        title: "Backend & API Design",
        icon: Server,
        skills: [
            "Node.js", "Express.js", "FastAPI",
            "Socket.io", "RabbitMQ", "Kafka",
            "REST APIs", "GraphQL", "gRPC",
            "JWT", "OAuth", "Session Tokens"
        ],
        description: "High-performance server architecture and scalable APIs."
    },
    {
        id: "ai",
        title: "AI & Intelligent Systems",
        icon: BrainCircuit,
        skills: [
            "OpenAI/Anthropic API", "RAG Pipelines",
            "AI Agents", "LangChain", "LangGraph",
            "Vector Embeddings", "MCP"
        ],
        description: "Building autonomous agents and semantic search systems."
    },
    {
        id: "data",
        title: "Data Infrastructure",
        icon: Database,
        skills: [
            "PostgreSQL", "MongoDB", "Redis",
            "Supabase", "NeonDB", "Pinecone", "Qdrant",
            "Prisma", "Drizzle"
        ],
        description: "Robust data modeling, ORMs, and vector storage."
    },
    {
        id: "devops",
        title: "Cloud & DevOps",
        icon: Cpu,
        skills: [
            "AWS", "Docker", "CI/CD Pipelines",
            "Nginx", "Linux", "Git", "GitHub Actions"
        ],
        description: "Production-grade deployment and infrastructure automation."
    },
    {
        id: "web3",
        title: "Web3 & Blockchain",
        icon: Globe,
        skills: [
            "Solana", "Solidity", "Smart Contracts",
            "Ethereum", "DeFi", "Web3.js"
        ],
        description: "Decentralized applications and on-chain development."
    },
    // {
    //     id: "security",
    //     title: "Security & Analysis",
    //     icon: LockKeyhole,
    //     skills: [
    //         "Ghidra", "Reverse Engineering", "Malware Analysis",
    //         "Penetration Testing", "Binary Exploitation"
    //     ],
    //     description: "Systems security, binary analysis, and vulnerability research."
    // },
    {
        id: "frontend",
        title: "Frontend Development",
        icon: Cpu,
        skills: [
            "React.js", "Next.js", "Tailwind CSS",
            "Framer Motion"
        ],
        description: "Modern, responsive interfaces with clean architecture."
    }
];

import ActiveGridBackground from "@/components/ActiveGridBackground";
import SectionDecorator from "@/components/SectionDecorator";

// --- Components ---

export default function SkillsMatrix() {
    return (
        <section id="skills" className="bg-void relative z-20 py-24 px-4 md:px-12 overflow-hidden transition-colors duration-300">
            <ActiveGridBackground />
            <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">

                {/* HEADLINE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-monolith tracking-tighter uppercase">
                        Technical Arsenal
                    </h2>
                    <div className="h-1 w-24 bg-neon mt-4" />
                </motion.div>

                {/* 1. LANGUAGES SECTION */}
                <SectionDecorator label="SYS_LANGUAGES" className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 text-monolith/50 font-mono text-sm tracking-widest uppercase">
                        <Code2 size={16} />
                        <span>Core Languages</span>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {LANGUAGES.map((lang, index) => (
                            <LanguageCard key={lang.name} lang={lang} index={index} />
                        ))}
                    </div>
                </SectionDecorator>


                {/* 2. DOMAIN CAPABILITIES GRID */}
                <SectionDecorator label="DOMAIN_MODULES" className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 text-monolith/50 font-mono text-sm tracking-widest uppercase">
                        <ShieldCheck size={16} />
                        <span>Domain Expertise</span>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DOMAINS.map((domain, index) => (
                            <DomainCard key={domain.id} domain={domain} index={index} />
                        ))}
                    </div>
                </SectionDecorator>

            </div>
        </section>
    );
}

// White fade-in animation for language cards - using effects library
function LanguageCard({ lang, index }: { lang: typeof LANGUAGES[0], index: number }) {
    return (
        <motion.div
            key={lang.name}
            initial={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative !bg-void border border-monolith/20 p-4 flex flex-col items-center justify-center gap-2 hover:!bg-monolith/5 hover:border-neon/50 transition-all duration-300 overflow-hidden"
        >
            {/* White overlay that fades out smoothly */}
            <motion.div
                variants={whiteRevealVariants}
                initial="hidden"
                whileInView="visible"
                transition={whiteRevealTransition.fast(index * 0.05)}
                viewport={{ once: true }}
                className="absolute inset-0 bg-monolith z-10"
            />

            <span className="font-space-mono text-monolith font-bold text-lg md:text-xl group-hover:text-neon transition-colors">
                {lang.name}
            </span>
        </motion.div>
    );
}

// White fade-in animation for domain cards - using effects library
function DomainCard({ domain, index }: { domain: typeof DOMAINS[0], index: number }) {
    return (
        <motion.div
            key={domain.id} // Fix: use domain.id as key
            initial={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative !bg-void border border-monolith/20 p-6 flex flex-col gap-4 hover:!bg-monolith/5 hover:border-neon/30 transition-colors duration-300 overflow-hidden"
        >
            {/* White overlay that fades out smoothly */}
            <motion.div
                variants={whiteRevealVariants}
                initial="hidden"
                whileInView="visible"
                transition={whiteRevealTransition.fast(index * 0.08)}
                viewport={{ once: true }}
                className="absolute inset-0 bg-monolith z-20"
            />

            {/* Hover Decor - Corner Accent */}
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ArrowIcon />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-monolith/5 rounded text-neon">
                    <domain.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-monolith font-space-mono uppercase tracking-tight">
                    {domain.title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-monolith/60 text-sm leading-relaxed mb-4 border-b border-monolith/5 pb-4">
                {domain.description}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                    <span
                        key={skill}
                        className="px-2 py-1 text-xs font-mono text-monolith/70 bg-monolith/5 border border-monolith/20 rounded hover:text-monolith hover:border-neon/30 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function ArrowIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#6c42f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
