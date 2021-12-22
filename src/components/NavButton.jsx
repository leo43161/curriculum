import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavButton({ to, icon, text, setExpanded }) {
    return (
        <Link activeClass="active" to={to} spy={true} duration={500} className="nav-button">
            <div className="d-flex justify-content-between flex-row-reverse flex-md-row" onClick={() => setExpanded(false)}>
                <div><FontAwesomeIcon icon={icon}></FontAwesomeIcon></div>
                <span className="nav-text">{text}</span>
            </div>
        </Link>
    );
};
