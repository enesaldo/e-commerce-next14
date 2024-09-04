// Product type representing the structure of a product fetched from FakeStoreAPI
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

// Cart item type representing a product added to the shopping cart
export type CartItem = {
  product: Product;
  quantity: number;
};

// User type representing the structure of a user (optional for future expansion)
export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

// Order type representing an order placed by a user (optional for future expansion)
export type Order = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};
