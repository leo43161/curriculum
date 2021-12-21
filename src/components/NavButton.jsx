import React from 'react'
import { Link } from 'react-scroll'

export default function NavButton({ to, icon, text }) {
    return (
        <Link activeClass="active" to={to} spy={true} duration={500} >
            <div className="d-flex justify-content-between btn btn-danger">
                <div>{icon}</div>
                <div>{text}</div>
            </div>
        </Link>
    )
}
