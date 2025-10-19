'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

interface ProductsHeaderProps {
  onSearch?: (query: string) => void;
}

export default function ProductsHeader({ onSearch }: ProductsHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <section className="bg-white px-[5%] py-6 md:py-8 lg:py-10 font-inter">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 flex-shrink-0">
          Todos los ingredientes de Pack and Go
        </h2>

        {/* Search Bar */}
        <div className="relative w-full md:w-96 md:flex-shrink-0">
          <Search
            size={22}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700"
          />
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-800 rounded-full focus:outline-none focus:border-green-700 transition text-sm md:text-base font-medium placeholder-gray-700"
          />
        </div>
      </div>
    </section>
  );
}