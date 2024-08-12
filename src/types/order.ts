import { CartItemType } from '@/types/cart';

export type OrderType = {
  id: string;
  date: string;
  totalPrice: number;
  items: CartItemType[];
};