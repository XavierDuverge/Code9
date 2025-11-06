import { useNavigate } from "react-router-dom";

export default function RegistrarEstudiante() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-blue-800">
      {/* Columna izquierda (decorativa o futura imagen) */}
      <div className="flex-1 bg-blue-800" />

      {/* Panel derecho */}
      <div className="w-full max-w-md bg-blue-600 text-white flex flex-col justify-center p-10 py-12 rounded-l-3xl shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white mb-6 hover:text-blue-200"
        >
          ← Volver
        </button>

        <h2 className="text-2xl font-semibold mb-6 border-b border-blue-400 pb-2">
          Registro de estudiante
        </h2>

        <form className="space-y-5 mt-6">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Teléfono"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Matrícula"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Contraseña temporal"
            className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded shadow-lg transition-all"
          >
            Registrar estudiante
          </button>
        </form>
      </div>
    </div>
  );
}
