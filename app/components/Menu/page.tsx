'use client';

import React, { useState } from 'react';
import FoodCard from '@/app/components/FoodCard/page';
import { useSearch } from "@/app/contexts/SearchContext";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { searchQuery, setSearchQuery } = useSearch();

    const categories = [
        { name: 'All', icon: '🍽️' },
        { name: 'Traditional', icon: '🍲' },
        { name: 'Rice Platters', icon: '🍚' },
        { name: 'Burgers', icon: '🍔' },
        { name: 'Coffee', icon: '☕' },
        { name: 'Desserts', icon: '🧁' },
    ];

    const foodItems = [
        {
            id: 1,
            name: 'Special Shiro',
            category: 'Traditional',
            price: 12.50,
            image: '/shiro.png',
            description: 'Slow-cooked traditional chickpea stew with authentic spices.',
            rating: 4.8
        },
        {
            id: 2,
            name: 'Premium Roast Coffee',
            category: 'Coffee',
            price: 4.90,
            image: '/coffee.png',
            description: 'Freshly ground Ethiopian arabica beans, roasted to perfection.',
            rating: 4.9
        },
        {
            id: 3,
            name: 'Hero Rice Platter',
            category: 'Rice Platters',
            price: 15.20,
            image: '/hero_rice.png',
            description: 'Fragrant basmati rice served with seasonal vegetables and meat.',
            rating: 4.7
        },
        {
            id: 4,
            name: 'Ultimate Blaze Burger',
            category: 'Burgers',
            price: 13.50,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
            description: 'Double beef patty with spicy jalapeños and melted cheddar.',
            rating: 4.6
        },
        {
            id: 5,
            name: 'Classic Cheeseburger',
            category: 'Burgers',
            price: 10.90,
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
            description: 'Juicy beef patty with classic cheddar and fresh vegetables.',
            rating: 4.5
        },
        {
            id: 6,
            name: 'Iced Caramel Latte',
            category: 'Coffee',
            price: 5.50,
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400',
            description: 'Chilled espresso with creamy milk and rich caramel drizzle.',
            rating: 4.8
        }
    ];

    const filteredItems = foodItems.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header & Search */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="flex flex-col gap-2 transition-all duration-700">
                        <span className="text-primary-orange font-black uppercase tracking-[0.3em] text-xs">Our Menu</span>
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic">
                            Delicious <span className="text-primary-orange">Selection</span>
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-md group">
                        <input 
                            type="text" 
                            placeholder="What are you craving today?" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-3xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-4 focus:ring-primary-orange/10 focus:bg-white focus:border-primary-orange/30 transition-all placeholder:text-gray-400"
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-orange transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                </div>

                {/* Categories Wrapper */}
                <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest whitespace-nowrap transition-all duration-300 ${
                                activeCategory === cat.name 
                                ? 'bg-primary-orange text-white shadow-xl shadow-primary-orange/30 -translate-y-1' 
                                : 'bg-gray-50 text-gray-400 border border-gray-100 hover:bg-white hover:border-primary-orange/30 hover:text-gray-600'
                            }`}
                        >
                            <span className="text-lg">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Food Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <FoodCard key={item.id} dish={item as any} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
                            <span className="text-6xl opacity-20">🔍</span>
                            <p className="text-gray-400 font-bold uppercase tracking-widest">No items found matching your craving.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Menu;