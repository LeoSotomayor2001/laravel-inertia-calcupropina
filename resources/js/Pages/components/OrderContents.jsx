export default function OrderContents({ order, removeProducto }) {
    return (
            <div className="mt-10 max-h-96 overflow-y-auto">{/* lista de productos en el pedido */}
                {order.map(item => (
                    <div key={item.id} className="flex justify-between border-b border-slate-300 p-2 items-center">
                        <div>
                            <p className="text-lg">{item.name} - ${item.price}</p>
                            <p className="font-black">Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                        </div>

                        <button 
                            className="w-8 h-8 bg-red-600 rounded-full text-white"
                            onClick={() => removeProducto(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
    );
}
