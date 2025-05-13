import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";
import ContactFooter from "./contacts/ContactFooter";

function Footer() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target');
  
    elements.forEach((el, index) => {
      el.dataset.index = index; 
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id="hpFooterCon" className="container-fluid">
        <div id="partnersRow" className="row">
          <div id="partnersCol" className="col">
            <div id="partnersTitleRow" className="row">
              <div id="partnersTitleCol" className="col">
                <h4>Parceiros:</h4>
              </div>
            </div>
            <div id="partnersLogosRow" className="row fade-in-target" style={{ "--delay": `${0 * 75}ms` }}>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://www.fronius.com/pt-br/brasil/energia-solar/proprietarios-de-casas">
                  <img id="logoFronius" src={IMG.froniusLogo} alt="logo Fronius" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://jasolarbrasil.com.br/">
                  <img id="logoJaSolar" src={IMG.jaSolarLogo} alt="logo JaSolar" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://www.jinkosolar.com/en/">
                  <img id="logoJinko" src={IMG.jinkoLogo} alt="logo Jinko" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://www.canadiansolar.com/">
                  <img id="logoCanadianSolar" src={IMG.canSolarLogo} alt="logo canadian Solar" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://www.trinasolar.com/pt">
                  <img id="logoTrina" src={IMG.trinaLogo} alt="logo Trina" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://enphase.com/pt-br">
                  <img id="logoEnphase" src={IMG.enphaseLogo} alt="logo enphase" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col-auto">
                <a href="https://www.longi.com/en/contact-us/?utm_source=Google&utm_medium=Pmax&utm_campaign=Leads_Pmax_Brand%20Ad_SA_030&utm_content=Band&gad_source=1&gbraid=0AAAAA-AsCp8uYB_Jbm5XGHSFiMp3sbXVt&gclid=Cj0KCQjw_JzABhC2ARIsAPe3ynofMJlcyqrZShPeiWFe2L3qpSPO2BXA1buo-JjEMVnXSvHFj9sIQtAaAgEBEALw_wcB">
                  <img id="logoLongi" src={IMG.longiLogo} alt="logo Longi" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </section>
    </>
  );
};

export default Footer;
