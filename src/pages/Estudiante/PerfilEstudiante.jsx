/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function PerfilEstudiante() {
  const handleRegresar = () => {
    window.history.back();
  };

  return (
    <div className="p-5 font-sans text-gray-800">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={handleRegresar}
          className="bg-transparent border-none text-gray-600 text-sm cursor-pointer mr-3 hover:text-[#2a60c8] transition-colors flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          regresar
        </button>
        <div className="bg-[#1f3148] h-[70px] flex-1 rounded-md border-2 border-[#4b83d1]"></div>
      </div>

      {/* Content */}
      <div className="flex gap-10 mt-5">
        {/* Información del estudiante */}
        <div className="flex-1">
          <div className="bg-[#1f3148] text-white w-16 h-16 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
            NU
          </div>

          <h2 className="text-xl font-semibold mb-3">
            Nombre del usuario completo con apellido
          </h2>

          <p className="text-sm text-gray-600">Matrícula - 2025B123255</p>
          <p className="text-sm text-gray-600">Fecha ingreso - 12 - 9 - 2025</p>

          <p className="text-sm text-gray-600 mt-1">
            Curso en curso -{" "}
            <a href="#" className="text-[#2a60c8] underline">
              Programación orientada a objeto
            </a>
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Deuda pendiente -{" "}
            <span className="text-red-600 font-bold">$3,500</span>
          </p>

          <button className="bg-[#2a60c8] text-white border-none py-2 px-6 rounded mt-3 cursor-pointer hover:bg-blue-700 transition">
            abonar deuda
          </button>
        </div>

        {/* Divisor */}
        <div className="w-px bg-gray-300"></div>

        {/* Datos académicos */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Informaciones académicas</h3>
          <p className="text-sm text-gray-700 mb-3">Curso en curso</p>

          {/* Curso Card */}
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md w-3/4 mb-5">
            <div className="bg-[#1f3148] text-white px-3 py-1 rounded text-sm font-medium">
              NU
            </div>
            <span className="text-sm font-medium">
              Nombre del curso en cuestión...
            </span>
            <div className="bg-[#6bd66b] text-white text-xs px-2 py-1 rounded-full">
              85%
            </div>
          </div>

          {/* Avances Card */}
          <div className="bg-[#1f3148] text-white p-4 rounded-md w-3/4">
            <h4 className="text-base font-semibold mb-2">Avances académicos</h4>
            <p className="text-sm">
              Aprobados <span className="text-[#6bd66b] font-bold">7</span>
            </p>
            <p className="text-sm">
              Reprobados <span className="text-[#e74c3c] font-bold">5</span>
            </p>
            <p className="text-sm">
              En curso <span className="text-gray-400 font-bold">1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}