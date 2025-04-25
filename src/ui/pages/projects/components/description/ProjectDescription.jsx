/* import React from "react";
import projectsData from "../../ProjectsDataHub";

function ProjectDescription({ data }) {
  return (
    <>
      <section id="prjDescCon" className="container-fluid">
        <div id="projsubtitleRow" className="row">
          <h2><strong>{data.subtitle}</strong></h2>
        </div>
        <div id="projDescRow" className="row">
          <div id="projProfileCol" className="col">
            <h4><strong>{data.title}</strong></h4>
            <h4>{data.subtitle}</h4>
            <h4><strong>Ano: </strong>{data.year}</h4>
            <h4><strong>Módulos Instalados: </strong>{data.modules}</h4>
            <h4><strong>Potência Gerada: </strong>{data.powerOutput}</h4>
          </div>
          <div id="projDescCol" className="col">
            <h4>{data.description}</h4>  
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescription; */

import React from "react";
import projectsData from "../../ProjectsDataHub";

function ProjectDescription({ data }) {
  return (
    <>
      <section id="prjTextCon" className="container-fluid">
        <div id="projTextRow" className="row">
          <div id="projTextCol" className="col">
            <div id="projProfileRow" className="row">
              <h4><strong>Ano: </strong>{data.year}</h4>
              <h4><strong>Módulos Instalados: </strong>{data.modules}</h4>
              <h4><strong>Potência Gerada: </strong>{data.powerOutput}</h4>
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
