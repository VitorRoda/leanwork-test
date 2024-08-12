"use client";

import { useCart } from '@/contexts/cartProvider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  const cart = useCart();

  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    setCartLength(cart.cart.length)
  }, [cart])

  return (
    <div className="border-b-1 border-gray-light">
      <div className='container mx-auto py-4 flex justify-between flex-row px-5 md:px-0'>
        <a href="/">
          <Image src={'/logo.svg'} alt='leanwork-logo' width={120} height={0}/>
        </a>
        <a href='/cart' className='px-3 py-3 relative'>
          {cartLength > 0 && (
            <div className='absolute top-1 right-1 bg-orange rounded-full w-5 h-5 text-sm text-center text-white'>
              {cartLength}
            </div>
          )}
          <FiShoppingBag className='text-2xl'/>
        </a>
      </div>
    </div>
  );
}
