"use client";

import { useCart } from '@/contexts/cartProvider';
import { getProductById } from '@/services/product';
import { Product } from '@/types/products';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function ProductPage() {
  const { addItemToCart } = useCart()
  const params = useParams()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    setLoading(true)
    getProductById(parseInt(id)).then(res => {
      setProduct(res)
      setLoading(false)
    })
  }, [params.id])

  const handleAdd = () => {
    if (product) {
      addItemToCart({
        quantity,
        id: product.id,
        image: product.image,
        price: product.price,
        title: product.title
      })
      router.push('/cart')
    }
  }

  return (
    <div className='grid grid-cols-2 pt-6 gap-6'>
      {!loading && product && (
        <>
          <img src={product.image} className='shadow-md rounded-lg' alt='a'/>
          <div >
            <h2 className='font-bold text-2xl'>{product.title}</h2>
            <span className="text-sm text-gray-normal">{product.category}</span>
            <div className="font-bold text-xl text-orange mt-6 mb-3">
              R$ {(product.price * 0.85).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className='text-justify'>
              {product.description}
            </p>
            <div className='flex justify-between mt-6 mb-4'>
              <button className='bg-gray-dark text-white rounded-lg w-[34px] h-[34px] flex justify-center items-center disabled:opacity-75' disabled={quantity === 1} onClick={() => {setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))}}>
                <FaMinus />
              </button>
              <div className='border-1 border-gray-dark text-gray-dark rounded-lg w-5/6 text-center p-1 font-semibold'>
                Quantity: {quantity}
              </div>
              <button className='bg-gray-dark text-white rounded-lg w-[34px] h-[34px] flex justify-center items-center' onClick={() => {setQuantity(prevQuantity => prevQuantity + 1)}}>
                <FaPlus />
              </button>
            </div>
            <button onClick={handleAdd} className='rounded-lg p-1 text-white font-semibold w-full bg-green-light hover:bg-green-dark'>Add to cart</button>
          </div>
        </>  
      )}
      {loading && (
        <>
          <div className="animate-pulse bg-gray-200 rounded-md w-full" >
          </div>
          <div >
            <div className="rounded-md h-8 mb-2 animate-pulse bg-gray-200 w-1/3" />
            <div className="animate-pulse bg-gray-200 rounded-md h-5 w-1/5" />
            <div className="animate-pulse bg-gray-200 rounded-md h-10 mt-6 mb-3 w-1/6" />
            <div className="animate-pulse bg-gray-200 rounded-md h-20 w-full" />
            <div className='flex justify-between mt-6 mb-4'>
              <button className='bg-gray-dark text-white rounded-lg w-[34px] h-[34px] flex justify-center items-center disabled:opacity-75' disabled={quantity === 1} onClick={() => {setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))}}>
                <FaMinus />
              </button>
              <div className='border-1 border-gray-dark text-gray-dark rounded-lg w-5/6 text-center p-1 font-semibold'>
                Quantity: {quantity}
              </div>
              <button className='bg-gray-dark text-white rounded-lg w-[34px] h-[34px] flex justify-center items-center' onClick={() => {setQuantity(prevQuantity => prevQuantity + 1)}}>
                <FaPlus />
              </button>
            </div>
            <button onClick={handleAdd} className='rounded-lg p-1 text-white font-semibold w-full bg-green-light hover:bg-green-dark'>Add to cart</button>
          </div>
        </>  
      )}
    </div>
  );
}
