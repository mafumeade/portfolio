import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

// TODO: Refactor this data
const LINKS = [
    {
        icon: 'fas fa-envelope',
        text: 'email@MatthewMeade.ca',
        shortText: 'Email',
        href: 'mailto:email@MatthewMeade.ca'
    },
    { icon: 'fab fa-github', text: 'GitHub', href: 'https://github.com/mafumeade' },
    { icon: 'fas fa-file-alt', text: 'Resume', href: 'https://MatthewMeade.ca/resume.pdf' }
];
const HOVER_TIMEOUT_MS = 1500;

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = { hoveredLink: '' };
        this.timeOut = 0;
    }

    render() {
        const { breakpoint } = this.props;
        const { hoveredLink } = this.state;

        const linkRows = LINKS.map(({ icon, text, shortText, href }) => {
            const showTextClass = hoveredLink === href || breakpoint < 4 ? 'showText' : '';
            return (
                <Col
                    key={href}
                    onMouseEnter={() => {
                        clearTimeout(this.timeOut);
                        this.setState({ hoveredLink: href });
                    }}
                    onMouseLeave={() => {
                        this.timeOut = setTimeout(() => {
                            this.setState({ hoveredLink: '' });
                        }, HOVER_TIMEOUT_MS);
                    }}
                    className={`barLink ${showTextClass}`}
                >
                    <a
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        alt={text}
                        relrel='noopener noreferrer'
                    >
                        <i className={`${icon} icon`} />{' '}
                        {breakpoint > 0 && (
                            <span className='text'>
                                {breakpoint > 3 ? text : shortText || text}
                            </span>
                        )}
                    </a>
                </Col>
            );
        });
        return (
            <Container className='topBar' fluid>
                <Row>{linkRows}</Row>
            </Container>
        );
    }
}
