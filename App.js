// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />

        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/" element={<TextBox heading="Enter your Text" mode={mode} toggleMode={toggleMode} />}/>
            

        </Routes>
      </Router>




    </>
  );
}

export default App;
