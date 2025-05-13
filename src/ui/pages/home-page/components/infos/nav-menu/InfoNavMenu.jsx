import React, { useState, useEffect } from "react";
import IMG from "../../../../../../assets/imagesHub";

function InfoNavMenu() {
  const [iconSrc, setIconSrc] = useState({
    phases: IMG.phasesIcon_White,
    panel: IMG.panelIcon_White,
    projects: IMG.projectsIcon_White,
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target');
  
    elements.forEach((el, index) => {
      el.dataset.index = index;
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleMouseEnter = (key, colorIcon) => {
    setTimeout(() => {
      setIconSrc(prev => ({ ...prev, [key]: colorIcon }));
    }, 10);
  };

  const handleMouseLeave = (key, whiteIcon) => {
    setTimeout(() => {
      setIconSrc(prev => ({ ...prev, [key]: whiteIcon }));
    }, 10);
  };

  return (
    <>
      <nav id="navButtonsRow" className="row fade-in-target" style={{ "--delay": `${0 * 50}ms` }}>
        <div id="etapasCol" className="col fade-in-target" style={{ "--delay": `${1 * 100}ms` }} 
            onMouseEnter={() => handleMouseEnter("phases", IMG.phasesIcon_Color)}
            onMouseLeave={() => handleMouseLeave("phases", IMG.phasesIcon_White)}>
          <a href="#prjPhasesRow">
            <div id="buttonTextRow" className="row">
              <h3><strong>ETAPAS <br /> DO PROJETO</strong></h3>
            </div>
            <div id="buttonIconRow" className="row">
              <img id="etapasIcon"
                  className="col-auto"
                  src={iconSrc.phases}
                  alt="icone das etapas do projeto" />
            </div>
          </a>
        </div>
        <div id="comoFuncionaCol" className="col fade-in-target" style={{ "--delay": `${2 * 150}ms` }}  
            onMouseEnter={() => handleMouseEnter("panel", IMG.panelIcon_Color)}
            onMouseLeave={() => handleMouseLeave("panel", IMG.panelIcon_White)}>
          <a href="#howItWorksRow">
            <div id="buttonTextRow" className="row">
              <h3><strong>COMO FUNCIONA <br /> UM GERADOR FOTOVOLTAICO?</strong></h3>
            </div>
            <div id="buttonIconRow" className="row">
              <img id="comoFuncionaIcon"
                    className="col-auto"
                    src={iconSrc.panel}
                    alt="icone painel solar" />
            </div>
          </a>
        </div>
        <div id="nossosProjetosCol" className="col fade-in-target" style={{ "--delay": `${3 * 200}ms` }}  
            onMouseEnter={() => handleMouseEnter("projects", IMG.projectsIcon_Color)}
            onMouseLeave={() => handleMouseLeave("projects", IMG.projectsIcon_White)}>
          <a href="#projectNavHeadRow">
            <div id="buttonTextRow" className="row">
              <h3><strong>NOSSOS PROJETOS <br /> EXECUTADOS</strong></h3>
            </div>
            <div id="buttonIconRow" className="row">
              <img id="nossosProjetosIcon"
                  className="col-auto"
                  src={iconSrc.projects}
                  alt="icone da galeria de projetos" />
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default InfoNavMenu;
