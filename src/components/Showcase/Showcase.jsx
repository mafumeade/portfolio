import React, { Component } from 'react';

import { portfolioItems } from '../../data/portfolioData';
import { Card, Button, Container } from 'react-bootstrap';

import './styles.scss';

export default class Showcase extends Component {
    constructor() {
        super();

        this.state = {
            selectedItem: -1
        };
    }

    backBtnPressed = () => {
        this.setState({ selectedItem: -1 });
    };

    itemPressed = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const header = this.buildHeader();

        const cards = this.buildCards(portfolioItems);
        return (
            <Container className='showcase'>
                {header}
                <div className='grid'>{cards}</div>
            </Container>
        );
    }

    buildCards = (items) => {
        return items.map((item, index) => (
            <Card key={index} onClick={() => this.itemPressed(index)}>
                <div className='cardImgWrapper'>
                    <img src={item.coverImage} alt={item.title} />
                </div>

                <Card.Body>
                    <Card.Title className='text-primary'>
                        <span>{item.title}</span>
                    </Card.Title>
                    <Card.Text className='text-white'>{item.description.split('\n')[0]}</Card.Text>
                </Card.Body>
                <div className='links text-center'>
                    <Card.Link>
                        <a href={item.gitHub} target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github' /> GitHub
                        </a>
                    </Card.Link>
                    <Card.Link>
                        <a href={item.url} target='_blank' rel='noopener noreferrer'>
                            Link
                        </a>
                    </Card.Link>
                </div>
            </Card>
        ));
    };

    buildHeader = () => {
        const selectedItem = portfolioItems[this.state.selectedItem] || {};

        const showBack = !!selectedItem.title;
        const { url, gitHub } = selectedItem;

        const title = selectedItem.title || 'Portfolio';

        return (
            <div className='header'>
                <div className='btnContainer'>
                    {showBack && (
                        <Button variant='outline-danger' onClick={this.backBtnPressed}>
                            Back
                        </Button>
                    )}
                </div>
                <h1 className='text-primary text-center'>{title}</h1>

                <div className='linkContainer'>
                    {gitHub && (
                        <a href={gitHub} target='_blank' rel='noopener noreferrer'>
                            {' '}
                            <i className='fab fa-github' /> GitHub
                        </a>
                    )}
                    {url && (
                        <a href={url} target='_blank' rel='noopener noreferrer'>
                            {' '}
                            <i class='fas fa-globe'></i> Link
                        </a>
                    )}
                </div>
            </div>
        );
    };
}
