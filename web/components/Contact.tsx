"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-void py-32 px-4 md:px-12 border-t border-grid-dim relative z-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 mb-16"
                >
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-neon" />
                        <h2 className="text-monolith font-bold text-xl tracking-tighter font-space-mono">
                            // ESTABLISH_CONNECTION
                        </h2>
                    </div>
                    <p className="text-monolith/60 font-mono text-sm max-w-xl">
                        Open for freelance projects, full-time opportunities, and interesting collaborations.
                        Response time: Usually within 24 hours.
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        {/* Email */}
                        <div className="group">
                            <span className="text-monolith/50 font-mono text-xs uppercase tracking-widest mb-2 block">
                                Primary Contact
                            </span>
                            <a
                                href="mailto:hello@rxbru.dev"
                                className="text-2xl md:text-3xl font-space-mono text-monolith hover:text-neon transition-colors flex items-center gap-3"
                            >
                                hello@rxbru.dev
                                <Send className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>

                        {/* Location */}
                        <div>
                            <span className="text-monolith/50 font-mono text-xs uppercase tracking-widest mb-2 block">
                                Location
                            </span>
                            <div className="flex items-center gap-2 text-lg font-mono text-monolith/70">
                                <MapPin className="w-4 h-4" />
                                <span>Remote / India</span>
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="mt-4 p-4 border border-neon/30 bg-neon/5 rounded">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-sm text-monolith">
                                    Currently available for new projects
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Quick Message Form (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                            Quick Message
                        </span>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-monolith/5 border border-monolith/10 px-4 py-3 font-mono text-sm text-monolith placeholder:text-monolith/50 focus:border-neon/50 focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-monolith/5 border border-monolith/10 px-4 py-3 font-mono text-sm text-monolith placeholder:text-monolith/50 focus:border-neon/50 focus:outline-none transition-colors"
                            />
                            <textarea
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="bg-monolith/5 border border-monolith/10 px-4 py-3 font-mono text-sm text-monolith placeholder:text-monolith/50 focus:border-neon/50 focus:outline-none transition-colors resize-none"
                            />
                            <button
                                type="button"
                                className="group bg-neon text-void font-mono font-bold py-3 px-6 hover:bg-monolith transition-colors flex items-center justify-center gap-2"
                            >
                                TRANSMIT_MESSAGE
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <p className="text-monolith/50 text-xs font-mono">
                            * Form is for demonstration. Use email for actual contact.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
