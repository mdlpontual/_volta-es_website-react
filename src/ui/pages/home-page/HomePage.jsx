import React from "react";
import IMG from "../../../assets/imagesHub";
import Jumbotron from "./components/jumbotron/Jumbotron"
import About from "./components/about/About"
import Infos from "./components/infos/Infos"
import ProjectsNavMenu from "./components/projects-nav-menu/ProjectsNavMenu"
import Footer from "./components/footer/Footer"
import InfoNavMenu from "./components/infos/nav-menu/InfoNavMenu"
import InfoNavBar from "./components/infos/navbar/InfoNavbar"

function HomePage() {
  return (
    <>
      <header>
        <Jumbotron />
        <About />
      </header>
        <main>
          <section id="infoNavMenuCon" className="container-fluid">
            <div id="infoNavMenuRow" className="row">
              <div id="infoNavMenuCol" className="col-auto">
                <InfoNavMenu />
              </div>
            </div>
            <div id="backgroundRow" className="row d-flex">
              <img id="houseCartoon" className="col-5" 
                  src={IMG.cartoonLeftBackground} alt="ilustração de casa com painel solar" />
              <img id="panelsCartoon" className="col-5" 
                  src={IMG.cartoonRightBackground} alt="ilustração de trabalhadores e infra-estrutura elétrica" />
            </div>
          </section>
          <InfoNavBar />
          <Infos />
          <ProjectsNavMenu />
        </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
