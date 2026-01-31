'use client';
import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, wordContainer, wordItem, cleanText } from '../AnimationUtils';

export default function Contact() {
    const [step, setStep] = useState(1);

    const titleWords = cleanText("Clarity before spend. Direction before scale.");

    return (
        <section className="py-20  relative overflow-hidden" id="contact">
            {/* Background Blob */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-linear-to-b from-[#FF014F]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-[#FF014F] font-bold text-sm uppercase tracking-widest block"
                    >
                        Start Results
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mt-3 mb-6 font-rajdhani flex flex-wrap justify-center gap-x-2 leading-tight"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={wordContainer}
                    >
                        {titleWords.slice(0, 3).map((word) => (
                            <motion.span key={word.id} variants={wordItem}>{word.text}</motion.span>
                        ))}
                        <br className="hidden md:block w-full" />
                        {titleWords.slice(3).map((word) => (
                            <motion.span key={word.id} variants={wordItem}>{word.text}</motion.span>
                        ))}
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-[#4b5563] text-lg max-w-2xl mx-auto"
                    >
                        Book a Strategic Clarity Conversation with <span className="font-bold text-[#1d1d1d]">CA Kapil Chandak</span>
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="mb-8 text-center">
                        <h3 className="text-[#1d1d1d] font-bold text-2xl font-rajdhani">Get Strategic Marketing Clarity</h3>
                        <div className="h-1 w-20 bg-[#FF014F] mx-auto mt-4 rounded-full"></div>
                    </div>

                    {step === 1 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-[#1d1d1d] mb-2 font-rajdhani uppercase tracking-wide">Name</label>
                                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all bg-gray-50 focus:bg-white text-lg placeholder:text-gray-400" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#1d1d1d] mb-2 font-rajdhani uppercase tracking-wide">Mobile Number</label>
                                <input type="tel" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all bg-gray-50 focus:bg-white text-lg placeholder:text-gray-400" placeholder="+91" />
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                className="w-full py-4 mt-4 bg-[#1d1d1d] text-white font-bold rounded-full hover:bg-[#FF014F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group"
                            >
                                Continue
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-[#1d1d1d] mb-2 font-rajdhani uppercase tracking-wide">Website URL</label>
                                <input type="url" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all bg-gray-50 focus:bg-white text-lg placeholder:text-gray-400" placeholder="https://example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#1d1d1d] mb-2 font-rajdhani uppercase tracking-wide">Marketing Team Size</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all bg-gray-50 focus:bg-white text-lg cursor-pointer appearance-none text-[#1d1d1d]">
                                        <option value="" disabled selected>Choose team size...</option>
                                        <option>1-5 people</option>
                                        <option>5-10 people</option>
                                        <option>10+ people</option>
                                        <option>Agency managed</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full py-4 mt-4 bg-[#FF014F] text-white font-bold rounded-full shadow-lg hover:shadow-[0_10px_20px_rgba(255,1,79,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                            >
                                Book My Clarity Call
                            </button>
                            <button
                                onClick={() => setStep(1)}
                                className="text-sm font-medium text-gray-500 w-full text-center hover:text-[#1d1d1d] transition-colors mt-2"
                            >
                                ← Back to Step 1
                            </button>
                        </div>
                    )}

                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                        <Lock size={12} />
                        <span>Your details are secure. We respect your inbox.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
