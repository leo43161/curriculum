import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Redes from '../components/Redes';

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expand="md" expanded={expanded} sticky="top" className="text-white py-0">
            <Container className="p-0 flex-md-column justify-content-between h-100">
                <div className="p-0 flex-md-column w-100">
                    <div className="d-flex justify-content-between justify-content-md-end w-100 px-lg-3 my-lg-4 px-3 py-3">
                        <Navbar.Toggle onClick={() => setExpanded(!expanded)} className="h-100 my-auto border-white" aria-controls="basic-navbar-nav" />
                        <div className="d-flex px-2 align-items-end flex-column text-end">
                            <h5 className="mb-1">Palavecino Leonardo</h5>
                            <p className="m-0">Programador Web</p>
                        </div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="w-100">
                        <div className="d-flex flex-column w-100">
                            <NavButton setExpanded={setExpanded} to="intro" icon="home" text="Intro"></NavButton>
                            <NavButton setExpanded={setExpanded} to="portfolio" icon="th" text="Portfolio"></NavButton>
                            <NavButton setExpanded={setExpanded} to="sobreMi" icon="user" text="Sobre Mi"></NavButton>
                            <NavButton setExpanded={setExpanded} to="contacto" icon="envelope" text="Contacto"></NavButton>
                            <Redes expand={true}></Redes>
                        </div>
                    </Navbar.Collapse>
                </div>
                <div className="w-100 border-top border-secondary">
                    <Redes></Redes>
                </div>
            </Container>
        </Navbar>
    );
};