import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Alert from './Component/Alert';
import Textarea from './Component/Textarea'
import About from './Component/About'
import Calculator from './Component/Calculator'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1200);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#050c2a';
      showAlert("Dark mode has been Enabled.", "success");  
    }
    else {setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been Enabled.", "success")
        }
  };
  
  return (
    <Router>
    <div>
      <Navbar title="UGGU" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exect path="/about" element={<About />} />
        <Route path="/home" element={<Textarea heading="Case converter" mode={mode} showAlert={showAlert} />} />
        <Route path="/" element={<Textarea heading="Case converter" mode={mode} showAlert={showAlert} />} />
        <Route exect path="/Calculator" element={<Calculator/>} />
      </Routes>
    </div>
  </Router>

  );
}

export default App;

