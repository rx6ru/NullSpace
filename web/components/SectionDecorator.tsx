"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionDecoratorProps {
    label?: string;
    children: ReactNode;
    className?: string; // Allow passing extra classes for positioning
}

export default function SectionDecorator({ label, children, className = "" }: SectionDecoratorProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Top-Left Corner Label - Removed per user request */}
            {/* <div className="absolute -top-12 left-0 md:-left-8 flex items-center gap-2 text-[10px] font-mono text-gray-500 tracking-widest uppercase opacity-50 select-none">
                <span className="text-neon">[</span>
                <span>{label}</span>
                <span className="text-neon">]</span>
            </div> */}

            {/* Content Slot */}
            {children}

            {/* Decorative Crosshair/Plus Marker (Bottom Right of section content usually) */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 text-monolith/30 font-mono text-xs select-none">
                +
            </div>
        </div>
    );
}
