import React, { useState } from "react";
import { ArrowLeft, Search, X } from "lucide-react";

export default function GradePublish() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState({
    initials: "NU",
    name: "Nombre del estudiante",
  });
  const [category, setCategory] = useState("Examenes");
  const [grade, setGrade] = useState("");

  const categories = ["Examenes", "Practica", "Foros", "Investigacion"];

  // Función para regresar
  const handleRegresar = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Back Button - FUNCIONAL */}
      <button
        onClick={handleRegresar}
        className="flex items-center gap-2 text-gray-700 hover:text-blue-900 mb-6 transition-colors font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>regresar</span>
      </button>

      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Publicar Calificaciones
        </h1>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar estudiante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Selected Student Tag */}
        {selectedStudent && (
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                {selectedStudent.initials}
              </div>
              <span className="font-medium text-gray-700">
                {selectedStudent.name}
              </span>
            </div>
            <button
              onClick={() => setSelectedStudent(null)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Category Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoría a evaluar
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Grade Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calificación final
          </label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="0"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-center text-lg font-medium"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 rounded-lg font-medium hover:from-blue-800 hover:to-blue-700 transition shadow-md">
          publicar notas
        </button>
      </div>
    </div>
  );
}