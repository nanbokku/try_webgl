const Sylvester = require('sylvester');

window.onload = () => {
  testSylvesterJsLibrary();
};

let testSylvesterJsLibrary = () => {
  const u = Sylvester.Vector.create([1, 2, 3]);
  const v = Sylvester.Vector.create([4, 5, 6]);

  const s = u.add(v);
  alert(s.inspect());

  const d = u.dot(v);
  alert(d);

  const c = u.cross(v);
  alert(c.inspect());

  const M = Sylvester.Matrix.create([[2, -1], [-2, 1], [-1, 2]]);
  const N = Sylvester.Matrix.create([[4, -3], [3, 5]]);

  const MN = M.multiply(N);
  alert(MN.inspect());

  const I = Sylvester.Matrix.I(4);
  alert(I.inspect());
};
