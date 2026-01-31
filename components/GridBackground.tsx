'use client';
import React from 'react';

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white">
            {/* 
                Creative Grid Pattern 
                Using a small grid combined with a larger grid for depth
            */}

            {/* Base small grid */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(to right, #E5E7EB 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Larger accent grid */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(to right, #E5E7EB 1px, transparent 1px)`,
                    backgroundSize: '128px 128px'
                }}
            />

            {/* Radial Vignette/Mask to fade out edges or focus center */}
            {/* 
               Actually, a subtle gradient overlay makes it look "creative" and less like graph paper.
               Let's add a radial gradient from transparent to white to fade it out at the bottom/edges if needed,
               or just a subtle top-down fade.
            */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80"></div>

            {/* 
                Optional: Floating "creative" blobs or glows if requested "as per ss". 
                Since I don't have the SS, sticking to a clean, high-quality technical grid.
            */}
        </div>
    );
}
