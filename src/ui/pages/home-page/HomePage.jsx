import React from "react";
import IMG from "../../../assets/imagesHub";
import Jumbotron from "./components/jumbotron/Jumbotron"
import About from "./components/about/About"
import Infos from "./components/infos/Infos"
import ProjectsNavMenu from "./components/projects-nav-menu/ProjectsNavMenu"
import Footer from "./components/footer/Footer"
import InfoNavBar from "./components/infos/navbar/InfoNavbar"

function HomePage() {
  return (
    <>
      <header>
        <Jumbotron />
        <About />
      </header>
      <main>
        {/* <InfoNavBar />
        <Infos /> */}
        <ProjectsNavMenu />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
