import salesAppDescription from "./descriptions/salesApp";
import mooseGameDescription from "./descriptions/mooseGame";
import chatAppDescription from "./descriptions/chatApp";
import portfolioDescription from "./descriptions/portfolio";

export const CDN_PREFIX = "https://s3.ca-central-1.amazonaws.com/cdn.matthewmeade.ca/portfolio";
export const cdnImg = (p) => `${CDN_PREFIX}/${p}`;

export const portfolioItems = [
  {
    title: "Sales App",
    github: "https://github.com/mafumeade/GKSales",
    url: "https://gksales.herokuapp.com",
    description: salesAppDescription,
    coverImage: cdnImg("salesApp/cover.png"),
    images: [
      "salesApp/cover.png",
      "salesApp/dashboard.png",
      "salesApp/login.png",
      "salesApp/leads.png",
      "salesApp/quoteList.png",
      "salesApp/floorOptions.png",
      "salesApp/quote1.png",
      "salesApp/quote2.png",
    ].map(cdnImg),
    tags: ["JavaScript", "React", "Redux", "SCSS", "Mongo", "Express"],
  },
  {
    title: "Portfolio",
    github: "https://github.com/mafumeade/portfolio",
    url: "https://MatthewMeade.ca",
    description: portfolioDescription,
    coverImage: cdnImg("portfolioCover.png"),
    images: ["portfolioCover.png"].map(cdnImg),
    tags: ["JavaScript", "React", "SCSS"],
  },
  {
    title: "Android Chat App",
    github: "https://github.com/mafumeade/AndroidChatApp",
    url: "https://MatthewMeade.ca",
    description: chatAppDescription,
    coverImage: cdnImg("chatApp.png"),
    images: ["chatAppCover.png"].map(cdnImg),
    tags: ["JavaScript", "React", "Redux", "SCSS", "Mongo", "Express"],
  },
  {
    title: "Java Moose Game",
    github: "https://github.com/mafumeade/MooseGame",
    url: "https://github.com/mafumeade/MooseGame",
    description: mooseGameDescription,
    coverImage: cdnImg("mooseGameCover.png"),
    images: ["mooseGameCover.png"].map(cdnImg),
    tags: ["Java"],
  },
];

export const coverLinks = [
  {
    icon: "fas fa-envelope",
    text: "email@MatthewMeade.ca",
    shortText: "email",
    href: "mailto:email@MatthewMeade.ca",
  },
  {
    icon: "fab fa-github",
    text: "GitHub",
    href: "https://github.com/mafumeade",
  },
  {
    icon: "fas fa-file-alt",
    text: "Resume",
    href: "https://MatthewMeade.ca/resume.pdf",
  },
];
