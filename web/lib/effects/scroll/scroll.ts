/**
 * Scroll-based Animation Configs
 * 
 * Parallax and scroll-linked transform configurations.
 * Used for: Hero parallax, scroll progress, sticky elements.
 */

// Hero parallax - reduced aggressiveness to prevent motion sickness
export const heroParallax = {
    yRange: ["0%", "30%"] as [string, string],
    opacityRange: [1, 0] as [number, number],
    scaleRange: [1, 0.95] as [number, number],
    scrollOffset: ["start start", "end start"] as [string, string]
};

// Gentle parallax for background elements
export const gentleParallax = {
    yRange: ["0%", "15%"] as [string, string],
    opacityRange: [1, 0.5] as [number, number],
    scrollOffset: ["start start", "end start"] as [string, string]
};

// Aggressive parallax for dramatic effect
export const dramaticParallax = {
    yRange: ["0%", "50%"] as [string, string],
    opacityRange: [1, 0] as [number, number],
    scaleRange: [1, 0.8] as [number, number],
    scrollOffset: ["start start", "end start"] as [string, string]
};

// Scroll progress bar spring config
export const scrollProgressSpring = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
};
