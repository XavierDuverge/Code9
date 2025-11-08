import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function Login() {
  console.log("Login2.jsx renderizado");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
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
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Panel Lateral con Animación */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex relative w-1/2 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="relative text-center text-white z-10">
              <motion.h2
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl font-bold mb-4"
              >
                ¡Hola de nuevo!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg opacity-90 max-w-xs mx-auto"
              >
                Accede a tu cuenta y continúa donde lo dejaste.
              </motion.p>

              <motion.div
                className="flex justify-center space-x-3 mt-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, staggerChildren: 0.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 p-8 lg:p-14"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                Bienvenido
              </h1>
              <p className="font-medium text-lg text-gray-500 mt-2">
                Por favor, ingresa tus datos para continuar.
              </p>
            </motion.div>

            <form onSubmit={handleLogin} className="mt-10 space-y-6">
              {/* Email */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="text-lg font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-violet-600" />
                  Correo
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="email"
                  className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-gray-50/50 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 outline-none transition-all duration-300"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>

              {/* Contraseña */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label className="text-lg font-medium text-gray-700 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-violet-600" />
                  Contraseña
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="password"
                  className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-gray-50/50 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 outline-none transition-all duration-300"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </motion.div>

              {/* Opciones */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-between items-center"
              >
                <label className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500" />
                  Recuérdame
                </label>
                <button
                  type="button"
                  className="font-medium text-base text-violet-600 hover:text-violet-700 transition"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </motion.div>

              {/* Botón */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-80"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Iniciando...
                    </>
                  ) : (
                    "Iniciar Sesión"
                  )}
                </motion.button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center"
            >
              <p className="font-medium text-base text-gray-600">
                ¿No tienes una cuenta?{" "}
                <button className="text-violet-600 font-bold hover:underline transition">
                  Solicita una
                </button>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}