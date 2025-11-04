import { useNavigate } from "react-router-dom";

export default function RegistrarDocente() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-blue-900">
      <div className="flex-1 bg-blue-900" />

      <div className="w-full max-w-md bg-blue-700 text-white flex flex-col justify-center p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white mb-6 hover:text-blue-200"
        >
          ← Volver
        </button>

        <h2 className="text-2xl font-semibold mb-8 border-b border-blue-400 pb-2">
          Registro de docente
        </h2>

        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Apellido" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Teléfono" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Correo" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Especialidad" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />

          <select className="w-full p-2 rounded bg-blue-800 text-white outline-none focus:ring-2 focus:ring-blue-400">
            <option>Título académico</option>
            <option>Licenciatura</option>
            <option>Maestría</option>
            <option>Doctorado</option>
          </select>

          <input type="password" placeholder="Contraseña temporal" className="w-full p-2 rounded bg-blue-800 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400" />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 rounded shadow-lg transition-all"
          >
            Registrar docente
          </button>
        </form>
      </div>
    </div>
  );
}
