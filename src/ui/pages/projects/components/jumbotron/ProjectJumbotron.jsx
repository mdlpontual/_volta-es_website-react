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

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target, .fade-out-target'); // select both classes
  
    elements.forEach((el, index) => {
      el.dataset.index = index;
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-out-target')) {
              entry.target.classList.add('fade-out-filter');
            } else {
              entry.target.classList.add('fade-in-up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id="prjJumboCon" className="container-fluid" style={{backgroundImage: `url(${data.images[0]})`}}>
        <div id="preImageFilter" className="fade-out-target"></div>
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
                <div id="voltaLogo" className="col-auto">
                  <img src={IMG.voltaEsLogo_White} alt="logo Volta" />
                </div>
              </div>
            </div>
          </div>
          <div id="prjTitleRow" className="row fade-in-target" style={{ "--delay": `${0 * 500}ms` }}>
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
