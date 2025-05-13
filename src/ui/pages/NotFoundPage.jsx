import React from 'react'
import IMG from '../../assets/imagesHub';
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <main id="notFoundContainer" className="container-fluid">
        <div id="notFoundTopRow" className="row">
          <div id="notFoundTopCol" className="col-auto">
            <h1>Página não encontrada</h1>
            <Link to="/">
              <h4>Retornar à Página Inicial</h4>
            </Link>
          </div>
        </div>
        <div id="notFoundBottomRow" className="row">
          <div id="notFoundBottomCol" className="col-auto">
            <div>
              <img src={IMG.voltaEsLogo_White} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage;