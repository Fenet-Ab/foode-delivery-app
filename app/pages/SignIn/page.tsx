'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const AuthContent = () => {
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode');
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (mode === 'register') {
            setIsLogin(false);
        } else if (mode === 'login') {
            setIsLogin(true);
        }
    }, [mode]);

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center pt-28 pb-12 px-4 md:px-8 font-sans">
            <div className={`max-w-6xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col ${isLogin ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[700px] border border-gray-100 relative transition-all duration-700`}>
                
                {/* Back to Home Button (Universal) */}
                <div className="absolute top-8 left-8 z-50 md:hidden">
                    <Link href="/" className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                </div>

                {/* Image Side (Left on Login, Right on Register) */}
                <div className="hidden md:block md:w-1/2 relative overflow-hidden group">
                    <Image 
                        src={isLogin ? "/auth_bg.png" : "/register_bg.png"} 
                        alt="Delicious Food" 
                        fill 
                        sizes="50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                        <div className="animate-fade-in-up">
                            <span className="text-primary-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block translate-y-2 opacity-0 animate-reveal">Premium Experience</span>
                            <h2 className="text-5xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-4">
                                Elevation <br />
                                <span className="text-primary-orange italic">Of Taste</span> <br />
                                Starts Here
                            </h2>
                            <p className="text-gray-300 max-w-xs font-medium text-sm leading-relaxed">
                                Experience curated dishes and exclusive perks when you join our elite food community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Side (Right on Login, Left on Register) */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white">
                    <div className="max-w-md w-full mx-auto">
                        <div className="mb-12">
                            <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-3 leading-none">
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </h1>
                            <div className="h-1 w-12 bg-primary-orange rounded-full mb-6"></div>
                            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
                                {isLogin ? 'Enter your credentials to access your account' : 'Register now to start your culinary journey'}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {!isLogin && (
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-primary-orange transition-colors">Full Name</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Ex. John Wick"
                                            className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-primary-orange/20 focus:bg-white rounded-[1.25rem] outline-none transition-all duration-300 font-bold text-gray-900 placeholder:text-gray-200"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1 group-focus-within:text-primary-orange transition-colors">Email Address</label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="user@example.com"
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-primary-orange/20 focus:bg-white rounded-[1.25rem] outline-none transition-all duration-300 font-bold text-gray-900 placeholder:text-gray-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-primary-orange transition-colors">Password</label>
                                    {isLogin && (
                                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-orange hover:text-secondary-orange transition-colors">Forgot?</button>
                                    )}
                                </div>
                                <div className="relative">
                                    <input 
                                        type="password" 
                                        placeholder="••••••••••••"
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-primary-orange/20 focus:bg-white rounded-[1.25rem] outline-none transition-all duration-300 font-bold text-gray-900 placeholder:text-gray-200"
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <div className="flex items-center gap-3 ml-1 py-2">
                                    <input type="checkbox" id="terms" className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary-orange focus:ring-primary-orange accent-primary-orange cursor-pointer" />
                                    <label htmlFor="terms" className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 cursor-pointer select-none">
                                        I accept the <span className="text-gray-900 hover:text-primary-orange transition-colors underline decoration-primary-orange/30">Privacy Policy</span>
                                    </label>
                                </div>
                            )}

                            <button className="w-full py-5 bg-primary-orange text-white font-black text-sm uppercase tracking-[0.25em] rounded-[1.25rem] shadow-2xl shadow-primary-orange/30 hover:bg-secondary-orange hover:-translate-y-1 transition-all duration-500 active:scale-[0.97] mt-4 relative overflow-hidden group/btn">
                                <span className="relative z-10">{isLogin ? 'Authenticate' : 'Create Account'}</span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-50">
                            <p className="text-center">
                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                                    {isLogin ? "New to Savory?" : "Joined us before?"}
                                </span>
                                <button 
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="ml-3 text-primary-orange font-black hover:text-secondary-orange transition-all duration-300 uppercase tracking-[0.2em] text-[10px] border-b-2 border-primary-orange/10 hover:border-primary-orange"
                                >
                                    {isLogin ? 'Create Profile' : 'Access Account'}
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Branding - Hidden on mobile, shown on desktop */}
                    <div className="hidden md:block absolute top-12 right-12">
                        <Link href="/" className="flex items-center gap-3 group">
                             <div className="w-12 h-12 bg-primary-orange rounded-2xl flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-primary-orange/40 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                S
                             </div>
                             <div className="flex flex-col">
                                <span className="font-black text-gray-900 uppercase tracking-tighter text-2xl leading-none">Savor<span className="text-primary-orange">y</span></span>
                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em] leading-none mt-1">Gourmet Hub</span>
                             </div>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-reveal {
                    animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                }
            `}</style>
        </div>
    );
};

const AuthPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center">Loading...</div>}>
            <AuthContent />
        </Suspense>
    );
};

export default AuthPage;