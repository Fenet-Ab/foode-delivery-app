'use client';

import React, { useState } from 'react';
import OffersPage from '../../offers/page';
import Image from 'next/image';
import Footer from '../../components/Footer/page';

const AboutPage = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [rating, setRating] = useState(4);
    const [hoverRating, setHoverRating] = useState(0);

    const stats = [
        { value: '150+', label: 'Master Chefs' },
        { value: '4.9', label: 'Star Rating' },
        { value: '15m', label: 'Prep Speed' },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB] overflow-x-hidden">
            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary-orange/[0.06] blur-[100px]" />
                <div className="absolute top-[40%] -left-32 h-[360px] w-[360px] rounded-full bg-orange-200/30 blur-[90px]" />
            </div>

            {/* Story */}
            <div className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-24 items-center">
                    <div className="animate-fade-in-up space-y-8 lg:space-y-10">
                        <div className="space-y-5">
                            <span className="text-primary-orange font-black uppercase tracking-[0.35em] text-[10px] sm:text-[11px] px-4 py-2 bg-orange-50/90 rounded-full inline-block border border-primary-orange/10 shadow-sm">
                                Our culinary philosophy
                            </span>
                            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[clamp(3rem,5.5vw,5rem)] font-black text-gray-900 uppercase tracking-tighter leading-[0.92]">
                                Crafting <br />
                                <span className="italic text-primary-orange">Excellence</span> <br />
                                <span className="text-gray-800">At Home</span>
                            </h1>
                        </div>

                        <p className="text-gray-600 max-w-lg text-lg sm:text-xl font-medium leading-relaxed pl-5 border-l-[3px] border-primary-orange/30">
                            We don&apos;t just deliver food; we deliver the ritual of a gourmet meal, meticulously crafted
                            and safely transported to your sanctuary.
                        </p>

                        <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="group rounded-2xl bg-white/80 border border-gray-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-3 py-5 sm:px-4 sm:py-6 text-center transition-all duration-300 hover:border-primary-orange/15 hover:shadow-[0_12px_40px_rgba(234,88,12,0.08)]"
                                >
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tighter tabular-nums group-hover:text-primary-orange transition-colors">
                                        {s.value}
                                    </p>
                                    <p className="mt-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 leading-tight">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature card */}
                    <div className="relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
                        <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary-orange/20 via-transparent to-primary-orange/5 blur-sm opacity-70" aria-hidden />
                        <div className="relative h-[min(560px,85vh)] sm:h-[620px] lg:h-[680px] w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white p-1 sm:p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.08)] ring-1 ring-gray-900/[0.04] group transition-shadow duration-700 hover:shadow-[0_32px_100px_rgba(0,0,0,0.12)]">
                            <div className="relative h-full w-full rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden bg-gray-100">
                                <div className="absolute inset-x-0 top-0 h-[58%] sm:h-[60%]">
                                    <Image
                                        src="/shiro.png"
                                        alt="Signature dish — traditional shiro"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-[1.04]"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent pointer-events-none" />
                                </div>

                                <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20">
                                    <button
                                        type="button"
                                        aria-label={isLiked ? 'Unlike' : 'Like'}
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg border ${isLiked
                                            ? 'bg-primary-orange text-white border-primary-orange shadow-primary-orange/30'
                                            : 'bg-white/95 text-gray-600 border-white/80 hover:bg-white hover:text-primary-orange hover:border-primary-orange/20'
                                            }`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12 pt-28 sm:pt-32 bg-gradient-to-t from-gray-50 via-gray-50/98 to-transparent">
                                    <div className="space-y-5 sm:space-y-6">
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    aria-label={`Rate ${star} stars`}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    onClick={() => setRating(star)}
                                                    className="transition-transform duration-200 hover:scale-110 active:scale-95"
                                                >
                                                    <svg
                                                        className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-300 ${(hoverRating || rating) >= star ? 'fill-primary-orange text-primary-orange' : 'fill-gray-200 text-gray-200'}`}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                </button>
                                            ))}
                                            <span className="ml-1 sm:ml-2 text-xs font-bold text-gray-400 uppercase tracking-widest tabular-nums">
                                                {rating.toFixed(1)} / 5.0
                                            </span>
                                        </div>

                                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-black italic text-gray-900 tracking-tight leading-[1.05] max-w-md">
                                            &ldquo;Flavor is a journey, not a destination.&rdquo;
                                        </blockquote>
                                        <div className="h-1 w-16 sm:w-20 bg-primary-orange rounded-full" />
                                    </div>
                                    <div className="flex items-center gap-3 mt-6 sm:mt-8">
                                        <div className="h-px flex-1 max-w-[3rem] bg-gray-200" />
                                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-gray-400">
                                            — The Savory Collective
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Privileges band */}
            <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-orange/25 blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-600/20 blur-[100px]" />
                </div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
                    <span className="text-primary-orange font-black uppercase tracking-[0.5em] text-[10px] mb-6 sm:mb-8">
                        Exclusive access
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-8 sm:mb-10">
                        The <span className="text-primary-orange italic">Savory</span> Privileges
                    </h2>
                    <p className="text-white/50 max-w-lg text-sm sm:text-base font-medium leading-relaxed tracking-wide mb-10 sm:mb-12">
                        Membership isn&apos;t just about delivery. It&apos;s about rewards that elevate every single bite.
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-primary-orange to-primary-orange/20 rounded-full" />
                        <span className="sr-only">Section end</span>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative bg-[#FDFCFB]">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
                <OffersPage isSection={true} />
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(28px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-fade-in-up {
                        animation: none;
                        opacity: 1;
                    }
                }
            `}</style>
            <Footer />
        </div>
    );
};

export default AboutPage;
