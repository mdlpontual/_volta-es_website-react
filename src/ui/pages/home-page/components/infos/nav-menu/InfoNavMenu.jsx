import React, { useState, useEffect } from "react";
import IMG from "../../../../../../assets/imagesHub";

function InfoNavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.menuIconWhite);

  const handleMouseEnter = () => {
      setIsHovered(true);
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconOrange);
      }, 100); // Slight delay for smooth transition
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconWhite);
      }, 100); // Slight delay for smooth transition
  };

  return (
    <>
      <div id="navButtonsRow" className="row">
        <div id="etapasCol" className="col">
          <div id="buttonTextRow" className="row">
            <h3><strong>ETAPAS <br /> DO PROJETO</strong></h3>
          </div>
          <div id="buttonIconRow" className="row">
            <img src={IMG.phasesIcon_White} id="etapasIcon" alt="icone das etapas do projeto" />
          </div>
        </div>
        <div id="comoFuncionaCol" className="col">
          <div id="buttonTextRow" className="row">
            <h3><strong>COMO FUNCIONA <br /> UM GERADOR FOTOVOLTAICO?</strong></h3>
          </div>
          <div id="buttonIconRow" className="row">
            <img src={IMG.panelIcon_White} id="comoFuncionaIcon" alt="icone das etapas do projeto" />
          </div>
        </div>
        <div id="nossosProjetosCol" className="col">
          <div id="buttonTextRow" className="row">
              <h3><strong>NOSSOS PROJETOS <br /> EXECUTADOS</strong></h3>
            </div>
            <div id="buttonIconRow" className="row">
              <img src={IMG.projectsIcon_White} id="nossosProjetosIcon" alt="icone das etapas do projeto" />
            </div>
        </div>
      </div>  
    </>
  );
};

export default InfoNavMenu;
