import React from "react";

function ProjectCard({ title, cover }) {
  return (
    <>
      <div id="hoverBox">
        <div id="projectCardRow" className="row">
          <img src={cover} alt={`imagem de fundo do projeto ${title}`} />
          <div id="titleBox"><h3>{title}</h3></div>
        </div>
        <div id="gapRow" className="row">
          
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
