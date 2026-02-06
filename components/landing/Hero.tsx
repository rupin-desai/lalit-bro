'use client';
import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, wordContainer, wordItem, cleanText, fadeIn } from '../AnimationUtils';

export default function Hero() {
    const titleWords = cleanText("Your digital marketing Team doesn’t need more effort and money. It needs clarity on what to stop.");
    // Splitting the title into two parts for better control if needed, but the cleanText returns a flat array.
    // The user's original code had a <br /> and a span for color. 
    // I can stick to the visual structure but animate words.
    // Actually, preserving the specific color span might be tricky with a flat word list.
    // Be careful with the "It needs clarity on what to stop." part which is colored.

    // Let's split it:
    const part1Words = cleanText("Your digital marketing team doesn’t need more effort and money.");
    const part2Words = cleanText("It needs clarity on what to stop");

    return (
        <section className="relative min-h-[600px] flex items-center pt-24 pb-8 lg:pt-16 lg:pb-0 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:h-full lg:min-h-[600px]">
                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-3/5 relative z-10 flex flex-col justify-center"
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

                            <motion.span className="text-[#FF5722] inline-flex flex-wrap gap-x-2">
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

                        <motion.div className="space-y-3 mb-1 md:mb-8" variants={staggerContainer}>
                            {/* Nested stagger might need care, but staggerContainer handles children. 
                                 If I put staggerContainer on the parent div, these will just be fadeUps.
                             */}
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF5722] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">Your team is busy, but growth isn’t proportional</p>
                            </motion.div>
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF5722] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">You feel results should be better than this</p>
                            </motion.div>
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF5722] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">Decisions are happening without a clear marketing logic</p>
                            </motion.div>
                            <motion.div className="flex items-start gap-3" variants={fadeUp}>
                                <AlertTriangle className="text-[#FF5722] mt-1 shrink-0" size={18} />
                                <p className="text-[#1d1d1d] text-base">You’re unsure what’s actually working vs wasting money</p>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                    {/* Right Side: CTA Action */}
                    <div className="w-full lg:w-2/5 relative flex flex-col justify-center items-start lg:pl-12 -mt-6 md:mt-0">
                        <motion.div
                            className="flex flex-col gap-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-2xl text-[#1d1d1d] leading-relaxed font-bold italic font-rajdhani">
                                Don’t replace your team or agency. Fix the decisions holding them back.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <div className="inline-flex flex-col items-center justify-center text-center md:text-left px-8 py-5 text-xl md:text-2xl font-bold text-white bg-[#FF5722] rounded-full shadow-lg font-rajdhani leading-none">
                                    <span className="italic">"Get Digital Marketing Clarity Audit"</span>
                                </div>
                            </div>
                            <p className="text-base text-[#4b5563] font-medium flex items-center gap-2">
                                Founder-level conversation · No tools · No dashboards
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
