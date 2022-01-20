import React from 'react'
import Form from 'react-bootstrap/Form';


export default function Contacto() {
    return (
        <div className="text-intro col-10 mx-auto text-center pt-5">
            <h2 className="mb-4">Contacto</h2>
            <div className="pb-5">
                <Form>
                    <div className="d-flex mb-4">
                        <div className="col me-2 pe-1">
                            <Form.Group className="col" controlId="formBasicEmail">
                                <Form.Control type="text" className="contact-input" placeholder="Nombre" />
                            </Form.Group>
                        </div>
                        <div className="col ms-2 ps-1">
                            <Form.Group className="col" controlId="formBasicEmail">
                                <Form.Control type="email" className="contact-input" placeholder="Correo" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="pb-5" controlId="">
                        <Form.Control as="textarea" className="contact-input" placeholder="Mensaje" rows={8} />
                    </Form.Group>
                    <div>
                        <button className="btn btn-primary-1">
                            Enviar
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
