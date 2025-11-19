import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavbarComp from "./component/NavbarComp"; // <-- kamu lupa import ini!
import Home from "./pages/Home";
import Project from "./pages/MyProject";
import Mobile from "./pages/project-pages/rusdaca/mobile";
import Web from "./pages/project-pages/rusdaca/web";
import Bukit from "./pages/project-pages/tangkeban/bukit";
import Contact from "./pages/Contact";
import Rusdaca from "./pages/project-pages/rusdaca";
import ExpenseTracker from "./pages/project-pages/expense-tracker/ExpenseTracker";
import MovieStore from "./pages/project-pages/movie-store/MovieStore";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home dengan Navbar */}
        <Route
          path="/"
          element={
            <NavbarComp>
              <Home />
            </NavbarComp>
          }
        />

        {/* Project Page tanpa Navbar */}
        <Route path="/project" element={<Project />} />

        {/* RUSDACA Pages tanpa Navbar */}
        <Route path="/project/rusdaca" element={<Rusdaca />} />
        <Route path="/project/rusdaca/app" element={<Mobile />} />
        <Route path="/project/rusdaca/admin" element={<Web />} />

        {/* Bukit page tanpa Navbar */}
        <Route path="/project/bukit" element={<Bukit />} />

        {/* Expense tracker page tanpa Navbar */}
        <Route path="/project/expense" element={<ExpenseTracker />} />

        {/* Expense tracker page tanpa Navbar */}
        <Route path="/project/movie" element={<MovieStore/>}/>

        {/* Contact page tanpa Navbar */}
        <Route path="/contact" element={<Contact />} />

        {/* Redirect kalau route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
