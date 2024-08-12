"use client";

import ProductListItem from "@/components/product/productListItem";
import ProductListItemSkeleton from "@/components/product/productListItemSkeleton";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setLoading(true)
    getAllProducts().then(res => {
      setProducts(res)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {!loading && (
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-8">
          {products.map((product, index) => (
            <ProductListItem product={product} key={product.title + index} />
          ))}
        </div>
      )}
      {loading && (
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-8">
          <ProductListItemSkeleton />
          <ProductListItemSkeleton />
          <ProductListItemSkeleton />
          <ProductListItemSkeleton />
        </div>
      )}
    </>
  );
}
