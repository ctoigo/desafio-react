import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectList from "./components/projects/ProjectList";
import Navigation from "./components/navigation/Navigation";
import ProjectForm from "./components/projects/ProjectForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/add" element={<ProjectForm />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
