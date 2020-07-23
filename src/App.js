import React from "react";
import "./App.scss";

import "@fortawesome/fontawesome-free/js/all";
import { Container, Row, Col } from "react-bootstrap";
import TopBar from "./components/navbar/TopBar";
import Bio from "./components/Bio/Bio";
import useWindowDimensions from "./hooks/windowDims";

import "./App.scss";

import Markdown from "./components/Markdown/Markdown";

function App() {
  const { breakpoint } = useWindowDimensions();

  return (
    <div>
      <Container bg="dark" variant="dark" className="mainContainer">
        <TopBar breakpoint={breakpoint} />

        <Bio />

        <Container>
          <Row>
            <Col>
              <Markdown text={"# To Do"} />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
