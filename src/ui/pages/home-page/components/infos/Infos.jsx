import React from "react";
import IMG from "../../../../../assets/imagesHub";
import InfoNavMenu from "./nav-menu/InfoNavMenu";
import InfoNavBar from "./navbar/InfoNavbar";

function Infos() {
  return (
    <>
      <section id="infosCon" className="container-fluid" style={{backgroundImage: `url(${IMG.infosBackground})`}}>
        <div id="prjPhasesRow" className="row" style={{backgroundImage: `url(${IMG.infosBackground})`}}>
          <div id="prjPhasesCol" className="col">
            <img src={IMG.projectPhasesDiagram} alt="" />
          </div>
        </div>
        <div id="howItWorksRow" className="row">
          <h1>Como Funciona</h1>
        </div>
        <div id="letsTalkRow" className="row">
          <h1>Vamos Conversar</h1>
        </div>
      </section>
    </>
  );
};

export default Infos;
