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
                    <a href="#" className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-100 inline-flex items-center gap-1.5 italic">
                        <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#1d1d1d] tracking-tighter">CA KAPIL</span>
                        <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#FF5722] tracking-tighter">CHANDAK</span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Outcomes', 'Process', 'Pricing', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[#1d1d1d] font-medium hover:text-[#FF5722] transition-colors font-rajdhani text-lg"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
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
                            className="text-[#1d1d1d] font-medium text-lg hover:text-[#FF5722]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
