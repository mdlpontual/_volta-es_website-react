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
                            <h2><a href="#aboutTextRow">SOBRE A VOLTA</a></h2>
                        </li>
                        <li>
                            <h2><a href="#projectsCon">PROJETOS</a></h2>
                            <Link to={'/casaPaiva'}><h2 id="projLi">CASA PAIVA</h2></Link>
                            <Link to={'/seerrambiFlats'}><h2 id="projLi">SERRAMBI FLATS</h2></Link>
                            <Link to={'/apto404'}><h2 id="projLi">APARTAMENTO 404</h2></Link>
                            <Link to={'/aurora1602'}><h2 id="projLi">AURORA 1602</h2></Link>
                        </li>
                        <li>
                            <h2><a href="#contactsRow">CONTATO</a></h2>
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
