import React from 'react';
import IMG from '../../../assets/imagesHub';
import { useParams } from 'react-router-dom';
import projectsData from "../projects/ProjectsDataHub";
import ProjectJumbotron from "./components/jumbotron/ProjectJumbotron";
import ProjectDescription from "./components/description/ProjectDescription";
import ProjectFooter from "./components/footer/ProjectFooter";
import NotFoundPage from '../NotFoundPage';

function Project() {
  const { slug } = useParams();
  const data = projectsData[slug];

  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <>
      <header>

      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default Project;