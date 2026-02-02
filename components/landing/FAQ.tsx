'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';

const faqs = [
    {
        question: "Why don’t you have a fixed price?",
        answer: "Because the value of clarity isn’t the same for every business. Some founders use this to stop ₹2–3L/month of waste. Others use it to re-align teams and scale faster with the same budget. A fixed price would be unfair — either to you or to the work."
    },
    {
        question: "When do I have to pay?",
        answer: "After Phase 2. Only once the problems, decisions, and direction are clear. You decide the honorarium then."
    },
    {
        question: "What if I feel it didn’t create enough value?",
        answer: "Then you shouldn’t pay for it. This model exists to keep the conversation honest, not transactional."
    },
    {
        question: "Is this a consulting or execution engagement?",
        answer: "This is a clarity and decision engagement. You leave with: What to stop, What to focus on, and How to allocate effort and budget. Execution can happen with your existing team or agency."
    },
    {
        question: "How is this different from a marketing audit?",
        answer: "Most audits tell you what happened. This tells you what decisions to take next. No tools. No dashboards. No reports that sit unused."
    },
    {
        question: "Who is this not for?",
        answer: "Businesses looking for cheap audits. Founders without decision authority. Teams looking for execution or tools training. This is for leadership teams who want clarity before spending more."
    },
    {
        question: "What kind of businesses is this most valuable for?",
        answer: "Typically valuable for businesses that: Already have a marketing team or agency. Are spending ₹1L+/month on marketing. Feel growth should be better than it is."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 bg-transparent" id="faq">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="text-[#FF5722] font-bold text-sm uppercase tracking-widest block">FAQ</motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl font-bold text-[#1d1d1d] mt-3 font-rajdhani">
                        Common Questions
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            variants={fadeUp}
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-bold text-lg md:text-xl font-rajdhani ${openIndex === index ? 'text-[#FF5722]' : 'text-[#1d1d1d]'}`}>
                                    {faq.question}
                                </span>
                                <span className={`transform transition-transform duration-300 text-[#FF5722] ml-4 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={24} />
                                </span>
                            </button>
                            {/* 
                                Using AnimatePresence for height animation if desired, or simpler CSS.
                                Since user requested framer motion, let's try a simple height animate 
                                but keep it clean.
                            */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-[#4b5563] text-lg leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
