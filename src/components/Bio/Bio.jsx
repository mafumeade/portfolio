import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.scss";
import useWindowDimensions from "../../hooks/windowDims";

const BIO_TEXT = [
  "A full stack JavaScript developer who hates writing bios about himself",
  "Scroll down to see some of my featured projects",
].map((t, n) => <p key={n}>{t}</p>);

const LINKS = require("../../data/generalLinks.json").map(({ icon, text, href }) => (
  <div className="linkDiv" key={href}>
    <a href={href} className="text-white" target="_blank" rel="noopener noreferrer">
      <i className={`${icon} text-primary`} /> {text}
    </a>
  </div>
));

export default function Bio() {
  const { breakpoint } = useWindowDimensions();
  const isSmall = breakpoint <= 1;
  const sizeClass = isSmall ? "small" : "large";

  const nameClasses = isSmall ? `text-white text-center` : `text-primary`;
  const NAME = <h1 className={nameClasses}>Matthew Meade</h1>;

  return (
    <Container className={`bio ${sizeClass}`}>
      <Row>
        <Col md={4}>
          {isSmall && NAME}

          <div className="imgContainer">
            <img alt="" src="/prof_pic_trans_cropped.png" />
          </div>
        </Col>
        <Col md={8} sm={12} className="text-white">
          <div className="bio_text">
            {!isSmall && NAME}

            {BIO_TEXT}

            {LINKS}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
