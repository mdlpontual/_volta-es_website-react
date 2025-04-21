import React from "react";
import IMG from "../../../../../assets/imagesHub";
import InfoNavMenu from "./nav-menu/InfoNavMenu";
import InfoNavBar from "./navbar/InfoNavbar";

function Infos() {
  return (
    <>
      <section id="infosCon" className="container-fluid" style={{backgroundImage: `url(${IMG.infosBackground})`}}>
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
          <h1>Vamos Conversar</h1>
        </div>
      </section>
    </>
  );
};

export default Infos;
