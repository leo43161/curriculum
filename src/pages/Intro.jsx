import React from 'react';
import "./pages.css"
/* import { Link } from "react-scroll"; */

export default function Intro() {
    /* const width = window.screen.width; */
    /* const offserConfig = width < 430 ? -350 : 0; */
    return (
        <div className="d-flex justify-content-center align-items-center intro text-dark">
            <div className="col-lg-10 col-md-10 col-11 text-center text-white text-intro">
                <h1 className='text-start text-title-1'>Hola! soy Leonardo Palavecino</h1>
                <h1 className='text-color-primary text-start text-title-2'>Programador FullStack</h1>
                <p className="mb-4 text-start">
                    Desarrollador web especializado en la entrega de sitios web de alta calidad. Busco oportunidades para aplicar mis habilidades y contribuir al éxito de proyectos innovadores.
                </p>
                {/* <Link
                    to="portfolio"
                    smooth={true}
                    offset={offserConfig}
                    duration={0}
                >
                    <button className="btn btn-primary-1">Ver portfolio</button>
                </Link> */}
            </div>
        </div>
    )
}
