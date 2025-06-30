import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-logo">
            <span className="footer-logo-dot"></span>
            Advocacia & Direito
          </h3>
          <p className="footer-description">
            Defendendo seus direitos com excelência jurídica e compromisso ético em todo o território nacional.
          </p>
          <div className="social-links">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
              <div key={social} className="social-icon">
                <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                  {social.charAt(0)}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="footer-heading">Links Rápidos</h4>
          <ul className="footer-links">
            {['Áreas de Atuação', 'Nossa Equipe', 'Blog Jurídico', 'Perguntas Frequentes', 'Casos de Sucesso'].map((item) => (
              <li key={item}>
                <a href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="footer-heading">Contato</h4>
          <address className="contact-info">
            <p className="contact-item">
              <span style={{ marginRight: '10px', minWidth: '20px' }}>📍</span>
              Av. Paulista, 1000 - São Paulo/SP
            </p>
            <p className="contact-item">
              <span style={{ marginRight: '10px' }}>📞</span>
              (11) 9999-8888
            </p>
            <p className="contact-item">
              <span style={{ marginRight: '10px' }}>✉️</span>
              contato@advocaciaedireito.com.br
            </p>
            <p className="contact-item">
              <span style={{ marginRight: '10px' }}>🕒</span>
              Seg-Sex: 8h às 18h
            </p>
          </address>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} Advocacia & Direito. Todos os direitos reservados. OAB/SP 123.456</p>
      </div>
    </footer>
  );
};

export default Footer;