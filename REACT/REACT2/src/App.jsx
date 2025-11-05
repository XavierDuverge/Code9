import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Admin from "./pages/Admin/Admin.jsx";
import Estudiante from "./pages/Estudiante/Estudiante.jsx"; // <- CORREGIDO
import RegistrarEstudiante from "./pages/Admin/RegistrarEstudiante.jsx";
import RegistrarDocente from "./pages/Admin/RegistrarDocente.jsx";
import RegistrarAdmin from "./pages/Admin/RegistrarAdmin.jsx";
import RegistrarCurso from "./pages/Admin/RegistrarCurso.jsx";
import RegistrarSeccion from "./pages/Admin/RegistrarSeccion.jsx";
import CursoDetails from "./pages/Detallescurso/CursoDetails.jsx";
import Pay from "./pages/Pagos/Pay.jsx";
import PerfilEstudiante from "./pages/Estudiante/PerfilEstudiante.jsx";
import Configuracion from "./pages/Admin/ConfiguracionAdmin.jsx";
import Login from "./pages/Login/Login2.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen overflow-auto">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/estudiante" element={<Estudiante />} />
          <Route path="/registrar-estudiante" element={<RegistrarEstudiante />} />
          <Route path="/registrar-docente" element={<RegistrarDocente />} />
          <Route path="/registrar-admin" element={<RegistrarAdmin />} />
          <Route path="/registrar-curso" element={<RegistrarCurso />} />
          <Route path="/registrar-seccion" element={<RegistrarSeccion />} />
          <Route path="/DetallesCurso" element={<CursoDetails />} />
          <Route path="/Pagos" element={<Pay />} />
          <Route path="/PerfilEstudiante" element={<PerfilEstudiante />} />
          <Route path="/ConfiguracionAdmin" element={<Configuracion />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
