'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/app/contexts/CartContext';
import TopFooter from '../TopFooter/page';
import Footer from '../Footer/page';

const dishes = [
    {
        id: 1,
        name: "Traditional Shiro Wot",
        description: "Our signature Shiro is a labor of love, crafted from sun-dried chickpeas grounded with 22 secret spices. Slow-simmered in a traditional clay pot (mitad), it's enriched with clarified herb butter (niter kibbeh) for a velvety finish that defines Ethiopian comfort food.",
        price: 15.00,
        rating: 4.9,
        category: "Traditional",
        image: "/shiro.png",
        prepTime: "20 min",
        calories: "450 kcal",
        ingredients: ["Chickpea Flour", "Spiced Butter", "Berbere", "Garlic", "Onions"]
    },
    {
        id: 2,
        name: "Aged Roasted Duck",
        description: "Succulent duck breast, aged for 14 days to enhance flavor, then slow-roasted to perfection. Served with a tart cherry reduction and a smooth parsnip purée, this dish is a masterpiece of balance and texture.",
        price: 32.00,
        rating: 4.8,
        category: "Traditional",
        image: "/auth_bg.png",
        prepTime: "30 min",
        calories: "680 kcal",
        ingredients: ["Aged Duck", "Cherry Reduction", "Parsnip", "Thyme", "Red Wine"]
    },
    {
        id: 3,
        name: "Classic Wagyu Burger",
        description: "The ultimate burger experience. A thick patty of premium Wagyu beef, known for its intense marbling, topped with shaved black truffles, aged white cheddar, and served on a toasted, butter-brushed brioche bun.",
        price: 24.00,
        rating: 5.0,
        category: "Burgers",
        image: "/burger.png",
        prepTime: "15 min",
        calories: "820 kcal",
        ingredients: ["Wagyu Beef", "Truffle Aioli", "Brioche", "Cheddar", "Caramelized Onions"]
    },
    {
        id: 4,
        name: "Savory Rice Platter",
        description: "Long-grain basmati rice, each grain infused with premium Persian saffron and a blend of семь aromatic spices. Garnished with toasted pine nuts and fresh garden herbs for a light yet deeply satisfying meal.",
        price: 16.50,
        rating: 4.7,
        category: "Rice Platters",
        image: "/hero_rice.png",
        prepTime: "18 min",
        calories: "520 kcal",
        ingredients: ["Basmati Rice", "Saffron", "Pine Nuts", "Cardamom", "Cilantro"]
    },
    {
        id: 5,
        name: "Artisan Brewed Coffee",
        description: "Sourced from the high-altitude forests of Kaffa, Ethiopia. This single-origin bean is medium-roasted and slow-dripped to preserve its complex floral notes and bright acidity. A true connoisseur's choice.",
        price: 6.50,
        rating: 4.9,
        category: "Coffee",
        image: "/coffee.png",
        prepTime: "8 min",
        calories: "5 kcal",
        ingredients: ["Ethiopian Beans", "Pure Spring Water"]
    },
    {
        id: 6,
        name: "Lava Cake Delight",
        description: "A decadent dark chocolate cake with a molten heart of premium Belgian cocoa. Served warm alongside a scoop of Madagascar vanilla bean gelato and a drizzle of salted caramel.",
        price: 12.00,
        rating: 4.9,
        category: "Desserts",
        image: "/auth_bg.png",
        prepTime: "12 min",
        calories: "550 kcal",
        ingredients: ["Belgian Chocolate", "Vanilla Bean", "Sea Salt", "Butter", "Eggs"]
    }
];

const DetailContent = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);
    const { addToCart } = useCart();

    const dish = dishes.find(d => d.id === Number(id)) || dishes[0];

    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            <main className="pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Navigation */}
                    <div className="flex items-center justify-between mb-12">
                        <Link href="/menu" className="group flex items-center gap-3 text-gray-500 hover:text-primary-orange transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-orange group-hover:text-white transition-all shadow-orange-100/50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Menu</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border ${isLiked ? 'bg-primary-orange text-white border-primary-orange shadow-lg shadow-primary-orange/30' : 'bg-white text-gray-400 border-gray-100 hover:border-primary-orange/30'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Visual Section */}
                        <div className="relative">
                            <div className="relative h-[350px] md:h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-200 group">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                                {/* Floating Overlay Badge */}
                                <div className="absolute top-10 left-10 flex flex-col gap-3">
                                    <span className="px-6 py-2 bg-white/95 backdrop-blur-xl rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-900 border border-white/50 shadow-xl">
                                        {dish.category}
                                    </span>
                                    <div className="flex items-center gap-2 bg-primary-orange px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-xl shadow-primary-orange/40">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                        {dish.rating} (50+ Reviews)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none italic break-words">
                                    {dish.name.split(' ').slice(0, -1).join(' ')} <br className="hidden lg:block" />
                                    <span className="text-primary-orange">{dish.name.split(' ').slice(-1)}</span>
                                </h1>
                                <div className="h-1.5 w-24 bg-primary-orange rounded-full"></div>
                            </div>

                            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                                {dish.description}
                            </p>

                            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-primary-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Prep Time</p>
                                        <p className="font-black text-gray-900">{dish.prepTime}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-primary-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Calories</p>
                                        <p className="font-black text-gray-900">{dish.calories}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Main Ingredients</p>
                                <div className="flex flex-wrap gap-4">
                                    {dish.ingredients.map((ing, i) => (
                                        <span key={i} className="px-5 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold border border-gray-100 hover:border-primary-orange/20 transition-colors">
                                            {ing}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-8">
                                <div className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter">
                                    <span className="text-primary-orange italic text-2xl mr-1">$</span>
                                    {(dish.price * quantity).toFixed(2)}
                                </div>

                                <div className="flex items-center bg-white border-2 border-gray-100 rounded-2xl p-1 shadow-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary-orange hover:bg-orange-50 rounded-xl transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                    </button>
                                    <span className="w-12 text-center font-black text-gray-900">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary-orange hover:bg-orange-50 rounded-xl transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    </button>
                                </div>
                            </div>

                            <button 
                                onClick={() => addToCart({
                                    id: dish.id,
                                    name: dish.name,
                                    price: dish.price,
                                    image: dish.image,
                                    category: dish.category
                                }, quantity)}
                                className="w-full py-6 mb-12 bg-gray-900 text-white rounded-[2rem] font-black uppercase tracking-[0.4em] text-sm shadow-2xl hover:bg-primary-orange hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                            >
                                <span className="relative z-10">Add to Sensory Cart</span>
                                <div className="absolute inset-0 bg-primary-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <TopFooter />
            <Footer />
        </div>
    );
};

const CardDetailPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center">Loading...</div>}>
            <DetailContent />
        </Suspense>
    );
};

export default CardDetailPage;