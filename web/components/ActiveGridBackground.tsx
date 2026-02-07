"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

/**
 * Active Grid Background
 * 
 * A subtle, technical grid that sits behind content.
 * Features random "active" cells that flicker on/off to give a "system online" feel.
 */

// Configuration
const GRID_SIZE = 40; // Size of grid cells in pixels
const ACTIVE_CELL_CHANCE = 0.05; // Chance of a cell being active at any moment (0-1)
const UPDATE_INTERVAL = 2000; // How often to update active cells (ms)

export default function ActiveGridBackground() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [activeCells, setActiveCells] = useState<string[]>([]);

    // Resize handler to keep grid covering viewport
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Initial set
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Random cell activation logic
    useEffect(() => {
        if (dimensions.width === 0) return;

        const cols = Math.ceil(dimensions.width / GRID_SIZE);
        const rows = Math.ceil(dimensions.height / GRID_SIZE);
        const totalCells = cols * rows;

        const interval = setInterval(() => {
            const newActiveCells = new Set<string>();

            // Randomly select a few cells to be active
            const numActive = Math.floor(Math.random() * 5) + 2; // 2-6 cells active at once

            while (newActiveCells.size < numActive) {
                const col = Math.floor(Math.random() * cols);
                const row = Math.floor(Math.random() * rows);
                newActiveCells.add(`${col}-${row}`);
            }

            setActiveCells(Array.from(newActiveCells));
        }, UPDATE_INTERVAL);

        return () => clearInterval(interval);
    }, [dimensions]);

    // calculate grid lines
    // We use a CSS background pattern for the lines (performant)
    // And render actual divs only for active cells

    return (
        <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
            {/* Base Grid Lines (CSS Pattern) */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px)
                    `,
                    backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
                    maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" // Fade out at very top/bottom
                }}
            />

            {/* Active Flickering Cells */}
            {activeCells.map((key) => {
                const [col, row] = key.split("-").map(Number);
                return (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 0.4, 0.2, 0.6, 0], scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bg-neon/20 border border-neon/30"
                        style={{
                            left: col * GRID_SIZE,
                            top: row * GRID_SIZE,
                            width: GRID_SIZE,
                            height: GRID_SIZE,
                            boxShadow: "0 0 10px rgba(108, 66, 245, 0.2)" // Neon glow
                        }}
                    >
                        {/* Optional internal detail for "tech" feel */}
                        <div className="absolute top-1 right-1 w-1 h-1 bg-neon/50 rounded-full" />
                    </motion.div>
                );
            })}
        </div>
    );
}
