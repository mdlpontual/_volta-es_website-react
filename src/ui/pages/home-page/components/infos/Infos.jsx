import React from "react";
import IMG from "../../../../../assets/imagesHub";
import InfoNavMenu from "./nav-menu/InfoNavMenu";
import InfoNavBar from "./navbar/InfoNavbar";

function Infos() {
  return (
    <>
      <section id="infoNavMenuCon" className="container-fluid">
        <div id="infoNavMenuRow" className="row">
          <div id="infoNavMenuCol" className="col-auto">
            <InfoNavMenu />
          </div>
        </div>
        <div id="backgroundRow" className="row d-flex">
          <img id="houseCartoon" className="col-5" 
              src={IMG.cartoonLeftBackground} alt="ilustração de casa com painel solar" />
          <img id="panelsCartoon" className="col-5" 
              src={IMG.cartoonRightBackground} alt="ilustração de trabalhadores e infra-estrutura elétrica" />
        </div>
      </section>
      <section id="infosCon" className="container-fluid" style={{backgroundImage: `url(${IMG.infosBackground})`}}>
        <div id="divider" className="row"></div>
        <div id="prjPhasesRow" className="row">
          <div id="prjPhasesCol" className="col">
            <img src={IMG.projectPhasesDiagram} alt="Diagrama exemplo das etapas de um projeto" />
          </div>
        </div>
        <div id="howItWorksRow" className="row">
          <div id="howItWorksCol" className="col">
            <div id="howItWorksTextCon" className="container-fluid">
              <div id="howItWorksTextRow" className="row">
                <div id="howItWorksTextCol" className="col">
                    <h4><strong id="tallCase">COMO FUNCIONA UM GERADOR FOTOVOLTAICO?</strong></h4>
                    <p>
                    O tipo de gerador solar mais difundido é o gerador fotovoltaico. 
                    O termo fotovoltaico se aplica aos materiais que tem a capacidade de criar uma tensão elétrica 
                    ao ser exposto a luz.
                    Um gerador solar fotovoltaico é um equipamento simples, composto de módulos fotovoltaicos e um inversor. 
                    Os módulos geram uma corrente elétrica ao receber a luz do sol. O inversor recebe esta corrente elétrica 
                    e transformando-a para ser usada em nossa casa, com características iguais a 
                    corrente elétrica da rede pública. Durante o dia, a energia consumida pela sua casa será gerada pelo 
                    gerador fotovoltaico, e ao final da tarde,sua casa volta a receber energia elétrica da rede pública!
                    </p>
                </div>
                <div id="howItWorksVideoCol" className="col">
                  <iframe src="https://www.youtube.com/embed/F3gDyuhZUIM?si=Kq8-wbGu0u-a2pmp" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="letsTalkRow" className="row">
          <div id="letsTalkCol" className="col">
            <div id="letsTalkTextRow" className="row">
              <div id="letsTalkTextCol" className="col">
                <h1>Precisa de Ajuda?</h1>
                <br />
                <br />
                <h4 className="row">Agora que você conheceu um pouco da Volta 
                                    - nossa missão, profissionalismo e a qualidade de nossos serviços 
                                    - que tal esclarecer suas dúvidas?</h4>
                <br />
                <br />
                <h4>Vamos Conversar!</h4>
                <div className="row">
                  <h5 id="zap" className="col-auto"><img src={IMG.zapIcon} alt="" height={30}/> (81) 9.8290.9626</h5>
                  <h5 id="mail" className="col-auto"><img src={IMG.mailIcon} alt="" height={30}/> comercial@voltaes.com.br</h5>
                </div>
              </div>
            </div>
            <div id="checkOurProjectsRow" className="row">
              <h5>Confira nossa galeria de projetos realizados!</h5>
              <div id="arrowDownCol" className="col">
                <a href="#projectNavHeadRow"><img src={IMG.arrowDownIcon} alt="seta para baixo" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infos;
