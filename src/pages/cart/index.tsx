import ProductCard from '@/components/ui/product-card';
import { products } from '@/data';
import { Product } from '@/types';
import { useState } from 'react';

export default function Cart() {
  const [data] = useState<Product[]>(products);

  return (
    <div className="container mt-12">
      <h1 className="title">Desserts</h1>

      <div className="mt-5 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
        <div className="grid gap-5 grid-cols-1 xl:grid-cols-3">
          {data?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
