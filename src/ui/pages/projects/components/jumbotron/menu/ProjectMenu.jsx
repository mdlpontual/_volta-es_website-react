import React, { useState, useEffect, useRef } from "react";
import IMG from "../../../../../../assets/imagesHub";
import { Link } from "react-router-dom";
import projectsData from "../../../../projects/ProjectsDataHub";

function ProjectMenu({ setIsMenuOpen, slug }) {
    const projectsList = Object.entries(projectsData);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsMenuOpen]);

    return (
        <>
            <section id="prjMenuCol" className="col" ref={menuRef}>
              <div id="prjMenuIconRow" className="row">
                <div id="prjMenuIcon" className="col-auto">
                  <img className="col-auto" 
                        src={IMG.menuIconOrange} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="ícone Menu"/>
                </div>
              </div>
              <nav id="prjMenuNav" className="row">
                    <ul id="prjMenuList" className="col">
                        <li>
                            <Link to="/"><h2 id="navLi" onClick={() => setIsMenuOpen(false)}>PÁGINA INICIAL</h2></Link>
                        </li>
                        <li>
                            <h2>PROJETOS</h2>
                            {projectsList.map(([subSlug, project], i) => (
                                <Link to={`/${subSlug}`} key={i} style={slug === subSlug ? {color: "orange"} : {color: "white"}}>
                                    <h2 id="projLi" onClick={() => setIsMenuOpen(false)}>{`- ${project.title}`}</h2>
                                </Link>
                            ))}
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#ppFooterCon" onClick={() => setIsMenuOpen(false)}>CONTATO</a></h2>
                        </li>
                    </ul>
                </nav>
                <address id="prjMenuFooter" className="row">
                    <h5 id="followUs">| Siga a Volta no <a href="https://www.instagram.com/volta_es/" onClick={() => setIsMenuOpen(false)}>Instagram </a></h5>
                </address>
            </section>
        </>
    );
}

export default ProjectMenu;
