/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Pago() {
  return (
    <div className="bg-gray-50 p-4 md:p-8 font-sans overflow-y-auto h-auto min-h-screen">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
        {/* Header: Banner con botón "Regresar" */}
        <div className="relative rounded-t-2xl">
          <button
            className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-white transition flex items-center gap-2 text-sm font-medium"
            onClick={() => window.history.back()}
          >
            ← Regresar
          </button>
          <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        </div>

        {/* Contenido principal */}
        <div className="p-6 md:p-8 lg:flex lg:gap-8">
          {/* === LADO IZQUIERDO: Perfil del estudiante === */}
          <div className="lg:w-1/2 space-y-6">
            {/* Avatar + Nombre */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                NU
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Nombre del usuario completo con apellido
                </h2>
              </div>
            </div>

            {/* Información del estudiante */}
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Matrícula:</span> 2025B123255
              </p>
              <p>
                <span className="font-semibold">Curso en curso:</span>{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Programación orientada a objetos
                </a>
              </p>
              <p>
                <span className="font-semibold">Costo total:</span>{" "}
                <span className="text-blue-600 font-bold text-xl">$5,600</span>
              </p>
              <p>
                <span className="font-semibold">Deuda pendiente:</span>{" "}
                <span className="text-red-600 font-bold text-xl">$3,500</span>
              </p>
            </div>

            {/* Historial de abonos */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                Historial de abonos
              </h4>
              <ul className="space-y-2">
                <li className="bg-green-50 text-green-700 font-medium px-4 py-3 rounded-lg border border-green-200">
                  $1,100 - 12/9/2025 4:45 pm
                </li>
                <li className="bg-green-50 text-green-700 font-medium px-4 py-3 rounded-lg border border-green-200">
                  $1,000 - 10/9/2025 11:05 am
                </li>
              </ul>
            </div>
          </div>

          {/* Divisor vertical (solo en pantallas grandes) */}
          <div className="hidden lg:block w-px bg-gray-300 mx-8"></div>

          {/* === LADO DERECHO: Formulario de pago === */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ingrese sus datos de pago
            </h3>

            <form className="space-y-5 pb-10">
              {/* Número de tarjeta */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
                />
              </div>

              {/* Fecha de vencimiento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de vencimiento
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength="2"
                    className="w-20 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-500 text-lg">/</span>
                  <input
                    type="text"
                    placeholder="YY"
                    maxLength="2"
                    className="w-20 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Nombre en la tarjeta */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre en la tarjeta
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* CVV */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Código de 3 números (CVV)
                </label>
                <input
                  type="text"
                  placeholder="123"
                  maxLength="3"
                  className="w-32 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Monto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monto abonado
                </label>
                <input
                  type="text"
                  placeholder="$1,000"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Botón de pago */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Realizar abono
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
