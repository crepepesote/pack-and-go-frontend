'use client';

import React, { useState } from 'react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

interface CategoriesBarProps {
  categories?: { id: string; name: string; slug: string }[];
  onCategoryClick?: (slug: string) => void;
}

export default function CategoriesBar({
  categories = [
    { id: '1', name: 'Ofertas', slug: 'ofertas' },
    { id: '2', name: 'Carnes', slug: 'carnes' },
    { id: '3', name: 'Verduras', slug: 'verduras' },
    { id: '4', name: 'Frutas', slug: 'frutas' },
    { id: '5', name: 'Lácteos', slug: 'lacteos' },
    { id: '6', name: 'Especias', slug: 'especias' },
  ],
  onCategoryClick,
}: CategoriesBarProps) {
  const [activeCategory, setActiveCategory] = useState('ofertas');

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    if (onCategoryClick) {
      onCategoryClick(slug);
    }
  };

  return (
    <section className="bg-orange-500 px-[5%] py-2 md:py-3 font-inter">
      <div className="max-w-[95%] mx-auto">
        {/* Scrollable Categories */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 md:gap-4 lg:gap-6 min-w-min md:min-w-full pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.slug
                    ? 'bg-gray-900 text-white'
                    : 'text-white hover:bg-orange-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}