import React from 'react'
import CardPortfolio from '../components/CardPortfolio'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import "./pages.css"

export default function Portfolio() {
    return (
        <div className="portfolio text-intro col-11 mx-auto text-center">
            <h2>Portfolio</h2>
            <p>Esto es una muestra de todos los trabajos realizados por mi o en equipo, dando a conocer mis habilidades como programador web</p>
            <div className="row row-cols-md-3 row-cols-1 g-4 col-11 mx-auto">
                <div className="col">
                    <CardPortfolio web="turismo" descripcion="Ente Autartico de Tucuman"></CardPortfolio>
                    <CardPortfolio web="cinema" titulo="Cinema" descripcion="Blog de cine"></CardPortfolio>
                </div>
                <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                           <p className="mb-1">Email: <strong>{'barcode@gmail.com'}</strong></p>
                           <p className="mb-1">Contraseña: <strong>{'123456'}</strong></p>
                        </Tooltip>
                    }
                >
                <div className="col">
                    <CardPortfolio web="barcode" titulo="Barcode" descripcion="Crea y administra un menu de comidas"></CardPortfolio>
                </div>
                </OverlayTrigger>
                <div className="col">
                    <CardPortfolio web="rollingnews" descripcion="Noticias"></CardPortfolio>
                    <CardPortfolio web="cocu" descripcion="Panaderia"></CardPortfolio>
                </div>
            </div>
        </div>
    )
}
