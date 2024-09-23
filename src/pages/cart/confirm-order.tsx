import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { products } from '@/data';
import { useCart } from '@/store/cart';
import { CheckCircle2 } from 'lucide-react';

export default function ConfirmOrder() {
  const { cartItems, calcTotal, deleteCart } = useCart();

  const getImagePath = (name: string) => {
    const index = cartItems.findIndex(element => element.name === name);

    if (index === -1) return null;

    return products[index].image.thumbnail;
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full" size={'lg'}>
          Confirm Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-2">
          <CheckCircle2 className="text-green-500" />
          <DialogTitle className="text-2xl font-semibold">Order Confirmed</DialogTitle>
          <span className="text-sm text-gray-400">We hope you enjoy your food!</span>
        </DialogHeader>

        <div className="flex flex-col gap-5 bg-cream p-5 rounded-lg">
          <div className="flex flex-col gap-5">
            {cartItems.map(item => (
              <div className="flex gap-5 justify-between items-center">
                <div className="flex gap-5">
                  <img
                    className="w-10"
                    alt="image"
                    src={getImagePath(item?.name) || 'https://placehold.co/50x50.png'}
                  />
                  <div className="text-sm">
                    <span className="font-semibold">{item.name}</span>
                    <div className="font-medium flex gap-5 items-center justify-between">
                      <span className="flex gap-5">
                        <span className="text-primary">{item.qty}x</span>
                        <span className="text-gray-400">@ ${item.price}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-gray-400 font-semibold">${item.qty * item.price}</span>
              </div>
            ))}
          </div>

          <div className="justify-between items-center flex gap-5 rounded-lg">
            <span className="text-sm text-gray-500 font-medium">Order Total</span>
            <span className="text-xl font-bold">${calcTotal()}</span>
          </div>
        </div>
        <Button onClick={() => deleteCart()} className="w-full" size={'lg'}>
          Start New Order
        </Button>
      </DialogContent>
    </Dialog>
  );
}
