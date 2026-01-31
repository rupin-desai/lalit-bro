'use client';
import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail, MapPin, ArrowRight, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../AnimationUtils';

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1d] pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Brand Section */}
                    <motion.div className="space-y-6" variants={fadeUp}>
                        <a href="#" className="flex items-center gap-2">
                            <img src="/assets/reeni/logo-white.png" alt="Lalit Bro" className="h-10" />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Helping businesses scale with clarity and direction. We build sustainable growth engines for modern brands.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF014F] hover:border-[#FF014F] transition-all duration-300 group"
                                >
                                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeUp}>
                        <h3 className="text-white font-bold text-xl mb-6 font-rajdhani">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Outcomes', 'Process', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-[#FF014F] transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FF014F]" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={fadeUp}>
                        <h3 className="text-white font-bold text-xl mb-6 font-rajdhani">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FF014F]/10 flex items-center justify-center text-[#FF014F] shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Email us at</p>
                                    <a href="mailto:connect@lalit.com" className="text-white font-medium hover:text-[#FF014F] transition-colors">
                                        connect@lalit.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FF014F]/10 flex items-center justify-center text-[#FF014F] shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Located at</p>
                                    <p className="text-white font-medium">
                                        Mumbai, India
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Lalit Bro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
