import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// ✅ LOGIN
import Login from "./pages/Login/Login2.jsx";

// ✅ ADMIN
import Admin from "./pages/Admin/Admin.jsx";
import RegistrarEstudiante from "./pages/Admin/RegistrarEstudiante.jsx";
import RegistrarDocente from "./pages/Admin/RegistrarDocente.jsx";
import RegistrarAdmin from "./pages/Admin/RegistrarAdmin.jsx";
import RegistrarCurso from "./pages/Admin/RegistrarCurso.jsx";
import RegistrarSeccion from "./pages/Admin/RegistrarSeccion.jsx";
import Configuracion from "./pages/Admin/ConfiguracionAdmin.jsx";

// ✅ ESTUDIANTE
import Estudiante from "./pages/Estudiante/Estudiante.jsx";
import PerfilEstudiante from "./pages/Estudiante/PerfilEstudiante.jsx";
import CursoDetails from "./pages/Detallescurso/CursoDetails.jsx";
import Pay from "./pages/Pagos/Pay.jsx";
import EstudianteEST from "./pages/Estudiante/EstadisticasEST.jsx";

// ✅ DOCENTE
import Docente from "./pages/Docentes/DashboarDocente.jsx";
import Seccion1 from "./pages/Docentes/Secciones.jsx";
import Notas from "./pages/Docentes/PublicarNotas.jsx";

// ✅ COMPONENTE DE PROTECCIÓN
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen overflow-auto">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* LOGIN (pantalla inicial) */}
          <Route path="/" element={<Login />} />

          {/* 🛠️ ADMIN */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrar-estudiante"
            element={
              <ProtectedRoute allowedRole="admin">
                <RegistrarEstudiante />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrar-docente"
            element={
              <ProtectedRoute allowedRole="admin">
                <RegistrarDocente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrar-admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <RegistrarAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrar-curso"
            element={
              <ProtectedRoute allowedRole="admin">
                <RegistrarCurso />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrar-seccion"
            element={
              <ProtectedRoute allowedRole="admin">
                <RegistrarSeccion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ConfiguracionAdmin"
            element={
              <ProtectedRoute allowedRole="admin">
                <Configuracion />
              </ProtectedRoute>
            }
          />

          {/* 🎓 ESTUDIANTE */}
          <Route
            path="/estudiante"
            element={
              <ProtectedRoute allowedRole="estudiante">
                <Estudiante />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PerfilEstudiante"
            element={
              <ProtectedRoute allowedRole="estudiante">
                <PerfilEstudiante />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DetallesCurso"
            element={
              <ProtectedRoute allowedRole="estudiante">
                <CursoDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Pagos"
            element={
              <ProtectedRoute allowedRole="estudiante">
                <Pay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/EstudianteEST"
            element={
              <ProtectedRoute allowedRole="estudiante">
                <EstudianteEST />
              </ProtectedRoute>
            }
          />

          {/* 🧑‍🏫 DOCENTE */}
          <Route
            path="/DashboardDocente"
            element={
              <ProtectedRoute allowedRole="docente">
                <Docente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Seccion"
            element={
              <ProtectedRoute allowedRole="docente">
                <Seccion1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PublicarNotas"
            element={
              <ProtectedRoute allowedRole="docente">
                <Notas />
              </ProtectedRoute>
            }
          />

          {/* 🚫 RUTA POR DEFECTO */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
