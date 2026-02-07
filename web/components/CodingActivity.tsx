"use client";

import { motion } from "motion/react";
import ActiveGridBackground from "@/components/ActiveGridBackground";
import SectionDecorator from "@/components/SectionDecorator";
import { Code2, Terminal, Cpu } from "lucide-react";

const STATS = {
    totalTime: "519 hrs 43 mins",
    dailyAverage: "1 hr 20 mins",
    languages: [
        { name: "TypeScript", percent: 39.33, color: "#3178c6" },
        { name: "Kotlin", percent: 23.32, color: "#7f52ff" },
        { name: "Git Config", percent: 21.99, color: "#f14e32" },
        { name: "Markdown", percent: 12.81, color: "#ffffff" },
        { name: "JSON", percent: 2.21, color: "#f1e05a" },
    ],
    editors: [
        { name: "Zed", percent: 89.88 },
        { name: "Android Studio", percent: 10.12 },
    ],
    os: "Linux (100%)",
};

export default function CodingActivity() {
    return (
        <section className="bg-black py-24 px-4 md:px-12 relative z-20 border-t border-grid-dim overflow-hidden">
            <ActiveGridBackground />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
                {/* Header */}
                <div className="flex items-center gap-4 text-neon">
                    <Cpu className="w-6 h-6" />
                    <h2 className="text-monolith font-bold text-xl tracking-tighter">
                         // SYSTEM_METRICS
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Language Distribution */}
                    <SectionDecorator className="flex flex-col gap-8 h-full">
                        <div className="flex items-center justify-between text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
                            <span>Language Distribution</span>
                            <span>Total: {STATS.totalTime}</span>
                        </div>

                        <div className="flex flex-col gap-6">
                            {STATS.languages.map((lang, index) => (
                                <div key={lang.name} className="flex flex-col gap-2">
                                    <div className="flex justify-between text-sm font-space-mono text-gray-400">
                                        <span>{lang.name}</span>
                                        <span>{lang.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: lang.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionDecorator>

                    {/* Right: Environment Stats */}
                    <div className="flex flex-col gap-8">
                        {/* Editors */}
                        <SectionDecorator className="p-6 border border-white/5 bg-neutral-950/50">
                            <div className="flex items-center gap-3 text-gray-500 font-mono text-sm tracking-widest uppercase mb-6">
                                <Terminal size={16} />
                                <span>Environment / Editors</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                {STATS.editors.map((editor) => (
                                    <div key={editor.name} className="flex flex-col gap-2">
                                        <div className="flex justify-between text-sm font-space-mono text-gray-400">
                                            <span>{editor.name}</span>
                                            <span>{editor.percent}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${editor.percent}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="h-full bg-neon"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionDecorator>

                        {/* OS & Daily Average */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 border border-white/5 bg-neutral-950/50 flex flex-col gap-2 items-center justify-center text-center">
                                <span className="text-gray-500 text-xs font-mono uppercase">Operating System</span>
                                <span className="text-xl font-bold text-monolith text-white">{STATS.os}</span>
                            </div>
                            <div className="p-6 border border-white/5 bg-neutral-950/50 flex flex-col gap-2 items-center justify-center text-center">
                                <span className="text-gray-500 text-xs font-mono uppercase">Daily Average</span>
                                <span className="text-xl font-bold text-neon">{STATS.dailyAverage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
