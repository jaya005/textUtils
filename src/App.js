// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import TextArea from './components/TextArea';
// import React from 'react';
// import { useState } from 'react';
// import Contact from './components/Contact';
// import About from './components/About';
// function App() {
//   const [colorMode,setColorMode]=useState('dark');
//   const [Mode,setBgMode]=useState('light');
//     let customLightColor= `rgb(${(255)*Math.random()},${(255)*Math.random()},${(255)*Math.random()})`;
//     let customDarkColor= `rgb(${(255)*Math.random()},${(255)*Math.random()},${(255)*Math.random()})`;
//     const [customColorMode,setCustomColorMode]=useState(customDarkColor);
//     const [customBgMode,setCustomBgMode]=useState(customLightColor);
//     const ToggleCustomColor=()=>{
//       if(customColorMode===customLightColor){
//         setCustomBgMode(customLightColor)
//         setCustomColorMode(customDarkColor)
//         document.body.style.backgroundColor=customLightColor;
//       }
//         else {
//           setCustomColorMode(customLightColor)
//           setCustomBgMode(customDarkColor)
//           document.body.style.backgroundColor=customDarkColor;
//         }
//     }
//   const toggleMode=()=>{
//     if(colorMode==='light'){
//     setBgMode('light')
//     setColorMode('dark')
//     document.body.style.backgroundColor="aliceblue";
//   }
//     else {
//       setColorMode('light')
//       setBgMode('dark')
//       document.body.style.backgroundColor="black";
//     }
//   }
//   return (
//   <Router>
//     <NavBar textMode={colorMode} bgMode={Mode} toggleModeFunction={toggleMode}/>
//   <div className="container">
//   <TextArea textMode={colorMode} bgMode={Mode} title="enter your text"/>
//   </div>
//   <Routes>
//     <Route path='/about'
//     element={<About />}>
//     </Route>
//     <Route path='/contact us' element={<Contact />}>
//     </Route>
//   </Routes>
//   </Router>
//   );
// }

// export default App;
// {/* <Router>
//       <NavBar textMode={colorMode} bgMode={Mode} toggleModeFunction={ToggleCustomColor} />
//       <div className="container">
//         <TextArea textMode={colorMode} bgMode={Mode} title="Enter your text" />
//       </div>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact-us" element={<Contact />} />
//       </Routes>
//     </Router> */}
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Contact from './components/Contact';
import About from './components/About';

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
