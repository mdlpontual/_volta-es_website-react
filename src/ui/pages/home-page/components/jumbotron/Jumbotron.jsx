import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";
import Menu from "./menu/Menu";

function Jumbotron() {
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
      <section id="jumboCon" className="container-fluid" style={{backgroundImage: `url(${IMG.jumbotronBackground})`}}>
        <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        </div>
        <div id="jumboRow" className="row">
          <div id="jumboColMenu" className="col">
            <div id="menuIconRow" className="row">
              <div id="menuIcon" className="col-auto">
                <img  
                   className="col-auto btn" 
                   src={symbolSrc}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={() => setIsMenuOpen(true)}
                   alt="ícone Menu"/>
              </div>
            </div>
          </div>
          <div id="jumboColText" className="col">
            <div id="voltaJumboLogo" className="row">
              <div id="voltaLogo" className="col-auto">
                <img src={IMG.voltaEsLogo_White} alt="Logo Volta-ES" />
              </div>
            </div>
            <div id="jumboText" className="row">
              <div id="missionTexts" className="col-auto">
                <h5>Missão:</h5>
                <p>
                  A VOLTA Engenharia Sustentável foi criada com a missão de fornecer soluções de 
                  engenharia para clientes que desejam atenuar o impacto de suas atividades no ambiente, 
                  de forma sustentável e econômica.
                </p>
              </div>
            </div>
            <div id="voltaJumboLogo" className="row"></div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
