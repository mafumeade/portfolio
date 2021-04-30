import React, { useState } from "react";
import "./App.scss";

import "@fortawesome/fontawesome-free/js/all";
import TopBar from "./components/navbar/TopBar";
import Bio from "./components/Bio/Bio";
import useWindowDimensions from "./hooks/windowDims";

import "./App.scss";
import Showcase from "./components/Showcase/Showcase";
import Rainbow from "./components/Rainbow/Rainbow";

function App() {
  const { breakpoint } = useWindowDimensions();
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div id="App" className={showLinks ? "showLinks" : ""}>
      <div bg="dark" variant="dark" className="mainContainer _container">
        {showLinks && <TopBar breakpoint={breakpoint} />}

        {showLinks && <Bio showLinks={showLinks} />}

        <Showcase setShowLinks={setShowLinks} />

        <Rainbow />
      </div>
    </div>
  );
}

export default App;
