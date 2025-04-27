import React from "react";
import IMG from "../../../../../assets/imagesHub";
import { Link } from "react-router-dom";
import ContactFooter from "../../../home-page/components/footer/contacts/ContactFooter";

function ProjectFooter() {
  return (
    <>
      <section id="ppFooterCon" className="container-fluid">
        <div id="bottomNavRow" className="row">
          <div id="homeNavCol" className="col-auto">
            <Link to="/"><h4>Voltar a Página Inicial</h4></Link>
          </div>
        </div>
        <ContactFooter />
      </section>
    </>
  );
};

export default ProjectFooter;
