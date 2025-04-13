import React from "react";
import Jumbotron from "./components/jumbotron/Jumbotron"
import About from "./components/about/About"
import Infos from "./components/infos/Infos"
import ProjectsNavMenu from "./components/projects-nav-menu/ProjectsNavMenu"
import Footer from "./components/footer/Footer"

function HomePage() {
  return (
    <>
      <header className="container-fluid">
        <Jumbotron />
      </header>
      <main className="container-fluid">
        <About />
        <Infos />
        <ProjectsNavMenu />
      </main>
      <footer className="container-fluid">
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
