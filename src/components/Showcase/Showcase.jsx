import React, { useEffect, useState } from 'react';

import { portfolioItems } from '../../data/portfolioData';
import { Button, Container, Carousel } from 'react-bootstrap';
import useWindowDimensions from '../../hooks/windowDims';

import Markdown from '../Markdown/Markdown';

import './styles.scss';

function ItemBody({ item = {} }) {
    const { breakpoint } = useWindowDimensions();
    const imgClass = breakpoint <= 2 ? 'w-100' : 'h-100';
    const imageArr = (breakpoint <= 2 ? item.mobileImages : item.desktopImages) || item.images;

    const images = imageArr.map((src) => (
        <Carousel.Item key={src}>
            {src.endsWith('.mp4') ? (
                <span>
                    <video
                        muted={true}
                        preload='metadata'
                        src={src}
                        className='backgroundImg'
                        autoPlay={true}
                        loop={true}
                    />

                    <div className='frontImgContainer'>
                        <video
                            muted={true}
                            preload='metadata'
                            src={src}
                            className={`frontImg d-block ${imgClass}`}
                            autoPlay={true}
                            loop={true}
                        />
                    </div>
                </span>
            ) : (
                <span>
                    <img className='backgroundImg' src={src} alt={src} loading='lazy' />
                    <div className='frontImgContainer'>
                        <img className={`frontImg d-block ${imgClass}`} src={src} alt={src} loading='lazy' />
                    </div>
                </span>
            )}
        </Carousel.Item>
    ));

    const tags = item.tags.map((e) => `_${e}_`).join(' - ');
    const md = `# ${item.title}\n\n${tags}\n\n${item.description}`;

    const showCarousel = images.length > 0;
    const showControls = images.length > 1;

    return (
        <div className={`showcaseItem`}>
            {showCarousel && <Carousel controls={showControls}>{images}</Carousel>}

            <Markdown text={md} />
        </div>
    );
}

function Header({ selectedItem, setSelected }) {
    const item = selectedItem || {};

    const { url, urlText = 'Link', gitHub, title = 'Portfolio' } = item;
    return (
        <div className='header' id='portfolio'>
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
    const selectedClass = selected ? 'selected' : '';

    const handleClick = () => {
        setSelected(item.key);

        const top = document.querySelector('.showcase .header').offsetTop - 50;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    const tags = item.tags.map((tag) => (
        <div className='tag' key={tag}>
            {tag}
        </div>
    ));

    return (
        <div className={`sCard ${selectedClass}`} onClick={handleClick}>
            <div className='imgWrapper'>
                <img src={item.coverImage} alt={item.title} />
            </div>
            <h2 className='title'>{item.title}</h2>
            <p>{item.description.split('\n')[0]}</p>
            <div className='tagContainer'>{tags}</div>

            <div className='links'>
                <a href={item.gitHub} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}>
                    <i className='fab fa-github' /> GitHub
                </a>
                <a href={item.url} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}>
                    {item.urlText || 'Link'}
                </a>
            </div>
        </div>
    );
}

export default function Showcase() {
    const [selected, setSelected] = useState(null);
    const selectedItem = portfolioItems.filter((i) => i.key === selected)[0];

    const cards = portfolioItems.map((i) => (
        <ItemCard key={i.key + '_card'} item={i} selected={i.key === selected} setSelected={setSelected} />
    ));

    // Pre load images to prevent pop in on carousels
    useEffect(() => {
        portfolioItems.forEach((i) => {
            if (i.desktopImages) {
                const img = new Image();
                img.src = i.desktopImages[0];
            }
            if (i.images) {
                const img = new Image();
                img.src = i.images[0];
            }
            if (i.mobileImages) {
                const img = new Image();
                img.src = i.mobileImages[0];
            }
        });
    });

    return (
        <div className='showcase container'>
            <Header selectedItem={selectedItem} setSelected={setSelected} />
            {selected && <ItemBody item={selectedItem} />}
            <div className='cardGrid'>{cards}</div>
        </div>
    );
}
