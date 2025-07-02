// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
    <footer className="relative bg-[#2D3B36] text-white overflow-hidden pt-16 pb-8 px-6 md:px-20 " style={{ height: '600px' }}>
        {/* Large faint background text */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <span className="text-[15vw] font-black text-gray-900 opacity-10 select-none leading-none">
                SKINCARE
            </span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            {/* Left */}
            <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-medium">Join The Skincare Community Now.</h2>
                <div className="flex flex-wrap gap-6 text-sm">
                    <a href="instagram.com" className="hover:underline">Facebook</a>
                    <a href="facebook.com" className="hover:underline">Instagram</a>
                    <a href="youtube.com" className="hover:underline">YouTube</a>
                </div>
            </div>

            {/* Right */}
            <div className="flex-1 space-y-3 text-right">
                <p className="text-sm">Get in Touch</p>
                <a href="mailto:contact@skincare.com" className="text-xl font-light hover:underline">
                    contact.skincare.com
                </a>
                <div className="flex flex-wrap justify-end gap-6 text-sm mt-4">
                    <a href="t" className="hover:underline">Terms of Service</a>
                    <a href="p" className="hover:underline">Privacy Policy</a>
                    <a href="c" className="hover:underline">Cookies Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
