'use client';

import React from 'react';

const offers = [
  {
    id: 1,
    image: '/images/inicio/Carrusel1.png',
    discount: '-40%',
    title: 'Kit de comida rápida',
    restaurant: 'Chef Burgers London',
  },
  {
    id: 2,
    image: '/images/inicio/Carrusel2.png',
    discount: '-20%',
    title: 'Kit de Barbacoa',
    restaurant: 'Sabor Ahumado Premium',
  },
  {
    id: 3,
    image: '/images/inicio/Carrusel3.png',
    discount: '-17%',
    title: 'Caja mensual de Hamburguesas',
    restaurant: 'Butterbrot Caf\'e London',
  },
];

export default function OfferCarousel() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {offers.map((offer) => (
          <div key={offer.id} className="relative rounded-2xl overflow-hidden shadow-lg group">
            {/* Imagen de Fondo */}
            <div className="relative w-full h-64 md:h-72">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay con Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity"></div>
            </div>

            {/* Descuento */}
            <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              {offer.discount}
            </span>

            {/* Contenido del Texto */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="text-sm">{offer.title}</p>
              <h3 className="text-xl font-bold">{offer.restaurant}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

