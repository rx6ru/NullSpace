"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, Terminal, ExternalLink, Github } from "lucide-react";
import { clsx } from "clsx";

interface Project {
    id: string;
    name: string;
    description: string;
    stack: string[];
    details: string;
    github?: string;
    live?: string;
}

const projects: Project[] = [
    {
        id: "01",
        name: "WOMBAT",
        description: "Secure API vault and proxy management system.",
        stack: ["NEXT.JS 16", "SUPABASE", "PRISMA", "EXPRESS", "UPSTASH"],
        details: "Centralized credential management platform. Allows creating granular proxy APIs to share access without exposing master keys. Backend powered by Express & Prisma with Upstash for rate limiting.",
        github: "https://github.com/rx6ru/wombat",
    },
    {
        id: "02",
        name: "EDVO",
        description: "Local-first cross-platform security app.",
        stack: ["KOTLIN MULTIPLATFORM", "COMPOSE UI", "SQLDELIGHT", "KTOR"],
        details: "Security-focused application built with Kotlin Multiplatform (Android/iOS/Desktop). Ensures zero-knowledge privacy by performing all encryption and data storage locally using SQLDelight and AtomicFU.",
        github: "https://github.com/rx6ru/EDVO",
    },
    {
        id: "03",
        name: "CONCIZE",
        description: "Chrome Extension meeting assistant pipeline.",
        stack: ["CHROME EXTENSION", "EXPRESS", "RABBITMQ", "GROQ SDK", "QDRANT"],
        details: "Browser extension for capturing meeting audio. Uses an async microservices pipeline (RabbitMQ) to chunk audio, generating transcripts via Groq and semantic embeddings for Qdrant-powered chat.",
        github: "https://github.com/rx6ru/Concize",
    },
    {
        id: "04",
        name: "W2CHAT",
        description: "Real-time MERN stack chat application.",
        stack: ["MERN STACK", "SOCKET.IO", "JWT", "REACT"],
        details: "Instant bidirectional communication platform. Features secure JWT authentication, persistent message history, and a responsive React interface with real-time socket events.",
        github: "https://github.com/rx6ru/W2Chat",
    },
];

import ActiveGridBackground from "@/components/ActiveGridBackground";
import SectionDecorator from "@/components/SectionDecorator";

export default function ProjectTerminal() {

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="projects" className="bg-black py-32 px-4 md:px-12 border-t border-grid-dim relative z-20 overflow-hidden">
            <ActiveGridBackground />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <Terminal className="w-6 h-6 text-neon" />
                    <h2 className="text-monolith font-bold text-xl tracking-tighter">
                // PROJECT_MANIFEST
                    </h2>
                </div>

                <SectionDecorator label="ACTIVE_DEPLOYMENTS" className="border-t border-grid-dim">
                    {/* Header Row (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 py-4 px-4 md:px-6 text-xs font-mono text-gray-500 border-b border-grid-dim/50">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-3">PROJECT</div>
                        <div className="col-span-4">DESCRIPTION</div>
                        <div className="col-span-4">STACK</div>
                    </div>

                    {/* Rows */}
                    {projects.map((project) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => toggleExpand(project.id)}
                        />
                    ))}
                </SectionDecorator>
            </div>
        </section>
    );
}

function ProjectRow({ project, isExpanded, onToggle }: { project: Project; isExpanded: boolean; onToggle: () => void }) {
    return (
        <motion.div
            className={clsx(
                "border-b border-grid-dim group cursor-pointer transition-colors duration-300 relative",
                isExpanded ? "!bg-neutral-900" : "!bg-black hover:!bg-neutral-950"
            )}
            onClick={onToggle}
        >
            {/* Main Row Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-6 px-4 md:px-6 gap-4 md:gap-0 items-start md:items-center font-mono">
                {/* ID */}
                <div className="col-span-1 text-gray-600 text-sm group-hover:text-neon transition-colors">
                    [{project.id}]
                </div>

                {/* Name */}
                <div className="col-span-11 md:col-span-3 text-lg md:text-xl font-bold text-monolith tracking-tight group-hover:text-neon transition-colors flex items-center gap-2">
                    {project.name}
                </div>

                {/* Description (Desktop) */}
                <div className="hidden md:block col-span-4 text-sm text-gray-400">
                    {project.description}
                </div>

                {/* Stack */}
                <div className="hidden md:flex col-span-4 gap-2 flex-wrap">
                    {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs border border-grid-dim px-2 py-1 text-gray-500 rounded-sm">
                            {tech}
                        </span>
                    ))}
                    <span className="ml-auto text-grid-dim group-hover:text-monolith transition-colors">
                        <ArrowDownRight className={clsx("w-5 h-5 transition-transform duration-300", isExpanded && "-rotate-180")} />
                    </span>
                </div>

                {/* Mobile View: Desc + Stack */}
                <div className="col-span-12 md:hidden flex flex-col gap-3 mt-2">
                    <p className="text-sm text-gray-400">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {project.stack.map(s => <span key={s} className="text-xs text-gray-600 border border-gray-800 px-1">{s}</span>)}
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="py-8 px-4 md:pr-6 md:pl-[calc(8.33%+1.5rem)] grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="font-sans text-gray-400 leading-relaxed max-w-xl">
                                <p>{project.details}</p>
                            </div>

                            <div className="flex flex-col gap-4 font-mono text-sm">
                                <div className="text-gray-500 mb-2">// ACTIONS</div>

                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-monolith hover:text-neon transition-colors group/link p-2 -ml-2 hover:bg-white/5 rounded">
                                        <Github className="w-4 h-4" />
                                        <span>{`> ACCESS_SOURCE_CODE`}</span>
                                    </a>
                                )}

                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-monolith hover:text-neon transition-colors group/link p-2 -ml-2 hover:bg-white/5 rounded">
                                        <ExternalLink className="w-4 h-4" />
                                        <span>{`> EXECUTE_LIVE_PREVIEW`}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
