import React from 'react'
import { Link } from 'react-scroll'

export default function NavButton({ to, icon, text }) {
    return (
        <Link activeClass="active" to={to} spy={true} duration={500} className="nav-button">
            <div className="d-flex justify-content-between">
                <div>{icon}</div>
                <span className="nav-text">{text}</span>
            </div>
        </Link>
    )
}
