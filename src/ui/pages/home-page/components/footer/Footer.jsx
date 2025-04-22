import React from "react";
import IMG from "../../../../../assets/imagesHub";

function Footer() {
  return (
    <>
      <section id="hpFooterCon" className="container-fluid">
        <div id="partnersRow" className="row">
          <div id="partnersCol" className="col">
            <div id="partnersTitleRow" className="row">
              <div id="partnersTitleCol" className="col">
                <h2>Parceiros:</h2>
              </div>
            </div>
            <div id="partnersLogosRow" className="row">
              <div id="partnersLogoCol" className="col">
                <a href="https://www.fronius.com/pt-br/brasil/energia-solar/proprietarios-de-casas">
                  <img id="smlPartnerLogos" src={IMG.froniusLogo} alt="logo Fronius" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://jasolarbrasil.com.br/">
                  <img id="smlPartnerLogos" src={IMG.jaSolarLogo} alt="logo JaSolar" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://www.jinkosolar.com/en/">
                  <img id="medPartnerLogos" src={IMG.jinkoLogo} alt="logo Jinko" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://www.canadiansolar.com/">
                  <img id="xsmlPartnerLogos" src={IMG.canSolarLogo} alt="logo canadian Solar" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://www.longi.com/en/contact-us/?utm_source=Google&utm_medium=Pmax&utm_campaign=Leads_Pmax_Brand%20Ad_SA_030&utm_content=Band&gad_source=1&gbraid=0AAAAA-AsCp8uYB_Jbm5XGHSFiMp3sbXVt&gclid=Cj0KCQjw_JzABhC2ARIsAPe3ynofMJlcyqrZShPeiWFe2L3qpSPO2BXA1buo-JjEMVnXSvHFj9sIQtAaAgEBEALw_wcB">
                  <img id="bigPartnerLogos" src={IMG.longiLogo} alt="logo Longi" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://www.trinasolar.com/pt">
                  <img id="smlPartnerLogos" src={IMG.trinaLogo} alt="logo Trina" />
                </a>
              </div>
              <div id="partnersLogoCol" className="col">
                <a href="https://enphase.com/pt-br">
                  <img id="smlPartnerLogos" src={IMG.enphaseLogo} alt="logo enphase" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="contactRow" className="row">
          
        </div>
      </section>
    </>
  );
};

export default Footer;
