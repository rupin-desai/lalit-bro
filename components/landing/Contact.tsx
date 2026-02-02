'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Lock, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, wordContainer, wordItem, cleanText } from '../AnimationUtils';

export default function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        website: '',
        teamSize: '',
        honeypot: '', // Security: Honeypot
        captchaAnswer: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [startTime, setStartTime] = useState<number>(0);
    const captchaValue = useRef<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Security: Time-based validation & Initial Captcha
    useEffect(() => {
        setStartTime(Date.now());
        drawCaptcha();
    }, []);

    const drawCaptcha = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Background
                ctx.fillStyle = '#f3f4f6';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Generate random text
                const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
                let text = '';
                for (let i = 0; i < 5; i++) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                captchaValue.current = text;
                console.log('Captcha:', text); // Debugging

                // Draw text with noise
                ctx.font = 'bold 28px monospace';
                ctx.fillStyle = '#1d1d1d';
                ctx.textBaseline = 'middle';

                for (let i = 0; i < text.length; i++) {
                    // Spacing: Start at 25px, 30px apart. Ends at 145px.
                    // Canvas width is 200px, button is approx 40px right.
                    // Safe zone is 0-160px.
                    const x = 25 + i * 30;
                    const y = canvas.height / 2 + (Math.random() - 0.5) * 10;
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate((Math.random() - 0.5) * 0.4);
                    ctx.fillText(text[i], 0, 0);
                    ctx.restore();
                }

                // Add noise lines
                for (let i = 0; i < 5; i++) {
                    ctx.strokeStyle = '#FF014F';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.stroke();
                }

                // Add noise dots
                for (let i = 0; i < 50; i++) {
                    ctx.fillStyle = '#9ca3af';
                    ctx.beginPath();
                    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};

        // Validation: Field Length & Content
        if (formData.name.length < 2 || formData.name.length > 100) {
            newErrors.name = 'Name must be between 2 and 100 characters';
        }

        // Validation: Mobile Regex (Basic international format allow)
        const mobileRegex = /^[+]?[\d\s-]{10,15}$/;
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid mobile number';
        }

        // Security: Honeypot check
        if (formData.honeypot) {
            console.log('Bot detected: Honeypot filled');
            return false; // Silently fail or just return false
        }

        // Security: Visual Captcha
        if (formData.captchaAnswer.toUpperCase() !== captchaValue.current) {
            newErrors.captchaAnswer = 'Incorrect captcha code';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleFinalSubmit = () => {
        const newErrors: Record<string, string> = {};
        const currentTime = Date.now();

        // Security: Time-based validation (min 3 seconds)
        if (currentTime - startTime < 3000) {
            console.log('Bot detected: Too fast');
            return;
        }

        // Security: Rate Limiting (LocalStorage)
        const lastSubmission = localStorage.getItem('lastFormSubmission');
        if (lastSubmission && currentTime - parseInt(lastSubmission) < 60000) {
            alert('Please wait a minute before trying again.');
            return;
        }

        // Validation: Website (Optional)
        if (formData.website && !formData.website.includes('.')) {
            newErrors.website = 'Please enter a valid URL';
        }

        // Validation: Team Size
        if (!formData.teamSize) {
            newErrors.teamSize = 'Please select your team size';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Success
            localStorage.setItem('lastFormSubmission', currentTime.toString());
            window.open('https://calendly.com/kapilchandak/digital-marketing-strategy-advisor?month=2026-02', '_blank');
        }
    };

    const titleWords = cleanText("Clarity before spend. Direction before scale.");

    return (
        <section className="py-20 relative overflow-hidden" id="contact">
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
                        Book a Strategic Clarity Conversation with <span className="font-bold text-[#1d1d1d]">CA Kapil Chandak | Digital Marketing Strategy Expert</span>
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="md:px-4">
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-[#1d1d1d] font-bold text-xl mb-6 text-center">
                                        Let’s start with your details
                                    </p>
                                    <div className="space-y-4">
                                        {/* Security: Honeypot Field (Hidden) */}
                                        <input
                                            type="text"
                                            name="honeypot"
                                            value={formData.honeypot}
                                            onChange={handleChange}
                                            className="hidden"
                                            autoComplete="off"
                                        />

                                        <div>
                                            <label className="block text-sm font-medium text-[#4b5563] mb-1 pl-2">Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-100'} focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all placeholder:text-gray-400 font-medium`}
                                                placeholder="Your Name"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1 pl-2">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#4b5563] mb-1 pl-2">Mobile Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.mobile ? 'border-red-500' : 'border-gray-100'} focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all placeholder:text-gray-400 font-medium`}
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                            {errors.mobile && <p className="text-red-500 text-xs mt-1 pl-2">{errors.mobile}</p>}
                                        </div>

                                        {/* Security: Visual Captcha */}
                                        <div>
                                            <label className="block text-sm font-medium text-[#4b5563] mb-1 pl-2">Security Check <span className="text-red-500">*</span></label>
                                            <div className="flex gap-4">
                                                <div className="relative overflow-hidden rounded-xl border border-gray-200">
                                                    <canvas
                                                        ref={canvasRef}
                                                        width="200"
                                                        height="56"
                                                        className="bg-gray-50"
                                                    />
                                                    <button
                                                        onClick={(e) => { e.preventDefault(); drawCaptcha(); }}
                                                        className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-[#FF014F] transition-colors bg-white/50 backdrop-blur-sm"
                                                        title="Refresh Captcha"
                                                    >
                                                        <RefreshCw size={16} />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="captchaAnswer"
                                                    value={formData.captchaAnswer}
                                                    onChange={handleChange}
                                                    className={`flex-1 px-6 py-4 rounded-xl bg-gray-50 border ${errors.captchaAnswer ? 'border-red-500' : 'border-gray-100'} focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all placeholder:text-gray-400 font-medium`}
                                                    placeholder="Enter code"
                                                />
                                            </div>
                                            {errors.captchaAnswer && <p className="text-red-500 text-xs mt-1 pl-2">{errors.captchaAnswer}</p>}
                                        </div>

                                        <button
                                            onClick={handleContinue}
                                            className="w-full mt-2 px-10 py-4 bg-[#1d1d1d] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            Continue
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-[#1d1d1d] font-bold text-xl mb-6 text-center">
                                        Just a few more details
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#4b5563] mb-1 pl-2">Website URL (Optional)</label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.website ? 'border-red-500' : 'border-gray-100'} focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all placeholder:text-gray-400 font-medium`}
                                                placeholder="https://yourwebsite.com"
                                            />
                                            {errors.website && <p className="text-red-500 text-xs mt-1 pl-2">{errors.website}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#4b5563] mb-1 pl-2">Marketing Team Size <span className="text-red-500">*</span></label>
                                            <select
                                                name="teamSize"
                                                value={formData.teamSize}
                                                onChange={handleChange}
                                                className={`w-full px-6 py-4 rounded-xl bg-gray-50 border ${errors.teamSize ? 'border-red-500' : 'border-gray-100'} focus:border-[#FF014F] focus:ring-1 focus:ring-[#FF014F] outline-none transition-all text-[#1d1d1d] font-medium appearance-none`}
                                            >
                                                <option value="" disabled>Select size</option>
                                                <option value="1-2">1-2 People</option>
                                                <option value="3-5">3-5 People</option>
                                                <option value="6-10">6-10 People</option>
                                                <option value="10+">10+ People</option>
                                            </select>
                                            {errors.teamSize && <p className="text-red-500 text-xs mt-1 pl-2">{errors.teamSize}</p>}
                                        </div>

                                        <button
                                            onClick={handleFinalSubmit}
                                            className="w-full mt-2 px-10 py-4 bg-[#FF014F] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_10px_20px_rgba(255,1,79,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            Book My Clarity Call
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="w-full text-sm text-gray-400 font-medium hover:text-[#1d1d1d] transition-colors"
                                        >
                                            Back to previous step
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

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
