import React from "react";
import Jumbotron from "./components/jumbotron/Jumbotron"
import About from "./components/about/About"
import Infos from "./components/infos/Infos"
import ProjectsNavMenu from "./components/projects-nav-menu/ProjectsNavMenu"
import Footer from "./components/footer/Footer"

function HomePage() {
  return (
    <>
      <header>
        <Jumbotron />
      </header>
      <main>
        <About />
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
