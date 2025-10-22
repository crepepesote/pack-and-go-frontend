'use client';

import React, { useState } from 'react';

// Componente para las tarjetas de notificación
const NotificationCard = ({ iconSrc, title, subtitle, className }) => (
  <div className={`absolute bg-white rounded-xl shadow-lg p-3 flex items-start gap-3 w-80 z-30 ${className}`}>
    <div className="bg-green-100 rounded-full p-2 flex items-center justify-center">
      <img 
        src={iconSrc} 
        alt="logo icon" 
        width={24} 
        height={24} 
        className="object-contain"
      />
    </div>
    <div>
      <p className="font-bold text-sm text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </div>
  </div>
);

// Componente para los números con borde blanco
const StyledNumber = ({ number, className }) => (
  <span
    className={`absolute text-7xl font-black z-50 pointer-events-none select-none ${className}`}
    style={{
      color: 'transparent',
      WebkitTextStroke: '2px white', // Estilo para el borde del texto
      textStroke: '2px white',
    }}
  >
    {number}
  </span>
);


export default function LandingHero() {
  const [postalCode, setPostalCode] = useState('');

  const handleSearch = () => {
    console.log('Buscar código postal:', postalCode);
    // Lógica de búsqueda aquí
  };

  return (
    <section className="relative z-10 bg-gray-50 font-inter py-10">
      <div className="relative max-w-[90%] mx-auto bg-white rounded-2xl border border-gray-200 p-8 md:p-12 overflow-hidden">
        {/* --- Elemento decorativo naranja (oculto en móvil) --- */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[40%] bg-orange-500 rounded-l-full z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Contenido Izquierdo (ocupa 1 de 3 columnas en lg) */}
          <div className="lg:col-span-1 space-y-6 text-center lg:text-left z-40">
            <div className="space-y-4">
              <p className="text-base text-gray-600">
                Pide comida de restaurante, para llevar y productos de supermercado.
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Sabor y Frescura en tu Mesa,
                <span className="block text-orange-500">Rápido y Fácil.</span>
              </h1>

              <p className="text-gray-600 text-base">
                Introduce tu código postal para ver qué entregamos.
              </p>
            </div>

            {/* Caja de Búsqueda */}
            <div className="flex items-center border-2 border-gray-300 rounded-full focus-within:border-orange-500 transition-colors max-w-md mx-auto lg:mx-0 overflow-hidden">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent border-0 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-transform duration-200 active:scale-95"
              >
                Buscar
              </button>
            </div>
          </div>

          {/* Contenedor Derecho para elementos visuales (altura ajustada para móvil) */}
          <div className="lg:col-span-2 relative h-[400px] lg:h-[600px] w-full mt-10 lg:mt-0">
            {/* --- CAPA PARA IMÁGENES --- */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* BOX: Clases responsivas para posición y tamaño */}
              <img
                src="/images/inicio/box.png"
                alt="Mujer con caja de comida"
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[90%] max-w-[450px] h-auto object-contain z-20 
                           lg:-translate-x-[85%] lg:bottom-[-4rem] lg:w-[85%] lg:max-w-[1300px]"
              />
              {/* EATING: Anclado al centro, movido a la der, alineado abajo y más grande */}
              <img
                src="/images/inicio/eating.png"
                alt="Mujer comiendo fideos"
                className="hidden lg:block absolute left-1/2 -translate-x-[30%] bottom-[-4rem] w-[45%] max-w-[800px] h-auto object-contain z-10"
              />
            </div>

            {/* --- CAPA PARA NOTIFICACIONES Y NÚMEROS (oculto en móvil) --- */}
            <div className="hidden lg:block">
              {/* Notificación 1 y Número 1 */}
              <NotificationCard 
                iconSrc="/images/logo/logo3.png"
                title="Hemos recibido tu orden!"
                subtitle="Awaiting restaurant acceptance"
                className="top-24 right-[28%]"
              />
              <StyledNumber number="1" className="top-12 right-[29%]" />

              {/* Notificación 2 y Número 2 */}
              <NotificationCard 
                iconSrc="/images/logo/logo3.png"
                title="Orden Aceptada!"
                subtitle="Your order will be delivered shortly"
                className="top-52 right-[18%]"
              />
              <StyledNumber number="2" className="top-40 right-[19%]" />
              
              {/* Notificación 3 y Número 3 */}
              <NotificationCard 
                iconSrc="/images/logo/logo3.png"
                title="Tu Orden esta cerca!"
                subtitle="Ya casi llega - preparate!"
                className="top-[340px] right-[28%]"
              />
              <StyledNumber number="3" className="top-[320px] right-[29%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

