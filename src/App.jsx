import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Admin from "./Pages/Admin/Admin.jsx";
import Estudiante from "./Pages/Estudiante.jsx";
import RegistrarEstudiante from "./Pages/Admin/RegistrarEstudiante.jsx";
import RegistrarDocente from "./Pages/Admin/RegistrarDocente.jsx";
import RegistrarAdmin from "./Pages/Admin/RegistrarAdmin.jsx";
import RegistrarCurso from "./Pages/Admin/RegistrarCurso.jsx";
import RegistrarSeccion from "./Pages/Admin/RegistrarSeccion.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="bg-white h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Admin />} />
          <Route path="/estudiante" element={<Estudiante />} />
          <Route path="/registrar-estudiante" element={<RegistrarEstudiante />} />
          <Route path="/registrar-docente" element={<RegistrarDocente />} />
          <Route path="/registrar-admin" element={<RegistrarAdmin />} />
          <Route path="/registrar-curso" element={<RegistrarCurso />} />
          <Route path="/registrar-seccion" element={<RegistrarSeccion />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
