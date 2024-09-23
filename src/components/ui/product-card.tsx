import { Product } from '@/types';
import { Button } from './button';
import { ShoppingBagIcon } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl">
        <img
          className="rounded-2xl overflow-hidden h-full w-full"
          alt={product.name}
          src={product.image?.desktop}
        />
      </div>
      <Button variant={'outline'} className='w-max mx-auto -mt-10' size={'lg'}>Add To Cart</Button>
      <div className="flex flex-col">
        <span className="text-primary/60">{product.category}</span>
        <span className="font-semibold">{product.name}</span>
        <span className="text-primary font-medium">${product.price}</span>
      </div>
    </div>
  );
}
