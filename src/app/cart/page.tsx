"use client";

import CartItem from "@/components/product/cartItem";
import { useCart } from "@/contexts/cartProvider";
import { CartItemType } from "@/types/cart";
import { useEffect, useState } from "react";
import { uuid } from 'uuidv4';

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [itens, setItens] = useState<CartItemType[]>([]);

  useEffect(() => {
    const calculatedTotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0) * 0.85;

    setItens(cart)
    setTotalPrice(calculatedTotal);
  }, [cart]);

  const handleBuy = () => {
    const order = {
      id: uuid(),
      date: new Date().toISOString(),
      totalPrice,
      items: cart,
    };

    const storedOrders = localStorage.getItem('orders');
    const orders = storedOrders ? JSON.parse(storedOrders) : [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    clearCart();
  }

  return (
    <div className="py-6">
      <h2 className="text-xl font-bold text-gray-dark">Cart</h2>
      {cart.length > 0 && (
        <>
          <div className="grid gap-3 my-5">
            {itens.map((item, index) => (
              <CartItem key={`cart-item-${index}`} item={item} />
            ))}
          </div>
          <div className="rounded-md bg-gray-super-light p-4 flex justify-between items-center">
            <div>
              <h2 className="font-bold">Total:</h2>
              <div className="font-bold text-orange">
                R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <button onClick={handleBuy} className="bg-green-light hover:bg-green-dark text-white px-6 py-1 rounded-md">Buy</button>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <div className="text-center flex flex-col items-center">
          <h2 className="p-10 font-bold text-2xl">Seu Carrinho está vazio</h2>
          <a href="/orders" className="bg-green-light hover:bg-green-dark text-white px-6 py-1 rounded-md w-1/5 mb-1">Ver sua Lista de Compras</a>
          <a href="/" className="hover:bg-gray-100 px-6 py-1 rounded-md w-1/5">Voltar ao inicio</a>
        </div>
      )}
    </div>
  );
}
