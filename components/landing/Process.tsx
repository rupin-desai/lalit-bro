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
                        className="bg-white p-6 md:p-12 rounded-[2.5rem] border border-gray-200/60 transition-all duration-300 hover:border-[#FF014F]/30 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 font-rajdhani font-black text-9xl text-[#FF014F] leading-none select-none -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500">
                            01
                        </div>
                        <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#FF014F] text-sm font-bold tracking-widest uppercase mb-6">
                            Phase 1
                        </span>
                        <h3 className="text-3xl font-bold text-[#1d1d1d] mb-4 font-rajdhani">
                            Digital Marketing Clarity Audit
                        </h3>
                        <p className="text-lg text-[#4b5563] mb-6 leading-relaxed">
                            <span className="font-bold text-[#1d1d1d]">Purpose:</span> Identify what’s working, what’s not, and what lacks logic.
                        </p>

                        <div className="space-y-4 mb-8 text-[#1d1d1d] font-medium text-base">
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-[#FF014F] rounded-full mr-3 mt-2 shrink-0"></span>
                                <div>
                                    Duration: 45–60 minutes
                                    <br />
                                    <span className="text-sm text-[#4b5563] font-normal">(Founder + Marketing Head)</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-gray-100">
                            <div>
                                <p className="text-xs font-bold text-red-500 uppercase mb-2 tracking-wider">This is NOT:</p>
                                <ul className="space-y-2 text-sm text-[#4b5563]">
                                    <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0" /> Tool audits</li>
                                    <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0" /> Platform reports</li>
                                    <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0" /> Dashboard reviews</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-green-600 uppercase mb-2 tracking-wider">This IS:</p>
                                <p className="text-sm text-[#1d1d1d] font-medium flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Review of marketing thinking & decision logic
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm font-bold text-[#1d1d1d] mb-3 uppercase tracking-wider">We Cover:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-base text-[#4b5563]">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FF014F] rounded-full mt-2 shrink-0"></span>
                                    Business goals vs marketing goals
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FF014F] rounded-full mt-2 shrink-0"></span>
                                    Funnel clarity (or absence)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FF014F] rounded-full mt-2 shrink-0"></span>
                                    Budget logic & spend direction
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FF014F] rounded-full mt-2 shrink-0"></span>
                                    Content intent & focus
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#FF014F] rounded-full mt-2 shrink-0"></span>
                                    Current growth bottlenecks
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <p className="text-base text-[#1d1d1d] font-bold">
                                <span className="text-[#FF014F]">Outcome:</span> Clear understanding of the <span className="italic">real</span> problems and leak points.
                            </p>
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
                                <span className="font-bold text-[#1d1d1d]">Purpose:</span> Convert clarity into leadership decisions
                            </p>

                            <div className="mb-8">
                                <p className="text-sm font-bold text-[#1d1d1d] mb-3 uppercase tracking-wider">We Define:</p>
                                <ul className="space-y-2 text-base text-[#4b5563]">
                                    {[
                                        'Clear marketing objective',
                                        'Funnel-level priorities',
                                        'Budget allocation logic',
                                        'Content & performance alignment'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm font-bold text-[#1d1d1d] mb-3 uppercase tracking-wider">Key Outputs:</p>
                                <ul className="space-y-4 text-base text-[#4b5563]">
                                    <li className="flex flex-col gap-1">
                                        <span className="font-bold text-[#1d1d1d]">Things to STOP immediately:</span>
                                        <span>Activities draining resources without strategic value.</span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="font-bold text-[#1d1d1d]">Things to MULTIPLY:</span>
                                        <span>High-impact actions that drive measurable growth.</span>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <span className="font-bold text-[#1d1d1d]">Key strategic blind spot:</span>
                                        <span>The key insight holding back growth that wasn't visible before.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-base text-[#1d1d1d] font-medium italic">
                                    "These decisions become a <span className="font-bold not-italic">reference for leadership</span>, not a report that sits unused."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
