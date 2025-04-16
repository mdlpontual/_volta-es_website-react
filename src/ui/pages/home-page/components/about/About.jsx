import React from "react";
import IMG from "../../../../../assets/imagesHub";

function About() {
  return (
    <>
      <section id="logoCon" className="container-fluid">
        <div id="logoRow" className="row">
          <div id="logoCol" className="col">
            <img src={IMG.voltaEsLogo_Blue} alt="Volta Logo - azul com fundo branco" />
          </div>
        </div>
      </section>
      <article id="aboutCon" className="container-fluid" style={{backgroundImage: `url(${IMG.aboutBackground})`}}>
        <div id="aboutRow" className="row">
          <div id="aboutCol" className="col">
            <div id="voltaText" className="row">
              <div id="voltaTextBox" className="col-md-8 col-sm-12">
                <p>
                  A Volta Engenharia oferece a seus clientes a oportunidade de gerar sua própria energia.
                  <br />
                  “O nosso serviço é tornar este desejo uma realidade!”
                  <br />
                  <br />
                  <strong>- Volta Engenharia Sustentável</strong>
                </p>
              </div>
              <div id="voltaImgBox" className="col" style={{backgroundImage: `url(${IMG.aboutBox})`}}></div>
            </div>
            <div id="voltaVideo" className="row">
              <div id="voltaLogoBox" className="col">
                <img src={IMG.voltaEsLogo_White} className="row" lt="Volta Logo - branco com fundo azul" />
              </div>
              <div id="voltaVideoBox" className="col-md-8 col-sm-12">
                <iframe src="https://www.youtube.com/embed/X4mb_uuWSI0?si=5pPRmcSoXIjBJe8Z" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div id="sustRow" className="row">
          <div id="sustCol" className="col">
            <div id="sustTextRow" className="row">
              <div id="sustTextRow" className="row">

              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
