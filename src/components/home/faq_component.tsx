'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('frecuentes');

  const tabs = [
    { id: 'frecuentes', label: 'Preguntas Frecuentes' },
    { id: 'quienes', label: 'Quienes somos?' },
    { id: 'asociarse', label: 'Asociarse' },
    { id: 'ayuda', label: 'Ayuda y Soporte' }
  ];

  const faqItems = [
    'Como PacketGo Funciona?',
    'Que Metodos de Pago son aceptados?',
    'Puede seguir mi orden en tiempo real?',
    'Hay algun descuento o promocion disponible?',
    'Esta PacketGo en mi Area?'
  ];

  const steps = [
    {
      title: 'Haz un Pedido!',
      image: '/images/inicio/bell.png',
      description: 'Realiza tu pedido a través de nuestra app o página web'
    },
    {
      title: 'Rastrear Paquetes',
      image: '/images/inicio/food.png',
      description: 'Rastrea el estado de tu paquete con el tiempo de entrega'
    },
    {
      title: 'Sigue tu Orden!',
      image: '/images/inicio/smart.png',
      description: 'Recibe tu orden a la velocidad de la luz!'
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-[90%] mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
        {/* Header (sobre fondo blanco) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">Conoce mas de nosotros!</h1>
          
          {/* Tabs */}
          <div className="flex gap-3 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-900 border-2 border-orange-500 hover:bg-orange-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content (Caja blanca interna) */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left - FAQ List (sobre fondo blanco) */}
            <div className="md:col-span-1">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-6 py-4 rounded-full font-semibold transition-all ${
                      index === 0
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200' // Botones grises claros
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Steps Cards (Tarjetas grises sobre fondo blanco) */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
                    <div className="w-32 h-32 flex items-center justify-center overflow-hidden mx-auto">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Text */}
              <div className="text-center text-gray-700 text-sm leading-relaxed">
                <p>
                  Simplificamos el proceso de la cena. Solo tienes que elegir tu receta, y te enviamos una caja con ingredientes frescos y porcionados de alta calidad, junto a las instrucciones paso a paso. Deja de preocuparte por el supermercado: tu próxima comida memorable está de camino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

