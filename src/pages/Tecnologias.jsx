import React from 'react'

export default function Tecnologias() {
    return (
        <div className="text-intro col-12 mx-auto text-center pt-5">
            <h2 className="mb-4">Tecnologias</h2>
            <div className="d-flex flex-wrap">
                <div className="col-3 d-flex flex-column justify-content-center align-items-center card-tec" style={{ backgroundColor: "#B39419" }}>
                    <div className="col-7">
                        <img src={`${process.env.PUBLIC_URL}/img/iconos/js.png`} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center card-tec" style={{ backgroundColor: "#0C3DA6" }}>
                    <div className="col-7">
                        <img src={`${process.env.PUBLIC_URL}/img/iconos/css.png`} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center card-tec" style={{ backgroundColor: "#A63A0F" }}>
                    <div className="col-7">
                        <img src={`${process.env.PUBLIC_URL}/img/iconos/html.png`} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center card-tec" style={{ backgroundColor: "#393C66" }}>
                    <div className="col-7">
                        <img src={`${process.env.PUBLIC_URL}/img/iconos/php.png`} className="img-fluid" alt="" />
                    </div>
                </div>
                
                {/* <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/html.png`} className="img-fluid" alt="" />
                    <h3>HTML</h3>
                </div>
                <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/php.png`} className="img-fluid" alt="" />
                    <h3>PHP</h3>
                </div>
                <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/react.png`} className="img-fluid" alt="" />
                    <h3>React</h3>
                </div>
                <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/mongo.png`} className="img-fluid" alt="" />
                    <h3>MongoDB</h3>
                </div>
                <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/node.png`} className="img-fluid" alt="" />
                    <h3>Express</h3>
                </div>
                <div className="col-3">
                    <img src={`${process.env.PUBLIC_URL}/img/iconos/express.png`} className="img-fluid" alt="" />
                    <h3>Express</h3>
                </div> */}
            </div>

        </div>
    )
}
