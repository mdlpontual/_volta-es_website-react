import React from "react";
import ProjectCard from "./project-card/ProjectCard";

cardsArr = [  ];

function ProjectsNavMenu() {
  return (
    <>
      <section id="projectNavMenuCon" className="container-fluid">
        <div id="projectNavHeadRow" className="row">
          <div id="projectNavHeadCol" className="col">
            <div id="titleRow" className="row">
              <h1>PROJETOS</h1>
            </div>
          </div>
        </div>
        <div id="projectNavMainRow" className="row">
          <div id="projectNavMainCol" className="col">
            {cardsArr.map((card, i) => (
                <ProjectCard />
              )
            )}
          </div>
        </div>
        <div id="projectNavFooterRow" className="row"></div>
      </section>
    </>
  );
};

export default ProjectsNavMenu;
