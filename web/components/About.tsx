"use client";

import { motion } from "motion/react";
import { User, Code2, Zap, Coffee } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "5+", icon: Code2 },
    { label: "Projects Delivered", value: "30+", icon: Zap },
    { label: "Cups of Coffee", value: "∞", icon: Coffee },
];

export default function About() {
    return (
        <section className="bg-void py-32 px-4 md:px-12 border-t border-grid-dim relative z-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <User className="w-6 h-6 text-neon" />
                    <h2 className="text-monolith font-bold text-xl tracking-tighter font-space-mono">
                        // ABOUT_ENTITY
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-monolith leading-tight tracking-tight">
                            Building systems that scale.
                            <br />
                            <span className="text-gray-500">Breaking the ones that don&apos;t.</span>
                        </h3>

                        <div className="flex flex-col gap-6 text-gray-400 text-base leading-relaxed font-sans">
                            <p>
                                I&apos;m a backend engineer obsessed with performance, clean architecture, and
                                building things that actually work at scale. My journey started with breaking
                                things—reverse engineering, security research, understanding how systems fail.
                                Now I build them to not.
                            </p>
                            <p>
                                Currently focused on <span className="text-monolith">AI infrastructure</span>,
                                <span className="text-monolith"> distributed systems</span>, and
                                <span className="text-monolith"> high-frequency data pipelines</span>. I
                                believe the best code is the code you don&apos;t write—but when you do, it
                                should be precise.
                            </p>
                            <p>
                                When not architecting backends, you&apos;ll find me exploring Web3 security,
                                contributing to open source, or optimizing systems that didn&apos;t ask to be
                                optimized.
                            </p>
                        </div>

                        {/* Quick Facts */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            {["Rust Enthusiast", "Open Source", "Remote-First", "Coffee > Sleep"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 border border-white/10 text-gray-500 font-mono text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Stats + Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-8"
                    >
                        {/* Image Placeholder */}
                        <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">👤</div>
                                <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">
                                    [PROFILE_IMAGE]
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col items-center p-4 bg-white/[0.02] border border-white/5"
                                >
                                    <stat.icon className="w-5 h-5 text-neon mb-2" />
                                    <span className="text-2xl font-bold font-space-mono text-monolith">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] text-gray-600 font-mono uppercase text-center mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
