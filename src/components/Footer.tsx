import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="juridical-footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0a3d62"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-container">
            <div className="logo-icon">⚖️</div>
            <div className="logo-text">
              <h3>Advocacia & Direito</h3>
              <p>Soluções Jurídicas Inteligentes</p>
            </div>
          </div>
          <p className="footer-description">
            Defendemos seus direitos com excelência jurídica e compromisso ético em todo o território nacional.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Áreas de Atuação</h4>
          <ul>
            <li><a href="#">Direito Civil</a></li>
            <li><a href="#">Direito Trabalhista</a></li>
            <li><a href="#">Direito Empresarial</a></li>
            <li><a href="#">Direito de Família</a></li>
            <li><a href="#">Direito Penal</a></li>
            <li><a href="#">Direito Previdenciário</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Blog Jurídico</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Entre em Contato</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Av. Paulista, 1000 - São Paulo/SP</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>(11) 9999-8888</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>contato@advocaciaedireito.com.br</p>
          </div>
          <div className="contact-item">
            <FaClock className="contact-icon" />
            <p>Seg-Sex: 8h às 18h</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Advocacia & Direito. Todos os direitos reservados. OAB/SP 123.456
        </div>
        <div className="legal-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Mapa do Site</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;