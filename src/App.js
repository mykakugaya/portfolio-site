import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import "antd/dist/antd.css";
import Landing from "./pages/LandingPage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import AppMenu from "./components/AppMenu";
import Resume from "./pages/ResumePage";
import SocialMediaFooter from "./components/SocialMediaFooter";

function App() {
  return (
    <div id="app" className="App">
        {useLocation().pathname === "/" ? <></> : <AppMenu />}
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/*" element={<Landing/>} />
        </Routes>
        {useLocation().pathname === "/" ? <SocialMediaFooter/> : <></>}
    </div>
  );
}

export default App;