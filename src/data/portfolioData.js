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
        description: salesAppDescription.trim(),
        coverImage: cdnImg('salesApp/cover.png'),
        images: [
            //   "salesApp/cover.png",
            'salesApp/dashboard.png',
            'salesApp/login.png',
            'salesApp/leads.png',
            'salesApp/quotesList.png',
            'salesApp/floorOptions.png',
            'salesApp/quote1.png',
            'salesApp/quote2.png'
        ].map(cdnImg),
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
        url: 'https://MatthewMeade.ca',
        description: chatAppDescription.trim(),
        // coverImage: cdnImg('chatApp/chatApp.png'),
        coverImage:
            'https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        images: ['chatAppCover.png'].map(cdnImg),
        tags: ['JavaScript', 'React', 'Redux', 'SCSS', 'Mongo', 'Express']
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
        tags: ['Java']
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
