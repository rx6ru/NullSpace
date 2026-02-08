"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group pointer-events-auto relative flex items-center justify-center w-12 h-12 rounded-full border border-neutral-400 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors overflow-hidden bg-neutral-200/50 dark:bg-white/10 backdrop-blur-sm shadow-sm"
            aria-label="Toggle Theme"
        >
            <motion.span
                key={isDark ? "dark" : "light"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-sans font-bold text-monolith leading-none pb-[3px]"
            >
                ∅
            </motion.span>
        </button>
    );
}
