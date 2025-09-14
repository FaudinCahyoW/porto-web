import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/MyProject';
import Rusdaca from './pages/project-pages/rusdaca/Rusdaca';
import Mobile from './pages/project-pages/rusdaca/mobile';
import Web from './pages/project-pages/rusdaca/web';
import Bukit from './pages/project-pages/tangkeban/Bukit';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />

        {/* Project Pages */}
        <Route path="/project" element={<Project />} />
        <Route path="/project/rusdaca" element={<Rusdaca />} />
        <Route path="/project/rusdaca/app" element={<Mobile />} />
        <Route path="/project/rusdaca/admin" element={<Web />} />
        <Route path="/project/bukit" element={<Bukit />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Redirect untuk route tidak dikenal */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
