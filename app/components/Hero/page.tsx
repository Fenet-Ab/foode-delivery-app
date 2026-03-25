'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#FDFCFB] overflow-hidden flex flex-col justify-center pt-24 pb-12">
            {/* Natural Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            {/* Decorative Natural Glows */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-orange/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-orange/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full lg:min-h-[70vh]">

                {/* Left Section: Branding, Title & Buttons (Corrected Placement) */}
                <div className="flex flex-col gap-8 text-center lg:text-left transition-all duration-700 animate-fade-in-left">
                    <div className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-2 rounded-2xl bg-primary-orange/10 border border-primary-orange/20">
                        <span className="text-primary-orange text-xs font-black uppercase tracking-[0.2em] leading-none">Fresh Deliveries Daily</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="flex flex-col">
                            <span className="text-gray-400 text-3xl font-bold uppercase tracking-widest leading-none mb-2">Deliciously Crafted</span>
                            <span className="text-5xl md:text-[7rem] font-black text-gray-900 leading-[0.8] tracking-tighter uppercase drop-shadow-sm">
                                Special <br />
                                <span className="text-primary-orange italic">MENU</span>
                            </span>
                        </h1>
                        <p className="text-gray-500 text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium mt-4">
                            From morning <span className="text-gray-900 font-bold">Coffee</span> to traditional <span className="text-gray-900 font-bold">Shiro</span> and specialty <span className="text-gray-900 font-bold">Rice</span>. We bring the best flavors to your table.
                        </p>
                    </div>

                    {/* Call to Actions (Now on the Left) */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
                        <button className="w-full sm:w-auto px-12 py-6 bg-primary-orange text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary-orange/30 hover:bg-secondary-orange hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest active:scale-95 group overflow-hidden">
                            <span className="relative z-10">Start Ordering</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        <button className="w-full sm:w-auto px-12 py-6 bg-white text-gray-800 font-black text-xl rounded-2xl border-2 border-gray-100 hover:border-primary-orange hover:text-primary-orange transition-all duration-300 uppercase tracking-widest">
                            Visit Menu
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-6 mt-8">
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                                <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="user" fill />
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" fill />
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden flex items-center justify-center text-[10px] font-bold text-gray-500 bg-white">
                                +500
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Trusted by 5,000+ Happy Foodies</p>
                    </div>
                </div>

                {/* Right Section: Multi-Image Cloud (Coffee, Shiro, Rice + Burger) */}
                <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center lg:justify-end">

                    {/* Abstract Decorative Connection Path */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
                        <path d="M100,200 C150,50 350,100 450,250 S300,450 150,450" stroke="#F57C00" strokeWidth="3" fill="none" strokeDasharray="8,8" />
                    </svg>

                    {/* Item 1: Hero Rice (The Anchor) */}
                    <div className="absolute top-[10%] right-[0%] z-30 group animate-float-slow">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-white shadow-2xl overflow-hidden relative ring-1 ring-gray-100 transform group-hover:rotate-6 transition-all duration-500">
                            <Image src="/hero_rice.png" alt="Special Rice" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-primary-orange text-white px-5 py-2 rounded-xl text-xs font-black uppercase shadow-lg">Popular</div>
                    </div>

                    {/* Item 2: Shiro (The Middleweight) */}
                    <div className="absolute top-[40%] left-[0%] md:left-[10%] z-20 group animate-float">
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-[8px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-100 transform group-hover:-rotate-12 transition-all duration-500">
                            <Image src="/shiro.png" alt="Traditional Shiro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Item 3: Coffee (High Energy) */}
                    <div className="absolute bottom-[5%] right-[15%] z-40 group animate-float-fast">
                        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full border-[6px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-100 group-hover:scale-105 transition-all">
                            <Image src="/coffee.png" alt="Premium Coffee" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Item 4: Burger (New Addition for completeness) */}
                    <div className="absolute top-[50%] right-[50%] z-10 group animate-float-slow opacity-80 blur-[2px] hover:blur-0 hover:opacity-100 transition-all duration-500">
                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[4px] border-white shadow-xl overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" alt="Burger" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Animated Floating Spices */}
                    <div className="absolute top-[5%] left-[30%] text-4xl animate-spice-1 pointer-events-none drop-shadow-lg">🌶️</div>
                    <div className="absolute top-[25%] right-[25%] text-3xl animate-spice-2 pointer-events-none drop-shadow-lg">🌿</div>
                    <div className="absolute bottom-[15%] left-[50%] text-2xl animate-spice-3 pointer-events-none drop-shadow-lg">🧄</div>
                    <div className="absolute top-[60%] left-[5%] text-2xl animate-spice-1 pointer-events-none drop-shadow-lg">⭐</div>
                    <div className="absolute bottom-[40%] right-[5%] text-3xl animate-spice-2 pointer-events-none drop-shadow-lg">🍃</div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -30px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spice-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -50px) rotate(45deg); }
        }
        @keyframes spice-float-alt {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, 40px) rotate(-15deg); }
          75% { transform: translate(25px, -30px) rotate(20deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
        .animate-spice-1 { animation: spice-float 8s ease-in-out infinite; }
        .animate-spice-2 { animation: spice-float-alt 10s ease-in-out infinite; }
        .animate-spice-3 { animation: spice-float 6s ease-in-out infinite reverse; }
      `}</style>
        </section>
    );
};

export default Hero;