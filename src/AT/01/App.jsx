import React, { useState } from 'react';
import { FaBook, FaEnvelope, FaVideo, FaBars } from 'react-icons/fa';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <img src="./logo.svg" alt="Logo Universidade" className="logo" />
      
      <ul className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <li className="menu-item"><FaBook /> <span>Biblioteca</span></li>
        <li className="menu-item"><FaVideo /> <span>Vídeos</span></li>
        <li className="menu-item"><FaEnvelope /> <span>Contato</span></li>
      </ul>
      
      <button className="menu-icon" onClick={toggleMenu} aria-label="Menu do usuário">
        <FaBars />
      </button>
    </nav>
  );
}