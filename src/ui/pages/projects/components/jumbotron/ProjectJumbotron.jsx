import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";
import Menu from "../../../home-page/components/jumbotron/menu/Menu";

function ProjectJumbotron({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.menuIconWhite);

  const handleMouseEnter = () => {
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconOrange);
      }, 100); // Slight delay for smooth transition
  };

  const handleMouseLeave = () => {
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconWhite);
      }, 100); // Slight delay for smooth transition
  };

  return (
    <>
      <section id="jumboCon" className="container-fluid" style={{backgroundImage: `url(${data.images[0]})`}}>
        <div id="jumboRow" className="row">
          <div id="jumboColMenu" className="col">
            <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
              {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
            </div>
            <div id="menuIconRow" className="row">
              <div id="menuIcon" className="col-auto">
                <img className="col-auto btn" 
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
        </div>
        </div>
      </section>
    </>
  );
};

export default ProjectJumbotron;
