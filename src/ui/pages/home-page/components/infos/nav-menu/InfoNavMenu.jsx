import React, { useState } from "react";
import IMG from "../../../../../../assets/imagesHub";

function InfoNavMenu() {
  const [iconSrc, setIconSrc] = useState({
    phases: IMG.phasesIcon_White,
    panel: IMG.panelIcon_White,
    projects: IMG.projectsIcon_White,
  });

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
      <div id="navButtonsRow" className="row">
        <div id="etapasCol" className="col btn" 
            onMouseEnter={() => handleMouseEnter("phases", IMG.phasesIcon_Color)}
            onMouseLeave={() => handleMouseLeave("phases", IMG.phasesIcon_White)}>
          <div id="buttonTextRow" className="row">
            <h3><strong>ETAPAS <br /> DO PROJETO</strong></h3>
          </div>
          <div id="buttonIconRow" className="row">
            <img id="etapasIcon"
                 className="col-auto"
                 src={iconSrc.phases}
                 alt="icone das etapas do projeto" />
          </div>
        </div>
        <div id="comoFuncionaCol" className="col btn" 
            onMouseEnter={() => handleMouseEnter("panel", IMG.panelIcon_Color)}
            onMouseLeave={() => handleMouseLeave("panel", IMG.panelIcon_White)}>
          <div id="buttonTextRow" className="row">
            <h3><strong>COMO FUNCIONA <br /> UM GERADOR FOTOVOLTAICO?</strong></h3>
          </div>
          <div id="buttonIconRow" className="row">
            <img id="comoFuncionaIcon"
                 className="col-auto"
                 src={iconSrc.panel}
                 alt="icone das etapas do projeto" />
          </div>
        </div>
        <div id="nossosProjetosCol" className="col btn" 
            onMouseEnter={() => handleMouseEnter("projects", IMG.projectsIcon_Color)}
            onMouseLeave={() => handleMouseLeave("projects", IMG.projectsIcon_White)}>
          <div id="buttonTextRow" className="row">
            <h3><strong>NOSSOS PROJETOS <br /> EXECUTADOS</strong></h3>
          </div>
          <div id="buttonIconRow" className="row">
            <img id="nossosProjetosIcon"
                 className="col-auto"
                 src={iconSrc.projects}
                 alt="icone das etapas do projeto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoNavMenu;
