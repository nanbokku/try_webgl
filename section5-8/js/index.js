import { TableDrawer } from './table_drawer.js';

window.onload = () => {
  startup();
};

let startup = () => {
  const tableDrawer = new TableDrawer();
  tableDrawer.draw();
};
