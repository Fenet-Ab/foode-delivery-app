'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FoodCard from '@/app/components/FoodCard/page';
import { useSearch } from '@/app/contexts/SearchContext';

const DEFAULT_FOOD_ITEMS = [
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

const CATEGORIES = [
    { name: 'All', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
    { name: 'Traditional', image: '/shiro.png' },
    { name: 'Rice Platters', image: '/hero_rice.png' },
    { name: 'Burgers', image: '/burger.png' },
    { name: 'Coffee', image: '/coffee.png' },
    { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400' },
];

export type MenuProps = {
    /** When false, only header + category row (e.g. full menu page supplies its own grid). Default true. */
    showFoodGrid?: boolean;
    activeCategory?: string;
    onCategoryChange?: (category: string) => void;
};

const Menu = ({
    showFoodGrid = true,
    activeCategory: activeCategoryProp,
    onCategoryChange,
}: MenuProps) => {
    const [internalCategory, setInternalCategory] = useState('All');
    const activeCategory = activeCategoryProp ?? internalCategory;
    const setActiveCategory = onCategoryChange ?? setInternalCategory;

    const { searchQuery } = useSearch();

    const filteredItems = DEFAULT_FOOD_ITEMS.filter((item) => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const ringOffsetClass = 'ring-offset-[#FDFCFB]';

    return (
        <section className="pt-28 md:pt-36 pb-4 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="mb-10 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Explore our menu
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy
                        your cravings and elevate your dining experience, one delicious meal at a time.
                    </p>
                    <div className="mt-10 border-b border-gray-200/90" aria-hidden />
                </header>

                <div className="w-full overflow-x-auto overflow-y-visible pb-6 mb-4 -mx-1 px-1 no-scrollbar scroll-smooth">
                    <div
                        className="flex flex-nowrap items-start justify-start lg:justify-between gap-8 sm:gap-10 md:gap-12 py-2 min-w-max lg:min-w-0 lg:w-full"
                        role="list"
                    >
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.name}
                                type="button"
                                onClick={() => setActiveCategory(cat.name)}
                                className="group flex shrink-0 flex-col items-center gap-3 px-1 min-w-[76px] max-w-[140px] text-center transition-colors"
                                role="listitem"
                            >
                                <div
                                    className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden bg-gray-50 shadow-md ring transition-all duration-300 ${activeCategory === cat.name
                                        ? `ring-2 ring-primary-orange ring-offset-2 ${ringOffsetClass} shadow-lg`
                                        : 'ring-1 ring-gray-200/80 group-hover:ring-gray-300 group-hover:shadow-lg'
                                        }`}
                                >
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        sizes="(max-width: 640px) 80px, 96px"
                                        className="object-cover"
                                    />
                                </div>
                                <span
                                    className={`text-sm font-medium leading-tight transition-colors ${activeCategory === cat.name
                                        ? 'text-primary-orange'
                                        : 'text-gray-500 group-hover:text-gray-800'
                                        }`}
                                >
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {showFoodGrid && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-20">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <FoodCard key={item.id} dish={item as any} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
                                <span className="text-6xl opacity-20" aria-hidden>🔍</span>
                                <p className="text-gray-500 font-medium text-sm sm:text-base max-w-md">
                                    No items found matching your craving.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Menu;
