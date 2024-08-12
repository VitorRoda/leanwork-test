import { OrderType } from "@/types/order";
import moment from 'moment';

export default function OrderItem({ order }: { order: OrderType, }) {

  return (
    <div className="rounded-md bg-gray-super-light px-4 py-2 flex items-center justify-between w-full">
      <div className="w-8/12">
        <strong>Código do Pedido:</strong> {order.id}
        <br />
        <strong>Data do Pedido:</strong> {moment(order.date).format('LL')}
        
      </div>
      <div className="w-4/12 text-end">
        <strong>Valor do pedido:</strong> R$ {order.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  );
}
