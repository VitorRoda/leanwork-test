"use client";

import OrderItem from "@/components/product/orderItem";
import { OrderType } from "@/types/order";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    const fetchOrders = () => {
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    };
    fetchOrders();
  }, []);
  return (
    <div className='grid pt-6 gap-6'>

      {orders.map((order, index) => (
        <OrderItem key={`order-item-${index}`} order={order} />
      ))}
    </div>
  );
}
