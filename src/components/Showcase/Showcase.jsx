import React, { useState } from 'react';

import { portfolioItems } from '../../data/portfolioData';
import { Card, Button, Container, Carousel, Badge } from 'react-bootstrap';
import useWindowDimensions from '../../hooks/windowDims';

import Markdown from '../Markdown/Markdown';

import './styles.scss';

function ItemBody({ item = {}, selected }) {
    const { breakpoint } = useWindowDimensions();
    const imgClass = breakpoint <= 1 ? 'w-100' : 'h-100';

    // Try to use mobile/desktop images first, falling back to the other if undefined
    const imageArr =
        (breakpoint <= 2 ? item.mobileImages : item.desktopImages) ||
        item.desktopImages ||
        item.mobileImages ||
        item.images;

    const images = imageArr.map((src) => (
        <Carousel.Item key={src}>
            {src.endsWith('.mp4') ? (
                <span>
                    <video
                        muted={true}
                        preload='auto'
                        src={src}
                        className='backgroundImg'
                        autoPlay={true}
                        loop={true}
                    />

                    <div className='frontImgContainer'>
                        <video
                            muted={true}
                            preload='auto'
                            src={src}
                            className={`frontImg d-block ${imgClass}`}
                            autoPlay={true}
                            loop={true}
                        />
                    </div>
                </span>
            ) : (
                <span>
                    <img className='backgroundImg' src={src} alt={src} />
                    <div className='frontImgContainer'>
                        <img className={`frontImg d-block ${imgClass}`} src={src} alt={src} />
                    </div>
                </span>
            )}
        </Carousel.Item>
    ));

    /* Recursion joke, might not be worth confusion
    if (item.title === 'Portfolio' && selected) {
        const qs = (window.location.search || '?level=0')
            .slice(1)
            .split('&')
            .map((e) => e.split('='));
        console.log(Object.fromEntries(qs));

        const level = parseInt(Object.fromEntries(qs).level) || 0;

        if (breakpoint === 0) {
            images.push(
                <Carousel.Item key='recursiveFrame' class='text-center text-primary'>
                    <h1>You've gone too Deep!</h1>
                </Carousel.Item>
            );
        } else {
            images.push(
                <Carousel.Item key='recursiveFrame'>
                    <p>Level: {level}</p>
                    <iframe
                        src={`${window.location.origin}?level=${level + 1}`}
                        title={`recursion_${level}`}
                    />
                    <div className='frontImgContainer'>
                        <img
                            className={`frontImg d-block ${imgClass}`}
                            src={imageArr[0].src}
                            alt={imageArr[0].src}
                        />
                    </div>
                </Carousel.Item>
            );
        }
    }*/
    return (
        <div className={`showcaseItem ${selected ? 'shown' : 'hidden'}`}>
            <Carousel>{images}</Carousel>

            <Markdown text={item.description} />
        </div>
    );
}

function Header({ selectedItem, setSelected }) {
    const item = selectedItem || {};

    const { url, urlText = 'Link', gitHub, title = 'Portfolio' } = item;
    return (
        <div className='header'>
            <div className='btnContainer'>
                {selectedItem && (
                    <Button variant='outline-danger' onClick={() => setSelected(null)}>
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
                        <i className='fas fa-globe'></i> {urlText}
                    </a>
                )}
            </div>
        </div>
    );
}

function ItemCard({ item, selected, setSelected }) {
    const className = selected ? 'selected' : '';

    const handleClick = () => {
        setSelected(item.key);

        const top = document.querySelector('.showcase .header').offsetTop - 50;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    const tags = item.tags.map((tag) => (
        <Badge variant='dark' key={tag}>
            {tag}
        </Badge>
    ));

    return (
        <Card className={className} onClick={handleClick}>
            <div className='cardImgWrapper'>
                <img src={item.coverImage} alt={item.title} />
            </div>

            <Card.Body>
                <Card.Title className='text-primary'>
                    <span>{item.title}</span>
                </Card.Title>
                <div className='tagContainer'>{tags}</div>
                <Card.Text className='text-white'>{item.description.split('\n')[0]}</Card.Text>
            </Card.Body>
            <div className='links text-center'>
                <div className='card-link'>
                    <a
                        href={item.gitHub}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <i className='fab fa-github' /> GitHub
                    </a>
                </div>
                <div className='card-link'>
                    <a
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {item.urlText || 'Link'}
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default function Showcase() {
    const [selected, setSelected] = useState(null);
    const selectedItem = portfolioItems.filter((i) => i.key === selected)[0];

    const cards = portfolioItems.map((i, n) => (
        <ItemCard
            key={i.key + '_card'}
            item={i}
            selected={i.key === selected}
            setSelected={setSelected}
        />
    ));
    const contents = portfolioItems.map((i, n) => (
        <ItemBody key={i.key + '_contents'} item={i} selected={i.key === selected} />
    ));
    return (
        <Container className='showcase'>
            <Header selectedItem={selectedItem} setSelected={setSelected} />
            {contents}
            <div className='cardGrid'>{cards}</div>
        </Container>
    );
}
