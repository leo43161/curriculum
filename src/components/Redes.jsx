import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Redes({ expand }) {
    return (
        <div className={`${expand ? "d-flex d-md-none" : "d-md-flex d-none"} justify-content-evenly py-3`}>
            <div><FontAwesomeIcon icon={['fab', 'twitter']}></FontAwesomeIcon></div>
            <div><FontAwesomeIcon icon={['fab', 'facebook-f']}></FontAwesomeIcon></div>
            <div><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></div>
            <div><FontAwesomeIcon icon={"envelope"}></FontAwesomeIcon></div>
        </div>
    )
}
