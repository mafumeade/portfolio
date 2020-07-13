const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Vitae suscipit tellus mauris a diam. Id diam vel quam elementum pulvinar etiam non quam. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Imperdiet dui accumsan sit amet nulla. Risus nullam eget felis eget. Magna eget est lorem ipsum dolor. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vestibulum sed arcu non odio euismod lacinia at.";

export const lorem = (length) => {
  return text.repeat(Math.ceil(length / text.length)).slice(0, length);
};
