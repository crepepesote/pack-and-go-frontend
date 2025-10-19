'use client';

import React from 'react';
import { Clock, Truck, Package } from 'lucide-react';
import Image from 'next/image';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export default function HeroSection() {
  return (
    <section className="font-inter relative bg-white pb-16">
      
      <div
        className="relative max-w-[90%] mx-auto bg-[#0E1F13] rounded-3xl overflow-visible shadow-xl mt-[-1px]"
        style={{
          backgroundImage: "url('/images/hero/hero-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-950/90 rounded-3xl"></div>

        <div className="relative z-10 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pack and Go!
              </h1>

              <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <Image
                  src="/images/icons/box-stars.png"
                  alt="Box with stars icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Info Cards */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4 px-8 py-4 rounded-full border-2 border-white/40 hover:border-white/60 transition flex-1 bg-transparent">
                  <div className="flex-shrink-0">
                    <Package size={28} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90 whitespace-nowrap">Pedido mínimo:</p>
                    <p className="font-bold text-lg">COP $50.000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-8 py-4 rounded-full border-2 border-white/40 hover:border-white/60 transition flex-1 bg-transparent">
                  <div className="flex-shrink-0">
                    <Truck size={28} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90 whitespace-nowrap">Entregas en:</p>
                    <p className="font-bold text-lg">20-25 Minutos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Circle - Logo */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/logo/logo3.png"
                  alt="Pack and Go Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botón Abierto */}
        <button
          className="absolute top-full left-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-b-2xl rounded-t-none font-bold transition flex items-center gap-2 text-base shadow-lg z-20"
        >
          <Clock size={18} />
          Abierto desde las 6:00 AM
        </button>
      </div>
    </section>
  );
}