// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212529";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        
      <div className="container">
        <TextBox heading="Enter your Text" mode={mode} toggleMode={toggleMode} />
      </div>

    </>
  );
}

export default App;
