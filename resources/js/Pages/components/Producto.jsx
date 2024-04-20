

export default function Producto({producto, addProducto}) {
   
  return (
    <>
        <button className="bg-white p-5 rounded-md shadow-md" onClick={() => addProducto(producto)}>
          <p>{producto.name}</p>
          <p className="font-black">${producto.price}</p>
        </button> 
    </>
  )
}
