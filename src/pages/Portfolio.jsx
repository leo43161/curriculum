import React from 'react'
import CardPortfolio from '../components/CardPortfolio'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./pages.css"

export default function Portfolio() {
    return (
        <div className="portfolio text-intro col-11 mx-auto text-center">
            <h2>Portfolio</h2>
            <p>Esto es una muestra de todos los trabajos realizados a lo largo de mi carrera como programador FullStack</p>
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1 g-4 col-11 mx-auto">
                <div className="col">
                    <div className="mb-3">
                        <CardPortfolio web="turismo" descripcion="Ente Autartico de Tucuman"></CardPortfolio>
                    </div>
                    <div>
                        <CardPortfolio web="cinema" titulo="Cinema" descripcion="Blog de cine"></CardPortfolio>
                    </div>
                </div>
                <div className="col mt-0 mt-md-3">
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-${'top'}`}>
                                <p className="mb-1"><strong>En proceso...</strong></p>
                            </Tooltip>
                        }
                    >
                        <div className="col order-md-3 order-lg-0 my-0 my-lg-3">
                            <CardPortfolio web="goods" titulo="Goods" descripcion="E-commerce de ropa vintage"></CardPortfolio>
                        </div>
                    </OverlayTrigger>
                    <CardPortfolio web="visitatucuman" titulo="Visita Tucuman" descripcion="Portal de servicios turisticos"></CardPortfolio>
                </div>

                <div className="col mt-0 mt-md-4">
                    <div className="mb-3">
                        <CardPortfolio web="rollingnews" descripcion="Noticias"></CardPortfolio>
                    </div>
                    <CardPortfolio web="cocu" descripcion="Panaderia"></CardPortfolio>
                </div>
            </div>
        </div>
    )
}
