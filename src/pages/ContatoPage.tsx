import React from 'react';
import './ContatoPage.css'; // Importando o arquivo CSS externo

const ContatoPage = () => {
  return (
    <div className="contato-container">
      <div className="contato-content">
        <div className="contato-left">
          <h1>Entre em Contato</h1>
          <p className="subtitle">
            Estamos à disposição para ajudar. Envie sua dúvida ou agende uma consulta.
          </p>
          
          <div className="contato-info">
            <div className="info-item">
              <div className="info-icon email">✉️</div>
              <div>
                <h3>Email</h3>
                <p>contato@advocaciamodelo.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon phone">📱</div>
              <div>
                <h3>Telefone / WhatsApp</h3>
                <p>(XX) 99999-9999</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon address">📍</div>
              <div>
                <h3>Endereço</h3>
                <p>
                  Av. Principal, 123, Sala 45<br />
                  Centro, Sua Cidade - UF
                </p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-overlay">
                <button className="map-button">Ver no Google Maps</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contato-right">
          <div className="form-card">
            <h2>Envie uma Mensagem</h2>
            <p className="form-subtitle">Responderemos o mais rápido possível</p>
            
            <form className="contato-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Seu nome" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="seuemail@exemplo.com" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="(XX) 9XXXX-XXXX" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <select id="subject">
                  <option value="">Selecione um assunto</option>
                  <option value="consulta">Agendar Consulta</option>
                  <option value="duvida">Dúvida Jurídica</option>
                  <option value="orçamento">Solicitar Orçamento</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Descreva sua necessidade..." 
                />
              </div>
              
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="consent" 
                />
                <label htmlFor="consent">
                  Concordo em compartilhar minhas informações conforme a política de privacidade
                </label>
              </div>
              
              <button type="submit" className="submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="hours-card">
            <h3>Horário de Atendimento</h3>
            <ul className="hours-list">
              <li>
                <span>Segunda a Sexta</span>
                <span>08:00 - 18:00</span>
              </li>
              <li>
                <span>Sábado</span>
                <span>09:00 - 12:00</span>
              </li>
              <li>
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
            
            <div className="emergency-info">
              <div className="emergency-icon">⚠️</div>
              <p>
                <strong>Atendimento emergencial 24h:</strong> (XX) 98888-7777
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;