import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';

function App() {
  const [colorMode, setColorMode] = useState('dark');
  const [bgMode, setBgMode] = useState('light');

  const toggleMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
      setBgMode('light');
      document.body.style.backgroundColor = 'aliceblue';
    } else {
      setColorMode('light');
      setBgMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  };

  return (
    <Router>
      <NavBar textMode={colorMode} bgMode={bgMode} toggleModeFunction={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextArea textMode={colorMode} bgMode={bgMode} title="Enter your text" />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
