'use client';

import React from 'react';
import { PackageCheck, ClipboardList, Clock } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export default function InfoSection() {
  return (
    <section className="bg-slate-50 px-[5%] py-12 md:py-16 font-inter">
      {/* Contenedor principal de la tarjeta */}
      <div className="max-w-[90%] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* === Columna Izquierda (2/3) - Contiene el grid anidado === */}
          <div className="lg:col-span-2 p-8 md:p-10">
            {/* ✅ SOLUCIÓN: Grid anidado para poner Domicilio y Contactos uno al lado del otro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* --- Sub-columna 1: Información de Domicilio --- */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <PackageCheck size={24} className="text-gray-900" />
                  <h3 className="text-xl font-bold text-gray-900">Información de Domicilio</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between items-center">
                    <p>Lunes a Viernes:</p>
                    <p className="font-bold text-gray-800">7:00 AM–10:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Sábado:</p>
                    <p className="font-bold text-gray-800">8:00 AM–12:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Domingo:</p>
                    <p className="font-bold text-gray-800">8:00 AM–2:00 PM</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Tiempo estimado de entrega:</p>
                    <p className="font-bold text-gray-800">20-25 minutos</p>
                  </div>
                </div>
              </div>

              {/* --- Sub-columna 2: Contactos --- */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList size={24} className="text-gray-900" />
                  <h3 className="text-xl font-bold text-gray-900">Contactos</h3>
                </div>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>Si tienes alguna duda o inconformidad sobre nuestros productos, contactanos a:</p>
                  <div>
                    <p>Número de teléfono</p>
                    <p className="font-bold text-gray-800 text-base">+57 312 1234 5678</p>
                  </div>
                  <div>
                    <p>Sitio Web</p>
                    <p className="font-bold text-gray-800 text-base break-all">http://pack-and-go.co/</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* === Columna Derecha (1/3) - Horarios de Trabajo === */}
          <div className="bg-[#192D1D] text-white p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={24} />
              <h3 className="text-xl font-bold">Horarios de Trabajo</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between items-center">
                <p>Lunes a Viernes:</p>
                <p className="font-bold text-white">6:00 AM–11:00 AM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Sábado:</p>
                <p className="font-bold text-white">7:00 AM–1:00 AM</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Domingo:</p>
                <p className="font-bold text-white">7:00 AM–3:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}