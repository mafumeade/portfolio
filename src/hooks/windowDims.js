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

// https://stackoverflow.com/questions/58398109/useeffect-hook-not-firing-on-orientation-change
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
