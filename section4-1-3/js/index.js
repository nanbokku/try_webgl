import { vec3, mat4 } from 'gl-matrix';

window.onload = () => {
  testglMatrixJsLibrary();
};

let testglMatrixJsLibrary = () => {
  let u = vec3.fromValues(1, 2, 3);
  let v = vec3.fromValues(4, 5, 6);
  let r = vec3.create();
  let t = vec3.fromValues(1, 2, 3);

  let s = vec3.add(r, u, v);
  alert(vec3.str(s));
  alert(vec3.str(r));
  alert(vec3.str(u));

  let d = vec3.dot(t, v);
  alert(d);

  let c = vec3.cross(r, t, v);
  alert(vec3.str(r));

  let I = mat4.fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  let M = mat4.fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 3, 4, 1);
  let IM = mat4.create();
  mat4.multiply(IM, I, M);
  alert(mat4.str(IM));

  let T = mat4.create();
  mat4.translate(T, I, vec3.fromValues(2, 3, 4));
  alert(mat4.str(T));
};
