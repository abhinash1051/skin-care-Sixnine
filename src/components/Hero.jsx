import React from 'react';
import { FiInfo } from 'react-icons/fi';
import chatgptImage from './chatgpt.png';
import creamImage from './cream.png'; // Ensure you have the image in the correct path

const Hero = () => {
    return (
        <section className="bg-[#F2F7EB] py-10 px-6 md:px-20" style={{ height: '800px' }}>
            <div className="">
                {/* Text Section */}
                <div className=" py-20 px-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 items-center" style={{ marginTop: '-80px', width: '100%' }}>
                        {/* Left Paragraph */}
                        <p className="text-sm text-gray-700 text-center">
                            Transform your skincare routine with premium<br /> products that restore, protect, and enhance <br />your natural glow every day.
                        </p>

                        {/* Center Heading */}
                        <h1 className="text-5xl font-extrabold text-[#2D3B36] text-center leading-tight">
                            GLOW <br /> NATUR-<br />ALLY
                        </h1>

                        {/* Right Image */}
                        <img
                            src={creamImage} // replace with your imported image or static path
                            alt="Cream Product"
                            className="w-32 mx-auto"
                        />
                    </div>
                </div>




                {/* Image Section */}
                <div className="relative flex justify-center" style={{ marginLeft: '300px', marginTop: '-30px', width: '1200px' }}>
                    <img
                        src={chatgptImage}
                        alt="Skincare woman"
                        className="rounded-xl  md:w-80 mr-80 shadow-lg"
                    />

                    {/* Floating tooltip */}
                    <div className="absolute bottom-4  flex items-center bg-white rounded-full shadow px-3 py-1 text-xs" style={{ marginLeft: '-315px', width: '300px' }}>
                        <FiInfo className="ml-0 text-gray-600" />
                        <img
                            src={creamImage}
                            alt="Circle Image"
                            className="object-cover rounded-full" style={{ width: '30px', height: '30px', marginRight: '7px' }}
                        />
                        While giving you an invigorating cleansing experience.

                    </div>
                </div>
            </div>

            {/* Big SKINCARE text */}
            <div className="text-[15vw] font-black text-[#2D3B36] text-center leading-none mt-[-40px] md:mt-[-80px] z-0">
                SKINCARE
            </div>



        </section >
    );
};

export default Hero;
