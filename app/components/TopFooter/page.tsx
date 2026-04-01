'use client';

import React from 'react';
import Image from 'next/image';

const TopFooter = () => {
    return (
        <section className="bg-[#FDFCFB] py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left Side: Content */}
                    <div className="flex flex-col gap-10 text-center lg:text-left">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[0.95] tracking-tighter uppercase">
                                Your Favorite <br />
                                <span className="text-primary-orange italic">Food</span>, Delivered <br />
                                Fast & Fresh
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Download the FoodSwift app today. Enjoy seamless ordering, real-time tracking, and exclusive rewards right at your fingertips.
                            </p>
                        </div>

                        {/* Standard App Badges */}
                        <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                            {/* App Store Badge */}
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10 group active:scale-95 border border-white/10"
                            >
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16,3.17 15.54,4.37 14.75,5.33C14,6.23 12.72,6.89 11.7,6.73C11.58,5.5 12.14,4.34 13,3.5Z"/>
                                </svg>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-tighter mb-0.5">Download on the</span>
                                    <span className="text-xl font-bold tracking-tight">App Store</span>
                                </div>
                            </a>

                            {/* Play Store Badge */}
                            <a 
                                href="/app-release.apk" 
                                download
                                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/10 group active:scale-95 border border-white/10"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#2196F3"/>
                                    <path d="M16.81 15.12L18.66 16.19C21.07 17.58 21.07 19.42 18.66 20.81L16.81 21.88L14.4 12.71L16.81 15.12Z" fill="#F44336"/>
                                    <path d="M14.4 11.29L16.81 8.88L18.66 9.95C21.07 11.34 21.07 13.18 18.66 14.57L16.81 15.64L14.4 11.29Z" fill="#FFEB3B"/>
                                    <path d="M4.55 2L13.69 11.14L16.1 8.73L5.35 2.44C4.94 2.21 4.45 2.21 4.04 2.44L4.55 2Z" fill="#4CAF50"/>
                                </svg>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-tighter mb-0.5">GET IT ON</span>
                                    <span className="text-xl font-bold tracking-tight">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Mockup Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Ambient Glow behind mockup */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

                        {/* Modern Floating Phone Mockup */}
                        <div className="relative group">
                            {/* Decorative Floating Shapes */}
                            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary-orange/20 rounded-3xl backdrop-blur-xl animate-bounce-slow hidden md:block"></div>
                            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gray-900/5 rounded-full blur-xl animate-pulse"></div>

                            <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] ring-[12px] ring-gray-800 transition-transform duration-700 group-hover:scale-[1.02] overflow-hidden">
                                <div className="h-full w-full bg-[#FDFCFB] rounded-[2.5rem] overflow-hidden relative">
                                    {/* Mock App Content */}
                                    <div className="p-6 pt-12 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="w-10 h-10 bg-primary-orange rounded-xl flex items-center justify-center shadow-lg shadow-primary-orange/20">
                                                <Image src="/logo.png" alt="logo" width={24} height={24} />
                                            </div>
                                            <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-3/4 bg-gray-900/5 rounded-full"></div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="aspect-[4/5] bg-orange-50 rounded-2xl relative overflow-hidden">
                                                <Image src="/shiro.png" alt="food" fill className="object-cover opacity-80" />
                                            </div>
                                            <div className="aspect-[4/5] bg-gray-50 rounded-2xl relative overflow-hidden">
                                                <Image src="/hero_rice.png" alt="food" fill className="object-cover opacity-80" />
                                            </div>
                                        </div>
                                        <div className="h-12 w-full bg-primary-orange rounded-2xl shadow-lg shadow-primary-orange/20"></div>
                                    </div>
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-800 rounded-b-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                }
                .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default TopFooter;