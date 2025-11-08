import { useNavigate } from "react-router-dom";

export default function RegistrarSeccion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Lado Izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 bg-blue-700 flex flex-col justify-center items-center p-8 lg:p-16 relative">
        {/* Botón Volver (arriba a la izquierda) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-blue-200 hover:text-white transition text-sm font-medium"
        >
          ← Volver
        </button>

        <div className="w-full max-w-md mt-10 lg:mt-0">
          {/* Logo y título */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <svg
                  className="w-12 h-12 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v7m-3-3h6"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">ERP Académico</h1>
            <p className="text-blue-200 text-sm">Registro de Sección</p>
          </div>

          {/* Formulario */}
          <form className="space-y-5 mt-6">
            <select className="w-full px-4 py-3 bg-blue-600 text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <option>Curso</option>
              <option>Programación I</option>
              <option>Diseño Web</option>
              <option>Bases de Datos</option>
            </select>

            <select className="w-full px-4 py-3 bg-blue-600 text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <option>Docente</option>
              <option>Juan Pérez</option>
              <option>María López</option>
              <option>Carlos Rodríguez</option>
            </select>

            <input
              type="number"
              placeholder="Capacidad máxima"
              className="w-full px-4 py-3 bg-blue-600 text-white placeholder-blue-300 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md transition duration-200"
            >
              Registrar sección
            </button>
          </form>

          <p className="text-center text-blue-200 text-sm mt-6">
            ¿Deseas volver al panel principal?{" "}
            <a
              href="/admin"
              className="text-white underline hover:text-blue-300"
            >
              Ir al panel
            </a>
          </p>
        </div>
      </div>

      {/* Lado Derecho - Imagen */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:  `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')`,
        }}
      >
        <div className="h-full bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
      </div>
    </div>
  );
}
