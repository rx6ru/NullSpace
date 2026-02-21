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
    ExternalLink,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import { clsx } from "clsx";
import dynamic from "next/dynamic";

const ActiveGridBackground = dynamic(() => import("@/components/ActiveGridBackground"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-[-1]" />
});

import { PROJECTS, type Project } from "@/lib/data/projects";

// --- Main Layout ---

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
                        <h2 className="text-4xl md:text-5xl font-bold text-monolith tracking-tighter uppercase break-all sm:break-normal">
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-monolith/20 bg-void/50 backdrop-blur-sm shadow-2xl overflow-hidden rounded-lg">

                    {/* Left Panel: Process Queue (Sidebar & Mobile Accordion) */}
                    <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-monolith/20 flex flex-col h-auto lg:h-[700px]">
                        <div className="p-4 border-b border-monolith/10 bg-monolith/5 text-xs font-mono text-monolith/50 flex justify-between items-center sticky top-0 z-10">
                            <span>&gt; SELECT_PROJECT</span>
                            <Activity size={14} className="text-neon" />
                        </div>

                        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-monolith/10 hover:scrollbar-thumb-monolith/20">
                            {PROJECTS.map((project) => (
                                <div key={project.id} className="relative border-b border-monolith/10">
                                    <button
                                        onClick={() => setSelectedId(selectedId === project.id ? "" : project.id)} // Toggle on mobile, select on desktop
                                        className={clsx(
                                            "w-full text-left p-5 transition-all duration-200 group relative overflow-hidden flex justify-between items-center",
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

                                        <div className="flex flex-col w-full pr-4">
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
                                        </div>

                                        {/* Mobile Accordion Caret */}
                                        <div className="lg:hidden text-monolith/40">
                                            {selectedId === project.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </button>

                                    {/* Mobile Inline Details (Accordion) */}
                                    <AnimatePresence>
                                        {selectedId === project.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="lg:hidden overflow-hidden bg-void/80"
                                            >
                                                <div className="p-5 border-t border-monolith/10 flex flex-col gap-6">
                                                    <div className="text-sm font-light text-monolith/90 leading-relaxed">
                                                        {project.description}
                                                    </div>

                                                    <div className="flex flex-col gap-4">
                                                        <div className="flex items-center gap-2 text-xs font-mono text-monolith/40 uppercase tracking-widest border-b border-monolith/10 pb-2">
                                                            <Server size={14} />
                                                            <span>System_Architecture</span>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {project.features.map((feature, i) => (
                                                                <li key={i} className="flex gap-3 text-xs text-monolith/70">
                                                                    <span className="text-neon mt-0.5"><ChevronRight size={12} /></span>
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="flex flex-col gap-4">
                                                        <div className="flex items-center gap-2 text-xs font-mono text-monolith/40 uppercase tracking-widest border-b border-monolith/10 pb-2">
                                                            <Code2 size={14} />
                                                            <span>Loaded_Modules</span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.stack.map(tech => (
                                                                <span key={tech} className="px-2 py-1 bg-monolith/5 border border-monolith/10 text-[10px] font-mono text-monolith/70">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-2 flex items-center justify-center gap-2 p-3 border border-monolith/20 bg-monolith/5 text-monolith"
                                                        >
                                                            <Github size={16} />
                                                            <span className="font-mono text-xs font-bold">SOURCE</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Diagnostics (Detail View) - HIDDEN ON MOBILE */}
                    <div className="hidden lg:flex col-span-1 lg:col-span-8 flex-col h-full relative overflow-hidden bg-dots-pattern border-t lg:border-t-0 border-monolith/20">
                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] opacity-20 bg-[length:100%_2px,3px_100%]" />

                        <AnimatePresence mode="wait">
                            {selectedProject && (
                                <motion.div
                                    key={selectedProject.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 flex flex-col h-full relative z-10"
                                >
                                    {/* Detail Header */}
                                    <div className="p-8 pb-4 border-b border-monolith/10 flex flex-col gap-4 relative overflow-hidden">
                                        <div className="flex items-center gap-2 text-neon/70 font-mono text-xs relative z-10">
                                            <Cpu size={14} />
                                            <span>ACTIVE_PROJECT: {selectedProject.name.toUpperCase()}</span>
                                        </div>
                                        <h1 className="text-7xl font-bold font-space-mono text-monolith opacity-10 leading-[0.8] tracking-tighter absolute right-6 top-6 select-none pointer-events-none">
                                            {selectedProject.pid.split("_")[1]}
                                        </h1>
                                        <div className="text-2xl font-light text-monolith/90 max-w-2xl leading-relaxed relative z-10">
                                            {selectedProject.description}
                                        </div>
                                    </div>

                                    {/* Detail Content Scrollable Area */}
                                    <div className="flex-1 p-8 overflow-y-auto">
                                        <div className="grid grid-cols-2 gap-12">
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
                                                    <span className="text-neon block mb-2">&gt; OVERVIEW:</span>
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
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>

    );
}
