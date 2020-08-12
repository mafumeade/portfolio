import React from "react";
import { Container } from "react-bootstrap";

import "./styles.scss";
import { cdnImg, coverLinks } from "../../data/portfolioData";

const BIO_TEXT = [
  "A full stack JavaScript developer who hates writing bios about himself",
  "Scroll down to see some of my featured projects",
  "Work in progress",
].map((t, n) => <p key={n}>{t}</p>);

const LINKS = coverLinks.map(({ icon, text, href }) => (
  <div className="linkDiv" key={href}>
    <a href={href} className="text-white" target="_blank" rel="noopener noreferrer">
      <i className={`${icon} text-primary`} /> {text}
    </a>
  </div>
));

export default function Bio() {
  return (
    <Container className={`bio`}>
      <div className="bioGrid">
        <h1>Matthew Meade</h1>
        <img alt="" src={cdnImg("general/prof_pic_trans_cropped.png")} />
        <div className="text-white mainText">
          {BIO_TEXT}

          {LINKS}
        </div>
      </div>
    </Container>
  );
}
