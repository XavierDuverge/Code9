import React from "react";

const PaginaDeCurso = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen">
      {/* Header - Barra de búsqueda */}
      <header className="flex justify-between items-center bg-white px-5 py-3 shadow-sm">
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="w-80 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-[#24324a] text-white font-bold px-4 py-2 rounded-md">
          NU
        </button>
      </header>

      {/* Main Content */}
      <main className="flex justify-between p-8 gap-8">
        {/* Sección principal: Info del curso */}
        <section className="flex-2 bg-white rounded-lg p-6 shadow-sm">
          {/* Banner del curso */}
          <div className="bg-[#24324a] text-white p-8 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-1">
              Introducción a la programación orientada a objeto
            </h1>
            <p className="text-sm opacity-80">sesiones disponibles - 2</p>
          </div>

          {/* Detalles del curso */}
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-3">Detalles</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Este es un curso que busca que el estudiante consiga aprender todos
              los fundamentos y lógica detrás de la programación orientada a
              objeto aplicando en la práctica las teorías correspondientes para
              concretar el conocimiento adquirido en proyectos durante todo el
              curso.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Requisitos</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
              <li>Dominio de algún lenguaje</li>
              <li>Conocimiento en otro tipo de paradigma</li>
              <li>Disponibilidad de internet</li>
              <li>Disponibilidad de al menos 5 horas prácticas</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">Fechas importantes</h3>
            <p className="text-sm">
              <strong>Inicio:</strong>{" "}
              <span className="text-[#276ef1] font-medium">
                14 de noviembre del 2025
              </span>
            </p>
            <p className="text-sm">
              <strong>Término:</strong>{" "}
              <span className="text-[#276ef1] font-medium">
                14 de enero del 2026
              </span>
            </p>
          </div>
        </section>

        {/* Sidebar: Costo y Maestros */}
        <aside className="flex-1 space-y-6">
          {/* Tarjeta de costo */}
          <div className="bg-[#24324a] text-white p-6 rounded-lg text-center">
            <p className="text-lg">
              Costo:{" "}
              <span className="text-[#5fa8f6] text-2xl font-bold">5,600</span>
            </p>
            <button className="bg-[#3b67d8] text-white font-bold py-2 px-6 rounded-md mt-4 w-full hover:bg-blue-700 transition">
              Inscribirse
            </button>
            <p className="text-xs opacity-80 mt-3">
              Inicio: 14 de noviembre del 2025
            </p>
          </div>

          {/* Maestros */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Maestros</h3>
            <ul className="space-y-3">
              {["Nombre del maestro", "Nombre del maestro", "Nombre del maestro", "Nombre del maestro"].map(
                (maestro, i) => (
                  <li key={i} className="flex items-center">
                    <span className="bg-[#24324a] text-white font-bold text-sm px-3 py-1 rounded mr-3">
                      NU
                    </span>
                    <span className="text-sm text-gray-700">{maestro}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PaginaDeCurso;