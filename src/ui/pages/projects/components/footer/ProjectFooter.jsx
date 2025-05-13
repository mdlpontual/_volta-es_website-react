import React from "react";
import { Link } from "react-router-dom";
import ContactFooter from "../../../home-page/components/footer/contacts/ContactFooter";

function ProjectFooter() {
  return (
    <>
      <section id="ppFooterCon" className="container-fluid">
        <nav id="bottomNavRow" className="row">
          <div id="homeNavCol" className="col-auto">
            <a href="#projPageHeader"><h4>Voltar ao topo</h4></a>
          </div>
          <div id="homeNavCol" className="col-auto">
            <Link to="/"><h4>Retornar à Página Inicial</h4></Link>
          </div>
        </nav>
        <ContactFooter />
      </section>
    </>
  );
};

export default ProjectFooter;
