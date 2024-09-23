import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CheckCircle, CheckCircle2 } from 'lucide-react';

export default function ConfirmOrder() {
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
          <div className="flex gap-5 justify-between items-center">
            <div className="text-sm">
              <span className="font-semibold">Classic Tiramisu</span>
              <div className="font-medium flex gap-5 items-center justify-between">
                <span className="flex gap-5">
                  <span className="text-primary">1x</span>
                  <span className="text-gray-400">@ $5.50</span>
                </span>
              </div>
            </div>

            <span className="text-gray-400 font-semibold">$5.50</span>
          </div>

          <div className="justify-between flex gap-5 rounded-lg">
            <span className="text-sm text-gray-500 font-medium">Order Total</span>
            <span className="text-xl font-bold">$46.50</span>
          </div>
        </div>
        <Button className="w-full" size={'lg'}>
          Start New Order
        </Button>
      </DialogContent>
    </Dialog>
  );
}
