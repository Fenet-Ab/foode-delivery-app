'use client';

import React from 'react';
import OffersPage from '../offers/page';
import Image from 'next/image';
import Footer from '../components/Footer/page';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB] overflow-hidden">
            {/* Story Hero */}
            <div className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">
                <div className="animate-fade-in-up space-y-10">
                    <div className="space-y-4">
                        <span className="text-primary-orange font-black uppercase tracking-[0.5em] text-[11px] px-4 py-2 bg-orange-50 rounded-full inline-block">Our Culinary Philosophy</span>
                        <h1 className="text-6xl lg:text-[100px] font-black text-gray-900 uppercase tracking-tighter leading-[0.85]">
                            Crafting <br />
                            <span className="italic text-primary-orange">Excellence</span> <br />
                            At Home
                        </h1>
                    </div>
                    
                    <p className="text-gray-500 max-w-lg text-xl font-medium leading-relaxed border-l-4 border-primary-orange/20 pl-8">
                        We don't just deliver food; we deliver the ritual of a gourmet meal, meticulously crafted and safely transported to your sanctuary.
                    </p>

                    <div className="grid grid-cols-3 gap-12 pt-10">
                        <div className="group cursor-default">
                            <h4 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter group-hover:text-primary-orange transition-colors">150+</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Master Chefs</p>
                        </div>
                        <div className="group cursor-default">
                            <h4 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter group-hover:text-primary-orange transition-colors">4.9</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Star Rating</p>
                        </div>
                        <div className="group cursor-default">
                            <h4 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter group-hover:text-primary-orange transition-colors">15m</h4>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Prep Speed</p>
                        </div>
                    </div>
                </div>

                {/* Decorative Visual Card */}
                <div className="relative h-[700px] w-full bg-white rounded-[4rem] p-4 shadow-[0_50px_100px_rgba(0,0,0,0.05)] group transition-all duration-1000 hover:shadow-[0_80px_150px_rgba(0,0,0,0.1)]">
                    <div className="relative h-full w-full bg-gray-50 rounded-[3.5rem] overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-2/3">
                             <Image 
                                src="/shiro.png" 
                                alt="Signature Dish" 
                                fill 
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110 group-hover:rotate-2"
                             />
                        </div>

                        <div className="flex flex-col h-full justify-end p-16 gap-10 relative z-10 pb-24">
                            <div className="space-y-4">
                                <blockquote className="text-4xl lg:text-5xl font-black italic text-gray-900 uppercase tracking-tighter leading-[0.9] max-w-sm">
                                    "Flavor is a journey, not a destination."
                                </blockquote>
                                <div className="h-1.5 w-24 bg-primary-orange rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-0.5 bg-gray-200"></div>
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">— The Savory Collective</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seamless transition section */}
            <div className="bg-gray-900 py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
                    <span className="text-primary-orange font-black uppercase tracking-[0.6em] text-[10px] mb-8">Exclusive Access</span>
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                        The <span className="text-primary-orange italic">Savory</span> Privileges
                    </h2>
                    <p className="text-white/40 max-w-xl text-sm font-medium uppercase tracking-[0.3em] leading-relaxed mb-12">
                        Membership isn't just about delivery. It's about rewards that elevate every single bite.
                    </p>
                    <div className="w-px h-24 bg-primary-orange"></div>
                </div>
            </div>

            {/* Injected Offers */}
            <div className="relative bg-[#FDFCFB] pt-10">
                <OffersPage isSection={true} />
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
            <Footer />
        </div>
    );
};

export default AboutPage;
