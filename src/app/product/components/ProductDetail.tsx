"use client";

import Link from "next/link";
import { BasketContext } from "../../../context/BasketContext";
import { Product } from "../../../lib/types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { currencyFormatter } from "../../../utils";
import Breadcrumb from "../components/BreadCrumb";
import { ProductsByCategoryFetcher } from "../../../lib/ProductsByCategoryFetcher";
import ProductCard from "@/components/ProductCard";
import ReactImageMagnify from "react-image-magnify";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToBasket } = useContext(BasketContext);

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const category = product.category || "Unknown";

  useEffect(() => {
    const getRelatedProducts = async () => {
      const products = await ProductsByCategoryFetcher(
        product.category,
        product.id
      );
      setRelatedProducts(products);
    };

    getRelatedProducts();
  }, [product.category, product.id]);

  return (
    <div className="flex mx-auto container flex-col">
      <div className="p-6 flex flex-col lg:flex-row">
        <div className="w-1/2">
          <div className="lg:ml-14 m-0">
            <Breadcrumb category={category} productName={product.title} />
          </div>

          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.title,
                isFluidWidth: true,
                src: mainImage,
              },
              largeImage: {
                src: mainImage,
                width: 1200,
                height: 1200,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
            }}
          />

          <div className="grid grid-cols-3 gap-2 mt-4">
            {product.images?.map((image, index) => (
              <Image
                unoptimized
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                width={100}
                height={100}
                className="object-cover cursor-pointer"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
          <p className="mt-4">{product.description}</p>
          <p className="text-xl text-primary font-semibold mt-2">
            {currencyFormatter(product.price)}
          </p>

          <div className="flex gap-6">
            <button
              onClick={() => addToBasket(product)}
              className="text-orange-800 border duration-100 hover:bg-orange-500 bg-primary hover:text-white mt-4 px-2 lg:text-lg text-xs lg:px-6 py-2 rounded"
            >
              Add to Basket
            </button>
            <Link
              href={"/basket"}
              onClick={() => addToBasket(product)}
              className="bg-primary hover:bg-orange-600 duration-100  text-white mt-4 px-2 lg:text-lg text-xs lg:px-6 py-2 rounded"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10  lg:p-0 p-4">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
