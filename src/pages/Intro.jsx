import React from 'react';
import "./pages.css"
import { Link } from "react-scroll";

export default function Intro() {
    return (
        <div className="d-flex justify-content-center align-items-center intro text-dark">
            <div className="col-lg-6 col-md-10 col-11 text-center text-white text-intro">
                <h2>Hola soy Leonardo Palavecino, este es mi portfolio online</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente</p>
                <Link
                    to="portfolio"
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button className="btn btn-primary-1">Ver portfolio</button>
                </Link>
            </div>
        </div>
    )
}
