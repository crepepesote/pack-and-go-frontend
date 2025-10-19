'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  brand?: string;
}

interface ProductsGridProps {
  products?: Product[];
  onAddToCart?: (product: Product) => void;
}

const defaultProducts: Product[] = [
  // Ofertas
  {
    id: 'oferta-1',
    name: 'Descuento de primer pedido',
    description: '',
    price: 45000,
    image: '/images/products/oferta-1.png',
    category: 'ofertas',
    discount: 20,
  },
  {
    id: 'oferta-2',
    name: 'Descuento Vegano',
    description: '',
    price: 25000,
    image: '/images/products/oferta-2.png',
    category: 'ofertas',
    discount: 20,
    brand: 'Pack and Go',
  },
  // Carnes
  {
    id: '1',
    name: 'Carne de res',
    description: '1 Libra de Lomo',
    price: 20000,
    image: '/images/products/beef.png',
    category: 'carnes',
  },
  {
    id: '2',
    name: 'Pollo',
    description: '1 Pechuga, 500 gramos',
    price: 18000,
    image: '/images/products/chicken.png',
    category: 'carnes',
  },
  {
    id: '3',
    name: 'Pescado',
    description: '1 Trucha mediana deshuesado',
    price: 17000,
    image: '/images/products/fish.png',
    category: 'carnes',
  },
  {
    id: '4',
    name: 'Carne de cerdo',
    description: '1 Libra de Lomo',
    price: 21000,
    image: '/images/products/pork.png',
    category: 'carnes',
  },
  // Verduras
  {
    id: '5',
    name: 'Tomate',
    description: '5 unidades, 1000 gramos',
    price: 3000,
    image: '/images/products/tomato.png',
    category: 'verduras',
  },
  {
    id: '6',
    name: 'Zanahoria',
    description: '5 unidades, 1000 gramos',
    price: 4500,
    image: '/images/products/carrot.png',
    category: 'verduras',
  },
  {
    id: '7',
    name: 'Papa',
    description: '10 unidades, 2000 gramos',
    price: 7500,
    image: '/images/products/potato.png',
    category: 'verduras',
  },
  {
    id: '14',
    name: 'Lechuga',
    description: '1 unidad, 200 gramos',
    price: 2500,
    image: '/images/products/lettuce.png',
    category: 'verduras',
  },
  {
    id: '15',
    name: 'Brócoli',
    description: '2 unidades, 500 gramos',
    price: 3200,
    image: '/images/products/broccoli.png',
    category: 'verduras',
  },
  {
    id: '16',
    name: 'Cebolla',
    description: '4 unidades, 1000 gramos',
    price: 4100,
    image: '/images/products/onion.png',
    category: 'verduras',
  },
];

const categories = ['ofertas', 'carnes', 'verduras'];

export default function ProductsGrid({
  products = defaultProducts,
  onAddToCart,
}: ProductsGridProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="bg-slate-50 font-inter px-[5%]">
      <div className="max-w-[90%] mx-auto">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          if (categoryProducts.length === 0) {
            return null;
          }

          const isOffer = category === 'ofertas';

          return (
            <div key={category} id={category} className="py-10">
              <h3
                className={`text-3xl font-bold mb-8 capitalize ${
                  category === 'carnes' ? 'text-red-600' : 'text-green-800'
                }`}
              >
                {isOffer ? '' : category}
              </h3>

              {isOffer && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="relative rounded-xl overflow-hidden aspect-square group text-white">
                      <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="relative h-full p-6 flex flex-col justify-end">
                        {product.brand && <p className="font-bold text-sm">{product.brand}</p>}
                        <h4 className="font-bold text-2xl leading-tight">{product.name}</h4>
                      </div>
                      
                      {product.discount && (
                        <div className="absolute top-0 right-0 bg-gray-900 text-white px-4 py-2 rounded-bl-xl text-lg font-bold">
                          -{product.discount}%
                        </div>
                      )}

                      <button 
                        onClick={() => onAddToCart?.(product)} 
                        className="absolute bottom-0 right-0 bg-gray-900/80 backdrop-blur-sm text-white w-16 h-16 rounded-tl-xl flex items-center justify-center transition hover:bg-gray-900"
                      >
                        <Plus size={28} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {!isOffer && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex items-center gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{product.name}</h4>
                        <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                        <p className="font-bold text-gray-900">{formatPrice(product.price)}</p>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center gap-2">
                        <div className="relative w-28 h-20">
                           <Image src={product.image} alt={product.name} fill className="object-contain" />
                        </div>
                        <button onClick={() => onAddToCart?.(product)} className="bg-gray-800 hover:bg-gray-900 text-white w-8 h-8 rounded-full transition flex items-center justify-center">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}