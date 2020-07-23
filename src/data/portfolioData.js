import salesAppDescription from "./salesappDescription";

export const CDN_PREFIX = "https://s3.ca-central-1.amazonaws.com/cdn.matthewmeade.ca/portfolio";
export const cdnImg = (p) => `${CDN_PREFIX}/${p}`;

export const portfolioItems = [
  {
    title: "Sales App",
    github: "https://github.com/mafumeade/GKSales",
    url: "https://gksales.herokuapp.com",
    description: salesAppDescription,
    coverImage: "salesapp/cover.png",
    images: [
      "salesapp/cover.png",
      "salesapp/dashboard.png",
      "salesapp/login.png",
      "salesapp/leads.png",
      "salesapp/quoteList.png",
      "salesapp/floorOptions.png",
      "salesapp/quote1.png",
      "salesapp/quote2.png",
    ].map(cdnImg),
    tags: ["JavaScript", "React", "Redux", "SCSS", "Mongo", "Express"],
  },
  {
    title: "Portfolio",
    github: "https://github.com/mafumeade/portfolio",
    url: "https://MatthewMeade.ca",
    description: "portfolio.txt",
    coverImage: "portfolioCover.png",
    images: ["portfolioCover.png", "portfolio0.png", "portfolio1.png", "portfolio2.png"],
    tags: ["JavaScript", "React", "SCSS"],
  },
  {
    title: "Android Chat App",
    github: "https://github.com/mafumeade/AndroidChatApp",
    url: "https://MatthewMeade.ca",
    description: "portfolio.txt",
    coverImage: "portfolioCover.png",
    images: ["portfolioCover.png", "portfolio0.png", "portfolio1.png", "portfolio2.png"],
    tags: ["JavaScript", "React", "Redux", "SCSS", "Mongo", "Express"],
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
