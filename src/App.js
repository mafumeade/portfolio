import React from "react";
import "./App.scss";

import "@fortawesome/fontawesome-free/js/all";
import { Container, Row, Col } from "react-bootstrap";
import TopBar from "./components/navbar/TopBar";
import Bio from "./components/Bio/Bio";
import useWindowDimensions from "./hooks/windowDims";

//TODO: Move images out of git

import "./App.scss";
import { lorem } from "./util/Lorem";

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
              <p className="text-secondary text-justify mt-5">{lorem(10e3 - 10)}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
