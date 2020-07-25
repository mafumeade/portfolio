import React from "react";
import "./App.scss";

import "@fortawesome/fontawesome-free/js/all";
import { Container } from "react-bootstrap";
import TopBar from "./components/navbar/TopBar";
import Bio from "./components/Bio/Bio";
import useWindowDimensions from "./hooks/windowDims";

import "./App.scss";
import Showcase from "./components/Showcase/Showcase";

// import Markdown from "./components/Markdown/Markdown";

function App() {
  const { breakpoint } = useWindowDimensions();

  return (
    <div>
      <Container bg="dark" variant="dark" className="mainContainer">
        <TopBar breakpoint={breakpoint} />

        <Bio />

        <Showcase />
      </Container>
    </div>
  );
}

export default App;
