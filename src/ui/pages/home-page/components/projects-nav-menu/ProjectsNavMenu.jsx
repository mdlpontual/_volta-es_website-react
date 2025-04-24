import React from "react";
import ProjectCard from "./project-card/ProjectCard";
import projectsData from "../../../projects/ProjectsDataHub";

function ProjectsNavMenu() {
  const projectsList = Object.entries(projectsData);

  return (
    <>
      <section id="projectNavMenuCon" className="container-fluid">
        <div id="projectNavHBufferRow" className="row"></div>
        <div id="projectNavHeadRow" className="row">
          <div id="projectNavHeadCol" className="col">
            <div id="titleRow" className="row">
              <h1>PROJETOS</h1>
            </div>
          </div>
        </div>
        <div id="projectNavMainRow" className="row">
          <div id="projectNavMainCol" className="col">
            {projectsList.map(([slug, project], i) => (
              <ProjectCard key={i} title={project.title} cover={project.images[0]} slug={slug}/>
            ))}
          </div>
        </div>
        <div id="projectNavFooterRow" className="row"></div>
      </section>
    </>
  );
};

export default ProjectsNavMenu;
