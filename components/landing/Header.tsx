'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
    return (
        <header className="w-full transition-all duration-300 bg-transparent py-6">
            <div className="container mx-auto px-4 flex justify-start items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#" className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-100 inline-flex items-center gap-1.5 italic">
                        <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#1d1d1d] tracking-tighter">CLARITY BEFORE</span>
                        <span className="text-2xl md:text-3xl font-black font-rajdhani text-[#FF5722] tracking-tighter">SPEND</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
