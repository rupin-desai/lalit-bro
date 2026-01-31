'use client';
import React from 'react';
import { X, Check, Target, Filter, Wallet, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';

export default function Process() {
    return (
        <section className="py-12 bg-transparent" id="process">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span variants={fadeUp} className="text-[#FF014F] font-bold text-sm uppercase tracking-widest block">How It Works</motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mt-3 mb-6 font-rajdhani">
                        A 2-Phase Strategic <br /> Clarity Engagement
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[#4b5563] text-lg max-w-2xl mx-auto italic">
                        (Thinking & decisions — not tools or dashboards)
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative max-w-6xl mx-auto">
                    {/* Phase 1 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-white p-12 rounded-[2.5rem] border border-gray-200/60 transition-all duration-300 hover:border-[#FF014F]/30 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 font-rajdhani font-black text-9xl text-[#FF014F] leading-none select-none -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500">
                            01
                        </div>
                        <div className="relative z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#FF014F] text-sm font-bold tracking-widest uppercase mb-6">
                                Phase 1
                            </span>
                            <h3 className="text-3xl font-bold text-[#1d1d1d] mb-4 font-rajdhani">
                                Digital Marketing Clarity Audit
                            </h3>
                            <p className="text-lg text-[#4b5563] mb-8 leading-relaxed">
                                Identify what’s working, what’s not, and what lacks logic.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-[#1d1d1d] font-medium text-base">
                                    <span className="w-2 h-2 bg-[#FF014F] rounded-full mr-3"></span>
                                    Duration: 45–60 minutes
                                </div>
                                <div className="flex items-center text-[#1d1d1d] font-medium text-base">
                                    <span className="w-2 h-2 bg-[#FF014F] rounded-full mr-3"></span>
                                    Participants: Founder + Marketing Head
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                                <div>
                                    <p className="text-sm font-bold text-red-500 uppercase mb-2 tracking-wider">This is NOT:</p>
                                    <ul className="space-y-1 text-base text-[#4b5563]">
                                        <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Tool audits</li>
                                        <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Platform reports</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-green-600 uppercase mb-2 tracking-wider">This IS:</p>
                                    <p className="text-base text-[#1d1d1d] font-medium flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-600" /> Review of marketing thinking & logic
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phase 2 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-white p-12 rounded-[2.5rem] border border-gray-200/60 transition-all duration-300 hover:border-purple-500/30 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 font-rajdhani font-black text-9xl text-purple-600 leading-none select-none -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500">
                            02
                        </div>
                        <div className="relative z-10">
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-sm font-bold tracking-widest uppercase mb-6">
                                Phase 2
                            </span>
                            <h3 className="text-3xl font-bold text-[#1d1d1d] mb-4 font-rajdhani">
                                Growth Direction Blueprint
                            </h3>
                            <p className="text-lg text-[#4b5563] mb-8 leading-relaxed">
                                Convert clarity into leadership decisions.
                            </p>

                            <p className="text-base font-bold text-[#1d1d1d] mb-4 uppercase tracking-wide">We define:</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {[
                                    { text: 'Target Objective', Icon: Target },
                                    { text: 'Funnel Priorities', Icon: Filter },
                                    { text: 'Budget Logic', Icon: Wallet },
                                    { text: 'Content Alignment', Icon: TrendingUp }
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-50 text-[#1d1d1d] text-base font-medium rounded-lg border border-gray-100 flex items-center gap-2">
                                        <item.Icon className="w-4 h-4 text-purple-600" />
                                        {item.text}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-base text-purple-900 font-medium italic">
                                    "These decisions become a reference for leadership, not a report that sits unused."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
