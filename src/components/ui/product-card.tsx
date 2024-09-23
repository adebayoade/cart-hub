import { Product } from '@/types';
import { Button } from './button';
import { ShoppingBagIcon } from 'lucide-react';
import { Icon } from '../icons';

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
      {/* Add to cart button */}
      <Button variant={'outline'} className="w-[150px] mx-auto -mt-10" size={'lg'}>
        <div className='mr-2'>
          <Icon.Cart />
        </div>
        Add To Cart
      </Button>

      {/* Change quantity button */}
      <div className="text-white w-[150px] h-10 flex justify-between bg-primary mx-auto rounded-full items-center">
        <Button className="text-white" variant={'link'} size={'icon'}>
          <Icon.Decrease />
        </Button>

        <span>1</span>

        <Button className="text-white" variant={'link'} size={'icon'}>
          <Icon.Increase />
        </Button>
      </div>

      <div className="flex flex-col">
        <span className="text-primary/60 text-sm">{product.category}</span>
        <span className="font-semibold">{product.name}</span>
        <span className="text-primary font-medium">${product.price}</span>
      </div>
    </div>
  );
}
