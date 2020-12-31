import salesAppDescription from './descriptions/salesApp';
import mooseGameDescription from './descriptions/mooseGame';
import chatAppDescription from './descriptions/chatApp';
import portfolioDescription from './descriptions/portfolio';
import ticTacToeDescription from './descriptions/ticTacToe';

export const CDN_PREFIX = 'https://cdn.matthewmeade.ca/portfolio';
export const cdnImg = (p) => `${CDN_PREFIX}/${p}`;

export const portfolioItems = [
    {
        title: 'Tic Tac Toe',
        gitHub: 'https://github.com/MatthewMeade/TicTacToe',
        url: 'https://tictactoe.MatthewMeade.ca',
        urlText: 'Play',
        description: ticTacToeDescription.trim(),
        coverImage: cdnImg('ttc/coverImage.png'),
        images: ['darkTheme.png', 'lightTheme.png', 'largeGame.png'].map((i) =>
            cdnImg(`ttc/desktop/${i}`)
        ),
        tags: ['JavaScript', 'p5.js', 'Canvas']
    },
    {
        title: 'Sales App',
        gitHub: 'https://github.com/MatthewMeade/GKSales',
        url: 'https://gksales.herokuapp.com',
        urlText: 'Demo',
        description: salesAppDescription.trim(),
        coverImage: cdnImg('salesApp/coverImage.png'),
        mobileImages: [
            'dashboard.png',
            'login.png',
            'leads.png',
            'quotesList.png',
            'floorOptions.png',
            'quote1.png',
            'quote2.png'
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
        tags: ['JavaScript', 'React', 'Redux', 'SCSS', 'MongoDB', 'Express', 'Heroku']
    },
    {
        title: 'Portfolio',
        gitHub: 'https://github.com/MatthewMeade/portfolio',
        url: 'https://MatthewMeade.ca',
        description: portfolioDescription.trim(),
        // coverImage: cdnImg('portfolio/portfolioCover.png'),
        coverImage: cdnImg('portfolio/coverImage.png'),
        images: [cdnImg('portfolio/coverImage.png')],
        tags: ['JavaScript', 'React', 'SCSS', 'Netlify', 'Markdown', 'JSON', 'PDF']
    },
    {
        title: 'Android Chat App',
        gitHub: 'https://github.com/MatthewMeade/AndroidChatApp',
        url: 'https://github.com/MatthewMeade/AndroidChatApp/releases/tag/1.0',
        urlText: 'App',
        description: chatAppDescription.trim(),
        coverImage: cdnImg('chatApp/coverImage.png'),
        desktopImages: [
            'chat.png',
            'login.png',
            'contacts.png',
            'search.png',
            'delete.png'
        ].map((i) => cdnImg(`chatApp/desktop/${i}`)),
        mobileImages: [
            'chat.png',
            'login.png',
            'contacts.png',
            'search.png',
            'delete.png'
        ].map((i) => cdnImg(`chatApp/mobile/${i}`)),
        tags: ['JavaScript', 'React', 'Redux', 'Android', 'MongoDB', 'Express', 'Socket.io']
    },
    {
        title: 'Java Moose Game',
        gitHub: 'https://github.com/MatthewMeade/MooseGame',
        url: 'https://github.com/MatthewMeade/MooseGame/releases/tag/1',
        urlText: 'Game',
        description: mooseGameDescription.trim(),
        coverImage: cdnImg('mooseGame/coverImage.png'),
        images: [
            'title.png',
            'gameplay1.png',
            'gameplay2.png',
            'gameOver.png',
            'controls.png',
            'storeMain.png',
            'storeItems.png',
            'storeCars.png',
            'settings.png',
            'gameplayVideo.mp4'
        ].map((i) => cdnImg(`mooseGame/${i}`)),
        tags: ['Java', 'Swing', 'Game', 'OOP', 'Moose']
    }
].map((e) => ({ ...e, key: e.title.split(' ').join('_') }));

export const coverLinks = [
    {
        icon: 'fas fa-star',
        text: 'Portfolio',
        href: '#portfolio',
        bioText: 'See My Portfolio',
        onClick: (e) => {
            // TODO: Refactor this to be able to scroll from anywhere. Hooks?
            e.preventDefault();
            const top = document.querySelector('.showcase .header').offsetTop - 50;
            window.scrollTo({ top, behavior: 'smooth' });
        },
        showInNav: false
    },
    {
        icon: 'fab fa-github',
        text: 'GitHub',
        href: 'https://github.com/MatthewMeade',
        bioText: 'View My GitHub'
    },
    {
        icon: 'fas fa-file-alt',
        text: 'Resume',
        href: 'https://MatthewMeade.ca/resume.pdf',
        bioText: 'Download My Resume'
    },
    {
        icon: 'fas fa-envelope',
        text: 'email@MatthewMeade.ca',
        shortText: 'Email Me',
        href: 'mailto:email@MatthewMeade.ca',
        bioText: 'Email Me: email@MatthewMeade.ca'
    }
];
