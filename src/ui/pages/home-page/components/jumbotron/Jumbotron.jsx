import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";
import Menu from "./menu/Menu";

const missionText01 = "A VOLTA Engenharia Sustentável foi criada com a missão de fornecer soluções de engenharia para clientes que desejam alcançar um uso mais eficiente de energia, atenuando o impacto de suas atividades no meio ambiente de forma sustentável e econômica.";
const missionText02 = "Oferecemos aos nossos clientes a oportunidade de gerar sua própria energia. O nosso atendimento é individual e personalizado, pois queremos oferecer soluções de engenharia exclusivas ao nosso cliente de acordo com suas necessidades específicas.";
const missionText03 = "Ser sustentável é preservar os recursos que temos hoje, garantindo sua disponibilidade às gerações futuras. Cabe a nós a responsabilidade de entregar um mundo saudável e rico em recursos naturais para nossos filhos, netos e os filhos de nossos netos.";

const textArr = [missionText01, missionText02, missionText03];

function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTxt, setCurrentTxt] = useState(textArr[0]);  
  const [isFading, setIsFading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [symbolSrc, setSymbolSrc] = useState(IMG.menuIconWhite);

  const handleMouseEnter = () => {
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconOrange);
      }, 100);
  };

  const handleMouseLeave = () => {
      setTimeout(() => {
          setSymbolSrc(IMG.menuIconWhite);
      }, 100);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target, .fade-out-target');
  
    elements.forEach((el, index) => {
      el.dataset.index = index;
    });
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-out-target')) {
              entry.target.classList.add('fade-out-filter');
            } else {
              entry.target.classList.add('fade-in-up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0
      }
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade out
  
      setTimeout(() => {
        // Calculate next index (reset to 0 if at end)
        const nextIndex = (currentIndex + 1) % textArr.length;
        
        setCurrentIndex(nextIndex); // Update index
        setCurrentTxt(textArr[nextIndex]); // Update text
        setIsFading(false); // Start fade in
      }, 1000); // Wait 1s for fade-out
    }, 15000); // Every 15 seconds
  
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section id="jumboCon" className="container-fluid">
        <img id="jumboBackgroundImage" src={IMG.jumbotronBackground} alt="background" loading="lazy"/>
        <div id="jumboRow" className="row"><div id="jumboFilter" className="fade-out-target"></div>
          <div id="jumboColMenu" className="col">
            <div id={isMenuOpen ? "menuOpen" : "menuClosed"} className="row">
              {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
            </div>
            <div id="menuIconRow" className="row">
              <div id="menuIcon" className="col-auto">
                <img className="col-auto" 
                     src={symbolSrc}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     onClick={() => setIsMenuOpen(true)}
                     alt="ícone Menu Fechado"/>
              </div>
            </div>
          </div>
          <div id="jumboColText" className="col">
            <div id="voltaJumboLogo" className="row fade-in-target" style={{ "--delay": `${1 * 500}ms` }}>
              <div id="voltaLogo" className="col-auto">
                <img src={IMG.voltaEsLogo_White} alt="Logo Volta" />
              </div>
            </div>
            <div id="jumboText" className="row fade-in-target" style={{ "--delay": `${2 * 500}ms` }}>
              <article id="missionTexts" className="col-auto">
                <p className={isFading ? "fade-out" : "fade-in"}>
                  {currentTxt}
                </p>
              </article>
            </div>
            <div id="voltaJumboLogo" className="row"></div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
