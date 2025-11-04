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
import { useNavigate } from "react-router-dom";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

export default function Student() {
  const navigate = useNavigate();

  // Datos gráficos
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

  const optionsBar = { responsive: true, maintainAspectRatio: false };
  const optionsPie = { responsive: true, maintainAspectRatio: false };

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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar FIJO - Siempre abierto - Texto completo */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col h-full shadow-xl">
        {/* Logo */}
        <div className="p-6 border-b border-blue-500">
          <h2 className="text-xl font-bold text-center">ERP Académico</h2>
          <p className="text-xs text-blue-200 text-center mt-1">Sistema de gestión</p>
        </div>

        {/* Navegación - Texto completo */}
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => navigate("/registrar-docente")}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition"
          >
            Registrar docente
          </button>
          <button
            onClick={() => navigate("/registrar-estudiante")}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition"
          >
            Registrar estudiante
          </button>
          <button
            onClick={() => navigate("/registrar-curso")}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition"
          >
            Registrar curso
          </button>
          <button
            onClick={() => navigate("/registrar-seccion")}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition"
          >
            Registrar sección
          </button>
          <button
            onClick={() => navigate("/registrar-admin")}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition"
          >
            Registrar admin
          </button>
          <button
           onClick={() => navigate("/ConfiguracionAdmin")}
           className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 font-medium text-sm transition">
            Configuración
          </button>
        </nav>

        {/* Cerrar sesión */}
        <div className="p-4 border-t border-blue-500">
          <button 
          onClick={() => navigate("/DetallesCurso")}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white shadow-md p-5">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Buscar cursos..."
              className="w-96 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <div className="flex items-center space-x-3">
              <div className="bg-teal-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm">
                XD
              </div>
              <div>
                <p className="font-semibold text-gray-800">Xavier Duverge Montero</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
          </div>
        </header>

        {/* Tarjetas */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-100 p-5 rounded-xl shadow hover:shadow-xl transition">
            <h5 className="text-lg font-bold text-green-800">Cursos completados</h5>
            <p className="text-2xl font-bold text-green-900 mt-1">45</p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl shadow hover:shadow-xl transition">
            <h5 className="text-lg font-bold text-blue-800">Cursos en progreso</h5>
            <p className="text-2xl font-bold text-blue-900 mt-1">12</p>
          </div>
          <div className="bg-gray-100 p-5 rounded-xl shadow hover:shadow-xl transition">
            <h5 className="text-lg font-bold text-gray-800">Estadísticas</h5>
            <p className="text-sm text-gray-600 mt-1">Calificaciones y progreso</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ height: "400px" }}>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Ingresos por región</h3>
              <div className="h-full">
                <Bar data={dataBar} options={optionsBar} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg" style={{ height: "400px" }}>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Estudiantes por curso</h3>
              <div className="h-full flex items-center justify-center">
                <div className="w-full h-64">
                  <Pie data={dataPie} options={optionsPie} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla moderna */}
        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Registros de Estudiantes</h3>
                <select className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                  <option>Todos</option>
                  <option>Activos</option>
                  <option>Inactivos</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Matrícula</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Nombre Completo</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Teléfono</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Curso</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((s, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">#{s.matricula}</td>
                      <td className="px-6 py-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900">{s.nombre}</p>
                          <p className="text-xs text-gray-500">{s.apellido}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{s.telefono}</td>
                      <td className="px-6 py-4 text-xs text-gray-500">{s.fecha}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full
                          ${s.estado === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                        `}>
                          {s.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{s.curso}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Ver</button>
                          <button className="text-yellow-600 hover:text-yellow-800 font-medium">Editar</button>
                          <button className="text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                        </div>
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
