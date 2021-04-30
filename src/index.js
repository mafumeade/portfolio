/* eslint-disable no-restricted-globals */
import React from "react";
import { hydrate, render } from "react-dom";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
serviceWorker.unregister();

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

if ("scrollRestoration" in history) {
  // eslint-disable-line
  history.scrollRestoration = "manual";
}
