import React from 'react';
import "./pages.css"
import { Link } from "react-scroll";

export default function Intro() {
    const width = window.screen.width;
    const offserConfig = width < 430 ? -350 : 0;
    return (
        <div className="d-flex justify-content-center align-items-center intro text-dark">
            <div className="col-lg-6 col-md-10 col-11 text-center text-white text-intro">
                <h2>Hola! soy Leonardo Palavecino</h2>
                <h2 className="mb-4">Este es mi portfolio online</h2>
                <Link
                    to="portfolio"
                    smooth={true}
                    offset={offserConfig}
                    duration={500}
                >
                    <button className="btn btn-primary-1">Ver portfolio</button>
                </Link>
            </div>
        </div>
    )
}
