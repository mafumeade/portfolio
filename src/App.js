import React from 'react';
import './App.scss';

import Alert from 'react-bootstrap/Alert';

import '@fortawesome/fontawesome-free/js/all';

import { Container, Row, Col, Navbar, Jumbotron, Button, Nav } from 'react-bootstrap';

const topBar = (
    <span className='topBar'>
        <Navbar variant='dark' className='d-none d-md-inline'>
            <Nav className='mr-auto ml-lg-5 ml-0'>
                <Navbar.Brand className='text-primary'>Matthew Meade</Navbar.Brand>

                <Nav.Link href='https://github.com/mafumeade' target='_blank'>
                    <i class='fab fa-github'></i> GitHub
                </Nav.Link>

                <Nav.Link href='mailto:email@MatthewMeade.ca' target='_blank'>
                    <i class='fas fa-envelope'></i> email@MatthewMeade.ca
                </Nav.Link>
            </Nav>
        </Navbar>
    </span>
);

function App() {
    return (
        <div>
            <Container bg='dark' variant='dark' className='mainContainer'>
                {topBar}
                <Row className='intro'>
                    <Col md={4} className=''>
                        <h1 className='text-white d-md-none d-block text-center display-3'>
                            Matthew Meade
                        </h1>

                        <img
                            alt=''
                            src='/prof_pic_trans_cropped.png'
                            width={'100%'}
                            className='d-block mb-1 mb-md-0'
                        />
                    </Col>
                    <Col md={8} sm={12} className='test text-white'>
                        <div className='bio'>
                            <h1 className='text-primary d-none d-md-block'>Matthew Meade</h1>
                            <div className='d-block d-md-none text-center links'>
                                {/* <br /> */}
                                <p>
                                    <a href='GitHub' target='_blank' className='text-white'>
                                        <i className='fab fa-github text-primary'></i> Github
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href='mailto:email@MatthewMeade.ca'
                                        target='_blank'
                                        className='text-white'
                                    >
                                        <i className='fas fa-envelope text-primary'></i>{' '}
                                        email@MatthewMeade.ca
                                    </a>
                                </p>
                            </div>
                            <br className='d-block d-md-none' />
                            <p className='text-sm-justify text-md-left'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
                                mi tempus imperdiet nulla malesuada pellentesque elit eget. Proin
                                fermentum leo vel orci porta non. Pretium nibh ipsum consequat nisl
                                vel pretium. Egestas dui id ornare arcu odio ut sem nulla pharetra.
                                Augue lacus viverra vitae congue eu. Interdum velit euismod in
                                pellentesque. Tortor posuere ac ut consequat. Habitant morbi
                                tristique senectus et. Aliquam ultrices sagittis orci a
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
