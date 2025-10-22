'use client';

import React from 'react';

// Componente: PopularBoxes
// Ubica este archivo en: components/PopularBoxes.jsx
// Imágenes esperadas en: public/images/inicio/

const boxes = [
  { id: 1, file: 'McdonaldsBox.png', title: 'Burguer Box' },
  { id: 2, file: 'PapasJhonsBox.png', title: 'Papa Box' },
  { id: 3, file: 'KfcBox.png', title: 'KFC Box' },
  { id: 4, file: 'TexasBox.png', title: 'Texas Box' },
  { id: 5, file: 'BurguerKingBox.png', title: 'Burger King' },
  { id: 6, file: 'ShaurmaBox.png', title: 'Shaurma Box' },
];

export default function PopularBoxes({ items = boxes }) {
  return (
    <section className="py-8">
      <div className="max-w-[90%] mx-auto">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-6">CAJAS POPULARES</h3>

        {/* Grid responsive: en desktop muestra 6 columnas, en pantallas pequeñas se adapta */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-end">
          {items.map((box) => (
            <div
              key={box.id}
              className="rounded-lg overflow-hidden shadow-sm transform transition hover:-translate-y-1 cursor-pointer bg-white"
            >
              {/* Zona superior: la imagen ocupa todo el bloque superior */}
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={`/images/inicio/${box.file}`}
                  alt={box.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Franja inferior naranja con el título centrado */}
              <div className="bg-orange-500 text-white text-center py-3 font-semibold text-sm">
                {box.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

