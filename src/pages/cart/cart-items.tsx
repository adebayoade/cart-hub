import { Button } from '@/components/ui/button';
import ConfirmOrder from './confirm-order';
import { Icon } from '@/components/icons';
import { X } from 'lucide-react';
import { useCart } from '@/store/cart';

export default function CartItems() {
  const { cartItems, removeItem, calcTotal } = useCart();

  return (
    <div className="flex flex-col gap-5">
      {cartItems?.map(item => (
        <div>
          <span className="font-semibold">{item.name}</span>
          <div className="font-medium flex gap-5 items-center justify-between">
            <span className="text-sm flex gap-5">
              <span className="text-primary">1x</span>
              <span className="text-gray-400">@ ${item.qty}</span>
              <span className="text-gray-400 font-semibold">${item.price * item.qty}</span>
            </span>

            <Button
              onClick={() => removeItem(item.name)}
              className="h-4 text-gray-400 w-4 rounded-full border hover:border-gray-500 hover:text-gray-500"
              variant={'link'}
              size={'icon'}
            >
              <X size={15} />
            </Button>
          </div>
        </div>
      ))}

      <div className="justify-between flex gap-5 rounded-lg">
        <span className="text-sm text-gray-500 font-medium">Order Total</span>
        <span className="text-xl font-bold">${calcTotal()}</span>
      </div>

      <div className="items-center flex justify-center gap-5 text-sm text-center bg-cream p-3 text-gray-500">
        <Icon.CarbonNeutral />
        <span>
          This is a <span className="font-semibold">carbon-neutral </span>delivery
        </span>
      </div>

      <ConfirmOrder />
    </div>
  );
}
