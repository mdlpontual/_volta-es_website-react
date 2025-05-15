import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, cover, slug }) {
  return (
    <>
      <Link to={`/${slug}`}>
        <div id="hoverBox">
          <div id="projectCardRow" className="row">
            <img src={cover} alt={`imagem de fundo do projeto ${title}`} loading="lazy" />
            <h3>{title}</h3>
            <div id="titleBox"></div>
          </div>
          <div id="gapRow" className="row"></div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
