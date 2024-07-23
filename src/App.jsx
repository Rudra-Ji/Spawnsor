import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="maintext"> 
        <h1>Launching Soon...</h1>
      </div>
      <div className="textinfo">
        <p>product under construction</p>
      </div>
      <div className="stateinfo">
          <p className='pointer'>|</p>
          <p className='currentstatus'>Wireframing</p>
      </div>
      <div className="status">
        <div className="statusbar">
          <div className="visibleprogress"></div>
        </div>
        <div className="percentage">
          <p>0%</p>
          <p>100%</p>
        </div>
      </div>
      <div className="footer">
        <p> Copyright &copy; 2024 <span style={{ fontWeight: 'bold' }}>SPAWNSOR</span>. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;


