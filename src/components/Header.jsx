import React from 'react';
import { FiShoppingBag, FiHeart, FiUser } from 'react-icons/fi';

const Header = () => (
    <header className=" flex justify-between items-center p-4 md:px-16 bg-[#F2F7EB]">
        <h1 className="text-xl font-bold">SKINCARE</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#">All Products</a>
            <a href="#">Serum</a>
            <a href="#">Sunscreen</a>
            <a href="#">Bundle</a>
        </nav>
        <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="flex items-center space-x-2 bg-[#F7FBEF] px-3 py-2 rounded-full cursor-pointer">
                <FiShoppingBag className="text-lg" />
                <span>Cart (1)</span>
            </div>

            {/* Wishlist */}
            <div className="bg-[#F7FBEF] p-2 rounded-full cursor-pointer">
                <FiHeart className="text-lg" />
            </div>

            {/* User */}
            <div className="bg-[#F7FBEF] p-2 rounded-full cursor-pointer">
                <FiUser className="text-lg" />
            </div>
        </div>

    </header>
);

export default Header;
