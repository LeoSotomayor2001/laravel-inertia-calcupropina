import { useState } from "react";

const useOrder = () => {
  const [order, setOrder] = useState([]);
  const [tip, setTip] = useState(0);
  const addProducto = (producto) => {
    // Verifica si el producto ya existe en el carrito
    const productoExists = order.find((orderProducto) => orderProducto.id === producto.id);

    if (productoExists) {
        // Si el producto ya existe, se incrementa la cantidad
      const updatedOrder = order.map((orderProducto) =>
        orderProducto.id === producto.id ? { ...orderProducto, quantity: orderProducto.quantity + 1 } : orderProducto
      );
      setOrder(updatedOrder);
    } else {
       //Si el producto no existe, se crea uno nuevo con cantidad 1
      const newProducto = { ...producto, quantity: 1 };
      setOrder([...order, newProducto]);
    }
  }

  const removeProducto = (id) => {
    // Filtra los productos del carrito de compra que no coincidan con el ID
    // pasado como parámetro y devuelve los productos restantes
    const updatedOrder = order.filter((orderProducto) => orderProducto.id !== id);
    // Actualiza el carrito de compra con los productos restantes
    setOrder(updatedOrder);
  }
  
     //Resetea el estado de la orden y la propina a sus valores iniciales.
  const placeOrder = () => {
      // Resetea el estado de la orden a un array vacío
      setOrder([])
      // Resetea el estado de la propina a cero
      setTip(0)
  }
  
  return {
    order,
    addProducto,
    removeProducto,
    tip,
    setTip,
    placeOrder
  };
};

export default useOrder;