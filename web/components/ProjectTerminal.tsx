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
        name: "HYPER_VOID",
        description: "Algorithmic trading engine with sub-ms execution.",
        stack: ["RUST", "TOKIO", "GRPC"],
        details: "A high-frequency trading system architected for minimal latency. Features a custom order matching engine, distributed risk checks, and real-time telemetry visualizer.",
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        id: "02",
        name: "NEURAL_SHADE",
        description: "Generative AI texture synthesizer for WebGL.",
        stack: ["NEXT.JS", "THREE.JS", "STABLE_DIFFUSION"],
        details: "Browser-based tool for generating seamless PBR textures using latent diffusion models. Integrated directly into a 3D preview environment with real-time lighting adjustment.",
        github: "https://github.com",
    },
    {
        id: "03",
        name: "ECHO_PROTOCOL",
        description: "Decentralized identity verification layer.",
        stack: ["SOLIDITY", "ETHEREUM", "ZK-SNARKS"],
        details: "Zero-knowledge proof implementation for verifiable credentials. Allows users to prove ownership of assets without revealing wallet addresses.",
        live: "https://example.com",
    },
];

import ActiveGridBackground from "@/components/ActiveGridBackground";

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

                <div className="border-t border-grid-dim">
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
                </div>
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
