/**
 * White Reveal Animation Variants
 * 
 * A fade-out overlay effect that reveals content underneath.
 * Used for: SkillsMatrix cards, can be used for any "reveal" entrance.
 */

import { Variants } from "motion/react";

// Standard white reveal - smooth fade out
export const whiteRevealVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 }
};

// Transitions for white reveal
export const whiteRevealTransition = {
    standard: (delay: number = 0) => ({
        delay,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const // Material Design standard
    }),
    fast: (delay: number = 0) => ({
        delay,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
    }),
    slow: (delay: number = 0) => ({
        delay,
        duration: 1.2,
        ease: [0.2, 0, 0.1, 1] as const
    })
};

// Language card specific timing
export const languageCardReveal = (index: number) => ({
    delay: index * 0.08,
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1] as const
});

// Domain card specific timing
export const domainCardReveal = (index: number) => ({
    delay: index * 0.12,
    duration: 0.7,
    ease: [0.2, 0, 0.1, 1] as const
});
