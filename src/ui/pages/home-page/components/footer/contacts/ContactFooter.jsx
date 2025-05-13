import React from "react";
import IMG from "../../../../../../assets/imagesHub";

function ContactFooter() {
  return (
    <>
      <address id="contactRow" className="row">
        <div id="contactCol" className="col">
          <div id="footerLogoRow" className="row">
            <div id="footerLogoCol" className="col-auto">
              <img  src={IMG.voltaEsLogo_White} alt="Logo Volta" />
            </div>
          </div>
          <div id="contactsMainRow" className="row">
            <div id="adressCol" className="col-auto">
              <p>
                <strong>VOLTA</strong> – Engenharia Sustentável
                <br />
                Rua Bispo Cardoso Ayres, 208 / sala 01
                <br />
                Santo Amaro, Recife-PE
                <br />
                CEP 50050-135
              </p>
            </div>
            <div id="profileContactCol" className="col-auto">
              <p>
                <strong>Paulo Fernando Pontual</strong>
                <br />
                Engenheiro - Diretor
                <br />
                (81) 9.8290.9626
                <br />
                ppontual@voltaes.com.br
              </p>
            </div>
          </div>
          <div id="signaturesRow" className="row">
            <p>
              © VOLTAES 2025 – All Rights Reserved
              <br />
              Website by <a href="https://github.com/mdlpontual">mdlpontual</a>
            </p>
          </div>
          <div id="verRow" className="row">
            <p>
              v0.1.0
            </p>
          </div>
        </div>
      </address>
    </>
  );
};

export default ContactFooter;
