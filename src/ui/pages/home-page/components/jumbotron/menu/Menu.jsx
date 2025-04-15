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
              <div id="menuSymb" className="row">
                <div id="menuIconRow" className="row">
                  <div id="menuIcon" className="col-auto">
                    <img className="col-auto btn" 
                         src={IMG.menuIconOrange} 
                         onClick={() => setIsMenuOpen(false)}
                         alt="ícone Menu"/>
                  </div>
                </div>
              </div>
            </menu>
        </>
    );
}

export default Menu;
