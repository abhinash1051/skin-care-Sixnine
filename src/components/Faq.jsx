// src/components/FAQ.jsx
import React, { useState } from 'react';
import { FiHeadphones, FiPlus, FiMinus } from 'react-icons/fi';
import productImg from './maskb.png'; // ← replace with your actual image path

const faqs = [
    {
        q: 'Are your products safe for sensitive skin?',
        a: 'Yes! Our formulas are dermatologist‑tested and free from harsh chemicals to be gentle on even the most sensitive skin.',
    },
    {
        q: 'Are your products cruelty‑free?',
        a: 'Absolutely! All our products are cruelty‑free, and most are vegan. Check individual product details for specifics.',
    },
    {
        q: "What's your return policy?",
        a: 'If you’re not completely satisfied, return unopened products within 30 days for a full refund.',
    },
    {
        q: 'Do you ship internationally?',
        a: 'We ship worldwide! Rates and delivery times vary by destination—see our Shipping page for details.',
    },
    {
        q: 'How do I choose the right product?',
        a: 'Answer a few quick questions on our “Find My Routine” quiz, and we’ll recommend your perfect match.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = i => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="bg-[#F2F7EB] px-4 md:px-20 py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                {/* LEFT IMAGE + BADGE */}
                <div className="lg:w-1/2 relative w-full">
                    <img
                        src={productImg}
                        alt="FAQ Illustration"
                        className="rounded-2xl object-cover" style={{ height: '500px', width: '100%' }}
                    />
                    <div className="absolute bottom-6 left-6 bg-green-100 border border-green-200 rounded-full px-4 py-2 flex items-center gap-2">
                        <FiHeadphones className="text-green-700" />
                        <span className="text-xs text-gray-800">24/7 We’re Here to Help You</span>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="lg:w-1/2 w-full space-y-6">
                    {/* Pill Button */}
                    <button className="inline-flex items-center gap-2 px-4 py-1 border border-gray-400 rounded-full text-sm text-gray-800">
                        <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
                        Frequently Asked Question
                    </button>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Answers to Your Skincare Questions, <br className="hidden md:inline" /> All in One Place.
                    </h2>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className="border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-100"
                                >
                                    {item.q}
                                    {openIndex === i ? (
                                        <FiMinus className="text-xl text-gray-600" />
                                    ) : (
                                        <FiPlus className="text-xl text-gray-600" />
                                    )}
                                </button>
                                {openIndex === i && (
                                    <div className="px-4 py-3 bg-white text-gray-700 text-sm">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
