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

export type SearchProps = {
  searchParams: {
    query: string;
    page: string;
  };
};
export type ProductPageProps = {
  params: {
    id: string;
  };
};

export type Category = {
  slug: string;
  name: string;
};
