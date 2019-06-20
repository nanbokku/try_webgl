import { GL } from './webgl.js';

window.onload = () => {
  startup();
};

let startup = () => {
  const gl = new GL();
  gl.startup();
};
