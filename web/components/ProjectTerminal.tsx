"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Terminal,
    Cpu,
    Network,
    Shield,
    ArrowUpRight,
    Activity,
    Server,
    Code2,
    ChevronRight,
    Github,
    ExternalLink
} from "lucide-react";
import { clsx } from "clsx";
import ActiveGridBackground from "@/components/ActiveGridBackground";

// --- Types ---

interface Project {
    id: string;
    pid: string; // Process ID style (e.g., "PID_8823")
    name: string;
    description: string;
    stack: string[];
    details: string;
    features: string[]; // Bullet points for the "Architecture" section
    github?: string;
    live?: string;
    type: "EXTENSION" | "BACKEND" | "ANDROID" | "WEB_APP";
}

// --- Data ---

const PROJECTS: Project[] = [
    {
        id: "concize",
        pid: "PID_2048",
        name: "CONCIZE",
        type: "EXTENSION",
        description: "Chrome Extension meeting assistant pipeline.",
        features: [
            "Real-time audio capture",
            "Async RabbitMQ processing pipeline",
            "Groq-powered transcription",
            "Vector-based semantic search (Qdrant)"
        ],
        stack: ["CHROME EXTENSION", "EXPRESS", "RABBITMQ", "GROQ SDK", "QDRANT"],
        details: "Browser extension for capturing meeting audio. Uses an async microservices pipeline (RabbitMQ) to chunk audio, generating transcripts via Groq and semantic embeddings for Qdrant-powered chat and query.",
        github: "https://github.com/rx6ru/Concize",
    },
    {
        id: "wombat",
        pid: "PID_8080",
        name: "WOMBAT",
        type: "BACKEND",
        description: "Secure API vault and proxy management system.",
        features: [
            "Centralized credential vault",
            "Granular proxy API generation",
            "Rate-limiting via Upstash",
            "Zero-exposure master key architecture"
        ],
        stack: ["NEXT.JS 16", "SUPABASE", "PRISMA", "EXPRESS", "UPSTASH"],
        details: "A centralized credential management platform that allows creating granular proxy APIs to share access without exposing master keys. Backend powered by Express & Prisma with Upstash for high-performance rate limiting.",
        github: "https://github.com/rx6ru/wombat",
    },
    {
        id: "edvo",
        pid: "PID_1934",
        name: "EDVO",
        type: "ANDROID",
        description: "Local-first Android security application.",
        features: [
            "Zero-knowledge architecture",
            "Local SQLDelight encryption",
            "Kotlin Multiplatform core",
            "Offline-first sync capability"
        ],
        stack: ["KOTLIN", "JETPACK COMPOSE", "SQLDELIGHT", "KTOR"],
        details: "Security-focused Android application built with Kotlin. Ensures zero-knowledge privacy by performing all encryption and data storage locally using SQLDelight, syncing only encrypted blobs.",
        github: "https://github.com/rx6ru/EDVO",
    },
    {
        id: "w2chat",
        pid: "PID_3000",
        name: "W2CHAT",
        type: "WEB_APP",
        description: "Real-time MERN stack chat application.",
        features: [
            "Bidirectional Socket.IO events",
            "JWT Authentication",
            "Persistent MongoDB message history",
            "Responsive React UI"
        ],
        stack: ["MERN STACK", "SOCKET.IO", "JWT", "REACT"],
        details: "Instant bidirectional communication platform. Features secure JWT authentication, persistent message history, and a responsive React interface with real-time socket events.",
        github: "https://github.com/rx6ru/W2Chat",
    },
];

// --- Main Layout ---

export default function ProjectTerminal() {
    const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id);
    const selectedProject = PROJECTS.find(p => p.id === selectedId) || PROJECTS[0];

    return (
        <section id="projects" className="bg-void py-24 md:py-32 px-4 md:px-12 border-t border-monolith/20 relative z-20 overflow-hidden transition-colors duration-300">
            <ActiveGridBackground />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-monolith/10 pb-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-neon mb-2">
                            <Terminal size={20} />
                            <span className="font-mono text-xs tracking-widest uppercase">PROJECT_INDEX_v2.0</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-monolith tracking-tighter uppercase">
                            FEATURED_PROJECTS
                        </h2>
                    </div>

                    <div className="flex gap-8 text-xs font-mono text-monolith/60">
                        <div className="flex flex-col">
                            <span className="text-monolith/40 mb-1">Total Projects</span>
                            <span className="text-monolith font-bold text-lg">{PROJECTS.length}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-monolith/40 mb-1">System Status</span>
                            <span className="text-neon font-bold text-lg animate-pulse">OPTIMAL</span>
                        </div>
                    </div>
                </div>

                {/* The Hypervisor Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-monolith/20 bg-void/50 backdrop-blur-sm shadow-2xl">

                    {/* Left Panel: Process Queue (Sidebar) */}
                    <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-monolith/20 flex flex-col h-[500px] lg:h-[700px]">
                        <div className="p-4 border-b border-monolith/10 bg-monolith/5 text-xs font-mono text-monolith/50 flex justify-between items-center sticky top-0 z-10">
                            <span>&gt; SELECT_PROJECT</span>
                            <Activity size={14} className="text-neon" />
                        </div>

                        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-monolith/10 hover:scrollbar-thumb-monolith/20">
                            {PROJECTS.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => setSelectedId(project.id)}
                                    className={clsx(
                                        "w-full text-left p-5 border-b border-monolith/10 transition-all duration-200 group relative overflow-hidden",
                                        selectedId === project.id
                                            ? "bg-monolith/10 lg:bg-monolith/5 text-monolith"
                                            : "text-monolith/60 hover:text-monolith hover:bg-monolith/5"
                                    )}
                                >
                                    {/* Active Marker */}
                                    {selectedId === project.id && (
                                        <motion.div
                                            layoutId="active-marker"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-neon"
                                        />
                                    )}

                                    <div className="flex justify-between items-start mb-2">
                                        <span className={clsx(
                                            "font-mono text-xs tracking-wider transition-colors",
                                            selectedId === project.id ? "text-neon" : "text-monolith/40 group-hover:text-monolith/60"
                                        )}>
                                            {project.pid}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold uppercase tracking-tight mb-1 group-hover:translate-x-1 transition-transform duration-300">
                                        {project.name}
                                    </h3>

                                    <p className="text-xs text-monolith/50 line-clamp-1 font-mono">
                                        // {project.type}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Diagnostics (Detail View) */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col h-full relative overflow-hidden bg-dots-pattern">
                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] opacity-20 bg-[length:100%_2px,3px_100%]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 flex flex-col h-full relative z-10"
                            >
                                {/* Detail Header */}
                                <div className="p-8 pb-4 border-b border-monolith/10 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-neon/70 font-mono text-xs">
                                        <Cpu size={14} />
                                        <span>ACTIVE_PROJECT: {selectedProject.name.toUpperCase()}</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold font-space-mono text-monolith opacity-10 leading-[0.8] tracking-tighter absolute right-6 top-6 select-none pointer-events-none">
                                        {selectedProject.pid.split("_")[1]}
                                    </h1>
                                    <div className="text-lg md:text-2xl font-light text-monolith/90 max-w-2xl leading-relaxed">
                                        {selectedProject.description}
                                    </div>
                                </div>

                                {/* Detail Content Scrollable Area */}
                                <div className="flex-1 p-8 overflow-y-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        {/* Left Col: Architecture */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-2 text-xs font-mono text-monolith/40 uppercase tracking-widest border-b border-monolith/10 pb-2">
                                                <Server size={14} />
                                                <span>System_Architecture</span>
                                            </div>
                                            <ul className="space-y-4">
                                                {selectedProject.features.map((feature, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-monolith/70 group">
                                                        <span className="text-neon mt-1">
                                                            <ChevronRight size={14} />
                                                        </span>
                                                        <span className="group-hover:text-monolith transition-colors">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 p-4 bg-monolith/5 border border-monolith/10 text-xs font-mono text-monolith/60 leading-relaxed rounded-sm">
                                                <span className="text-neon block mb-2">&gt; DIAGNOSTIC_LOG:</span>
                                                {selectedProject.details}
                                            </div>
                                        </div>

                                        {/* Right Col: Stack & Actions */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-2 text-xs font-mono text-monolith/40 uppercase tracking-widest border-b border-monolith/10 pb-2">
                                                <Code2 size={14} />
                                                <span>Loaded_Modules</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.stack.map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1.5 bg-monolith/5 border border-monolith/10 text-xs font-mono text-monolith/70 hover:border-neon/40 hover:text-neon transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-auto flex flex-col gap-3">
                                                <div className="text-xs font-mono text-monolith/40 uppercase tracking-widest mb-1">
                                                    &gt; MANUAL_OVERRIDES
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {selectedProject.github && (
                                                        <a
                                                            href={selectedProject.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 p-4 border border-monolith/20 bg-monolith/5 hover:bg-monolith/10 hover:border-neon/50 text-monolith transition-all group"
                                                        >
                                                            <Github size={18} className="group-hover:text-neon transition-colors" />
                                                            <span className="font-mono text-xs font-bold">SOURCE</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>

    );
}
