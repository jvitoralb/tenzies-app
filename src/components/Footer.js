import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
    <footer id='footer' className='socials'>
        <a
            target={'_blank'}
            rel='noreferrer'
            href='https://www.linkedin.com/in/jvitor-albuquerque/'
        >
            <FaLinkedinIn
                size={28}
            />
        </a>
        <a
            target={'_blank'}
            rel='noreferrer'
            href='https://github.com/jvitoralb'
        >
            <FaGithub
                size={28}
            />
        </a>
    </footer>
);

export default Footer;