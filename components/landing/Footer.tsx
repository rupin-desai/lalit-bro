'use client';
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../AnimationUtils';

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1d] pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Brand Section */}
                    <motion.div className="space-y-6" variants={fadeUp}>
                        <a href="#" className="bg-white px-5 py-3 rounded-lg shadow-sm inline-flex items-center gap-1.5 italic">
                            <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#1d1d1d] tracking-tighter">CA KAPIL</span>
                            <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#FF5722] tracking-tighter">CHANDAK</span>
                        </a>
                        <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                            Helping businesses scale with clarity and direction. We build sustainable growth engines for modern brands.
                        </p>

                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeUp}>
                        <h3 className="text-white font-bold text-xl mb-6 font-rajdhani">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Outcomes', 'Process', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-[#FF5722] transition-colors flex items-center gap-2 group text-base"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FF5722]" />
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
                                <div className="w-10 h-10 rounded-full bg-[#FF5722]/10 flex items-center justify-center text-[#FF5722] shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Email us at</p>
                                    <a href="mailto:connect@digioutreach.com" className="text-white font-medium hover:text-[#FF5722] transition-colors text-lg">
                                        connect@digioutreach.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FF5722]/10 flex items-center justify-center text-[#FF5722] shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Call us at</p>
                                    <a href="tel:+919429690981" className="text-white font-medium hover:text-[#FF5722] transition-colors text-lg">
                                        +91 94296 90981
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <div className="border-t border-gray-800 pt-8 flex justify-center items-center">
                    <p className="text-gray-500 text-base">
                        © {new Date().getFullYear()} CA Kapil Chandak. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
