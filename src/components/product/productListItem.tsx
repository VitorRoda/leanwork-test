import { useRouter } from 'next/navigation';

import { Product } from "@/types/products";

export default function ProductListItem({ product }: { product: Product }) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <div className="border-1 border-gray-light p-5 rounded-md hover:shadow-lg">
      <div className="flex justify-center" >
        <img src={product.image} alt={product.title} className="rounded-md h-64 mb-4" />
      </div>
      <div className="flex flex-col h-16 justify-between">
        {product.title.length > 50 ? product.title.slice(0, 40) + '...' : product.title}
        <span className="text-[10px] line-through text-gray-normal">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
      <div className="font-bold text-orange mb-3">
        R$ {(product.price * 0.85).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <button onClick={handleRedirect} className="w-full bg-gray-dark text-white p-2 rounded-md">Buy it</button>
    </div>
  );
}
