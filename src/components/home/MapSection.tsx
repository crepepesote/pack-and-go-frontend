'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react'; // Cambiado a ChevronLeft para que coincida con la imagen
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export default function MapSection() {
  return (
    <section className="bg-slate-50 px-[5%] py-12 md:py-16 font-inter">
      <div className="max-w-[90%] mx-auto relative rounded-xl shadow-lg overflow-hidden h-[350px] md:h-[400px] lg:h-[450px]">
        {/* Imagen del mapa de fondo */}
        <Image
          src="/images/products/map.png"
          alt="Mapa de ubicación de Pack and Go en Tunja"
          fill
          className="object-cover"
          priority
        />

        {/* Tarjeta de información flotante (izquierda) */}
        <div className="absolute top-8 left-8 bg-[#192D1D] text-white p-6 rounded-lg shadow-xl w-[calc(100%-4rem)] md:w-96">
          <h2 className="text-2xl font-bold mb-1">Pack and Go</h2>
          {/* ✅ CAMBIO 1: Color naranja para el subtítulo */}
          <p className="text-lg font-semibold text-orange-500 mb-4">Tunja – Boyacá</p>
          
          <div className="space-y-3 text-sm">
            <p className="text-gray-200">
              Avenida Central del Norte 39-115, 150003 Tunja, Tunja, Boyacá
            </p>
            
            <div>
              <p className="text-gray-200">Phone number</p>
              {/* ✅ CAMBIO 2: Color naranja para el número de teléfono */}
              <a href="tel:+5731212345678" className="font-bold text-base text-orange-500 hover:underline">
                +57 312 1234 5678
              </a>
            </div>
            
            <div>
              <p className="text-gray-200">Website</p>
              {/* ✅ CAMBIO 3: Color naranja para el sitio web */}
              <a href="http://pack-and-go.co/" target="_blank" rel="noopener noreferrer" className="font-bold text-base text-orange-500 hover:underline break-all">
                http://pack-and-go.co/
              </a>
            </div>
          </div>
        </div>

        {/* Marcador de ubicación actualizado */}
        <div className="absolute top-1/3 right-8 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-xl flex items-center space-x-3">
          {/* Icono Personalizado */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/images/icons/iconmap.png" // Asegúrate que la ruta sea correcta, antes era 'iconmap.png'
              alt="Icono de mapa Pack and Go"
              fill
              className="object-contain"
            />
          </div>
          {/* Texto */}
          <div className="text-gray-900 font-bold text-sm whitespace-nowrap">
            Pack and Go <br/> Tunja
          </div>
          {/* ✅ CAMBIO 4: Flecha con fondo negro y color naranja, en círculo */}
          <div className="bg-gray-900 text-orange-500 p-2 rounded-full flex-shrink-0">
            <ChevronLeft size={16} />
          </div>
        </div>

      </div>
    </section>
  );
}