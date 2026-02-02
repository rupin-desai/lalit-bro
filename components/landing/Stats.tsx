'use client';
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, wordContainer, wordItem, cleanText, fadeIn } from '../AnimationUtils';

export default function Stats() {
    const titleWords = cleanText("Led by CA Kapil Chandak");

    return (
        <section className="py-12 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Authority Profile */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div
                            className="relative group w-full max-w-full md:max-w-[400px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                                {/* Assuming 2.png is the profile image */}
                                <img src="/2.png" alt="CA Kapil Chandak" className="w-full h-[500px] aspect-[3/4] md:h-[600px] lg:h-[700px] object-cover" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots-pattern opacity-20 z-0"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#FF014F] opacity-5 z-0 blur-2xl"></div>
                        </motion.div>
                    </div>

                    {/* Right: Content & Stats */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[#FF014F] font-bold uppercase tracking-widest text-sm mb-3 block"
                        >
                            Digital Marketing Clarity Audit
                        </motion.span>

                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold font-rajdhani text-[#1d1d1d] mb-1 leading-tight flex flex-wrap gap-x-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={wordContainer}
                        >
                            {titleWords.map((word) => (
                                <motion.span key={word.id} variants={wordItem} className="inline-block">
                                    {word.text}
                                </motion.span>
                            ))}
                        </motion.h2>

                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-xl font-medium text-[#1d1d1d] mb-6 flex items-center gap-2"
                        >
                            Founder, Digioutreach LLP | Digital Marketing Strategy Expert
                        </motion.h3>


                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                { end: 8, suffix: '+', label: 'Years in Digital Strategy' },
                                { end: 400, suffix: '+', label: 'Projects across industries' },
                                { end: 310, suffix: '+', label: '"What to Stop" Audits' },
                                { end: 37000, suffix: '+', label: 'YouTube Subscribers' }
                            ].map((stat, index) => (
                                <motion.div key={index} className="bg-white p-6 rounded-xl" variants={fadeUp}>
                                    <h4 className="text-6xl lg:text-7xl font-bold font-rajdhani mb-2 text-[#FF014F]">
                                        <CountUp end={stat.end} duration={2.5} separator="," />
                                        <span className="ml-1">{stat.suffix}</span>
                                    </h4>
                                    <p className="text-xl font-medium text-[#4b5563]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
