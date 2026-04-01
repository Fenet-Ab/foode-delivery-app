'use client';

import React from 'react';
import Image from 'next/image';

const TopFooter = () => {
    return (
        <section className="bg-[#FDFCFB] py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Card Container */}
                <div className="relative overflow-hidden bg-primary-orange rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-primary-orange/20">

                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                    </div>

                    {/* Gradient Glows */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-secondary-orange/50 to-transparent"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 lg:p-24">

                        {/* Left Side: Content */}
                        <div className="flex flex-col gap-8 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none text-white/90">Mobile Application</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase">
                                    Take the <br />
                                    <span className="italic text-white/90 font-black">FoodSwift</span> <br />
                                    Experience home
                                </h2>
                                <p className="text-white/80 text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                                    Download our app for exclusive deals, instant delivery tracking, and a seamless ordering experience that fits in your pocket.
                                </p>
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a
                                    href="/app-release.apk"
                                    download
                                    className="w-full sm:w-auto px-10 py-5 bg-white text-primary-orange font-black text-lg rounded-2xl shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-3 active:scale-95 group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:bounce"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                    <span>Get for Android</span>
                                </a>

                                <div className="flex gap-3">
                                    <button className="w-14 h-14 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all flex items-center justify-center group backdrop-blur-sm" title="Google Play (Coming Soon)">
                                        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C21.07,17.58 21.07,19.42 18.66,20.81L16.81,21.88L14.4,12.71L16.81,15.12M14.4,11.29L16.81,8.88L18.66,9.95C21.07,11.34 21.07,13.18 18.66,14.57L16.81,15.64L14.4,11.29M4.55,2L13.69,11.14L16.1,8.73L5.35,2.44C4.94,2.21 4.45,2.21 4.04,2.44L4.55,2M4.14,21.56C4.45,21.73 4.81,21.78 5.16,21.68L16.1,15.34L13.69,12.93L4.14,21.56Z" />
                                        </svg>
                                    </button>
                                    <button className="w-14 h-14 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all flex items-center justify-center group backdrop-blur-sm" title="App Store (Coming Soon)">
                                        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16,3.17 15.54,4.37 14.75,5.33C14,6.23 12.72,6.89 11.7,6.73C11.58,5.5 12.14,4.34 13,3.5Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Mockup Image */}
                        <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
                            {/* Floating Decorative Elements */}
                            <div className="absolute top-0 right-1/4 w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-xl animate-bounce-slow hidden lg:block"></div>

                            {/* Simple Mobile Frame */}
                            <div className="relative w-64 h-[480px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl ring-8 ring-gray-800 rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                                <div className="relative w-full h-full bg-[#FCF9F5] rounded-[2rem] overflow-hidden">
                                    <div className="p-5 space-y-4 pt-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary-orange rounded-lg shadow-md flex items-center justify-center p-1.5">
                                                <Image src="/logo.png" alt="logo" width={30} height={30} />
                                            </div>
                                            <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="space-y-2 pt-4">
                                            <div className="h-3 w-full bg-gray-100 rounded-full"></div>
                                            <div className="h-3 w-4/5 bg-gray-100 rounded-full"></div>
                                        </div>
                                        <div className="aspect-square bg-orange-50 rounded-2xl relative overflow-hidden mt-6">
                                            <Image src="/shiro.png" alt="preview" fill className="object-cover opacity-80" />
                                        </div>
                                        <div className="h-10 w-full bg-primary-orange rounded-xl mt-4"></div>
                                    </div>
                                    {/* Mock Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-xl"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default TopFooter;