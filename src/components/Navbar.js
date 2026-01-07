import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.png';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = String(hours).padStart(2, '0');
    return `${hoursStr}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="VES Logo" />
      </div>
      <div className="navbar-heading">
        <h1 className="heading-main">3rd Vivekanand Legal Conclave 2025-26</h1>
        <h2 className="heading-sub">Environmental Law and Vision 2047:</h2>
        <h3 className="heading-event">Towards a Climate Resilient India</h3>
      </div>
      <div className="navbar-clock">
        <div className="clock-display">{formatTime(time)}</div>
      </div>
    </nav>
  );
};

export default Navbar;

