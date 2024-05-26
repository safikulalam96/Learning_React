import React, { useState } from "react";
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState('light');
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

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#36454F";
      // showAlert("Dark mode Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="	#f5f5dc";
      // showAlert("Dark mode Enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="Safikul" more="Something" mode={mode} togglemode={togglemode}/>
      {/* <Alert alert={alert}/> */}
      <TextForm mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
