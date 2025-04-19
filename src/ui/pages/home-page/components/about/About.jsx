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
              <div id="sustTextCol" className="col">
                <div id="topTextRow" className="row">
                  <p>
                    <strong>SUSTENTABILIDADE</strong> é a qualidade de um sistema cujo uso dos recursos no presente não pode comprometer a disponibilidade dos mesmos para as gerações futuras.
                    A sustentabilidade também pode ser definida como a capacidade do ser humano interagir com o mundo ao seu redor, 
                    preservando o meio ambiente para não comprometer os recursos naturais das gerações futuras. 
                    O conceito abrangente de sustentabilidade deve ter a capacidade de integrar as questões sociais, materiais, energéticas, 
                    econômicas e ambientais.
                  </p>
                </div>
                <div id="bulletPointsRow" className="row">
                  <div id="bulletPointsCol" className="col-auto col-md">
                    <p>
                      <strong>Social</strong> – O ser humano é a parte mais importante do meio ambiente, em toda escala de tempo, 
                      o Homem do presente assim como o do futuro.
                      <br /><br />
                      <strong>Materiais</strong> – Reduzir continuamente o uso de materiais extraídos da natureza, 
                      substituir sempre que possível por produtos reciclados e/ou renováveis.
                      <br /><br />
                      <strong>Energia</strong> – Reduzir continuamente o uso de energias de fontes extraídas da natureza, finitas, 
                      substituindo-as por fontes renováveis.
                    </p>
                  </div>
                  <div id="bulletPointsCol" className="col-auto col-md">
                    <p>
                      <strong>Economia</strong> – Todas as atividades precisam ser economicamente viáveis ao longo do tempo, ou seja, 
                      gerar riqueza de forma consistente para os investidores (lucro), para o estado (impostos) e para a sociedade (empregos).
                      <br /><br />
                      <strong>Ambiental</strong> – Respeitar o meio onde as atividades são desenvolvidas, não interferir negativamente seja no ambiente, 
                      na comunidade, na atmosfera, etc...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
