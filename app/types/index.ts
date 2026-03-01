export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  hoverImage: string; // Хулгана хүргэхэд солигдох зураг
  colors: string[];
  sizes: string[];
}