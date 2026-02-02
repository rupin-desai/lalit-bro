'use client';
import React from 'react';
import { OctagonX, TrendingUp, ScanEye } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';

const outcomes = [
    {
        title: 'What to STOP immediately',
        description: 'Activities draining time and money without strategic value.',
        Icon: OctagonX
    },
    {
        title: 'What to MULTIPLY',
        description: 'High-impact actions that drive measurable growth.',
        Icon: TrendingUp
    },
    {
        title: 'Your Key Blind Spot',
        description: 'The one insight silently limiting scale that wasn’t visible before.',
        Icon: ScanEye
    }
];

export default function Services() {
    return (
        <section className="py-12 bg-transparent" id="outcomes">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16 lg:mb-20"
                >

                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#1d1d1d] mt-3 mb-6 font-rajdhani">
                        What You Walk Away With
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[#1d1d1d] text-xl font-medium max-w-2xl mx-auto">
                        By the end of this engagement, you will clearly know:
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group p-6 md:p-10 rounded-[2.5rem] bg-white border border-gray-100/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center hover:border-[#FF5722]/20"
                            variants={fadeUp}
                        >
                            <div className="mb-6 text-[#FF5722] transition-transform duration-300 group-hover:scale-110">
                                <item.Icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1d1d1d] mb-4 font-rajdhani">
                                {item.title}
                            </h3>
                            <p className="text-[#4b5563] text-lg font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
