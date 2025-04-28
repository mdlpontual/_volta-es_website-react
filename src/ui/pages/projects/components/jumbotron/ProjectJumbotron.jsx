import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";
import ProjectMenu from "./menu/ProjectMenu";

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
      <section id="prjJumboCon" className="container-fluid" style={{backgroundImage: `url(${data.images[0]})`}}>
        <div id="imageFilter">
          <div id="prjJumboRow" className="row">
            <div id="prjJumboColMenu" className="col">
              <div id={isMenuOpen ? "prjMenuOpen" : "prjMenuClosed"} className="row">
                {isMenuOpen && <ProjectMenu setIsMenuOpen={setIsMenuOpen} />}
              </div>
              <div id="prjMenuIconRow" className="row">
                <div id="prjMenuIcon" className="col-auto">
                  <img className="col-auto btn" 
                      src={symbolSrc}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => setIsMenuOpen(true)}
                      alt="ícone Menu"/>
                </div>
              </div>
            </div>
            <div id="prjJumboColLogo" className="col">
              <div id="voltaPrjJumboLogo" className="row">
                <div id="voltaLogo" className="col-auto"></div>
              </div>
            </div>
          </div>
          <div id="prjTitleRow" className="row">
            <div id="prjTitleCol" className="col">   
              <h1>{data.title}</h1> 
              <h5>{data.subtitle}</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectJumbotron;
