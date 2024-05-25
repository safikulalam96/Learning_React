import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('light')

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#36454F"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="	#f5f5dc"
    }
  }
  return (
    <>
      <Navbar title="Safikul" more="Something" mode={mode} togglemode={togglemode}/>
      <TextForm mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
