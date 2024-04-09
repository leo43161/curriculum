import React from 'react'
import CardPortfolio from '../components/CardPortfolio'
import "./pages.css"

export default function Portfolio() {
    return (
        <div className="portfolio text-intro col-11 mx-auto text-center">
            <h1>Mi trabajo</h1>
            <p>Esto es una muestra de todos los trabajos realizados a lo largo de mi carrera como programador FullStack</p>
            <div className="d-flex justify-content-center gap-3">
                <div className="d-flex justify-content-center">
                   <h3>Web</h3>
                </div>
                <div className="d-flex justify-content-center">
                   <h3>Apps</h3>
                </div>
                <span></span>
            </div>
            <div className="col-11 mx-auto">
                <CardPortfolio web="turismo" titulo="Ente de Turismo"></CardPortfolio>
                <hr />
                <CardPortfolio web="goods" titulo="Goods"></CardPortfolio>
                <hr />
                <CardPortfolio web="cinema" titulo="Cinema"></CardPortfolio>
            </div>
        </div>
    )
}
