import { useNavigate } from "react-router-dom";

export default function RegistrarCurso() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-blue-800">
      <div className="flex-1 bg-blue-800" />

      <div className="w-full max-w-md bg-blue-600 text-white flex flex-col justify-center p-10 py-12 rounded-l-3xl shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white mb-6 hover:text-blue-200"
        >
          ← Volver
        </button>

        <h2 className="text-2xl font-semibold mb-6 border-b border-blue-400 pb-2">
          Registro de cursos
        </h2>

        <form className="space-y-5 mt-6">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300" />
          
          <textarea
            placeholder="Descripción"
            className="w-full p-3 h-24 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          />
          
          <input type="number" placeholder="Costo del curso" className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="Requisitos" className="w-full p-3 rounded bg-blue-700 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="date" placeholder="Fecha de inicio" className="w-full p-3 rounded bg-blue-700 text-white outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="date" placeholder="Fecha de término" className="w-full p-3 rounded bg-blue-700 text-white outline-none focus:ring-2 focus:ring-blue-300" />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded shadow-lg transition-all"
          >
            Registrar curso
          </button>
        </form>
      </div>
    </div>
  );
}
