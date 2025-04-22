import React from "react";

function ProjectCard({ title, cover }) {
  return (
    <>
      <div id="hoverBox">
        <div id="projectCardRow" className="row">
          <img src={cover} alt={`imagem de fundo do projeto ${title}`} />
          <h3>{title}</h3>
          <div id="titleBox"></div>
        </div>
        <div id="gapRow" className="row"></div>
      </div>
    </>
  );
};

export default ProjectCard;
