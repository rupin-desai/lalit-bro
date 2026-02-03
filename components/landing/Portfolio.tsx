'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../AnimationUtils';
import { BASE_PATH } from '../constants';

const projects = [
    { title: 'Digital Transformation Advisors', category: 'Development Coaches', img: `${BASE_PATH}/assets/reeni/portfoli-img-1.jpg` },
    { title: 'My work is driven by the belief that thoughtful.', category: 'Development App', img: `${BASE_PATH}/assets/reeni/portfoli-img-2.jpg` },
    { title: 'Mobile App Management', category: 'Application', img: `${BASE_PATH}/assets/reeni/portfoli-img-3.jpg` }
];

export default function Portfolio() {
    return (
        <section className="py-12 bg-reeni-gray-light" id="project">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="text-reeni-primary font-medium text-lg uppercase tracking-wider block">Latest Portfolio</motion.span>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-reeni-heading mt-2 mb-4 font-rajdhani">
                        Transforming Ideas into <br /> Exceptional
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-reeni-body max-w-2xl mx-auto">
                        Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
                            variants={fadeUp}
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Overlay/Section */}
                            <div className="p-6 relative z-10 bg-white group-hover:bg-gray-50 transition-colors">
                                <span className="text-sm font-medium text-reeni-primary block mb-2">{project.category}</span>
                                <h3 className="text-xl font-bold text-reeni-heading mb-4 group-hover:text-reeni-primary transition-colors">
                                    <a href="#">{project.title}</a>
                                </h3>
                                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-400 group-hover:bg-reeni-primary group-hover:border-reeni-primary group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
