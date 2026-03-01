export type Product = {
  id: number;
  name: string;
  price: string;
  category: 'women' | 'men' | string;
  image: string;
  collection?: string;
  description?: string;
};

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Кашмирний цамц',
    price: '478,000 ₮',
    category: 'women',
    image: 'https://via.placeholder.com/400x400.png?text=Women+1',
    collection: 'Fall Winter 2025/26',
    description: 'Зөөлөн, дулаахан кашмирний цамц'
  },
  {
    id: 2,
    name: 'Урт юбка',
    price: '298,000 ₮',
    category: 'women',
    image: 'https://via.placeholder.com/400x400.png?text=Women+2',
    collection: 'Summer 2025',
    description: 'Энгийн, өдөр тутмын юбка'
  },
  {
    id: 3,
    name: 'Тав тухтай свитер',
    price: '350,000 ₮',
    category: 'women',
    image: 'https://via.placeholder.com/400x400.png?text=Women+3',
    collection: 'Fall 2025',
    description: 'Нисгэгч свитер, өвлийн зориулалттай'
  },
  {
    id: 4,
    name: 'Эмэгтэй пальто',
    price: '920,000 ₮',
    category: 'women',
    image: 'https://via.placeholder.com/400x400.png?text=Women+4',
    collection: 'Winter 2024',
    description: 'Чанартай ноосон пальто'
  },
  {
    id: 5,
    name: 'Эрэгтэй цамц',
    price: '399,000 ₮',
    category: 'men',
    image: 'https://via.placeholder.com/400x400.png?text=Men+1',
    collection: 'Fall Winter 2025/26',
    description: 'Классик эрэгтэй цамц'
  },
  {
    id: 6,
    name: 'Эрэгтэй свитер',
    price: '420,000 ₮',
    category: 'men',
    image: 'https://via.placeholder.com/400x400.png?text=Men+2',
    collection: 'Winter 2024',
    description: 'Дулаахан, зөөлөн материал'
  },
  {
    id: 7,
    name: 'Эрэгтэй пальто',
    price: '1,200,000 ₮',
    category: 'men',
    image: 'https://via.placeholder.com/400x400.png?text=Men+3',
    collection: 'Winter 2025',
    description: 'Хурдан усанд тэсвэртэй пальто'
  },
  {
    id: 8,
    name: 'Эрэгтэй өмд',
    price: '260,000 ₮',
    category: 'men',
    image: 'https://via.placeholder.com/400x400.png?text=Men+4',
    collection: 'Casual 2025',
    description: 'Тансаг материалаар хийсэн өдөр тутмын өмд'
  },
];