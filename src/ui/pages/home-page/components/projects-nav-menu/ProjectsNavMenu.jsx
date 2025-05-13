import React, { useState, useEffect } from "react";
import ProjectCard from "./project-card/ProjectCard";
import projectsData from "../../../projects/ProjectsDataHub";

function ProjectsNavMenu() {
  const projectsList = Object.entries(projectsData);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target');
  
    elements.forEach((el, index) => {
      el.dataset.index = index; 
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id="projectNavMenuCon" className="container-fluid">
        <div id="projectNavHBufferRow" className="row"></div>
        <div id="projectNavHeadRow" className="row">
          <div id="projectNavHeadCol" className="col">
            <div id="titleRow" className="row fade-in-target" style={{ "--delay": `${0 * 100}ms` }}>
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
