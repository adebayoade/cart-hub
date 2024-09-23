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

    const imagePath = products[index].image.thumbnail;
    return imagePath;
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
          <DialogTitle>Order Confirmed</DialogTitle>
          <span>We hope you enjoy your food!</span>
        </DialogHeader>

        <div className="flex flex-col gap-5 bg-cream p-5 rounded-lg">
          <div className="flex flex-col gap-5">
            {cartItems.map(item => (
              <div className="flex gap-5 justify-between items-center">
                <div className="flex gap-5">
                  <img className="w-10" alt="image" src={getImagePath(item?.name) || null} />
                  <div className="text-sm">
                    <span className="font-semibold">{item.name}</span>
                    <div className="font-medium flex gap-5 items-center justify-between">
                      <span className="flex gap-5">
                        <span className="text-primary">1x</span>
                        <span className="text-gray-400">@ ${item.qty}</span>
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
