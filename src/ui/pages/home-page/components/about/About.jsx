import React from "react";
import IMG from "../../../../../assets/imagesHub";

function About() {
  return (
    <>
      <section id="logoCon" className="container-fluid">
        <div id="logoRow" className="row">
          <div id="logoCol" className="col">
            <img src={IMG.voltaEsLogo_Blue} alt="Volta Logo" />
          </div>
        </div>
      </section>
      <article id="aboutCon" className="container-fluid" style={{backgroundImage: `url(${IMG.aboutBackground})`}}>
        <div id="aboutRow" className="row">
          <div id="aboutCol" className="col">
            <div id="aboutVoltaRow" className="row">
              <div id="aboutVolta" className="col">
                
              </div>
            </div>
            <div id="aboutSustRow" className="row">
              <div id="aboutSust" className="col">

              </div>
            </div>
          </div>
        </div>
        <div id="videoRow" className="row">
          
        </div>
      </article>
    </>
  );
};

export default About;
