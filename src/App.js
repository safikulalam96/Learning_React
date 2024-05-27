import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  // const [alert, setalert] = useState('');

  // const showAlert=(message,type)=>{
  //   setalert({
  //     msg:message,
  //     type:type
  //   })
  //   setTimeout(() => {
  //     showAlert(null)
  //   }, 2000);
  // }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#36454F";
      // showAlert("Dark mode Enabled", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor = "	#f5f5dc";
      // showAlert("Dark mode Enabled", "success")
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
      {/* <TextForm mode={mode}/> */}
      {/* <Alert alert={alert}/> */}

      <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={<TextForm mode={mode} />} />
      </Routes>

      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm mode={mode} />
          </Route>
        </Switch> */}
      {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
