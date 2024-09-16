import { ProductPageProps } from "../../../lib/types";
import { fetchProducts } from "../../../lib/ProductFetcher";
import ProductDetail from "../components/ProductDetail";

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div>
      <h1>Ürün Detayı</h1>

      <ProductDetail product={product} />
    </div>
  );
}
