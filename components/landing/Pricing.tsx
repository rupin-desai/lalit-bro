'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';

export default function Pricing() {
    return (
        <section className="py-12 bg-transparent" id="pricing">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="text-[#FF014F] font-bold text-sm uppercase tracking-widest block">Honorarium</motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mt-3 mb-4 font-rajdhani">
                        Pricing & Investment
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="max-w-5xl mx-auto bg-[#F9FAFB] rounded-3xl p-6 md:p-8 lg:p-14 border border-gray-100 shadow-sm relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                        <div className="w-full md:w-1/2 relative z-10">
                            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-6">How this is priced</h3>
                            <p className="text-[#4b5563] mb-8 leading-relaxed text-lg">
                                This is not a fixed-fee audit. Most founders coming here are already spending <strong className="text-[#1d1d1d]">₹5L–₹50L+ per year</strong> on marketing — often without full clarity.
                            </p>

                            <p className="text-lg text-[#1d1d1d] font-bold mb-6 leading-relaxed">
                                Honorarium is decided after Phase 2, based on the value this clarity creates for your business.
                            </p>

                            <div className="bg-white p-8 rounded-2xl border-l-4 border-[#FF014F] shadow-sm mb-6">
                                <p className="text-lg font-bold text-[#1d1d1d] mb-1">Anchor Price</p>
                                <p className="text-[#4b5563] text-sm mb-4">Typical honorarium range</p>
                                <p className="text-5xl font-bold text-[#FF014F] font-rajdhani mb-6">₹20k – ₹80k+</p>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                    <p className="text-[#1d1d1d] font-bold text-base italic leading-relaxed">
                                        "If this clarity doesn’t materially change how you think or decide, you shouldn’t pay for it."
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className="w-full md:w-1/2 relative z-10">
                            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-6">The Promise</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-500 mr-4 mt-1 shrink-0" size={24} />
                                    <div>
                                        <strong className="text-[#1d1d1d] block text-lg mb-1">Outcome-focused</strong>
                                        <span className="text-[#4b5563]">Pay based on value and clarity received.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-500 mr-4 mt-1 shrink-0" size={24} />
                                    <div>
                                        <strong className="text-[#1d1d1d] block text-lg mb-1">Pressure-free</strong>
                                        <span className="text-[#4b5563]">No obligation if value isn't obvious.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-500 mr-4 mt-1 shrink-0" size={24} />
                                    <div>
                                        <strong className="text-[#1d1d1d] block text-lg mb-1">Aligned with Impact</strong>
                                        <span className="text-[#4b5563]">Keeps the conversation honest, not transactional.</span>
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF014F] opacity-[0.03] rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
}
