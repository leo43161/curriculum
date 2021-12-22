import React from 'react'
import NavButton from './NavButton'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
    return (
        <Navbar expand="lg" sticky="top" className="flex-column text-white">
            <div className="d-flex px-2 align-items-end w-100 my-4 px-4 flex-column">
                <h5 className="mb-1">Palavecino Leonardo</h5>
                <p className="m-0">Programador Web</p>
            </div>
            <div className="d-flex flex-column w-100">
                <NavButton to="intro" icon="1" text="Intro"></NavButton>
                <NavButton to="portfolio" icon="1" text="Portfolio"></NavButton>
                <NavButton to="sobreMi" icon="1" text="Intro"></NavButton>
                <NavButton to="contacto" icon="1" text="Intro"></NavButton>
            </div>
        </Navbar>
    )
}