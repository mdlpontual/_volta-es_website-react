import React, { useState, useEffect } from "react";
import IMG from "../../../../../../assets/imagesHub";
import { Link } from "react-router-dom";
import projectsData from "../../../../projects/ProjectsDataHub";

function ProjectMenu({ setIsMenuOpen }) {
    const projectsList = Object.entries(projectsData);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setIsMenuOpen]);

    return (
        <>
            <menu id="prjMenuCol" className="col">
              <div id="prjMenuIconRow" className="row">
                <div id="prjMenuIcon" className="col-auto">
                  <img className="col-auto btn" 
                        src={IMG.menuIconOrange} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="ícone Menu"/>
                </div>
              </div>
              <nav id="prjMenuNav" className="row">
                    <ul id="prjMenuList" className="col">
                        <li>
                            <h2 id="navLi"><a href="#aboutRow">PÁGINA INICIAL</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#projectNavHeadRow">PROJETOS</a></h2>
                            {projectsList.map(([slug, project], i) => (
                                <Link to={`/${slug}`}><h2 id="projLi">{`- ${project.title}`}</h2></Link>
                            ))}
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#ppFooterCon">CONTATO</a></h2>
                        </li>
                    </ul>
                </nav>
                <address id="prjMenuFooter" className="row">
                    <h5 id="followUs">| Siga a Volta no <a href="https://www.instagram.com/volta_es/">Instagram </a></h5>
                </address>
            </menu>
        </>
    );
}

export default ProjectMenu;
