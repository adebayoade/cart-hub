import { Product } from '@/types';
import { Button } from './button';
import { Icon } from '../icons';
import { useCart } from '@/store/cart';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, findItem } = useCart();

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl">
        <img
          className={`${
            findItem(product.name) === true ? 'border-2 border-primary' : ''
          } rounded-2xl overflow-hidden h-full w-full`}
          alt={product.name}
          src={product.image?.desktop}
        />
      </div>

      {findItem(product.name) === false ? (
        <Button
          onClick={() => addToCart(product.name, 1, product.price)}
          variant={'outline'}
          className="w-[150px] mx-auto -mt-10"
          size={'lg'}
        >
          <div className="mr-2">
            <Icon.Cart />
          </div>
          Add To Cart
        </Button>
      ) : (
        <div className="text-white w-[150px] h-10 flex justify-between bg-primary mx-auto rounded-full items-center -mt-10">
          <Button className="text-white" variant={'link'} size={'icon'}>
            <Icon.Decrease />
          </Button>

          <span>1</span>

          <Button className="text-white" variant={'link'} size={'icon'}>
            <Icon.Increase />
          </Button>
        </div>
      )}

      <div className="flex flex-col">
        <span className="text-primary/60 text-sm">{product.category}</span>
        <span className="font-semibold">{product.name}</span>
        <span className="text-primary font-medium">${product.price}</span>
      </div>
    </div>
  );
}
