'use client';
import React from 'react';

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white">
            {/* Simplified Single Layer Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle fade to white at the bottom */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/90"></div>
        </div>
    );
}
