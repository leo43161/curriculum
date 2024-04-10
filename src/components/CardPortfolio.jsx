import React from 'react';
import "./components.css";
export default function CardPortfolio({ web, titulo, descripcion }) {
    const website = {
        barcode: {
            img: null,
            class: "bar-code",
            url: "https://bar-code.netlify.app/"
        },
        goods: {
            img: null,
            class: "goods",
            url: "https://goods-indumentary.netlify.app/"
        },
        cinema: {
            img: null,
            class: "cinema",
            url: "https://cinemablog.netlify.app/"
        },
        miamee: {
            img: null,
            class: "miamee",
            url: "https://miamee-app.netlify.app/61b73a76dad75065eeda5dc0"
        },
        cocu: {
            img: "cocu_logo.png",
            class: "cocu",
            url: "https://pana321.netlify.app/"
        },
        visitatucuman: {
            img: "tucuman_logo.png",
            class: "visitatucuman",
            url: "https://visitatucuman.ar/"
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
        <a className="text-decoration-none text-black" href={_website.url} target="_blank" rel="noopener noreferrer">
            <div className={"d-flex align-items-center px-3 py-2 text-decoration-none gap-5 " + _website.class}>
                <div className="col text-start">
                    <h4 className="fw-bold">{titulo}</h4>
                    <div className="d-flex gap-3 mb-2">
                        <span class="badge" style={{ backgroundColor: "#A63A0F" }}>HTML</span>
                        <span class="badge" style={{ backgroundColor: "#0C3DA6" }}>CSS</span>
                        <span class="badge" style={{ backgroundColor: "#B39419" }}>JavaScript</span>
                        <span class="badge" style={{ backgroundColor: "#393C66" }}>PHP</span>
                        <span class="badge text-dark" style={{ backgroundColor: "#F5F5F5" }}>MySQL</span>
                    </div>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    {_website.img ? <img className='img-fluid col-12' src={process.env.PUBLIC_URL + "img/turismo.svg"} alt="" /> : <h2 className="mb-0">{titulo}</h2>}
                </div>
            </div>
        </a>
    )
}
