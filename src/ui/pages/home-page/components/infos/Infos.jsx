import React from "react";
import IMG from "../../../../../assets/imagesHub";
import InfoNavMenu from "./nav-menu/InfoNavMenu"

function Infos() {
  return (
    <>
      <section id="infoNavMenuCon" className="container-fluid">
        <div id="infoNavMenuRow" className="row">
          <div id="infoNavMenuCol" className="col-auto">
            <InfoNavMenu />
          </div>
        </div>
        <div id="backgroundRow" className="row d-flex">
          <img id="houseCartoon" className="col-5" 
               src={IMG.cartoonLeftBackground} alt="ilustração de casa com painel solar" />
          <img id="panelsCartoon" className="col-5" 
               src={IMG.cartoonRightBackground} alt="ilustração de trabalhadores e infra-estrutura elétrica" />
        </div>
      </section>
      <section id="infosCon" className="container-fluid">
        <div id="prjPhasesRow" className="row">
          <h1>Etapas</h1>
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
