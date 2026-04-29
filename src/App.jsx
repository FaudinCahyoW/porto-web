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
import Web from "./pages/project-pages/rusdaca/Web";
import Bukit from "./pages/project-pages/tangkeban/bukit";
import Contact from "./pages/Contact";
import Rusdaca from "./pages/project-pages/rusdaca";
import ExpenseTracker from "./pages/project-pages/expense-tracker/ExpenseTracker";
import MovieStore from "./pages/project-pages/movie-store/MovieStore";
import NextVending from "./pages/project-pages/next-vendingMachine/NextVending";

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

        <Route path="/project" element={<Project />} />

        <Route path="/project/rusdaca" element={<Rusdaca />} />
        <Route path="/project/rusdaca/app" element={<Mobile />} />
        <Route path="/project/rusdaca/admin" element={<Web />} />

        <Route path="/project/bukit" element={<Bukit />} />

        <Route path="/project/expense" element={<ExpenseTracker />} />

        <Route path="/project/movie" element={<MovieStore/>}/>
        
        <Route path="/project/vending" element={<NextVending/>}/>
        
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
