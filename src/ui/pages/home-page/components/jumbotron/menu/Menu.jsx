import React, { useState, useEffect } from "react";
import IMG from "../../../../../../assets/imagesHub";
import { Link } from "react-router-dom";
import projectsData from "../../../../projects/ProjectsDataHub";

function Menu({ setIsMenuOpen }) {
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
            <menu id="menuCol" className="col">
              <div id="menuIconRow" className="row">
                <div id="menuIcon" className="col-auto">
                  <img className="col-auto" 
                        src={IMG.menuIconOrange} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="ícone Menu"/>
                </div>
              </div>
              <nav id="menuNav" className="row">
                    <ul id="menuList" className="col">
                        <li>
                            <h2 id="navLi"><a href="#aboutRow">SOBRE A VOLTA</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#infoNavMenuCon">SOBRE ENERGIA SOLAR</a></h2>
                            <h2 id="projLi"><a href="#prjPhasesRow">- ETAPAS DO PROJETO</a></h2>
                            <h2 id="projLi"><a href="#howItWorksRow">- COMO FUNCIONA?</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#projectNavHeadRow">PROJETOS</a></h2>
                            {projectsList.map(([slug, project], i) => (
                                <Link to={`/${slug}`} key={i}><h2 id="projLi">{`- ${project.title}`}</h2></Link>
                            ))}
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#hpFooterCon">CONTATO</a></h2>
                        </li>
                    </ul>
                </nav>
                <address id="menuFooter" className="row">
                    <h5 id="followUs">| Siga a Volta no <a href="https://www.instagram.com/volta_es/">Instagram </a></h5>
                </address>
            </menu>
        </>
    );
}

export default Menu;
