import ProductCard from '@/components/ui/product-card';
import { products } from '@/data';
import { Product } from '@/types';
import { useState } from 'react';
import CartEmpty from './cart-empty';
import CartItems from './cart-items';

export default function Cart() {
  const [data] = useState<Product[]>(products);

  return (
    <div className="container mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="title">Desserts</h1>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {data?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-white flex flex-col gap-5 h-max rounded-2xl py-7 px-5">
          <h2 className="text-xl text-primary font-bold">
            Your Cart <span>(7)</span>
          </h2>

          <CartItems />
          {/* <CartEmpty /> */}
        </div>
      </div>
    </div>
  );
}
