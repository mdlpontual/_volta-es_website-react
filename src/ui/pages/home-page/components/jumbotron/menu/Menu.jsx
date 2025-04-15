import React, { useState, useEffect } from "react";
import IMG from "../../../../../../assets/imagesHub";
import { Link } from "react-router-dom";

function Menu({ setIsMenuOpen }) {
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
                  <img className="col-auto btn" 
                        src={IMG.menuIconOrange} 
                        onClick={() => setIsMenuOpen(false)}
                        alt="ícone Menu"/>
                </div>
              </div>
              <nav id="menuNav" className="row">
                    <ul id="menuList" className="col">
                        <li>
                            <h2 id="navLi"><a href="#aboutCon">SOBRE A VOLTA</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#infoNavMenuCon">SOBRE ENERGIA SOLAR</a></h2>
                            <h2 id="projLi"><a href="#prjPhasesRow">- ETAPAS DO PROJETO</a></h2>
                            <h2 id="projLi"><a href="#howItWorksRow">- COMO FUNCIONA?</a></h2>
                        </li>
                        <li>
                            <h2 id="navLi"><a href="#projectNavMenuCon">PROJETOS</a></h2>
                            <Link to={'/'}><h2 id="projLi">- FAZENDA DE CAMARÕES</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- INDUSTRIA EM CAMARAGIBE</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- CONDOMÍNIO EM MARIA FARINHA</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- PROJETOS EM ALDEIA</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- PROJETOS EM GRAVATÁ</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- SÍTIO TANQUE</h2></Link>
                            <Link to={'/'}><h2 id="projLi">- OUTROS PROJETOS</h2></Link>
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
