import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Paquete de Carne Premium',
    description: 'Carne de res de alta calidad con instrucciones',
    price: 45000,
    category: 'carnes',
    image: '/products/carne-1.jpg',
    discount: 20,
  },
  {
    id: '2',
    name: 'Verduras Frescas Mix',
    description: 'Surtido de verduras frescas del día',
    price: 25000,
    category: 'verduras',
    image: '/products/verduras-1.jpg',
    discount: 15,
  },
  // Agrega más productos...
];