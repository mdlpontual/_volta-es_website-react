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
                            <h3><a href="#aboutCon">SOBRE A VOLTA</a></h3>
                        </li>
                        <li>
                            <h3><a href="#infoNavMenuCon">SOBRE ENERGIA SOLAR</a></h3>
                            <h4 id="projLi"><a href="#prjPhasesRow">ETAPAS DO PROJETO</a></h4>
                            <h4 id="projLi"><a href="#howItWorksRow">COMO FUNCIONA?</a></h4>
                        </li>
                        <li>
                            <h3><a href="#projectNavMenuCon">PROJETOS</a></h3>
                            <Link to={'/'}><h4 id="projLi">FAZENDA DE CAMARÕES</h4></Link>
                            <Link to={'/'}><h4 id="projLi">INDUSTRIA EM CAMARAGIBE</h4></Link>
                            <Link to={'/'}><h4 id="projLi">CONDOMÍNIO EM MARIA FARINHA</h4></Link>
                            <Link to={'/'}><h4 id="projLi">PROJETOS EM ALDEIA</h4></Link>
                            <Link to={'/'}><h4 id="projLi">PROJETOS EM GRAVATÁ</h4></Link>
                            <Link to={'/'}><h4 id="projLi">SÍTIO TANQUE</h4></Link>
                            <Link to={'/'}><h4 id="projLi">OUTROS PROJETOS</h4></Link>
                        </li>
                        <li>
                            <h3><a href="#hpFooterCon">CONTATO</a></h3>
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
