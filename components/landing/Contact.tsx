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
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-[#1d1d1d] font-bold text-xl mb-8 leading-relaxed max-w-lg">
                            Ready to stop the leaks and start scale?
                            <br />
                            <span className="font-normal text-gray-500 text-base mt-2 block">Directly schedule your strategic clarity conversation.</span>
                        </p>

                        <a
                            href="https://calendly.com/kapilchandak-digioutreach/digital-marketing-strategy-advisor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-5 bg-[#FF014F] text-white font-bold rounded-full shadow-lg hover:shadow-[0_10px_20px_rgba(255,1,79,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 text-lg"
                        >
                            Book My Clarity Call
                            <ArrowRight className="w-5 h-5" />
                        </a>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                            <Lock size={12} />
                            <span>Secure scheduling via Calendly.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
