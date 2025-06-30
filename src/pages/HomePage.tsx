import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const whatsappNumber = "5561985443250"; // Seu número com código do país (55 para Brasil)
  const whatsappMessage = "Olá, gostaria de informações sobre seus serviços jurídicos.";

  return (
    <div className="home-container">
      {/* Botão do WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="whatsapp-icon">
          <svg xmlns="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <span className="whatsapp-text">Fale Conosco</span>
      </a>

      {/* Seção Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Assessoria Jurídica</span> com Foco em Pessoas e Resultados
          </h1>
          <p className="hero-subtitle">
            Defendemos seus direitos com expertise e dedicação em todo o território nacional, oferecendo soluções jurídicas personalizadas para cada caso.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Fale com um Especialista</button>
            <button className="btn-secondary">Nossos Serviços</button>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">+500</div>
              <div className="stat-label">Casos Resolvidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+15</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicação ao Cliente</div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-frame">
            <div className="image-placeholder"></div>
          </div>
          <div className="experience-badge">
            <span>15+ Anos</span> de Excelência Jurídica
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="services-section">
        <div className="section-header">
          <h2>Nossas Especialidades</h2>
          <p>Áreas de atuação onde oferecemos expertise e resultados comprovados</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚖️</div>
            <h3>Direito Civil</h3>
            <p>Ações de indenização, contratos, responsabilidade civil e direitos do consumidor.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">👨‍💼</div>
            <h3>Direito Trabalhista</h3>
            <p>Reclamações trabalhistas, negociações coletivas e assessoria empresarial.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Direito Empresarial</h3>
            <p>Constituição de empresas, contratos societários e recuperação judicial.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">👪</div>
            <h3>Direito de Família</h3>
            <p>Divórcios, pensão alimentícia, guarda de filhos e inventários.</p>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="features-section">
        <div className="feature-content">
          <h2>Por que Escolher Nosso Escritório?</h2>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Atendimento Personalizado</h3>
                <p>Cada cliente recebe atenção exclusiva e soluções sob medida.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Transparência Total</h3>
                <p>Honorários claros e atualizações constantes sobre seu caso.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Resultados Comprovados</h3>
                <p>Histórico de sucesso em casos complexos e de alta demanda.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Tecnologia Avançada</h3>
                <p>Processos digitalizados e acompanhamento online 24/7.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-image">
          <div className="image-placeholder"></div>
          <div className="quote-box">
            <p>"A justiça atrasada não é justiça, senão injustiça qualificada e manifesta."</p>
            <div className="author">- Rui Barbosa</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Precisa de Ajuda Jurídica?</h2>
          <p>Agende uma consulta gratuita e descubra como podemos ajudar com seu caso</p>
          <button className="btn-primary">Agendar Consulta</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;