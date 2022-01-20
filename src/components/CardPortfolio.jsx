import React from 'react'
import "./components.css";
export default function CardPortfolio({ web, titulo, descripcion }) {
    const website = {
        barcode: {
            img: null,
            class: "bar-code",
            url: "https://bar-code.netlify.app/"
        },
        cinema: {
            img: null,
            class: "cinema",
            url: "https://cinemablog.netlify.app/"
        },
        cocu: {
            img: "cocu_logo.png",
            class: "cocu",
            url: "https://pana321.netlify.app/"
        },
        rollingnews: {
            img: "rollingnews.png",
            class: "rollingnews",
            url: "https://news-rolling.netlify.app/"
        },
        turismo: {
            img: "turismo.svg",
            class: "turismo",
            url: "https://www.institucionalturismotuc.gob.ar/"
        }
    }
    let _website = web ? website[web] : {};
    return (
        <a className="text-decoration-none " href={_website.url} target="_blank" rel="noopener noreferrer">
            <div className={"col card-portfolio my-2 shadow-sm " + _website.class}>
                <div className="position-relative d-flex justify-content-center align-items-center img-card">
                    {_website.img ? <img src={process.env.PUBLIC_URL + "img/" + _website.img} className="img-fluid p-5 position-absolute" alt={web}></img> : <h2 className={"position-absolute"}>{titulo}</h2>}
                </div>
                <div className="border">
                    <p className="py-2 px-1 mb-0">{descripcion}</p>
                </div>
            </div>
        </a>
    )
}
