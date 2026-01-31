'use client';
import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, wordContainer, wordItem, cleanText, fadeIn } from '../AnimationUtils';

export default function Hero() {
    const titleWords = cleanText("Your digital marketing doesn’t need more effort and money. It needs clarity on what to stop.");
    // Splitting the title into two parts for better control if needed, but the cleanText returns a flat array.
    // The user's original code had a <br /> and a span for color. 
    // I can stick to the visual structure but animate words.
    // Actually, preserving the specific color span might be tricky with a flat word list.
    // Be careful with the "It needs clarity on what to stop." part which is colored.

    // Let's split it:
    const part1Words = cleanText("Your digital marketing doesn’t need more effort and money.");
    const part2Words = cleanText("It needs clarity on what to stop.");

    return (
        <section className="relative min-h-[130vh] flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:h-full lg:min-h-[600px]">
                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-3/5 order-2 lg:order-1 relative z-10 flex flex-col justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold font-rajdhani text-[#1d1d1d] leading-tight mb-6 flex flex-wrap gap-x-2"
                            variants={wordContainer}
                        >
                            {part1Words.map((word) => (
                                <motion.span key={`p1-${word.id}`} variants={wordItem}>{word.text}</motion.span>
                            ))}
                            <span className="block w-full h-0"></span> {/* Force break if needed, but flex-wrap handles it. The BR in original was specific. */}
                            {/* Actually, the original had <br />. Flex wrap might reflow differently. */}
                            {/* To keep the color and potentially the line break, let's wrap the second part in a span or div */}

                            <motion.span className="text-[#FF014F] inline-flex flex-wrap gap-x-2">
                                {part2Words.map((word) => (
                                    <motion.span key={`p2-${word.id}`} variants={wordItem}>{word.text}</motion.span>
                                ))}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-[#1d1d1d] leading-relaxed mb-8 max-w-xl"
                            variants={fadeUp}
                        >
                            If you already have a digital marketing team or agency — but results feel slower, costlier, or unclear — this is for you.
                        </motion.p>

                        <motion.div className="space-y-3 mb-8" variants={staggerContainer}>
                            {/* Nested stagger might need care, but staggerContainer handles children. 
                                 If I put staggerContainer on the parent div, these will just be fadeUps.
                             */}
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF014F] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">Your team is busy, but growth isn’t proportional</p>
                            </motion.div>
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF014F] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">You feel results should be better than this</p>
                            </motion.div>
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF014F] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">Decisions are happening without a clear marketing logic</p>
                            </motion.div>
                        </motion.div>

                        <motion.p
                            className="text-2xl text-[#1d1d1d] leading-relaxed mb-4 max-w-xl font-bold italic font-rajdhani"
                            variants={fadeUp}
                        >
                            Don’t replace your team or agency. Fix the decisions holding them back.
                        </motion.p>

                        <motion.div className="flex flex-col gap-5" variants={fadeUp}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="invoke-btn group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#FF014F] rounded-full hover:shadow-[0_10px_20px_rgba(255,1,79,0.3)] hover:-translate-y-1 overflow-hidden">
                                    <span className="relative z-10">Get Strategic Marketing Clarity</span>
                                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </a>
                            </div>
                            <p className="text-base text-[#1d1d1d] font-semibold flex items-center">
                                (Founder-level conversation · No tools · No dashboards)
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image / Illustration */}
                    <div className="w-full lg:w-2/5 order-1 lg:order-2 relative flex items-center justify-center mt-8 lg:mt-16">
                        <motion.div
                            className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/50 w-full max-w-[320px] lg:max-w-[450px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <img
                                src="/1.png"
                                alt="Strategic Clarity"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                        {/* Background decoration */}
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[120%] h-[120%] bg-linear-to-br from-gray-100 to-white rounded-full opacity-50 -z-10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
