'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearch } from "@/app/contexts/SearchContext";
import { useCart } from "@/app/contexts/CartContext";

const Navbar = () => {
    const { setSearchQuery } = useSearch();
    const { itemCount } = useCart();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Left Section: Logo & Location */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 group shrink-0">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-primary-orange/20 ring-1 ring-primary-orange/10 group-hover:ring-primary-orange/30 transition-all duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="FoodApp Logo"
                                    width={46}
                                    height={46}
                                    className="transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-orange-50/50 rounded-full border border-orange-100/50 cursor-pointer hover:bg-orange-100/50 transition-all group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-orange group-hover:animate-bounce"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-primary-orange transition-colors">Home</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>

                    {/* Center Section: Search Bar (Desktop) */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full group">
                            <input
                                onChange={(e) => setSearchQuery(e.target.value)}
                                type="text"
                                placeholder="Search for your favorite food..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:bg-white focus:border-primary-orange/30 transition-all placeholder:text-gray-400"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-orange transition-colors"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>

          {/* Right Section: Navigation & Actions */}
          <div className="flex items-center gap-3 sm:gap-6">

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 mr-4">

              <Link href="/pages/menu" className="text-sm font-bold text-gray-600 hover:text-primary-orange transition-colors">Menu</Link>
              {/* <Link href="/offers" className="relative text-sm font-bold text-gray-600 hover:text-primary-orange transition-colors">
                Offers
                <span className="absolute -top-1 -right-2 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-2 h-2 w-2 bg-red-500 rounded-full"></span>
              </Link> */}

              <Link href="/pages/about" className="text-sm font-bold text-gray-600 hover:text-primary-orange transition-colors">About</Link>
            </nav>

            {/* Cart Button */}
            <Link href="/pages/Cart" className="relative p-3 bg-orange-50 text-primary-orange rounded-xl hover:bg-primary-orange hover:text-white transition-all duration-300 group shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-6 w-6 bg-secondary-orange text-white text-[10px] font-bold flex items-center justify-center rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Account / Profile */}
            <div className="flex items-center gap-4 pl-2 border-l border-gray-100">
              <Link href="/pages/SignIn?mode=login" className="hidden sm:block text-sm font-black text-gray-700 hover:text-primary-orange transition-colors px-2">
                Sign In
              </Link>
              <Link href="/pages/SignIn?mode=register" className="px-6 py-3 bg-primary-orange text-white text-sm font-black rounded-2xl shadow-xl shadow-primary-orange/30 hover:bg-secondary-orange hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-wider">
                Register
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 text-gray-700 hover:text-primary-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;