import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateProduct() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Obtener el formulario y sus datos
    const form = event.target;
    const formData = new FormData(form);

    // Enviar los datos del formulario a través de Inertia
    Inertia.post('/products/create', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Crear Nuevo Producto</h2>
      
      {/* Formulario con evento onSubmit que llama a la función handleFormSubmit */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Agregar un campo hidden para el token CSRF */}
        <input type="hidden" name="_token" value={window.csrf_token} />

        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-1">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Nombre del producto" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg font-medium mb-1">Precio</label>
          <input type="number" id="price" name="price" placeholder="Precio del producto" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">Crear Producto</button>
      </form>
    </div>
  );
}