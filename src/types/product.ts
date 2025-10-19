export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}