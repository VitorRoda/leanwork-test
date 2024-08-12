import { useCart } from "@/contexts/cartProvider";
import { CartItemType } from "@/types/cart";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function CartItem({ item }: { item: CartItemType, }) {
  const [quantity, setQuantity] = useState(item.quantity)
  const { addItemToCart, removeItemFromCart } = useCart()

  const handleChangeQuantity = (qtt: number, type: 'add' | 'sub' | 'replace') => {
    let newQuantity;

    switch (type) {
      case 'add':
        newQuantity = quantity + qtt
        break;
      case 'replace':
        newQuantity = qtt;
        break;
      case 'sub':
        newQuantity = Math.max(quantity - qtt, 0)
        break;
    }
    if (newQuantity === 0) {
      removeItemFromCart(item.id)
    } else {
      setQuantity(newQuantity)
      addItemToCart({
        ...item,
        quantity: newQuantity
      })
    }
  }

  return (
    <div className="rounded-md bg-gray-super-light p-[3px] flex items-center justify-between">
      <img src={item.image} alt={item.title} className="w-28 h-28 mr-5" />
      <div className="w-9/12">
        <h3>{item.title}</h3>
        <span className="text-[10px] line-through text-gray-normal">R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <div className="font-bold text-orange">
          R$ {(item.price * 0.85).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
      <div className='flex justify-between w-40 pr-5'>
        <button className='bg-gray-dark text-white rounded-md w-[34px] h-[34px] flex justify-center items-center disabled:opacity-75' disabled={quantity === 0} onClick={() => { handleChangeQuantity(1, 'sub') }}>
          <FaMinus />
        </button>
        <input onChange={(event) => { handleChangeQuantity(parseInt(event.target.value), 'replace') }} className='border-1 border-gray-dark text-gray-dark rounded-md w-[34px] h-[34px] text-center p-1 font-semibold' type="number" value={quantity} />
        <button className='bg-gray-dark text-white rounded-lg w-[34px] h-[34px] flex justify-center items-center' onClick={() => { handleChangeQuantity(1, 'add') }}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
