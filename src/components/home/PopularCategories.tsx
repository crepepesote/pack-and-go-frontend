'use client';

import React from 'react';

// Componente listo para usar con TailwindCSS
// Guarda este archivo en: components/PopularCategories.jsx

const categoryData = [
  {
    id: 1,
    name: 'Hamburguesas',
    subtitle: '21 Tipos',
    image: '/images/inicio/Categoria1.png',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 2,
    name: 'Ensaladas',
    subtitle: '32 Tipos',
    image: '/images/inicio/Categoria2.png',
    bgColor: 'bg-gray-100',
  },
  {
    id: 3,
    name: 'Pasta y Derivados',
    subtitle: '4 Restaurantes',
    image: '/images/inicio/Categoria3.png',
    bgColor: 'bg-gray-100',
  },
  {
    id: 4,
    name: 'Pizza',
    subtitle: '32 Restaurantes',
    image: '/images/inicio/Categoria4.png',
    bgColor: 'bg-gray-100',
  },
  {
    id: 5,
    name: 'Desayunos',
    subtitle: '4 Restaurantes',
    image: '/images/inicio/Categoria5.png',
    bgColor: 'bg-gray-100',
  },
  {
    id: 6,
    name: 'Sopas',
    subtitle: '32 Restaurantes',
    image: '/images/inicio/Categoria6.png',
    bgColor: 'bg-gray-100',
  },
];

export default function PopularCategories({ items = categoryData }) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
          Categorías populares en Pack and Go <span className="text-2xl">😋</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((cat) => (
            <article
              key={cat.id}
              tabIndex={0}
              role="button"
              aria-label={`Ir a ${cat.name}`}
              className="relative rounded-2xl overflow-hidden shadow-sm transform transition duration-300 hover:scale-105 focus:scale-105 cursor-pointer"
            >
              {/* TOP: fondo de color (solo la parte superior) y la imagen centrada encima */}
              <div className={`${cat.bgColor} flex items-center justify-center rounded-t-2xl h-40`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* BOTTOM: panel blanco con títulos */}
              <div className="bg-white px-4 pb-5 pt-3">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                  {cat.name}
                </h3>
                <p className="text-xs text-orange-500 font-semibold text-center mt-1">
                  {cat.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

