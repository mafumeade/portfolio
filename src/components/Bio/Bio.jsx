import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.scss';
import { cdnImg, coverLinks } from '../../data/portfolioData';
import useWindowDimensions from '../../hooks/windowDims';

const BIO_TEXT = [
    // Might remove bio, should rename component if I do
    // 'A full stack JavaScript developer who hates writing bios about himself'
    // 'Scroll down/ to see some of my featured projects',
    // 'Work in progress'
].map((t, n) => <p key={n}>{t}</p>);

export default function Bio() {
    const { width } = useWindowDimensions();

    const LINKS = coverLinks.map(({ icon, text, shortText, href, bioText, onClick }) => (
        <div className='linkDiv' key={href}>
            <a
                href={href}
                className='text-white'
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => onClick && onClick(e)}
            >
                <i className={`${icon} text-primary`} />{' '}
                {(width <= 500 && shortText) || bioText || text}
            </a>
        </div>
    ));

    return (
        <Container className={`bio`}>
            <div className='bioGrid'>
                <h1>Matthew Meade</h1>
                <img alt='' src={cdnImg('general/prof_pic_trans_cropped.png')} />
                <div className='text-white mainText'>
                    {BIO_TEXT}

                    {LINKS}
                </div>
            </div>
        </Container>
    );
}
