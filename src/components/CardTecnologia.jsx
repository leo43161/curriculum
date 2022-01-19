import React from 'react'

export default function CardTecnologia({ title, img, color, url }) {
    return (
        <div className="col-lg-3 col-md-4 col-6 d-flex flex-column justify-content-evenly align-items-center card-tec position-relative" style={{ backgroundColor: color }}>
            <div className="col-7">
                <img src={`${process.env.PUBLIC_URL}/img/iconos/${img}`} className="img-fluid" alt={title} />
            </div>
            <a className="text-white title-tec text-decoration-none text-white d-flex justify-content-center align-items-center" href={url}>
                <h3 className="mb-0">{title}</h3>
            </a>
        </div>
    )
}
