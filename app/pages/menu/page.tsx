'use client';

import React, { useState } from 'react';
import FoodCard from '@/app/components/FoodCard/page';
import { useSearch } from '@/app/contexts/SearchContext';
import Menu from '@/app/components/Menu/page';
// import Menu from '../../components/Menu/page';

const dishes = [
  {
    id: 1,
    name: 'Traditional Shiro Wot',
    description: 'Authentic Ethiopian chickpea stew with spiced butter.',
    price: 15.00,
    rating: 4.9,
    category: 'Traditional',
    image: '/shiro.png'
  },
  {
    id: 2,
    name: 'Aged Roasted Duck',
    description: 'Slow-roasted with cherry reduction and parsnip purée.',
    price: 32.00,
    rating: 4.8,
    category: 'Traditional',
    image: '/auth_bg.png'
  },
  {
    id: 3,
    name: 'Classic Wagyu Burger',
    description: 'Premium Wagyu beef, truffle aioli, and brioche bun.',
    price: 24.00,
    rating: 5.0,
    category: 'Burgers',
    image: '/burger.png'
  },
  {
    id: 4,
    name: 'Savory Rice Platter',
    description: 'Basmati rice infused with saffron and garden herbs.',
    price: 16.50,
    rating: 4.7,
    category: 'Rice Platters',
    image: '/hero_rice.png'
  },
  {
    id: 5,
    name: 'Artisan Brewed Coffee',
    description: 'Single-origin beans, slow-dripped for pure flavor.',
    price: 6.50,
    rating: 4.9,
    category: 'Coffee',
    image: '/coffee.png'
  },
  {
    id: 6,
    name: 'Lava Cake Delight',
    description: 'Warm chocolate lava cake with Madagascar vanilla bean gelato.',
    price: 12.00,
    rating: 4.9,
    category: 'Desserts',
    image: '/auth_bg.png'
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { searchQuery } = useSearch();

  const filteredBySearch = searchQuery.trim() === ''
    ? dishes
    : dishes.filter(d =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredDishes = activeCategory === 'All'
    ? filteredBySearch
    : filteredBySearch.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Menu
        showFoodGrid={false}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredDishes.map((dish) => (
              <FoodCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-5xl mb-4 opacity-30" aria-hidden>🔍</span>
            <h3 className="text-lg font-semibold text-gray-900">No results found</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Try searching for something else or pick another category above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
