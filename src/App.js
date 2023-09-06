import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Profile from "src/pages/Profile/Profile.js";
import HackerForm from "src/components/Forms/HackerForm";
import Testing from "src/components/others/Testing";
import Inscripcio from "src/pages/Inscripcio";
import Sponsors from "src/pages/Sponsors";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/hacker-form" element={<HackerForm />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/sponsors" element={<Sponsors defaultId={0} />} />
          <Route path="/sponsors/:ids" element={<Sponsors />} />
          <Route path="/inscripcio" element={<Inscripcio />} />
        </Routes>
      </Router>
    </div>
  );
}
