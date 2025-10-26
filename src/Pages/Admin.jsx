import { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function Student() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const dataBar = {
    labels: ["Nordic", "USA", "Japan", "UK", "Spain", "Germany"],
    datasets: [
      {
        label: "Ingresos",
        data: [18, 19, 11.65, 10.38, 3.45, 3.32],
        backgroundColor: "rgba(37, 99, 235, 0.7)",
      },
    ],
  };

  const dataPie = {
    labels: ["Curso 1", "Curso 2", "Curso 3"],
    datasets: [
      {
        data: [65, 15, 20],
        backgroundColor: [
          "rgba(34, 197, 94, 0.8)",
          "rgba(216, 239, 68, 1)",
          "rgba(59, 130, 246, 0.8)",
        ],
      },
    ],
  };

  const students = [
    {
      matricula: "1234532",
      nombre: "Nombre estudiante",
      apellido: "Apellido estudiante",
      telefono: "8296714173",
      fecha: "7/8/2025 - 4:56 pm",
      estado: "activo",
      curso: "Introduccion a la ciencia",
    },
    {
      matricula: "1234533",
      nombre: "Nombre estudiante",
      apellido: "Apellido estudiante",
      telefono: "8296714174",
      fecha: "7/8/2025 - 4:58 pm",
      estado: "activo",
      curso: "Introduccion a la ciencia",
    },
    {
      matricula: "1234534",
      nombre: "Nombre estudiante",
      apellido: "Apellido estudiante",
      telefono: "8296714175",
      fecha: "7/8/2025 - 5:00 pm",
      estado: "activo",
      curso: "Introduccion a la ciencia",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-blue-600 text-white fixed top-0 left-0 h-full p-4 flex flex-col justify-between transition-all duration-300
          ${sidebarOpen ? "w-40 md:w-48" : "w-12"}
        `}
      >
        <div className={`p-4 text-center border-b border-blue-600 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-lg font-bold">ERP Académico</h2>
          <p className="text-xs text-blue-200">Sistema de gestión</p>
        </div>

        <nav className="flex flex-col mt-4 space-y-2 px-2 flex-1">
          {sidebarOpen ? (
            <>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Registrar docente</button>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Registrar estudiante</button>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Registrar curso</button>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Registrar sesión</button>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Registrar admin</button>
              <button className="flex items-center px-3 py-2 rounded hover:bg-blue-700 cursor-pointer">Configuración</button>
            </>
          ) : (
            <div className="flex flex-col items-center mt-4 space-y-4">
              <span className="cursor-pointer">📚</span>
              <span className="cursor-pointer">👨‍🏫</span>
              <span className="cursor-pointer">📝</span>
              <span className="cursor-pointer">⚙️</span>
            </div>
          )}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-blue-400">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded cursor-pointer">Cerrar Sesión</button>
          </div>
        )}
      </aside>

      {/* Contenedor principal con scroll */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 overflow-auto
          ${sidebarOpen ? "ml-40 md:ml-48" : "ml-12"}
        `}
      >
        {/* Botón toggle */}
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded shadow"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        {/* Header sticky */}
        <header className="sticky top-0 z-40 bg-white-100 shadow p-4">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Buscar cursos 🔍️"
              className="w-1/2 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
              <div className="bg-teal-500 text-white w-8 h-8 flex items-center justify-center rounded-full">XD</div>
              <span className="font-semibold">Xavier Duverge Montero</span>
            </div>
          </div>
        </header>

        
        <div className="flex flex-wrap gap-6 p-4 mt-4">
          <div className="bg-green-100 p-4 rounded shadow w-64 transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h5 className="text-lg font-bold mb-2">Cursos completados</h5>
            <p className="text-gray-700">Total de cursos completados 45</p>
          </div>
          <div className="bg-blue-200 p-4 rounded shadow w-64 transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h5 className="text-lg font-bold mb-2">Cursos no completados</h5>
            <p className="text-gray-700">Total de cursos no completados 45</p>
          </div>
          <div className="bg-gray-400 p-4 rounded shadow w-64 transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
            <h5 className="text-lg font-bold mb-2">Estadisticas</h5>
            <p className="text-gray-700">Estado de calificaciones y cursos</p>
          </div>
        </div>

        <div className="p-6 flex-1">
          <h2 className="text-xl font-bold mb-4">Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow h-80">
              <h3 className="font-semibold mb-4">Ingresos</h3>
              <Bar data={dataBar} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow h-80">
              <h3 className="font-semibold mb-4">Estudiantes por curso</h3>
              <Pie data={dataPie} />
            </div>
          </div>

          <div className="mt-8 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Registros de los estudiantes</h3>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Filtro de búsqueda</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Matrícula</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Apellido</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Teléfono</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Curso</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Operaciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((s, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{s.matricula}</td>
                      <td className="px-4 py-2">{s.nombre}</td>
                      <td className="px-4 py-2">{s.apellido}</td>
                      <td className="px-4 py-2">{s.telefono}</td>
                      <td className="px-4 py-2">{s.fecha}</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">{s.estado}</span>
                      </td>
                      <td className="px-4 py-2">{s.curso}</td>
                      <td className="px-4 py-2 space-x-2">
                        <button className="text-blue-600">👤</button>
                        <button className="text-yellow-500">✏️</button>
                        <button className="text-red-500">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
