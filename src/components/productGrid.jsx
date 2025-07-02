import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import Maska from './Maska.png';
import Maskb from './maskb.png';
import Maskc from './maskc.png';

// Product data using imported images
const products = [
    {
        img: Maska,
        name: 'ALYA SKIN CLEANSER.',
        price: 'FROM $29.99',
    },
    {
        img: Maskb,
        name: 'RITUAL OF SAKURA.',
        price: 'FROM $27.99',
    },
    {
        img: Maskc,
        name: 'THE BODY LOTION.',
        price: 'FROM $19.99',
    },
];

const ProductGrid = () => {
    return (
        <section className="bg-[#f9fced] px-4 md:px-16 py-14">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                    Best Selling Products
                </button>

                <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-800 flex-1">
                    Skincare That Brings Out <br className="hidden md:block" />
                    Your Natural Radiance
                </h2>

                <div className="flex gap-3">
                    <button className="p-2 rounded-full border border-gray-400 bg-white text-gray-700">
                        <IoIosArrowBack size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-900 text-white">
                        <IoIosArrowForward size={18} />
                    </button>
                </div>
            </div>

            {/* Product Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-md relative"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-80 object-cover"
                        />
                        {/* Footer */}
                        <div className="flex justify-between items-center p-4 text-sm bg-[#f9fced]">
                            <div>
                                <h4 className="font-semibold text-gray-800 uppercase">
                                    {product.name}
                                </h4>
                                <p className="text-gray-500 text-xs">{product.price}</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                <FiShoppingCart size={16} className="text-gray-800" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
