import React, { useState, useEffect, useRef } from "react";
import IMG from "../../../../../../assets/imagesHub";
import { Link } from "react-router-dom";
import projectsData from "../../../../projects/ProjectsDataHub";

function Menu({ setIsMenuOpen }) {
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
            <menu id="menuCol" className="col" ref={menuRef}>
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
                            <h2 id="navLi"><a href="#aboutRow" onClick={() => setIsMenuOpen(false)}>SOBRE A VOLTA</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#infoNavMenuCon" onClick={() => setIsMenuOpen(false)}>SOBRE ENERGIA SOLAR</a></h2>
                            <h2 id="projLi"><a href="#prjPhasesRow" onClick={() => setIsMenuOpen(false)}>- ETAPAS DO PROJETO</a></h2>
                            <h2 id="projLi"><a href="#howItWorksRow" onClick={() => setIsMenuOpen(false)}>- COMO FUNCIONA?</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#projectNavHeadRow" onClick={() => setIsMenuOpen(false)}>PROJETOS</a></h2>
                            {projectsList.map(([slug, project], i) => (
                                <Link to={`/${slug}`} key={i}><h2 id="projLi">{`- ${project.title}`}</h2></Link>
                            ))}
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#hpFooterCon" onClick={() => setIsMenuOpen(false)}>CONTATO</a></h2>
                        </li>
                    </ul>
                </nav>
                <address id="menuFooter" className="row">
                    <h5 id="followUs">| Siga a Volta no <a href="https://www.instagram.com/volta_es/" onClick={() => setIsMenuOpen(false)}>Instagram </a></h5>
                </address>
            </menu>
        </>
    );
}

export default Menu;
