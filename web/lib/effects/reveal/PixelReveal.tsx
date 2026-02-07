"use client";

import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

interface PixelRevealProps {
    /** Delay before the effect starts (in seconds) */
    delay?: number;
    /** Number of columns/rows in the grid (higher = smaller pixels) */
    gridSize?: number;
    /** Color of the overlay (default: white) */
    color?: string;
    /** Duration range for the total effect */
    duration?: number;
}

export function PixelReveal({
    delay = 0,
    gridSize = 12, // Default 12x12 grid
    color = "white",
    duration = 0.5
}: PixelRevealProps) {
    // We need to know dimensions to build the grid, but we can't easily measure 
    // without a ref/effect. simpler strategy: Use a flexible grid that fills space.
    // CSS Grid can handle 'auto-fill' but we need specific number of elements to animate.

    // Strategy: Render enough blocks to cover a typical card, overflow hidden handles the rest.
    // Or simpler: Use a percentage based grid (e.g. 10x10)

    const [isMounted, setIsMounted] = useState(false);

    // Pre-calculate random delays for a fixed grid (e.g. 12x12 = 144 blocks covers most aspect ratios comfortably)
    // Grid Setup
    const columns = gridSize;
    const rows = gridSize;
    const totalBlocks = columns * rows;

    const blockDelays = useMemo(() => {
        return Array.from({ length: totalBlocks }).map(() => Math.random() * duration);
    }, [totalBlocks, duration]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className={`absolute inset-0 bg-${color} z-20`} />;

    return (
        <div
            className="absolute inset-0 z-20 flex flex-wrap content-start"
            style={{ pointerEvents: "none" }}
        >
            {blockDelays.map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: delay + d,
                        duration: 0, // Instant disappearance for "crispy" pixel effect
                        ease: "linear"
                    }}
                    style={{
                        width: `${100 / columns}%`,
                        height: `${100 / rows}%`,
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
}
