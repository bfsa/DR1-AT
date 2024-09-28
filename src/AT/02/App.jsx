import React, { useState } from 'react';
import { FaUser, FaUserCircle, FaEnvelope, FaUsers, FaImage, FaVideo, FaCog, FaBars } from 'react-icons/fa';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-top">
        <img src="./logo.svg" alt="Logo Universidade" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          <FaBars />
        </button>
      </div>
      
      <ul className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <li className="menu-item"><FaUserCircle /> <span>Perfil</span></li>
        <li className="menu-item"><FaEnvelope /> <span>Postagens</span></li>
        <li className="menu-item"><FaUsers /> <span>Amigos</span></li>
        <li className="menu-item"><FaImage /> <span>Fotos</span></li>
        <li className="menu-item"><FaVideo /> <span>Vídeos</span></li>
        <li className="menu-item"><FaCog /> <span>Configurações</span></li>
      </ul>
    </nav>
  );
}