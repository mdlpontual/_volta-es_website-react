import React from "react";

function ProjectGallery({ data }) {
    const imagesArr = Object.values(data.images);

    return (
        <> 
            <section id="galleryCon" className="container-fluid">
                {imagesArr.map((img, i) => (
                    <div id="imgRow" className="row">
                        <div id="imgCol" className="col-auto    ">
                            <img src={img} alt="Imagem do projeto"/>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default ProjectGallery;
