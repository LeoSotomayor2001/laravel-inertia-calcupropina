import React from 'react'
import Producto from './components/Producto'
import useOrder from '../hooks/useOrder';
import OrderContents from './components/OrderContents';
import TipPercentageForm from './components/TipPercentageForm';
import OrderTotals from './components/OrderTotals';

export default function Test({productos}) {
  const {addProducto, order,removeProducto,tip,setTip,placeOrder}= useOrder();
  return (
    <>
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Calculadora de Propinas y Consumos</h1>
          <a href='/product/create' className="bg-white text-blue-500 py-2 px-4 rounded-md shadow-md hover:bg-blue-400 transition-colors duration-300 ease-in-out">
            Añadir Producto
          </a>
        </header>

        <main className="p-4">
          <div className="flex flex-col md:flex-row">
          <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 md:mr-2">

            <h2 className="text-xl font-semibold mb-4 text-center">Menu</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productos.map((producto) => (
                <Producto
                  key={producto.id}
                  producto={producto}
                  addProducto={addProducto}
                />
              ))}
            </div>     
          </div>

          <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 md:ml-2 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-4 text-center">Orden</h2>
            {order.length === 0 ? (
              <p className="text-center">No hay productos en el pedido</p>
            ):
              <>
                <OrderContents
                  order={order}
                  removeProducto={removeProducto}
                />

                <TipPercentageForm
                  tip={tip}
                  setTip={setTip}
                
                />
                <OrderTotals
                  tip={tip}
                  order={order}
                  placeOrder={placeOrder}
                />
              </>
              
            
            }
          
          </div>
        </div>

            
      </main>
    
    </>
  )
}
