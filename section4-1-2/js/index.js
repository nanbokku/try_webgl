window.onload = () => {
  testMjsJsLibrary();
};

const testMjsJsLibrary = () => {
  let u = V3.$(1, 2, 3);
  let v = V3.$(4, 5, 6);

  let s = V3.add(u, v);
  alert(convertToString(s));

  let d = V3.dot(u, v);
  alert(d);

  let c = V3.cross(u, v);
  alert(convertToString(c));

  let I = M4x4.$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

  let M = M4x4.$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 3, 4, 1);

  let IM = M4x4.mul(I, M);
  alert(convertToString(IM));

  let T = M4x4.makeTranslate3(2, 3, 4);
  alert(convertToString(T));
};

const convertToString = array => {
  let stringRep = '';
  array.forEach(a => {
    stringRep += a + ' ';
  });

  return stringRep;
};
