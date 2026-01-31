'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#" className="flex items-center gap-2">
                        {/* Assuming we stick with a text logo or the existing image */}
                        <img src="/assets/reeni/logo-black.png" alt="Kapil Chandak" className="h-8 md:h-10" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Outcomes', 'Process', 'Pricing', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[#1d1d1d] font-medium hover:text-[#FF014F] transition-colors font-rajdhani text-lg"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a href="https://calendly.com/kapilchandak-digioutreach/digital-marketing-strategy-advisor" className="px-6 py-2.5 rounded-full border-2 border-[#1d1d1d] text-[#1d1d1d] font-bold hover:bg-[#FF014F] hover:border-[#FF014F] hover:text-white transition-all duration-300">
                        Book Clarity Call
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#1d1d1d]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t border-gray-100">
                    {['Outcomes', 'Process', 'Pricing', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[#1d1d1d] font-medium text-lg hover:text-[#FF014F]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="https://calendly.com/kapilchandak-digioutreach/digital-marketing-strategy-advisor" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center px-6 py-3 rounded-full bg-[#FF014F] text-white font-bold">
                        Book Clarity Call
                    </a>
                </div>
            )}
        </header>
    );
}
