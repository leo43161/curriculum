import React from 'react'
import "./components.css";
export default function CardPortfolio({ web, titulo, descripcion }) {
    const website = {
        barcode: {
            img: null,
            class: "bar-code"
        },
        cinema: {
            img: null,
            class: "cinema"
        },
        cocu: {
            img: "cocu_logo.png",
            class: "cocu"
        },
        rollingnews: {
            img: "rollingnews.png",
            class: "rollingnews"
        },
        turismo: {
            img: "turismo.svg",
            class: "turismo"
        }
    }
    let _website = web ? website[web] : {};
    console.log(_website.img ? true : false);
    return (
        <div className={"col card-portfolio my-2 " + _website.class}>
            <div className="position-relative d-flex justify-content-center align-items-center img-card">
                {_website.img ? <img src={process.env.PUBLIC_URL + "img/" + _website.img} className="img-fluid p-5 position-absolute" alt={web}></img> : <h2 className={"position-absolute"}>{titulo}</h2>}
            </div>
            <div className="border">
                <p className="py-2 px-1 mb-0">{descripcion}</p>
            </div>
        </div>
    )
}
