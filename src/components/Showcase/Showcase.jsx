import React, { Component } from 'react';

import { portfolioItems } from '../../data/portfolioData';
import { Card, Button, Container, Carousel } from 'react-bootstrap';
import useWindowDimensions from '../../hooks/windowDims';

import Markdown from '../Markdown/Markdown';

import './styles.scss';

export default class Showcase extends Component {
    constructor() {
        super();

        this.state = {
            selectedItem: -1,
            showItem: false,
            transitioning: false
        };
    }

    backBtnPressed = () => {
        this.setState({ showItem: false });
    };

    // Nice transition between selected items without jerking
    // between differently sized descriptions
    itemPressed = (selectedItem) => {
        const top = document.querySelector('.showcase .header').offsetTop - 50;
        window.scrollTo({ top, behavior: 'smooth' });

        const { showItem, selectedItem: curSelected } = this.state;

        if (selectedItem === curSelected && showItem) {
            return;
        }

        if (!showItem) {
            return this.setState({ selectedItem, showItem: true, transitioning: false });
        }

        this.setState({ selectedItem, showItem: true, transitioning: false });
    };

    render() {
        const header = this.buildHeader();

        const cards = this.buildCards(portfolioItems);

        const { showItem } = this.state;
        return (
            <Container className='showcase'>
                {header}

                <div className={`showcaseItem ${showItem ? 'shown' : 'hidden'}`}>
                    <ShowcaseCarousel selectedItem={this.state.selectedItem} />
                </div>

                <div className='grid'>{cards}</div>
            </Container>
        );
    }

    buildCards = (items) => {
        const { selectedItem, showItem } = this.state;

        return items.map((item, index) => {
            const cardClass = selectedItem === index && showItem ? 'selected' : 'notSelected';
            return (
                <Card key={index} onClick={() => this.itemPressed(index)} className={cardClass}>
                    <div className='cardImgWrapper'>
                        <img src={item.coverImage} alt={item.title} />
                    </div>

                    <Card.Body>
                        <Card.Title className='text-primary'>
                            <span>{item.title}</span>
                        </Card.Title>
                        <Card.Text className='text-white'>
                            {item.description.split('\n')[0]}
                        </Card.Text>
                    </Card.Body>
                    <div className='links text-center'>
                        <div className='card-link'>
                            <a href={item.gitHub} target='_blank' rel='noopener noreferrer'>
                                <i className='fab fa-github' /> GitHub
                            </a>
                        </div>
                        <div className='links text-center'>
                            <a href={item.url} target='_blank' rel='noopener noreferrer'>
                                Link
                            </a>
                        </div>
                    </div>
                </Card>
            );
        });
    };

    buildHeader = () => {
        const { showItem, transitioning } = this.state;

        const show = showItem || transitioning;

        const selectedItem = portfolioItems[this.state.selectedItem] || {};

        const { url, gitHub } = selectedItem;

        const title = show ? selectedItem.title : 'Portfolio';

        return (
            <div className='header'>
                <div className='btnContainer'>
                    {show && (
                        <Button variant='outline-danger' onClick={this.backBtnPressed}>
                            Back
                        </Button>
                    )}
                </div>
                <h1 className='text-primary text-center'>{title}</h1>
                <div className='linkContainer'>
                    {show && gitHub && (
                        <a href={gitHub} target='_blank' rel='noopener noreferrer'>
                            {' '}
                            <i className='fab fa-github' /> GitHub
                        </a>
                    )}
                    {show && url && (
                        <a href={url} target='_blank' rel='noopener noreferrer'>
                            {' '}
                            <i className='fas fa-globe'></i> Link
                        </a>
                    )}
                </div>
            </div>
        );
    };
}

function ShowcaseCarousel({ selectedItem }) {
    const { breakpoint } = useWindowDimensions();
    const imgClass = breakpoint <= 1 ? 'w-100' : 'h-100';

    if (selectedItem < 0) {
        return null;
    }

    const item = portfolioItems[selectedItem];

    const images = item.images.map((src) => (
        <Carousel.Item key={src} style={{ backgrouxndImage: `url(${src})` }}>
            <img className={`backgroundImg`} src={src} alt={src} />
            <div className='frontImgContainer'>
                <img className={`frontImg d-block ${imgClass}`} src={src} alt={src} />
            </div>
        </Carousel.Item>
    ));
    return (
        <div className='descriptionGrid'>
            <Carousel>{images}</Carousel>

            <Markdown text={item.description} />
        </div>
    );
}
