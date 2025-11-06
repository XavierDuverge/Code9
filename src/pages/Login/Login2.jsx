import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Ejemplo de login con roles (solo frontend)
    if (email === "admin@correo.com" && password === "1234") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else if (email === "estudiante@correo.com" && password === "1234") {
      localStorage.setItem("role", "estudiante");
      navigate("/estudiante");
    } else if (email === "docente@correo.com" && password === "1234") {
      localStorage.setItem("role", "docente");
      navigate("/DashboardDocente");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Panel Lateral con Animación */}
        <div className="hidden md:block relative w-1/2 bg-gradient-to-br from-violet-500 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full mix-blend-overlay animate-pulse delay-700"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-10">
            <h2 className="text-4xl font-bold mb-4">¡Hola de nuevo!</h2>
            <p className="text-lg text-center opacity-90">
              Accede a tu cuenta y continúa donde lo dejaste.
            </p>
            <div className="mt-8 flex space-x-4">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 p-8 lg:p-14">
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800">
            Bienvenido
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-2">
            ¡Bienvenido! Por favor ingresa tus detalles.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label className="text-lg font-medium text-gray-700">
                Correo
              </label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-300 outline-none"
                placeholder="tu@correo.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-lg font-medium text-gray-700">
                Contraseña
              </label>
              <input
                className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-300 outline-none"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="recuerdame"
                  className="w-4 h-4 text-violet-600 rounded"
                />
                <label
                  htmlFor="recuerdame"
                  className="font-medium text-base text-gray-700"
                >
                  Recuérdame
                </label>
              </div>
              <button
                type="button"
                className="font-medium text-base text-violet-600 hover:text-violet-700 transition"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white py-3 rounded-xl text-lg font-bold hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="font-medium text-base text-gray-600">
              ¿No tienes una cuenta?{" "}
              <button className="text-violet-600 font-semibold hover:underline">
                Solicita una
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
