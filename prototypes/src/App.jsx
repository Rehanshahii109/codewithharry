import './App.css';
import Navber from './components/Navber';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light'); // whether dark mode is enabled

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212'; // Optional: change background
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navber title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <About />
    </>
  );
}

export default App;
