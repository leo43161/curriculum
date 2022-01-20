import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


export default function Contacto() {
    const [message, setMessage] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        setFeedback(null);
        emailjs.send("service_qfjngpt", "template_4o1nk7i", message, "user_Uc1j366cDdFEzPicrbzIl")
            .then((response) => {
                setMessage({
                    nombre: "",
                    correo: "",
                    mensaje: "",
                })
                console.log('SUCCESS!', response.status, response.text);
                setSending(false);
                setFeedback("Mensaje enviado");
            }, (err) => {
                setFeedback("Algo fallo al enviar el mensaje");
                console.log('FAILED...', err);
            });
    }
    return (
        <div className="text-intro col-10 mx-auto text-center pt-5">
            <h2 className="mb-4">Contacto</h2>
            <div className="pb-5">
                <Form onSubmit={sendEmail}>
                    <div className="d-flex flex-wrap mb-4">
                        <div className="col-md col-12 me-md-2 pe-md-1 mb-4 mb-md-0">
                            <Form.Group className="col">
                                <Form.Control type="text" name="nombre" value={message.nombre} onChange={handleChange} className="contact-input" placeholder="Nombre" required />
                            </Form.Group>
                        </div>
                        <div className="col-md col-12 ms-md-2 ps-md-1">
                            <Form.Group className="col">
                                <Form.Control type="email" name="correo" value={message.correo} onChange={handleChange} className="contact-input" placeholder="Correo" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="pb-5">
                        <Form.Control as="textarea" name="mensaje" value={message.mensaje} onChange={handleChange} className="contact-input" placeholder="Mensaje" rows={8} required />
                    </Form.Group>
                    {feedback && <h5 className="mb-3">{feedback}</h5>}
                    <div>
                        <button className="btn btn-primary-1" type="submit" disabled={sending}>
                            Enviar
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
