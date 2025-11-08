import React from "react";
import { useNavigate } from "react-router-dom";

export default function PerfilAdmin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Botón regresar */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center text-gray-700 text-sm mb-6 hover:underline"
      >
        ← regresar
      </button>

      <div className="flex gap-10">
        {/* Sección izquierda: Perfil del Admin */}
        <div className="flex-1">
          {/* Banner */}
          <div className="bg-[#1f3148] h-32 rounded-lg mb-6 relative">
            <div className="absolute -bottom-8 left-6 bg-[#2a60c8] text-white w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg">
              NU
            </div>
          </div>

          {/* Información del admin */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800">Nombre apellido admin</h2>
            <p className="text-sm text-gray-600 mt-2">Teléfono - 8296714173</p>
            <p className="text-sm text-gray-600">Correo - admin@mail.com</p>
            <p className="text-sm text-gray-600 mt-1">Fecha de registro - 12/8/2024</p>

            <button className="mt-6 bg-gray-200 text-gray-700 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition text-sm font-medium">
              editar perfil
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="w-px bg-gray-300"></div>

        {/* Sección derecha: Informaciones académicas */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Informaciones académicas</h3>

          <div className="space-y-5">
            {/* Estudiantes */}
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white p-4 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Estudiantes</p>
                <p className="text-lg font-bold">Total de estudiantes registrados 45</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1459/1459320.png"
                alt="Estudiantes"
                className="w-10 h-10"
              />
            </div>

            {/* Docentes */}
            <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-4 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Docentes</p>
                <p className="text-lg font-bold">Total de docentes registrados 12</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1459/1459333.png"
                alt="Docentes"
                className="w-10 h-10"
              />
            </div>

            {/* Cursos */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Cursos</p>
                <p className="text-lg font-bold">Total de cursos registrados 36</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1459/1459341.png"
                alt="Cursos"
                className="w-10 h-10"
              />
            </div>

            {/* Admin */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Admin</p>
                <p className="text-lg font-bold">Total de admin registrados 6</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1459/1459350.png"
                alt="Admin"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
