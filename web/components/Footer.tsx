"use client";

import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const socialLinks = [
    { href: "https://github.com/rx6ru", label: "GitHub", icon: Github },
    { href: "https://x.com/RxBRU_", label: "X/Twitter", icon: Twitter },
    { href: "https://www.linkedin.com/in/rxbru/", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
    return (
        <footer className="bg-void border-t border-grid-dim py-12 px-4 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold font-space-mono text-monolith tracking-tighter">
                        RXBRU®
                    </span>
                    <p className="text-monolith/60 font-mono text-xs uppercase tracking-wide">
                        Backend Engineer // System Architect
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-3">
                    <span className="text-monolith/50 font-mono text-xs uppercase tracking-widest mb-2">
                        Navigation
                    </span>
                    <nav className="flex flex-col gap-2 font-mono text-sm">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="text-monolith/60 hover:text-neon transition-colors cursor-pointer"
                        >
                            → Home
                        </a>
                        <a href="#skills" className="text-monolith/60 hover:text-neon transition-colors">
                            → Skills
                        </a>
                        <a href="#projects" className="text-monolith/60 hover:text-neon transition-colors">
                            → Projects
                        </a>
                        <a href="#stats" className="text-monolith/60 hover:text-neon transition-colors">
                            → Stats
                        </a>
                    </nav>
                </div>

                {/* Social & Legal */}
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-monolith/50 font-mono text-xs uppercase tracking-widest mb-3 block">
                            Connect
                        </span>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="p-2 border border-monolith/10 text-monolith/60 hover:text-neon hover:border-neon/50 transition-colors"
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-monolith/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-monolith/60 font-mono text-xs">
                    © {CURRENT_YEAR} RXBRU. All systems operational.
                </p>
                <div className="flex items-center gap-2 text-monolith/60 font-mono text-xs">
                    <span>Built with</span>
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-monolith/50 hover:text-neon transition-colors flex items-center gap-1"
                    >
                        Next.js
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span>+</span>
                    <a
                        href="https://framer.com/motion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-monolith/50 hover:text-neon transition-colors flex items-center gap-1"
                    >
                        Motion
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
