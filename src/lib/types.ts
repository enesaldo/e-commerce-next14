export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  thumbnail: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};
