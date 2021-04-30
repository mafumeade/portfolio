import React from "react";

import "./styles.scss";
import { coverLinks } from "../../data/portfolioData";
import useWindowDimensions from "../../hooks/windowDims";

import Logo from "./Logo";

export default function Bio({ showLinks }) {
  const { width } = useWindowDimensions();

  const LINKS = coverLinks.map(({ icon, text, shortText, href, bioText, onClick }) => (
    <div className="linkDiv" key={href}>
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => onClick && onClick(e)}>
        <i className={icon} /> {(width <= 500 && shortText) || bioText || text}
      </a>
    </div>
  ));

  return (
    <div className="bio _container">
      <div className="bioGrid">
        <h1>Matthew Meade</h1>
        {showLinks && (
          <div className="bioImgContainer">
            <Logo />
          </div>
        )}
        {showLinks && <div className="mainText">{LINKS}</div>}
      </div>
    </div>
  );
}
