import React from "react";

function Recuperar() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[600px]">
      
      <div className="bg-blue-900 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
        <h2 className="text-lg font-semibold">Recuperar Contraseña</h2>
        <button className="text-white text-xl font-bold hover:text-gray-300 cursor-pointer">✕</button>
      </div>

      
      <div className="p-6">
        <p className="text-red-500 font-medium mb-4">
          Ingrese los datos necesarios para procesar la recuperación de la contraseña
        </p>

        <label className="block text-gray-700 font-medium mb-2">
          Usuario o Documento de Identidad
        </label>
        <input
          type="text"
          placeholder="Ingrese su usuario o documento"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="flex justify-end space-x-3 border-t px-6 py-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer">
           Cerrar
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer">
           Recuperar
        </button>
      </div>
    </div>
  );
}

export default Recuperar;