import React, { useState } from 'react';
import './AreasDeAtuacaoPage.css';

const AreasDeAtuacaoPage = () => {
  const [activeTab, setActiveTab] = useState('todas');
  
  const practiceAreas = [
    {
      id: 1,
      title: "Direito de Família",
      icon: "👪",
      description: "Assuntos relacionados às relações familiares e suas consequências jurídicas.",
      subareas: [
        "Divórcio e Separação",
        "Pensão Alimentícia",
        "Guarda de Menores",
        "Inventário e Partilha",
        "União Estável"
      ],
      category: "civil"
    },
    {
      id: 2,
      title: "Direito do Consumidor",
      icon: "🛒",
      description: "Defesa dos direitos nas relações de consumo e proteção ao consumidor.",
      subareas: [
        "Ações por Produtos Defeituosos",
        "Venda Casada e Práticas Abusivas",
        "Problemas com Serviços",
        "Planos de Saúde",
        "Bancos e Financeiras"
      ],
      category: "civil"
    },
    {
      id: 3,
      title: "Direito Imobiliário",
      icon: "🏠",
      description: "Assessoria em questões relacionadas a bens imóveis e transações imobiliárias.",
      subareas: [
        "Contratos de Compra e Venda",
        "Usucapião",
        "Regularização de Imóveis",
        "Locações e Despejos",
        "Condomínios"
      ],
      category: "civil"
    },
    {
      id: 4,
      title: "Direito Trabalhista",
      icon: "⚖️",
      description: "Atuação nas relações entre empregadores e empregados com foco em direitos trabalhistas.",
      subareas: [
        "Rescisão Contratual",
        "Horas Extras",
        "Assédio Moral",
        "FGTS e Seguro Desemprego",
        "Doenças Ocupacionais"
      ],
      category: "trabalhista"
    },
    {
      id: 5,
      title: "Direito Criminal",
      icon: "🔍",
      description: "Defesa e acusação em processos criminais com estratégias jurídicas eficientes.",
      subareas: [
        "Defesa em Ações Penais",
        "Habeas Corpus",
        "Crimes contra o Patrimônio",
        "Crimes de Trânsito",
        "Liberdade Provisória"
      ],
      category: "criminal"
    },
    {
      id: 6,
      title: "Direito Civil",
      icon: "📝",
      description: "Atuação em questões relacionadas a direitos e obrigações na vida civil.",
      subareas: [
        "Responsabilidade Civil",
        "Obrigações e Contratos",
        "Direitos das Coisas",
        "Indenizações",
        "Direito das Sucessões"
      ],
      category: "civil"
    },
    {
      id: 7,
      title: "Direito Empresarial",
      icon: "🏢",
      description: "Assessoria jurídica especializada para empresas e negócios.",
      subareas: [
        "Constituição de Empresas",
        "Contratos Societários",
        "Recuperação Judicial",
        "Propriedade Intelectual",
        "Compliance"
      ],
      category: "empresarial"
    },
    {
      id: 8,
      title: "Direito Previdenciário",
      icon: "👵",
      description: "Atendimento especializado em questões relacionadas à previdência social.",
      subareas: [
        "Aposentadorias",
        "Benefícios por Incapacidade",
        "Pensão por Morte",
        "Revisão de Benefícios",
        "Auxílio Acidente"
      ],
      category: "previdenciario"
    }
  ];

  const categories = [
    { id: 'todas', name: 'Todas as Áreas' },
    { id: 'civil', name: 'Direito Civil' },
    { id: 'trabalhista', name: 'Direito Trabalhista' },
    { id: 'criminal', name: 'Direito Criminal' },
    { id: 'empresarial', name: 'Direito Empresarial' },
    { id: 'previdenciario', name: 'Direito Previdenciário' }
  ];

  const filteredAreas = activeTab === 'todas' 
    ? practiceAreas 
    : practiceAreas.filter(area => area.category === activeTab);

  return (
    <div className="areas-container">
      {/* Hero Section */}
      <div className="areas-hero">
        <div className="hero-content">
          <h1>Nossas Áreas de Atuação</h1>
          <p>
            Expertise jurídica especializada para atender suas necessidades com excelência e compromisso
          </p>
        </div>
      </div>

      {/* Categorias */}
      <section className="categories-section">
        <div className="container">
          <h2>Selecione uma Categoria</h2>
          <p>Explore nossas especialidades por área do direito</p>
          
          <div className="categories-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="areas-section">
        <div className="container">
          <div className="areas-grid">
            {filteredAreas.map(area => (
              <div className="area-card" key={area.id}>
                <div className="card-header">
                  <div className="card-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                </div>
                <div className="card-content">
                  <p>{area.description}</p>
                  
                  <div className="subareas">
                    <h4>Principais Atuações:</h4>
                    <ul>
                      {area.subareas.map((subarea, index) => (
                        <li key={index}>
                          <span className="check-icon">✓</span>
                          {subarea}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="area-button">
                    Saiba Mais
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria Especializada */}
      <section className="consultancy-section">
        <div className="container">
          <div className="consultancy-content">
            <div className="consultancy-text">
              <h2>Consultoria Jurídica Personalizada</h2>
              <p>Não encontrou o que precisa? Nossos especialistas estão prontos para analisar seu caso e oferecer a melhor solução jurídica para sua situação específica.</p>
              
              <div className="consultancy-features">
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h3>Análise Completa</h3>
                    <p>Avaliação detalhada de todos os aspectos do seu caso</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <div>
                    <h3>Estratégia Personalizada</h3>
                    <p>Soluções jurídicas adaptadas às suas necessidades</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔄</div>
                  <div>
                    <h3>Acompanhamento Contínuo</h3>
                    <p>Atualizações regulares sobre o andamento do seu caso</p>
                  </div>
                </div>
              </div>
              
              <button className="consultancy-button">Agendar Consultoria</button>
            </div>
            
            <div className="consultancy-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="faq-section">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre nossos serviços jurídicos</p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como agendar uma consulta?</h3>
              <p>Entre em contato por telefone, WhatsApp ou preencha nosso formulário online. Nossa equipe entrará em contato para confirmar o horário.</p>
            </div>
            <div className="faq-item">
              <h3>Quanto custa a primeira consulta?</h3>
              <p>A primeira consulta é gratuita e sem compromisso. Nela, analisaremos seu caso e apresentaremos uma proposta de honorários.</p>
            </div>
            <div className="faq-item">
              <h3>Atendem em todo o Brasil?</h3>
              <p>Sim, atendemos clientes em todo o território nacional, com processos em todas as regiões do país.</p>
            </div>
            <div className="faq-item">
              <h3>Quanto tempo dura um processo?</h3>
              <p>O tempo varia conforme a complexidade do caso e a região onde o processo tramita. Durante a consulta, daremos uma estimativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Precisa de Ajuda Jurídica Especializada?</h2>
            <p>Entre em contato agora mesmo e descubra como podemos defender seus direitos</p>
            <div className="cta-buttons">
              <button className="cta-primary">Agendar Consulta</button>
              <button className="cta-secondary">Fale por WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasDeAtuacaoPage;