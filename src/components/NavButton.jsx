import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavButton({ to, icon, text, setExpanded }) {
    const width = window.screen.width;
    const offserConfig = width < 430 ? -350 : 0;
    return (
        <Link activeClass="active" to={to} spy={true} smooth={true} duration={500} offset={offserConfig} className="nav-button">
            <div className="d-flex justify-content-between flex-row-reverse flex-md-row" onClick={() => setExpanded(false)}>
                <div><FontAwesomeIcon icon={icon}></FontAwesomeIcon></div>
                <span className="nav-text">{text}</span>
            </div>
        </Link>
    );
};