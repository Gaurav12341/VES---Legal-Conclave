import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CourtRoom from './components/CourtRoom';

function App() {
  return (
    <div className="app">
      <div className="background-placeholder"></div>
      <Navbar />
      <div className="main-content">
        <div className="courtrooms-grid">
          <CourtRoom number={1} />
          <CourtRoom number={2} />
          <CourtRoom number={3} />
          <CourtRoom number={4} />
        </div>
      </div>
    </div>
  );
}

export default App;

