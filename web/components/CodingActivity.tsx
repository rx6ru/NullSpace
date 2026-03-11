"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import ActiveGridBackground from "@/components/ActiveGridBackground";
import { Terminal } from "lucide-react";

// --- Data ---
const STATS = {
    totalTime: "21 hrs 21 mins",
    dailyAverage: "3 hrs 3 mins",
    uptime: "99.9%",
    languages: [
        { name: "Python", percent: 58 },
        { name: "Markdown", percent: 24 },
        { name: "Bash", percent: 6 },
        { name: "TypeScript", percent: 6 },
        { name: "Git Config", percent: 4 },
    ],
    editors: [
        { name: "Antigravity", percent: 66 },
        { name: "Zed", percent: 34 },
    ],
    os: "Arch Linux (Kernel 6.8.9)",
};

// --- Components ---

/**
 * Renders an ASCII progress bar.
 * Example: [///////////////////.......] 65%
 */
function AsciiBar({ percent, length = 40, color, delay = 0, visible = false }: { percent: number; length?: number; color?: string; delay?: number; visible?: boolean }) {
    const filledCount = Math.round((percent / 100) * length);
    const [currentFilled, setCurrentFilled] = useState(0);

    useEffect(() => {
        if (!visible) return;

        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setCurrentFilled(prev => {
                    if (prev < filledCount) return prev + 1;
                    clearInterval(interval);
                    return prev;
                });
            }, 15); // Fast typing effect
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [visible, filledCount, delay]);

    // Ensure we don't pass a negative number to .repeat() if recalculation causes length to shrink below currentFilled
    const emptyCount = Math.max(0, length - currentFilled);
    const bar = "█".repeat(currentFilled) + "░".repeat(emptyCount);

    return (
        <span className="font-mono text-xs md:text-sm whitespace-pre">
            <span className="hidden sm:inline">[</span>
            <span style={{ color: color || "inherit" }}>{bar}</span>
            <span className="hidden sm:inline">] </span>
            <span className="inline sm:hidden"> </span>
            {percent.toString().padStart(3)}%
        </span>
    );
}

export default function CodingActivity() {
    // Animation Stages
    // 0: Initial
    // 1: Command Typed
    // 2: System Init
    // 3: Connection
    // 4: Modules & Uptime
    // 5: Grid Header (Languages)
    // 6: Languages Reveal
    // 7: Grid Header (Env)
    // 8: Env Reveal
    // 9: Footer
    const [step, setStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [stats, setStats] = useState(STATS);
    const [loading, setLoading] = useState(true);
    const [barLength, setBarLength] = useState(60);
    // Use a ref for the column to measure available width
    const columnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (columnRef.current) {
                const width = columnRef.current.offsetWidth;
                // Estimate mono char width (approx 8px for text-sm)
                // On mobile we need more aggressive scaling
                const divisor = width < 400 ? 11 : 8.5;
                const calculated = Math.floor(width / divisor) - (width < 400 ? 4 : 8);
                setBarLength(Math.max(10, calculated)); // Allow much shorter bars on mobile
            }
        };

        // Initial calc with delay to ensure layout is ready
        // We need step >= 5 for the column to exist
        if (step >= 5) {
            // Small delay to let DOM settle
            const timer = setTimeout(updateWidth, 100);

            // Observe resize
            const observer = new ResizeObserver(updateWidth);
            if (columnRef.current) {
                observer.observe(columnRef.current);
            }

            return () => {
                observer.disconnect();
                clearTimeout(timer);
            };
        }
    }, [step]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && step === 0) {
                    runBootSequence();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [step]);

    useEffect(() => {
        // Fetch real status
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/wakatime');
                if (!res.ok) throw new Error('Failed');
                const data = await res.json();

                // transform wakatime data to our format
                // data.data is typical wakatime response structure
                if (data && data.data) {
                    const d = data.data;
                    setStats({
                        totalTime: d.human_readable_total_including_other_language || STATS.totalTime,
                        dailyAverage: d.human_readable_daily_average_including_other_language || STATS.dailyAverage,
                        uptime: "100%", // Wakatime doesn't give uptime, keep mock or calculate
                        os: "Arch Linux (Kernel 6.x)", // Keep static or fetch from UA if we really wanted to be meta
                        languages: d.languages?.slice(0, 5).map((l: any) => ({
                            name: l.name,
                            percent: l.percent
                        })) || STATS.languages,
                        editors: d.editors?.slice(0, 5).map((e: any) => ({
                            name: e.name,
                            percent: e.percent
                        })) || STATS.editors
                    });
                }
            } catch (e) {
                console.log("Using cached/mock stats");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const runBootSequence = () => {
        const timings = [
            500,  // 1: Command
            800,  // 2: Init
            1500, // 3: Connect (Increased for fetch realism)
            2000, // 4: Kernel
            2500, // 5: Lang Header
            2700, // 6: Lang Bars
            3500, // 7: Env Header
            3700, // 8: Env Bars
            4500  // 9: Footer
        ];

        timings.forEach((time, index) => {
            setTimeout(() => setStep(index + 1), time);
        });
    };

    return (
        <section id="stats" ref={containerRef} className="bg-void py-0 h-auto relative z-20 border-t border-grid-dim overflow-hidden font-mono flex flex-col transition-colors duration-300">
            <ActiveGridBackground />

            <div className="w-full flex flex-col relative z-10">
                {/* Terminal Window Container */}
                <div className="border-x border-b border-grid-dim bg-void/90 backdrop-blur-md flex flex-col shadow-2xl mx-4 md:mx-6 mb-12 mt-0 rounded-b-lg transition-colors duration-300">

                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-grid-dim bg-monolith/5 sticky top-0 z-20 transition-colors duration-300">
                        <div className="flex items-center gap-3 text-xs md:text-sm text-monolith/60">
                            <Terminal size={16} />
                            <span>root@rxbru:~/system_metrics</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-grid-dim/50" />
                            <div className="w-3 h-3 rounded-full bg-grid-dim/50" />
                            <div className="w-3 h-3 rounded-full bg-grid-dim/50" />
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 sm:p-6 md:p-12 text-sm md:text-base text-monolith/80 space-y-6 font-mono leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-track-transparent scrollbar-thumb-monolith/10">

                        {/* Command Line */}
                        {step >= 1 && (
                            <div className="flex gap-2 text-neon">
                                <span>$</span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="typing-effect"
                                >
                                    ./fetch_metrics.sh --range 7d --verbose
                                </motion.span>
                            </div>
                        )}

                        {/* System Status Output */}
                        <div className="space-y-1 text-xs md:text-sm text-monolith/60 font-mono">
                            {step >= 2 && <p>&gt; INITIALIZING SYSTEM_MONITOR_V2...</p>}
                            {step >= 3 && <p>&gt; CONNECTING TO WAKATIME_API... <span className="text-neon">OK (24ms)</span></p>}
                            {step >= 3 && <p>&gt; DATA_RANGE: <span className="text-monolith">LAST_7_DAYS</span></p>}
                            {step >= 4 && (
                                <>
                                    <p>&gt; LOADING KERNEL MODULES... <span className="text-neon">DONE</span></p>
                                    <p>&gt; UPTIME: <span className="text-monolith">{stats.uptime}</span> | OS: <span className="text-monolith">{stats.os}</span></p>
                                    <div className="h-px w-full bg-grid-dim/30 my-6" />
                                </>
                            )}
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16 w-full max-w-full">

                            {/* Left Col: Languages */}
                            {step >= 5 && (
                                <div ref={columnRef} className="space-y-6 w-full overflow-hidden">
                                    <div className="text-neon uppercase tracking-widest text-xs md:text-sm mb-4 border-b border-grid-dim/30 pb-2 w-fit">
                                        // LANGUAGE_DISTRIBUTION
                                    </div>
                                    <div className="flex flex-col gap-4 w-full">
                                        {stats.languages.map((lang, i) => (
                                            <div key={lang.name} className="flex flex-col gap-1 w-full">
                                                <div className="flex justify-between text-xs md:text-sm text-monolith/50 w-full">
                                                    <span>{lang.name}</span>
                                                </div>
                                                <AsciiBar
                                                    percent={lang.percent}
                                                    length={barLength}
                                                    color={i === 0 ? "#3178c6" : i === 1 ? "#7f52ff" : undefined}
                                                    visible={step >= 6}
                                                    delay={i * 100}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Right Col: Editors & Stats */}
                            {step >= 7 && (
                                <div className="space-y-10 w-full overflow-hidden">
                                    <div className="space-y-6 w-full">
                                        <div className="text-neon uppercase tracking-widest text-xs md:text-sm mb-4 border-b border-grid-dim/30 pb-2 w-fit">
                                            // ENV_CONFIG
                                        </div>
                                        <div className="flex flex-col gap-4 w-full">
                                            {stats.editors.map((editor, i) => (
                                                <div key={editor.name} className="flex flex-col gap-1 w-full">
                                                    <span className="text-xs md:text-sm text-monolith/50">{editor.name}</span>
                                                    <AsciiBar
                                                        percent={editor.percent}
                                                        length={barLength}
                                                        visible={step >= 8}
                                                        delay={i * 100}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="p-6 border border-dashed border-grid-dim text-xs md:text-sm space-y-3 text-monolith/60 max-w-md bg-monolith/5"
                                    >
                                        <div className="flex justify-between">
                                            <span>TOTAL_TIME (7D):</span>
                                            <span className="text-monolith font-bold">{stats.totalTime}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>DAILY_AVERAGE:</span>
                                            <span className="text-monolith font-bold">{stats.dailyAverage}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </div>

                        {/* Footer Prompt */}
                        {step >= 9 && (
                            <div className="mt-4 pt-4 border-t border-grid-dim/30 text-monolith/50 text-xs md:text-sm">
                                <span>root@rxbru:~/system_metrics$ </span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="text-neon"
                                >
                                    _
                                </motion.span>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
