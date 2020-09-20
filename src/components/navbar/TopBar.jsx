import React from 'react';
import './styles.scss';
import { coverLinks } from '../../data/portfolioData';

export default function TopBar({ breakpoint }) {
    const linkRows = coverLinks
        .filter(({ showInNav = true }) => showInNav)
        .map(({ icon, text, shortText, href }) => {
            return (
                <div key={href} className='barLink'>
                    <a href={href} target='_blank' rel='noopener noreferrer' alt={text}>
                        <i className={`${icon} icon`} />{' '}
                        {breakpoint > 0 && <span className='text'>{breakpoint > 3 ? text : shortText || text}</span>}
                    </a>
                </div>
            );
        });

    return <div className='topBar'>{linkRows}</div>;
}
