import React, { useState } from 'react';
import './SobrePage.css';

const SobrePage = () => {
  const [activeTab, setActiveTab] = useState('socios');
  
  const teamMembers = [
    {
      id: 1,
      name: "Dra. Maria Silva",
      position: "Sócia Fundadora",
      experience: "18 anos",
      specialty: "Direito Civil e Família",
      bio: "Especialista em direito de família com mais de 100 casos resolvidos. Formada pela USP com pós-graduação em Direito Civil.",
      photo: 'https://cdn.pixabay.com/photo/2022/06/01/19/49/attorney-7236482_1280.jpg'
    },
    {
      id: 2,
      name: "Dr. João Oliveira",
      position: "Sócio",
      experience: "15 anos",
      specialty: "Direito Empresarial",
      bio: "Atuou em grandes corporações antes de fundar o escritório. Especialista em contratos e recuperação judicial.",
      photo: 'https://cdn.pixabay.com/photo/2017/10/05/20/49/office-2820890_1280.jpg'
    },
    {
      id: 3,
      name: "Dra. Ana Costa",
      position: "Advogada Sênior",
      experience: "12 anos",
      specialty: "Direito do Consumidor",
      bio: "Defensora dos direitos do consumidor com diversos casos emblemáticos. Membro da Comissão de Defesa do Consumidor da OAB.",
      photo: 'https://cdn.pixabay.com/photo/2020/12/05/14/08/man-5806011_1280.jpg'
    },
    {
      id: 4,
      name: "Dr. Pedro Mendes",
      position: "Advogado Criminalista",
      experience: "10 anos",
      specialty: "Direito Penal",
      bio: "Atuou como assistente do Ministério Público antes de ingressar no escritório. Especialista em processos criminais complexos.",
      photo: 'https://cdn.pixabay.com/photo/2022/04/10/16/41/lawyer-7123797_1280.jpg'
    }
  ];

  return (
    <div className="sobre-page">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Mais que um escritório, uma parceria jurídica</h1>
            <p>15 anos de excelência na defesa dos direitos de nossos clientes</p>
            <button className="hero-button">Agendar Consulta</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1500+</div>
              <div className="stat-label">Casos Resolvidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Taxa de Sucesso</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Prêmios Jurídicos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="nossa-historia">
        <div className="historia-container">
          <div className="historia-content">
            <h2>Nossa Jornada</h2>
            <p className="historia-intro">
              Fundado em 2008 por Dra. Maria Silva e Dr. João Oliveira, nosso escritório nasceu da paixão por justiça e do compromisso com resultados excepcionais. Começamos com apenas dois advogados em um pequeno escritório no centro da cidade, e hoje somos referência nacional em diversas áreas do direito.
            </p>
            
            <div className="historia-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2008</div>
                <div className="timeline-content">
                  <h3>Fundação</h3>
                  <p>Início das atividades com foco em direito civil e empresarial</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2012</div>
                <div className="timeline-content">
                  <h3>Primeiro Grande Caso</h3>
                  <p>Vitória em caso emblemático que estabeleceu jurisprudência na área trabalhista</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>Expansão</h3>
                  <p>Mudança para sede própria e contratação de novos especialistas</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>Prêmio Excelência Jurídica</h3>
                  <p>Reconhecimento como um dos melhores escritórios do país</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h3>Atuação Internacional</h3>
                  <p>Expansão dos serviços para clientes internacionais</p>
                </div>
              </div>
            </div>
          </div>
          <div className="historia-image">
            <div 
              className="office-image"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop)'
              }}
            ></div>
            <div className="experience-badge">
              <span>15 Anos</span> de Excelência Jurídica
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="nossos-valores">
        <h2>Pilares do Nosso Trabalho</h2>
        <p className="valores-intro">Nossa atuação é guiada por princípios que definem quem somos e como trabalhamos</p>
        
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">⚖️</div>
            <h3>Ética Inquestionável</h3>
            <p>Seguimos rigorosamente o código de ética da advocacia em todas as nossas ações</p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🎯</div>
            <h3>Foco em Resultados</h3>
            <p>Estratégias personalizadas para alcançar os melhores resultados em cada caso</p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">🤝</div>
            <h3>Parceria com o Cliente</h3>
            <p>Transparência e comunicação constante em todas as etapas do processo</p>
          </div>
          <div className="valor-card">
            <div className="valor-icon">💡</div>
            <h3>Inovação Jurídica</h3>
            <p>Uso de tecnologia e métodos inovadores para soluções eficientes</p>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="nossa-equipe">
        <div className="equipe-header">
          <h2>Conheça Nossa Equipe</h2>
          <p>Profissionais qualificados e comprometidos com a excelência jurídica</p>
        </div>
        
        <div className="team-tabs">
          <button 
            className={`tab-button ${activeTab === 'socios' ? 'active' : ''}`}
            onClick={() => setActiveTab('socios')}
          >
            Sócios
          </button>
          <button 
            className={`tab-button ${activeTab === 'advogados' ? 'active' : ''}`}
            onClick={() => setActiveTab('advogados')}
          >
            Advogados
          </button>
          <button 
            className={`tab-button ${activeTab === 'consultores' ? 'active' : ''}`}
            onClick={() => setActiveTab('consultores')}
          >
            Consultores
          </button>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <div 
                className="member-photo"
                style={{ backgroundImage: `url(${member.photo})` }}
              ></div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <div className="member-position">{member.position}</div>
                <div className="member-experience">{member.experience} de experiência</div>
                <div className="member-specialty">Especialista em {member.specialty}</div>
                <p className="member-bio">{member.bio}</p>
                <button className="profile-button">Ver Perfil Completo</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="diferenciais">
        <div className="diferenciais-content">
          <h2>O Que Nos Diferencia</h2>
          
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <div className="diferencial-number">01</div>
              <div className="diferencial-text">
                <h3>Atendimento Personalizado</h3>
                <p>Cada cliente tem um advogado dedicado e uma estratégia exclusiva</p>
              </div>
            </div>
            <div className="diferencial-item">
              <div className="diferencial-number">02</div>
              <div className="diferencial-text">
                <h3>Tecnologia Avançada</h3>
                <p>Sistema próprio de acompanhamento de processos online 24/7</p>
              </div>
            </div>
            <div className="diferencial-item">
              <div className="diferencial-number">03</div>
              <div className="diferencial-text">
                <h3>Transparência Total</h3>
                <p>Honorários claros e atualizações regulares sobre cada caso</p>
              </div>
            </div>
            <div className="diferencial-item">
              <div className="diferencial-number">04</div>
              <div className="diferencial-text">
                <h3>Atendimento Emergencial</h3>
                <p>Plantão 24 horas para casos que exigem ação imediata</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="diferenciais-image">
          <div 
            className="law-library"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop)'
            }}
          ></div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="sobre-cta">
        <div className="cta-content">
          <h2>Pronto para Defender Seus Direitos?</h2>
          <p>Agende uma consulta inicial gratuita e descubra como podemos ajudá-lo</p>
          <div className="cta-buttons">
            <button className="cta-primary">Agendar Consulta</button>
            <button className="cta-secondary">Fale Conosco</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;