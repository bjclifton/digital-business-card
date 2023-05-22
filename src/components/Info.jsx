import React from 'react';
import BJC from '../img/bjc.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className='info'>
            <img className='photo' src={BJC} alt='Bradley Clifton' />
            <div className='info-text'>
                <h1 className='name'>Bradley Clifton</h1>
                <h3 className='title'>Junior Software Developer</h3>
                <a href='midevworks.com' className='website'>midevworks.com</a>
                <div className='contact'>
                    <address>
                        <a href="mailto:bradley@midevworks.com">
                            {" "}
                            <button className="button button--email">
                                <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
                                Email
                            </button>
                        </a>
                    </address>
                    <a
                        href="https://www.linkedin.com/in/bclifto/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="button button--linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}