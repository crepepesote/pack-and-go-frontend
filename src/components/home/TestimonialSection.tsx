'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

// Datos de ejemplo
const testimonials = [
  {
    name: 'Valentina Ariza',
    location: 'Tunja',
    date: '24th September, 2025',
    rating: 5,
    text: 'Entregas muy puntuales, productos frescos y bien empaquetados, estoy muy contenta del pedido y la experiencia de abrir mi paquete.',
    avatar: '/images/icons/user.png',
  },
  {
    name: 'Carlos Rojas',
    location: 'Tunja',
    date: '15th September, 2025',
    rating: 5,
    text: 'La calidad de las carnes es excelente y el servicio al cliente es muy atento. Siempre llegan a tiempo.',
    avatar: '/images/icons/user.png',
  },
  {
    name: 'Sofia Gomez',
    location: 'Tunja',
    date: '10th September, 2025',
    rating: 5,
    text: 'Me encanta la variedad de productos veganos que ofrecen. Todo llegó perfecto y el descuento fue genial. ¡Recomendado!',
    avatar: '/images/icons/user.png',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-[#D9D9D9] px-[5%] py-12 md:py-16 font-inter">
      <div className="max-w-[90%] mx-auto">
        {/* Encabezado de la sección */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Feedback de clientes</h2>
          <div className="flex items-center gap-3">
            <button className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-orange-600">
              <ChevronLeft size={20} />
            </button>
            <button className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-orange-600">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            // ✅ CAMBIOS AQUÍ: Eliminado `rounded-xl` y aumentado el padding a `p-8`
            <div key={index} className="bg-white p-8 shadow-sm space-y-4">
              {/* Parte superior de la tarjeta */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Usuario */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-orange-500">{testimonial.location}</p>
                  </div>
                </div>

                {/* Calificación y Fecha */}
                <div className="flex-shrink-0 space-y-1">
                  <StarRating rating={testimonial.rating} />
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Texto del testimonio */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}