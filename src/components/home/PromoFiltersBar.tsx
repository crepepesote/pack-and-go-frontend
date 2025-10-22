'use client';

import React, { useState } from 'react';

const categories = ['Vegano', 'Sushi', 'Pizza & Hamburguesa', 'otras'];

export default function ProductsHeader() {
  const [activeCategory, setActiveCategory] = useState('Pizza & Hamburguesa');

  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Título de Ofertas */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            HASTA -40% 🎉 ofertas exclusivas en Tunja
          </h2>
        </div>

        {/* Filtros de Categoría */}
        <nav className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-orange-100 text-orange-600 border border-orange-500'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

