import { TableDrawer } from './table_drawer.js';

window.onload = () => {
  startup();
};

let startup = () => {
  const gl = new TableDrawer();

  window.setTimeout(() => {
    gl.draw();
  }, 500);
};
