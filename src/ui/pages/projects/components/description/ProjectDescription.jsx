import React from "react";
import IMG from "../../../../../assets/imagesHub";

function ProjectDescription({ data }) {
  return (
    <>
      <section id="prjTextCon" className="container-fluid">
        <div id="projTextRow" className="row">
          <div id="projTextCol" className="col">
            <div id="projProfileRow" className="row">
              <div id="projProfileCol" className="col">
                <h4><strong>Ano: </strong>{data.year}</h4>
                <h4><strong>Módulos: </strong>{data.modules}</h4>
                <h4><strong>Potência Gerada: </strong>{data.powerOutput}</h4>
              </div>
              <div id="projLogoCol" className="col-auto">
                <img src={IMG.voltaEsLogo_Blue} alt="Logo Volta-ES" />
              </div>
            </div>
            <div id="projDescRow" className="row">
              <h3>{data.description}</h3>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescription;
