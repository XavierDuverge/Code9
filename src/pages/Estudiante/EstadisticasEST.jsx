import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search, User, Settings, ArrowLeft } from "lucide-react";

// === Componentes locales ===
function Card({ children, className }) {
  return (
    <div className={`shadow-md rounded-xl ${className || "bg-white"}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className || ""}`}>{children}</div>;
}

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${className || ""}`}
    >
      {children}
    </button>
  );
}

// === Datos del gráfico ===
const data = [
  { name: "Norida", value: 13.4 },
  { name: "USA", value: 11.6 },
  { name: "Japan", value: 10.8 },
  { name: "UK", value: 8.4 },
  { name: "Spain", value: 3.8 },
  { name: "Germany", value: 12.0 },
];

// === Dashboard principal ===
export default function Dashboard() {
  const [search, setSearch] = useState("");

  // Función para regresar
  const handleRegresar = () => {
    window.history.back();
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-md flex justify-between items-center px-4 md:px-10 py-3">
        {/* Botón Regresar */}
        <button
          onClick={handleRegresar}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors mr-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Regresar</span>
        </button>

        {/* Búsqueda */}
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="text-gray-500" />
        </div>

        {/* Botón Ver cursos */}
        <Button>Ver cursos disponibles</Button>

        {/* Perfil */}
        <div className="flex items-center gap-2 ml-4">
          <div className="bg-gray-800 text-white p-2 rounded-md">
            <User size={18} />
          </div>
          <p className="hidden md:block font-semibold">Nombre usuario</p>
        </div>
      </header>

      {/* Main section */}
      <div className="flex-1 overflow-auto">
        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <Card className="bg-blue-800 text-white hover:scale-105 transition-transform">
            <CardContent>
              <h2 className="text-lg font-semibold">Cursos completados</h2>
              <p className="text-sm mt-2">
                Total de cursos completados: <span className="font-bold">45</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-teal-700 text-white hover:scale-105 transition-transform">
            <CardContent>
              <h2 className="text-lg font-semibold">Cursos no completados</h2>
              <p className="text-sm mt-2">
                Total de cursos no completados: <span className="font-bold">12</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 text-white hover:scale-105 transition-transform">
            <CardContent>
              <h2 className="text-lg font-semibold">Estadísticas</h2>
              <p className="text-sm mt-2">Estado de calificaciones y cursos</p>
            </CardContent>
          </Card>
        </section>

        {/* Main content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-[calc(100vh-220px)]">
          {/* Curso en curso */}
          <Card className="p-4 flex flex-col justify-between h-full hover:scale-105 transition-transform">
            <div>
              <h2 className="text-lg font-bold mb-4">Curso en curso</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-800 text-white px-3 py-1 rounded-md font-bold">NU</div>
                <div className="flex-1 bg-gray-200 rounded-full h-5">
                  <div
                    className="bg-green-500 h-5 rounded-full text-xs text-white text-center"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-md p-4">
                <h3 className="text-md font-semibold mb-2">Avances académicos</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex justify-between">
                    <span>Aprobados</span>{" "}
                    <span className="text-green-600 font-semibold">7</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Reprobados</span>{" "}
                    <span className="text-red-600 font-semibold">5</span>
                  </li>
                  <li className="flex justify-between">
                    <span>En curso</span>{" "}
                    <span className="text-gray-600 font-semibold">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Gráfica de cursos */}
          <Card className="p-4 flex flex-col justify-between h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Gráfica de cursos</h2>
              <Settings size={18} className="text-gray-600" />
            </div>
            <div className="flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}