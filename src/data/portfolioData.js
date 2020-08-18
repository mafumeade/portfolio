import salesAppDescription from './descriptions/salesApp';
import mooseGameDescription from './descriptions/mooseGame';
import chatAppDescription from './descriptions/chatApp';
import portfolioDescription from './descriptions/portfolio';

export const CDN_PREFIX = 'https://s3.ca-central-1.amazonaws.com/cdn.matthewmeade.ca/portfolio';
export const cdnImg = (p) => `${CDN_PREFIX}/${p}`;

// TODO: Image captions

export const portfolioItems = [
    {
        title: 'Sales App',
        gitHub: 'https://github.com/mafumeade/GKSales',
        url: 'https://gksales.herokuapp.com',
        urlText: 'Open Demo',
        description: salesAppDescription.trim(),
        coverImage: cdnImg('salesApp/desktop/dashboard.png'),
        mobileImages: [
            // TODO: Add mobile images to match desktop
            'dashboard.png',
            'login.png',
            'leads.png',
            'quotesList.png',
            'floorOptions.png',
            'quote1.png',
            'quote2.png',
            'login16x10.png'
        ].map((u) => cdnImg(`salesApp/mobile/${u}`)),
        desktopImages: [
            'dashboard.png',
            'login.png',
            'leads.png',
            'quotesList.png',
            'floorOptions.png',
            'newQuote.png',
            'pricing.png',
            'quote1.png',
            'quote2.png'
        ].map((i) => cdnImg(`salesApp/desktop/${i}`)),
        tags: ['JavaScript', 'React', 'Redux', 'SCSS', 'Mongo', 'Express']
    },
    {
        title: 'Portfolio',
        gitHub: 'https://github.com/mafumeade/portfolio',
        url: 'https://MatthewMeade.ca',
        description: portfolioDescription.trim(),
        // coverImage: cdnImg('portfolio/portfolioCover.png'),
        coverImage:
            'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        images: ['portfolioCover.png'].map(cdnImg),
        tags: ['JavaScript', 'React', 'SCSS']
    },
    {
        title: 'Android Chat App',
        gitHub: 'https://github.com/mafumeade/AndroidChatApp',
        url: 'https://github.com/mafumeade/AndroidChatApp/releases/tag/1.0',
        urlText: 'Download',
        description: chatAppDescription.trim(),
        // coverImage: cdnImg('chatApp/chatApp.png'),
        coverImage: cdnImg('chatApp/cover.jpg'),
        desktopImages: [
            'chat.jpg',
            'login.jpg',
            'contacts.jpg',
            'search.jpg',
            'delete.jpg'
        ].map((i) => cdnImg(`chatApp/desktop/${i}`)),
        mobileImages: [
            'chat.jpg',
            'login.jpg',
            'contacts.jpg',
            'search.jpg',
            'delete.jpg'
        ].map((i) => cdnImg(`chatApp/mobile/${i}`)),
        tags: ['JavaScript', 'React', 'Redux', 'SCSS', 'Mongo', 'Express', 'Socket.io', 'Expo']
    },
    {
        title: 'Java Moose Game',
        gitHub: 'https://github.com/mafumeade/MooseGame',
        url: 'https://github.com/mafumeade/MooseGame',
        description: mooseGameDescription.trim(),
        // coverImage: cdnImg('mooseGame/mooseGameCover.png'),
        coverImage:
            'https://images.unsplash.com/photo-1582002834723-2256d33da100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        images: ['mooseGameCover.png'].map(cdnImg),
        tags: ['Java', 'Swing']
    }
].map((e) => ({ ...e, key: e.title.split(' ').join('_') }));

export const coverLinks = [
    {
        icon: 'fas fa-envelope',
        text: 'email@MatthewMeade.ca',
        shortText: 'email',
        href: 'mailto:email@MatthewMeade.ca'
    },
    {
        icon: 'fab fa-github',
        text: 'GitHub',
        href: 'https://github.com/mafumeade'
    },
    {
        icon: 'fas fa-file-alt',
        text: 'Resume',
        href: 'https://MatthewMeade.ca/resume.pdf'
    }
];
