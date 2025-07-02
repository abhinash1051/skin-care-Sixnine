import React from 'react';
import featureImage from './face.png'; // replace with actual image path
import { FaAward } from 'react-icons/fa'; // for award icon

const features = [
    {
        number: '01',
        title: 'Bio Ingredients',
        desc: 'Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.',
    },
    {
        number: '02',
        title: 'Everything Natural',
        desc: 'Pure ingredients for pure skin. The Perfect solution for your skin care needs.',
    },
    {
        number: '03',
        title: 'All Handmade',
        desc: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.',
    },
];

const Features = () => {
    return (
        <section className="bg-[#f9fced] px-4 md:px-16 py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* LEFT COLUMN */}
                <div className="lg:w-1/2 space-y-6">
                    <button className="bg-white text-blue-600 border border-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                        Why Our Products
                    </button>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        YOUR SKIN DESERVES <br /> THE BEST CARE.
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base max-w-md">
                        Discover a curated collection of skincare products designed to rejuvenate,
                        protect, and pamper your skin. Explore our rage crafted with love backed by science,
                        and inspired by nature.
                    </p>

                    <div className="space-y-6 pt-2">
                        {features.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <p className="text-2xl font-semibold text-gray-500">{item.number}</p>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="lg:w-1/2 relative w-full">
                    <img
                        src={featureImage}
                        alt="Skin Care"
                        className="rounded-2xl w-full max-w-md mx-auto"
                    />

                    {/* Award badge */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                        <FaAward className="text-pink-600 text-lg" />
                        <span className="text-xs text-gray-700">
                            Best Skin Care Product <br /> Award Winning
                        </span>
                    </div>
                </div>
            </div>

            {/* Optional Footer */}
            <div className="mt-8 flex justify-between text-xs text-gray-500 px-4 md:px-0">
                <p>SINCE 2001</p>
                <p className="underline cursor-pointer">LEARN MORE</p>
            </div>
        </section>
    );
};

export default Features;
