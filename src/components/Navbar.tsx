import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">⚖️</div>
          <span>Advocacia Modelo</span>
        </Link>

        {/* Menu para desktop */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              <span className="link-text">Início</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="nav-link" onClick={() => setMenuOpen(false)}>
              <span className="link-text">Sobre</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/areas-de-atuacao" className="nav-link" onClick={() => setMenuOpen(false)}>
              <span className="link-text">Áreas de Atuação</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/contato" className="nav-link" onClick={() => setMenuOpen(false)}>
              <span className="link-text">Contato</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <button className="consult-button" onClick={() => setMenuOpen(false)}>
              Consulta Grátis
            </button>
          </li>
        </ul>

        {/* Menu Hambúrguer para mobile */}
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;