import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo com a imagem personalizada */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <img 
              src="https://cdn.pixabay.com/photo/2012/04/24/17/47/scale-40635_1280.png" 
              alt="Logo Advocacia" 
            />
          </div>
          <div className="logo-text">
            <span className="firm-name">Advocacia</span>
            <span className="firm-subname">Modelo & Associados</span>
          </div>
        </Link>

        {/* Menu para desktop */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Início</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Sobre</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/areas-de-atuacao" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Áreas de Atuação</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/equipe" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Equipe</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <Link to="/contato" className="nav-link" onClick={closeMenu}>
              <span className="link-text">Contato</span>
              <span className="link-underline"></span>
            </Link>
          </li>
          <li>
            <button className="consult-button" onClick={closeMenu}>
              <span>Consulta Grátis</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        </ul>

        {/* Menu Hambúrguer para mobile */}
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
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