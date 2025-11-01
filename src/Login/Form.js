import React from 'react';

export default function Form() {
  return (
    <div className="bg-white w-[500px] max-w-full px-14 py-16 rounded-3xl border-2 border-gray-200 shadow-lg">
      <h1 className="text-5xl font-semibold">Bienvenido</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Bienvenido! Por favor entre los detalles.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label className="text-lg font-medium">Correo</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ponga su correo"
          />
        </div>

        <div>
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ponga su Contraseña"
            type="password"
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" id='recuerdame' />
            <label className="ml-2 font-medium text-base" for='recuerdame'>Recuérdame</label>
          </div>
          <button className="font-medium text-base text-violet-500">Olvidé mi Contraseña</button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-blue-500 py-3 rounded-xl text-white text-lg font-bold'>Iniciar seccion </button>
        </div>
      </div>
      <div className='mt-8 flex justify-center items-center'>
        <p className='font-medium text-base'>No tienes una cuenta?</p>
        <button className='ml-2 text-base font-medium text-violet-500'>Solicita una</button>
      </div>
    </div>
  );
}
