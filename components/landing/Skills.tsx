'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';
import { BASE_PATH } from '../constants';

const skills = [
    { name: 'PHOTOSHOT', percent: 100 },
    { name: 'FIGMA', percent: 95 },
    { name: 'ADOBE XD', percent: 60 },
    { name: 'ADOBE ILLUSTRATOR', percent: 70 }
];

export default function Skills() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Design Skill */}
                    <motion.div variants={fadeUp}>
                        <h2 className="text-3xl font-bold text-reeni-heading mb-8 flex items-center gap-2">
                            Design Skill
                            <img src={`${BASE_PATH}/assets/reeni/custom-line.png`} alt="line" className="inline-block" />
                        </h2>
                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <h6 className="font-bold text-reeni-heading font-satoshi tracking-wider">{skill.name}</h6>
                                        <span className="text-reeni-body">{skill.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-linear-to-r from-purple-600 to-reeni-primary rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Development Skill - Duplicated for demo purposes */}
                    <motion.div variants={fadeUp}>
                        <h2 className="text-3xl font-bold text-reeni-heading mb-8 flex items-center gap-2">
                            Development Skill
                            <img src={`${BASE_PATH}/assets/reeni/custom-line.png`} alt="line" className="inline-block" />
                        </h2>
                        <div className="space-y-8">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <h6 className="font-bold text-reeni-heading font-satoshi tracking-wider">{skill.name}</h6>
                                        <span className="text-reeni-body">{skill.percent}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-linear-to-r from-purple-600 to-reeni-primary rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
