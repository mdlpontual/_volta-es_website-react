import React from "react";
import IMG from "../../../../../../assets/imagesHub";

function InfoNavbar() {
  return (
    <>
      <section id="navbarRow" className="row">
        <div id="navbarLogoCol" className="col-2">
          <a href="#jumboCon">
            <img src={IMG.voltaLogo_White} alt="logo volta - barra de navegação" />
          </a>
        </div>
        <div id="navbarNavCol" className="col">
          <nav id="navCon" className="container-fluid">
            <ul id="navRow" className="row d-flex">
              <li id="navLi" className="col-auto"><a href="#aboutRow">A VOLTA</a></li>
              <li id="navLi" className="col-auto"><a href="#infoNavMenuCon">INFORMATIVOS</a></li>
              <li id="navLi" className="col-auto"><a href="#projectNavHeadRow">PROJETOS</a></li>
              <li id="navLi" className="col-auto"><a href="#hpFooterCon">CONTATO</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default InfoNavbar;
