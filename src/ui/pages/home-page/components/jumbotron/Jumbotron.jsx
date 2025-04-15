import React from "react";
import IMG from "../../../../../assets/imagesHub";

function Jumbotron() {
  return (
    <>
      <section id="jumboCon" className="container-fluid" style={{backgroundImage: `url(${IMG.jumbotronBackground})`}}>
        <div id="jumboRow" className="row">
          <div id="jumboColMenu" className="col">
            <div id="menuIconRow" className="row">
              <div id="menuIcon" className="col-auto">
                <img src={IMG.menuIcon} alt="ícone Menu" />
              </div>
            </div>
          </div>
          <div id="jumboColText" className="col">
            <div id="voltaJumboLogo" className="row">
            
            </div>
            <div id="jumboText" className="row">
            
            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
