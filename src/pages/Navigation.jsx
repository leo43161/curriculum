import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Redes from '../components/Redes';

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expand="md" expanded={expanded} sticky="top" className="text-white py-0">
            <Container className="p-0 flex-md-column justify-content-around h-100">
                <div className="p-0 flex-md-column w-100">
                    <Navbar.Collapse id="basic-navbar-nav" className="w-100">
                        <div className="d-flex flex-column w-100 gap-3">
                            <NavButton setExpanded={setExpanded} to="intro" icon="home" text="Intro"></NavButton>
                            <NavButton setExpanded={setExpanded} to="portfolio" icon="th" text="Portfolio"></NavButton>
                            <NavButton setExpanded={setExpanded} to="tecnologias" icon="code" text="Tecnologias"></NavButton>
                           {/*  <NavButton setExpanded={setExpanded} to="sobreMi" icon="user" text="Sobre Mi"></NavButton> */}
                            <NavButton setExpanded={setExpanded} to="contacto" icon="envelope" text="Contacto"></NavButton>
                            <Redes expand={true}></Redes>
                        </div>
                    </Navbar.Collapse>
                </div>
                {/* <div className="w-100 border-top border-secondary">
                    <Redes></Redes>
                </div> */}
            </Container>
        </Navbar>
    );
};