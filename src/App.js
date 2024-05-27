import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#251B67";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "	#f5f5dc";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Safikul"
          more="About us"
          mode={mode}
          togglemode={togglemode}
        />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
