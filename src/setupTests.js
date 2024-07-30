// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';

// global.TextDecoder = global.TextDecoder || require('util').TextDecoder;
// global.TextEncoder = global.TextEncoder || require('util').TextEncoder;

const originalError = console.error;

console.error = (...args) => {
  if (args[0].includes('Could not parse CSS stylesheet')) {
    return;
  }
  originalError.call(console, ...args);
};