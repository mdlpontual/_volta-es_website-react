import React from "react";

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
