import React, { useState, useEffect } from "react";

function ProjectGallery({ data }) {
    const imagesArr = Object.values(data.images);

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
            threshold: 1
        }
    );
    
    elements.forEach(el => observer.observe(el));
    
    return () => {
        elements.forEach(el => observer.unobserve(el));
    };
    }, []);

    return (
        <> 
            <section id="galleryCon" className="container-fluid fade-in-target" style={{ "--delay": `${0 * 50}ms` }}>
                {imagesArr.map((img, i) => (
                    <div id="imgRow" className="row fade-in-target" style={{ "--delay": `${1 * 300}ms` }}>
                        <div id="imgCol" className="col-auto">
                            <img src={img} alt="Imagem do projeto"/>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default ProjectGallery;
