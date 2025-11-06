import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Estudiante() {
  const navigate = useNavigate(); // 👈 Hook para navegar

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => navigate("/Pagos")} // ✅ Navega correctamente
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ver cursos disponibles
        </button>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium">
            NU
          </div>
          <span className="font-semibold text-sm sm:text-base">
            Nombre usuario
          </span>
        </div>
      </header>

      {/* Banner */}
      <section className="relative w-full bg-blue-900 text-white rounded-lg mt-12 sm:mt-16 mx-auto max-w-7xl h-40 sm:h-48 flex items-center justify-center shadow-lg">
        <h2 className="text-xl sm:text-2xl font-semibold">Panel de Cursos</h2>

        {/* Tarjetas sobre el banner */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-6 sm:gap-20">
          <div className="bg-sky-500 text-white px-6 py-4 rounded-lg shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Cursos completados</h3>
            <p className="text-sm mt-1">
              Total de cursos completados <b>45</b>
            </p>
          </div>
          <div className="bg-emerald-500 text-white px-6 py-4 rounded-lg shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Cursos no completados</h3>
            <p className="text-sm mt-1">
              Total de cursos no completados <b>45</b>
            </p>
          </div>
          <div className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg">Estadísticas</h3>
            <p className="text-sm mt-1">Estado de calificaciones y cursos</p>
          </div>
        </div>
      </section>

      {/* Tabla */}
      <main className="flex-1 mt-20 p-6 overflow-x-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Nombre",
                  "Descripción",
                  "Requisitos",
                  "Costo",
                  "Fecha de inicio",
                  "Fecha de finalización",
                  "Estado",
                ].map((head, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-gray-700 font-semibold text-sm"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">
                    Introducción a la programación
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    En este curso te mostraremos la manera...
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    Conocimientos de lógica y matemática
                  </td>
                  <td className="px-4 py-3 text-gray-600 font-medium">3,500</td>
                  <td className="px-4 py-3 text-gray-600">4 de julio 2025</td>
                  <td className="px-4 py-3 text-gray-600">
                    4 de septiembre 2025
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Finalizado
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
