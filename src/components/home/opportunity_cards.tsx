'use client';

import React from 'react';

// Asumiendo que las imágenes están en esta ruta basado en tus componentes anteriores
const chefImage = '/images/inicio/Chef.png';
const riderImage = '/images/inicio/Rider.png';

export default function OpportunityCards() {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1 - Chef/Business */}
        <div className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer">
          <img 
            src={chefImage} 
            alt="Chef" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
          
          <div className="absolute inset-0 z-20 flex flex-col">
            {/* Top label */}
            <div className="absolute top-0 left-8 bg-white/95 rounded-b-lg px-4 py-2 inline-flex w-fit">
              <span className="text-sm font-medium text-gray-900">Gana mas con menos tarifas</span>
            </div>
            
            {/* Bottom content */}
            <div className="mt-auto p-8">
              <div className="text-orange-500 text-sm font-semibold mb-2">Registrate como negocio</div>
              <h2 className="text-white text-4xl font-bold mb-6">Trabaja con nosotros</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Empezar
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Rider/Driver */}
        <div className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer">
          <img 
            src={riderImage} 
            alt="Rider" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
          
          <div className="absolute inset-0 z-20 flex flex-col">
            {/* Top label (CORREGIDO) */}
            <div className="absolute top-0 left-8 bg-white/95 rounded-b-lg px-4 py-2 inline-flex w-fit">
              <span className="text-sm font-medium text-gray-900">Puestos Disponibles</span>
            </div>
            
            {/* Bottom content */}
            <div className="mt-auto p-8">
              <div className="text-orange-500 text-sm font-semibold mb-2">Registrate como conductor</div>
              <h2 className="text-white text-4xl font-bold mb-6">Conduce con nosotros</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Empezar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

