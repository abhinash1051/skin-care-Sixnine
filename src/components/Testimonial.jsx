import React from 'react';
import BgImage from './model.png'; // Replace with your actual file path

const Testimonial = () => {
    return (
        <section className="relative bg-[#f9fced] px-4 md:px-20 py-12">
            <div className="rounded-3xl overflow-hidden relative">

                <img
                    src={BgImage}
                    alt="Skincare testimonial"
                    className="w-full h-[450px] md:h-[550px] object-cover"
                />


                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center px-6mt-10 " style={{ marginTop: '20pc' }} >
                    <p className="text-white text-xl md:text-3xl font-medium leading-snug max-w-2xl">
                        Feel Beautiful Inside and Out <br className="hidden sm:block" />
                        with Every Product.
                    </p>
                    <button className="mt-6 px-6 py-2 rounded-full text-sm bg-white text-gray-900 hover:bg-gray-200 transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
