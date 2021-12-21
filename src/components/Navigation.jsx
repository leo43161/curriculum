import React from 'react'
import NavButton from './NavButton'

export default function Navigation() {
    return (
        <nav className="d-flex sticky-top">
            <div className="d-flex flex-column w-100">
                <NavButton to="intro" icon="1" text="Intro"></NavButton>
                <NavButton to="portfolio" icon="1" text="Intro"></NavButton>
                <NavButton to="sobreMi" icon="1" text="Intro"></NavButton>
                <NavButton to="contacto" icon="1" text="Intro"></NavButton>
            </div>
        </nav>
    )
}
