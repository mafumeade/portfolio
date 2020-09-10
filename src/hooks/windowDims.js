import { useState, useEffect } from "react";

const breakpoints = [0, 576, 768, 992, 1200, Infinity];

const getCurBreakpoint = (curSize) => {
  for (let i = 0; i < breakpoints.length; i++) {
    if (curSize >= breakpoints[i]) {
      continue;
    }
    return i - 1;
  }
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    breakpoint: getCurBreakpoint(width),
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // This is a bit hackish, but
    // The build time rendering causes the site to render with a mobile breakpoint
    // And the actual size isn't recalculated until the window is resized
    if (!window.didFirstHandle) {
      window.didFirstHandle = true;
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return windowDimensions;
}
