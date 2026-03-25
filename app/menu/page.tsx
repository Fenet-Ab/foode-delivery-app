'use client';

import React, { useState } from 'react';
import FoodCard from '@/app/components/FoodCard/page';

const dishes = [
  {
    id: 1,
    name: "Traditional Shiro Wot",
    description: "Authentic Ethiopian chickpea stew with spiced butter.",
    price: 15.00,
    rating: 4.9,
    category: "Traditional",
    image: "/shiro.png"
  },
  {
    id: 2,
    name: "Aged Roasted Duck",
    description: "Slow-roasted with cherry reduction and parsnip purée.",
    price: 32.00,
    rating: 4.8,
    category: "Traditional",
    image: "/auth_bg.png"
  },
  {
    id: 3,
    name: "Classic Wagyu Burger",
    description: "Premium Wagyu beef, truffle aioli, and brioche bun.",
    price: 24.00,
    rating: 5.0,
    category: "Burgers",
    image: "/burger.png"
  },
  {
    id: 4,
    name: "Savory Rice Platter",
    description: "Basmati rice infused with saffron and garden herbs.",
    price: 16.50,
    rating: 4.7,
    category: "Rice Platters",
    image: "/hero_rice.png"
  },
  {
    id: 5,
    name: "Artisan Brewed Coffee",
    description: "Single-origin beans, slow-dripped for pure flavor.",
    price: 6.50,
    rating: 4.9,
    category: "Coffee",
    image: "/coffee.png"
  },
  {
    id: 6,
    name: "Lava Cake Delight",
    description: "Warm chocolate lava cake with Madagascar vanilla bean gelato.",
    price: 12.00,
    rating: 4.9,
    category: "Desserts",
    image: "/auth_bg.png" 
  }
];

const categories = [
  { id: 'All', name: 'All', icon: '🍽️' },
  { id: 'Traditional', name: 'Traditional', icon: '🍲' },
  { id: 'Rice Platters', name: 'Rice Platters', icon: '🍚' },
  { id: 'Burgers', name: 'Burgers', icon: '🍔' },
  { id: 'Coffee', name: 'Coffee', icon: '☕' },
  { id: 'Desserts', name: 'Desserts', icon: '🧁' }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <div className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-primary-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4">A Taste of Perfection</span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
          Our <span className="text-primary-orange italic">Signature</span> Menu
        </h1>
        <div className="h-1.5 w-24 bg-primary-orange rounded-full mb-8"></div>
      </div>

      {/* Category Filter Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-4 p-8 min-w-[160px] rounded-[2.5rem] border-2 transition-all duration-500 group ${
                activeCategory === cat.id 
                ? 'bg-white border-primary-orange/20 shadow-2xl shadow-primary-orange/10 -translate-y-2' 
                : 'bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-100'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 text-3xl ${
                activeCategory === cat.id 
                ? 'bg-primary-orange shadow-lg shadow-primary-orange/30 rotate-12' 
                : 'bg-white text-gray-400 group-hover:rotate-6 shadow-sm'
              }`}>
                {cat.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                activeCategory === cat.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDishes.map((dish) => (
            <FoodCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
