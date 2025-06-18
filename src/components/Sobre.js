import React from "react";
import "../css/Style.css";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="sobre-content">
        <h1>Sobre Nós</h1>
        <div className="sobre-section">
          <h2>Nossa História</h2>
          <p>
            Bem-vindos à nossa jornada! Somos uma empresa dedicada a oferecer as
            melhores soluções e experiências para nossos clientes. Nossa paixão
            pela excelência nos move a sempre buscar a inovação e qualidade em
            tudo que fazemos.
          </p>
        </div>

        <div className="sobre-section">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é proporcionar valor excepcional através de produtos e
            serviços de alta qualidade, construindo relacionamentos duradouros
            baseados na confiança e satisfação do cliente.
          </p>
        </div>

        <div className="sobre-section">
          <h2>Nossos Valores</h2>
          <ul className="valores-list">
            <li>
              <strong>Excelência:</strong> Buscamos sempre a perfeição em nossos
              produtos e serviços
            </li>
            <li>
              <strong>Inovação:</strong> Estamos sempre em busca de novas
              soluções e tecnologias
            </li>
            <li>
              <strong>Integridade:</strong> Agimos com honestidade e
              transparência em todas as nossas ações
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Comprometemo-nos com práticas
              responsáveis e sustentáveis
            </li>
          </ul>
        </div>

        <div className="sobre-section">
          <h2>Nossa Equipe</h2>
          <p>
            Contamos com uma equipe altamente qualificada e experiente, composta
            por profissionais apaixonados pelo que fazem. Cada membro da nossa
            equipe contribui com seus conhecimentos únicos para alcançarmos
            nossos objetivos comuns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
