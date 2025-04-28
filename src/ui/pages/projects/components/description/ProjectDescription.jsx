import React, { useState, useEffect } from "react";
import IMG from "../../../../../assets/imagesHub";

function ProjectDescription({ data }) {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-target, .fade-out-target'); // select both classes
  
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

  return (
    <>
      <section id="prjTextCon" className="container-fluid">
        <div id="projTextRow" className="row">
          <div id="projTextCol" className="col fade-in-target" style={{ "--delay": `${0 * 500}ms` }}>
            <div id="projProfileRow" className="row">
              <div id="projProfileCol" className="col-auto">
                <h4><strong>Ano: </strong>{data.year}</h4>
                <h4><strong>Módulos: </strong>{data.modules}</h4>
                <h4><strong>Potência Gerada: </strong>{data.powerOutput}</h4>
              </div>
              <div id="projDescCol" className="col">
                <h4>{data.description}</h4>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescription;
