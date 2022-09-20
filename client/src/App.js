import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Landing from "./pages/LandingPage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import LeftMenu from "./components/LeftMenu";
import Resume from "./pages/ResumePage";

function App() {
  return (
    <div className="App">
        {useLocation().pathname == "/" ? <></> : <LeftMenu />}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
    </div>
  );
}

export default App;