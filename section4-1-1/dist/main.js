/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Sylvester = __webpack_require__(/*! sylvester */ "./node_modules/sylvester/lib/node-sylvester/index.js");

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


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/index.js":
/*!************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Copyright (c) 2011, Chris Umbel

exports.Vector = __webpack_require__(/*! ./vector */ "./node_modules/sylvester/lib/node-sylvester/vector.js");
global.$V = exports.Vector.create;
exports.Matrix = __webpack_require__(/*! ./matrix */ "./node_modules/sylvester/lib/node-sylvester/matrix.js");
global.$M = exports.Matrix.create;
exports.Line = __webpack_require__(/*! ./line */ "./node_modules/sylvester/lib/node-sylvester/line.js");
global.$L = exports.Line.create;
exports.Plane = __webpack_require__(/*! ./plane */ "./node_modules/sylvester/lib/node-sylvester/plane.js");
global.$P = exports.Plane.create;
exports.Line.Segment = __webpack_require__(/*! ./line.segment */ "./node_modules/sylvester/lib/node-sylvester/line.segment.js");
exports.Sylvester = __webpack_require__(/*! ./sylvester */ "./node_modules/sylvester/lib/node-sylvester/sylvester.js");

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/line.js":
/*!***********************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/line.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2011, Chris Umbel, James Coglan
var Vector = __webpack_require__(/*! ./vector */ "./node_modules/sylvester/lib/node-sylvester/vector.js");
var Matrix = __webpack_require__(/*! ./matrix */ "./node_modules/sylvester/lib/node-sylvester/matrix.js");
var Plane = __webpack_require__(/*! ./plane */ "./node_modules/sylvester/lib/node-sylvester/plane.js");
var Sylvester = __webpack_require__(/*! ./sylvester */ "./node_modules/sylvester/lib/node-sylvester/sylvester.js");

// Line class - depends on Vector, and some methods require Matrix and Plane.

function Line() {}
Line.prototype = {

  // Returns true if the argument occupies the same space as the line
  eql: function(line) {
    return (this.isParallelTo(line) && this.contains(line.anchor));
  },

  // Returns a copy of the line
  dup: function() {
    return Line.create(this.anchor, this.direction);
  },

  // Returns the result of translating the line by the given vector/array
  translate: function(vector) {
    var V = vector.elements || vector;
    return Line.create([
      this.anchor.elements[0] + V[0],
      this.anchor.elements[1] + V[1],
      this.anchor.elements[2] + (V[2] || 0)
    ], this.direction);
  },

  // Returns true if the line is parallel to the argument. Here, 'parallel to'
  // means that the argument's direction is either parallel or antiparallel to
  // the line's own direction. A line is parallel to a plane if the two do not
  // have a unique intersection.
  isParallelTo: function(obj) {
    if (obj.normal || (obj.start && obj.end)) { return obj.isParallelTo(this); }
    var theta = this.direction.angleFrom(obj.direction);
    return (Math.abs(theta) <= Sylvester.precision || Math.abs(theta - Math.PI) <= Sylvester.precision);
  },

  // Returns the line's perpendicular distance from the argument,
  // which can be a point, a line or a plane
  distanceFrom: function(obj) {
    if (obj.normal || (obj.start && obj.end)) { return obj.distanceFrom(this); }
    if (obj.direction) {
      // obj is a line
      if (this.isParallelTo(obj)) { return this.distanceFrom(obj.anchor); }
      var N = this.direction.cross(obj.direction).toUnitVector().elements;
      var A = this.anchor.elements, B = obj.anchor.elements;
      return Math.abs((A[0] - B[0]) * N[0] + (A[1] - B[1]) * N[1] + (A[2] - B[2]) * N[2]);
    } else {
      // obj is a point
      var P = obj.elements || obj;
      var A = this.anchor.elements, D = this.direction.elements;
      var PA1 = P[0] - A[0], PA2 = P[1] - A[1], PA3 = (P[2] || 0) - A[2];
      var modPA = Math.sqrt(PA1*PA1 + PA2*PA2 + PA3*PA3);
      if (modPA === 0) return 0;
      // Assumes direction vector is normalized
      var cosTheta = (PA1 * D[0] + PA2 * D[1] + PA3 * D[2]) / modPA;
      var sin2 = 1 - cosTheta*cosTheta;
      return Math.abs(modPA * Math.sqrt(sin2 < 0 ? 0 : sin2));
    }
  },

  // Returns true iff the argument is a point on the line, or if the argument
  // is a line segment lying within the receiver
  contains: function(obj) {
    if (obj.start && obj.end) { return this.contains(obj.start) && this.contains(obj.end); }
    var dist = this.distanceFrom(obj);
    return (dist !== null && dist <= Sylvester.precision);
  },

  // Returns the distance from the anchor of the given point. Negative values are
  // returned for points that are in the opposite direction to the line's direction from
  // the line's anchor point.
  positionOf: function(point) {
    if (!this.contains(point)) { return null; }
    var P = point.elements || point;
    var A = this.anchor.elements, D = this.direction.elements;
    return (P[0] - A[0]) * D[0] + (P[1] - A[1]) * D[1] + ((P[2] || 0) - A[2]) * D[2];
  },

  // Returns true iff the line lies in the given plane
  liesIn: function(plane) {
    return plane.contains(this);
  },

  // Returns true iff the line has a unique point of intersection with the argument
  intersects: function(obj) {
    if (obj.normal) { return obj.intersects(this); }
    return (!this.isParallelTo(obj) && this.distanceFrom(obj) <= Sylvester.precision);
  },

  // Returns the unique intersection point with the argument, if one exists
  intersectionWith: function(obj) {
    if (obj.normal || (obj.start && obj.end)) { return obj.intersectionWith(this); }
    if (!this.intersects(obj)) { return null; }
    var P = this.anchor.elements, X = this.direction.elements,
        Q = obj.anchor.elements, Y = obj.direction.elements;
    var X1 = X[0], X2 = X[1], X3 = X[2], Y1 = Y[0], Y2 = Y[1], Y3 = Y[2];
    var PsubQ1 = P[0] - Q[0], PsubQ2 = P[1] - Q[1], PsubQ3 = P[2] - Q[2];
    var XdotQsubP = - X1*PsubQ1 - X2*PsubQ2 - X3*PsubQ3;
    var YdotPsubQ = Y1*PsubQ1 + Y2*PsubQ2 + Y3*PsubQ3;
    var XdotX = X1*X1 + X2*X2 + X3*X3;
    var YdotY = Y1*Y1 + Y2*Y2 + Y3*Y3;
    var XdotY = X1*Y1 + X2*Y2 + X3*Y3;
    var k = (XdotQsubP * YdotY / XdotX + XdotY * YdotPsubQ) / (YdotY - XdotY * XdotY);
    return Vector.create([P[0] + k*X1, P[1] + k*X2, P[2] + k*X3]);
  },

  // Returns the point on the line that is closest to the given point or line/line segment
  pointClosestTo: function(obj) {
    if (obj.start && obj.end) {
      // obj is a line segment
      var P = obj.pointClosestTo(this);
      return (P === null) ? null : this.pointClosestTo(P);
    } else if (obj.direction) {
      // obj is a line
      if (this.intersects(obj)) { return this.intersectionWith(obj); }
      if (this.isParallelTo(obj)) { return null; }
      var D = this.direction.elements, E = obj.direction.elements;
      var D1 = D[0], D2 = D[1], D3 = D[2], E1 = E[0], E2 = E[1], E3 = E[2];
      // Create plane containing obj and the shared normal and intersect this with it
      // Thank you: http://www.cgafaq.info/wiki/Line-line_distance
      var x = (D3 * E1 - D1 * E3), y = (D1 * E2 - D2 * E1), z = (D2 * E3 - D3 * E2);
      var N = [x * E3 - y * E2, y * E1 - z * E3, z * E2 - x * E1];
      var P = Plane.create(obj.anchor, N);
      return P.intersectionWith(this);
    } else {
      // obj is a point
      var P = obj.elements || obj;
      if (this.contains(P)) { return Vector.create(P); }
      var A = this.anchor.elements, D = this.direction.elements;
      var D1 = D[0], D2 = D[1], D3 = D[2], A1 = A[0], A2 = A[1], A3 = A[2];
      var x = D1 * (P[1]-A2) - D2 * (P[0]-A1), y = D2 * ((P[2] || 0) - A3) - D3 * (P[1]-A2),
          z = D3 * (P[0]-A1) - D1 * ((P[2] || 0) - A3);
      var V = Vector.create([D2 * x - D3 * z, D3 * y - D1 * x, D1 * z - D2 * y]);
      var k = this.distanceFrom(P) / V.modulus();
      return Vector.create([
        P[0] + V.elements[0] * k,
        P[1] + V.elements[1] * k,
        (P[2] || 0) + V.elements[2] * k
      ]);
    }
  },

  // Returns a copy of the line rotated by t radians about the given line. Works by
  // finding the argument's closest point to this line's anchor point (call this C) and
  // rotating the anchor about C. Also rotates the line's direction about the argument's.
  // Be careful with this - the rotation axis' direction affects the outcome!
  rotate: function(t, line) {
    // If we're working in 2D
    if (typeof(line.direction) == 'undefined') { line = Line.create(line.to3D(), Vector.k); }
    var R = Matrix.Rotation(t, line.direction).elements;
    var C = line.pointClosestTo(this.anchor).elements;
    var A = this.anchor.elements, D = this.direction.elements;
    var C1 = C[0], C2 = C[1], C3 = C[2], A1 = A[0], A2 = A[1], A3 = A[2];
    var x = A1 - C1, y = A2 - C2, z = A3 - C3;
    return Line.create([
      C1 + R[0][0] * x + R[0][1] * y + R[0][2] * z,
      C2 + R[1][0] * x + R[1][1] * y + R[1][2] * z,
      C3 + R[2][0] * x + R[2][1] * y + R[2][2] * z
    ], [
      R[0][0] * D[0] + R[0][1] * D[1] + R[0][2] * D[2],
      R[1][0] * D[0] + R[1][1] * D[1] + R[1][2] * D[2],
      R[2][0] * D[0] + R[2][1] * D[1] + R[2][2] * D[2]
    ]);
  },

  // Returns a copy of the line with its direction vector reversed.
  // Useful when using lines for rotations.
  reverse: function() {
    return Line.create(this.anchor, this.direction.x(-1));
  },

  // Returns the line's reflection in the given point or line
  reflectionIn: function(obj) {
    if (obj.normal) {
      // obj is a plane
      var A = this.anchor.elements, D = this.direction.elements;
      var A1 = A[0], A2 = A[1], A3 = A[2], D1 = D[0], D2 = D[1], D3 = D[2];
      var newA = this.anchor.reflectionIn(obj).elements;
      // Add the line's direction vector to its anchor, then mirror that in the plane
      var AD1 = A1 + D1, AD2 = A2 + D2, AD3 = A3 + D3;
      var Q = obj.pointClosestTo([AD1, AD2, AD3]).elements;
      var newD = [Q[0] + (Q[0] - AD1) - newA[0], Q[1] + (Q[1] - AD2) - newA[1], Q[2] + (Q[2] - AD3) - newA[2]];
      return Line.create(newA, newD);
    } else if (obj.direction) {
      // obj is a line - reflection obtained by rotating PI radians about obj
      return this.rotate(Math.PI, obj);
    } else {
      // obj is a point - just reflect the line's anchor in it
      var P = obj.elements || obj;
      return Line.create(this.anchor.reflectionIn([P[0], P[1], (P[2] || 0)]), this.direction);
    }
  },

  // Set the line's anchor point and direction.
  setVectors: function(anchor, direction) {
    // Need to do this so that line's properties are not
    // references to the arguments passed in
    anchor = Vector.create(anchor);
    direction = Vector.create(direction);
    if (anchor.elements.length == 2) {anchor.elements.push(0); }
    if (direction.elements.length == 2) { direction.elements.push(0); }
    if (anchor.elements.length > 3 || direction.elements.length > 3) { return null; }
    var mod = direction.modulus();
    if (mod === 0) { return null; }
    this.anchor = anchor;
    this.direction = Vector.create([
      direction.elements[0] / mod,
      direction.elements[1] / mod,
      direction.elements[2] / mod
    ]);
    return this;
  }
};

// Constructor function
Line.create = function(anchor, direction) {
  var L = new Line();
  return L.setVectors(anchor, direction);
};

// Axes
Line.X = Line.create(Vector.Zero(3), Vector.i);
Line.Y = Line.create(Vector.Zero(3), Vector.j);
Line.Z = Line.create(Vector.Zero(3), Vector.k);

module.exports = Line;


/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/line.segment.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/line.segment.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2011, Chris Umbel, James Coglan
// Line.Segment class - depends on Line and its dependencies.

var Line = __webpack_require__(/*! ./line */ "./node_modules/sylvester/lib/node-sylvester/line.js");
var Vector = __webpack_require__(/*! ./vector */ "./node_modules/sylvester/lib/node-sylvester/vector.js");

Line.Segment = function() {};
Line.Segment.prototype = {

  // Returns true iff the line segment is equal to the argument
  eql: function(segment) {
    return (this.start.eql(segment.start) && this.end.eql(segment.end)) ||
        (this.start.eql(segment.end) && this.end.eql(segment.start));
  },

  // Returns a copy of the line segment
  dup: function() {
    return Line.Segment.create(this.start, this.end);
  },

  // Returns the length of the line segment
  length: function() {
    var A = this.start.elements, B = this.end.elements;
    var C1 = B[0] - A[0], C2 = B[1] - A[1], C3 = B[2] - A[2];
    return Math.sqrt(C1*C1 + C2*C2 + C3*C3);
  },

  // Returns the line segment as a vector equal to its
  // end point relative to its endpoint
  toVector: function() {
    var A = this.start.elements, B = this.end.elements;
    return Vector.create([B[0] - A[0], B[1] - A[1], B[2] - A[2]]);
  },

  // Returns the segment's midpoint as a vector
  midpoint: function() {
    var A = this.start.elements, B = this.end.elements;
    return Vector.create([(B[0] + A[0])/2, (B[1] + A[1])/2, (B[2] + A[2])/2]);
  },

  // Returns the plane that bisects the segment
  bisectingPlane: function() {
    return Plane.create(this.midpoint(), this.toVector());
  },

  // Returns the result of translating the line by the given vector/array
  translate: function(vector) {
    var V = vector.elements || vector;
    var S = this.start.elements, E = this.end.elements;
    return Line.Segment.create(
      [S[0] + V[0], S[1] + V[1], S[2] + (V[2] || 0)],
      [E[0] + V[0], E[1] + V[1], E[2] + (V[2] || 0)]
    );
  },

  // Returns true iff the line segment is parallel to the argument. It simply forwards
  // the method call onto its line property.
  isParallelTo: function(obj) {
    return this.line.isParallelTo(obj);
  },

  // Returns the distance between the argument and the line segment's closest point to the argument
  distanceFrom: function(obj) {
    var P = this.pointClosestTo(obj);
    return (P === null) ? null : P.distanceFrom(obj);
  },

  // Returns true iff the given point lies on the segment
  contains: function(obj) {
    if (obj.start && obj.end) { return this.contains(obj.start) && this.contains(obj.end); }
    var P = (obj.elements || obj).slice();
    if (P.length == 2) { P.push(0); }
    if (this.start.eql(P)) { return true; }
    var S = this.start.elements;
    var V = Vector.create([S[0] - P[0], S[1] - P[1], S[2] - (P[2] || 0)]);
    var vect = this.toVector();
    return V.isAntiparallelTo(vect) && V.modulus() <= vect.modulus();
  },

  // Returns true iff the line segment intersects the argument
  intersects: function(obj) {
    return (this.intersectionWith(obj) !== null);
  },

  // Returns the unique point of intersection with the argument
  intersectionWith: function(obj) {
    if (!this.line.intersects(obj)) { return null; }
    var P = this.line.intersectionWith(obj);
    return (this.contains(P) ? P : null);
  },

  // Returns the point on the line segment closest to the given object
  pointClosestTo: function(obj) {
    if (obj.normal) {
      // obj is a plane
      var V = this.line.intersectionWith(obj);
      if (V === null) { return null; }
      return this.pointClosestTo(V);
    } else {
      // obj is a line (segment) or point
      var P = this.line.pointClosestTo(obj);
      if (P === null) { return null; }
      if (this.contains(P)) { return P; }
      return (this.line.positionOf(P) < 0 ? this.start : this.end).dup();
    }
  },

  // Set the start and end-points of the segment
  setPoints: function(startPoint, endPoint) {
    startPoint = Vector.create(startPoint).to3D();
    endPoint = Vector.create(endPoint).to3D();
    if (startPoint === null || endPoint === null) { return null; }
    this.line = Line.create(startPoint, endPoint.subtract(startPoint));
    this.start = startPoint;
    this.end = endPoint;
    return this;
  }
};

// Constructor function
Line.Segment.create = function(v1, v2) {
  var S = new Line.Segment();
  return S.setPoints(v1, v2);
};

module.exports = Line.Segment;


/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/matrix.js":
/*!*************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/matrix.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2011, Chris Umbel, James Coglan
// Matrix class - depends on Vector.

var fs = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
var Sylvester = __webpack_require__(/*! ./sylvester */ "./node_modules/sylvester/lib/node-sylvester/sylvester.js");
var Vector = __webpack_require__(/*! ./vector */ "./node_modules/sylvester/lib/node-sylvester/vector.js");

// augment a matrix M with identity rows/cols
function identSize(M, m, n, k) {
    var e = M.elements;
    var i = k - 1;

    while(i--) {
	var row = [];
	
	for(var j = 0; j < n; j++)
	    row.push(j == i ? 1 : 0);
	
        e.unshift(row);
    }
    
    for(var i = k - 1; i < m; i++) {
        while(e[i].length < n)
            e[i].unshift(0);
    }

    return $M(e);
}

function pca(X) {
    var Sigma = X.transpose().x(X).x(1 / X.rows());
    var svd = Sigma.svd();
    return {U: svd.U, S: svd.S};
}

// singular value decomposition in pure javascript
function svdJs() {
    var A = this;
    var V = Matrix.I(A.rows());
    var S = A.transpose();
    var U = Matrix.I(A.cols());
    var err = Number.MAX_VALUE;
    var i = 0;
    var maxLoop = 100;

    while(err > 2.2737e-13 && i < maxLoop) {
        var qr = S.transpose().qrJs();
        S = qr.R;
        V = V.x(qr.Q);
        qr = S.transpose().qrJs();
        U = U.x(qr.Q);
        S = qr.R;

        var e = S.triu(1).unroll().norm();
        var f = S.diagonal().norm();

        if(f == 0)
            f = 1;

        err = e / f;

        i++;
    }

    var ss = S.diagonal();
    var s = [];

    for(var i = 1; i <= ss.cols(); i++) {
        var ssn = ss.e(i);
        s.push(Math.abs(ssn));

        if(ssn < 0) {
            for(var j = 0; j < U.rows(); j++) {
                V.elements[j][i - 1] = -(V.elements[j][i - 1]);
            }
        }
    }

    return {U: U, S: $V(s).toDiagonalMatrix(), V: V};
}

// singular value decomposition using LAPACK
function svdPack() {
    var result = lapack.sgesvd('A', 'A', this.elements);

    return {
        U: $M(result.U),
        S: $M(result.S).column(1).toDiagonalMatrix(),
	V: $M(result.VT).transpose()
    };
}

// QR decomposition in pure javascript
function qrJs() {
    var m = this.rows();
    var n = this.cols();
    var Q = Matrix.I(m);
    var A = this;
    
    for(var k = 1; k < Math.min(m, n); k++) {
	var ak = A.slice(k, 0, k, k).col(1);
	var oneZero = [1];
	
	while(oneZero.length <=  m - k)
	    oneZero.push(0);
	
	oneZero = $V(oneZero);
	var vk = ak.add(oneZero.x(ak.norm() * Math.sign(ak.e(1))));
	var Vk = $M(vk);
	var Hk = Matrix.I(m - k + 1).subtract(Vk.x(2).x(Vk.transpose()).div(Vk.transpose().x(Vk).e(1, 1)));
	var Qk = identSize(Hk, m, n, k);
	A = Qk.x(A);
	// slow way to compute Q
	Q = Q.x(Qk);
    }
    
    return {Q: Q, R: A};
}

// QR decomposition using LAPACK
function qrPack() {
    var qr = lapack.qr(this.elements);

    return {
	Q: $M(qr.Q),
	R: $M(qr.R)
    };
}

function Matrix() {}
Matrix.prototype = {
    // solve a system of linear equations (work in progress)
    solve: function(b) {
	var lu = this.lu();
	b = lu.P.x(b);
	var y = lu.L.forwardSubstitute(b);
	var x = lu.U.backSubstitute(y);
	return lu.P.x(x);
	//return this.inv().x(b);
    },

    // project a matrix onto a lower dim
    pcaProject: function(k, U) {
	var U = U || pca(this).U;
	var Ureduce= U.slice(1, U.rows(), 1, k);
	return {Z: this.x(Ureduce), U: U};
    },

    // recover a matrix to a higher dimension
    pcaRecover: function(U) {
	var k = this.cols();
	var Ureduce = U.slice(1, U.rows(), 1, k);
	return this.x(Ureduce.transpose());
    },    

    // grab the upper triangular part of the matrix
    triu: function(k) {
	if(!k)
	    k = 0;
	
	return this.map(function(x, i, j) {
	    return j - i >= k ? x : 0;
	});
    },

    // unroll a matrix into a vector
    unroll: function() {
	var v = [];
	
	for(var i = 1; i <= this.cols(); i++) {
	    for(var j = 1; j <= this.rows(); j++) {
		v.push(this.e(j, i));
	    }
	}

	return $V(v);
    },

    // return a sub-block of the matrix
    slice: function(startRow, endRow, startCol, endCol) {
	var x = [];
	
	if(endRow == 0)
	    endRow = this.rows();
	
	if(endCol == 0)
	    endCol = this.cols();

	for(i = startRow; i <= endRow; i++) {
	    var row = [];

	    for(j = startCol; j <= endCol; j++) {
		row.push(this.e(i, j));
	    }

	    x.push(row);
	}

	return $M(x);
    },

    // Returns element (i,j) of the matrix
    e: function(i,j) {
	if (i < 1 || i > this.elements.length || j < 1 || j > this.elements[0].length) { return null; }
	return this.elements[i - 1][j - 1];
    },

    // Returns row k of the matrix as a vector
    row: function(i) {
	if (i > this.elements.length) { return null; }
	return $V(this.elements[i - 1]);
    },

    // Returns column k of the matrix as a vector
    col: function(j) {
	if (j > this.elements[0].length) { return null; }
	var col = [], n = this.elements.length;
	for (var i = 0; i < n; i++) { col.push(this.elements[i][j - 1]); }
	return $V(col);
    },

    // Returns the number of rows/columns the matrix has
    dimensions: function() {
	return {rows: this.elements.length, cols: this.elements[0].length};
    },

    // Returns the number of rows in the matrix
    rows: function() {
	return this.elements.length;
    },

    // Returns the number of columns in the matrix
    cols: function() {
	return this.elements[0].length;
    },

    approxEql: function(matrix) {
	return this.eql(matrix, Sylvester.approxPrecision);
    },

    // Returns true iff the matrix is equal to the argument. You can supply
    // a vector as the argument, in which case the receiver must be a
    // one-column matrix equal to the vector.
    eql: function(matrix, precision) {
	var M = matrix.elements || matrix;
	if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	if (this.elements.length != M.length ||
            this.elements[0].length != M[0].length) { return false; }
	var i = this.elements.length, nj = this.elements[0].length, j;
	while (i--) { j = nj;
		      while (j--) {
			  if (Math.abs(this.elements[i][j] - M[i][j]) > (precision || Sylvester.precision)) { return false; }
		      }
		    }
	return true;
    },

    // Returns a copy of the matrix
    dup: function() {
	return Matrix.create(this.elements);
    },

    // Maps the matrix to another matrix (of the same dimensions) according to the given function
    map: function(fn) {
    var els = [], i = this.elements.length, nj = this.elements[0].length, j;
	while (i--) { j = nj;
		      els[i] = [];
		      while (j--) {
			  els[i][j] = fn(this.elements[i][j], i + 1, j + 1);
		      }
		    }
	return Matrix.create(els);
    },

    // Returns true iff the argument has the same dimensions as the matrix
    isSameSizeAs: function(matrix) {
	var M = matrix.elements || matrix;
	if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	return (this.elements.length == M.length &&
		this.elements[0].length == M[0].length);
    },

    // Returns the result of adding the argument to the matrix
    add: function(matrix) {
	if(typeof(matrix) == 'number') {
	    return this.map(function(x, i, j) { return x + matrix});
	} else {
	    var M = matrix.elements || matrix;
	    if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	    if (!this.isSameSizeAs(M)) { return null; }
	    return this.map(function(x, i, j) { return x + M[i - 1][j - 1]; });
	}
    },

    // Returns the result of subtracting the argument from the matrix
    subtract: function(matrix) {
	if(typeof(matrix) == 'number') {
	    return this.map(function(x, i, j) { return x - matrix});
	} else {
	    var M = matrix.elements || matrix;
	    if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	    if (!this.isSameSizeAs(M)) { return null; }
	    return this.map(function(x, i, j) { return x - M[i - 1][j - 1]; });
	}
    },

    // Returns true iff the matrix can multiply the argument from the left
    canMultiplyFromLeft: function(matrix) {
	var M = matrix.elements || matrix;
	if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	// this.columns should equal matrix.rows
	return (this.elements[0].length == M.length);
    },

    // Returns the result of a multiplication-style operation the matrix from the right by the argument.
    // If the argument is a scalar then just operate on all the elements. If the argument is
    // a vector, a vector is returned, which saves you having to remember calling
    // col(1) on the result.
    mulOp: function(matrix, op) {
	if (!matrix.elements) {
	    return this.map(function(x) { return op(x, matrix); });
	}

	var returnVector = matrix.modulus ? true : false;
	var M = matrix.elements || matrix;
	if (typeof(M[0][0]) == 'undefined') 
	    M = Matrix.create(M).elements;
	if (!this.canMultiplyFromLeft(M)) 
	    return null; 
	var e = this.elements, rowThis, rowElem, elements = [],
        sum, m = e.length, n = M[0].length, o = e[0].length, i = m, j, k;

	while (i--) {
            rowElem = [];
            rowThis = e[i];
            j = n;

            while (j--) {
		sum = 0;
		k = o;

		while (k--) {
                    sum += op(rowThis[k], M[k][j]);
		}

		rowElem[j] = sum;
            }

            elements[i] = rowElem;
	}

	var M = Matrix.create(elements);
	return returnVector ? M.col(1) : M;
    },

    // Returns the result of dividing the matrix from the right by the argument.
    // If the argument is a scalar then just divide all the elements. If the argument is
    // a vector, a vector is returned, which saves you having to remember calling
    // col(1) on the result.
    div: function(matrix) {
	return this.mulOp(matrix, function(x, y) { return x / y});
    },

    // Returns the result of multiplying the matrix from the right by the argument.
    // If the argument is a scalar then just multiply all the elements. If the argument is
    // a vector, a vector is returned, which saves you having to remember calling
    // col(1) on the result.
    multiply: function(matrix) {
	return this.mulOp(matrix, function(x, y) { return x * y});
    },

    x: function(matrix) { return this.multiply(matrix); },

    elementMultiply: function(v) {
        return this.map(function(k, i, j) {
            return v.e(i, j) * k;
        });
    },

    // sum all elements in the matrix
    sum: function() {
        var sum = 0;

        this.map(function(x) { sum += x;});

        return sum;
    },

    // Returns a Vector of each colum averaged.
    mean: function() {
      var dim = this.dimensions();
      var r = [];
      for (var i = 1; i <= dim.cols; i++) {
        r.push(this.col(i).sum() / dim.rows);
      }
      return $V(r);
    },

    column: function(n) {
	return this.col(n);
    },

    // element-wise log
    log: function() {
	return this.map(function(x) { return Math.log(x); });
    },

    // Returns a submatrix taken from the matrix
    // Argument order is: start row, start col, nrows, ncols
    // Element selection wraps if the required index is outside the matrix's bounds, so you could
    // use this to perform row/column cycling or copy-augmenting.
    minor: function(a, b, c, d) {
	var elements = [], ni = c, i, nj, j;
	var rows = this.elements.length, cols = this.elements[0].length;
	while (ni--) {
	    i = c - ni - 1;
	    elements[i] = [];
	    nj = d;
	    while (nj--) {
		j = d - nj - 1;
		elements[i][j] = this.elements[(a + i - 1) % rows][(b + j - 1) % cols];
	    }
	}
	return Matrix.create(elements);
    },

    // Returns the transpose of the matrix
    transpose: function() {
    var rows = this.elements.length, i, cols = this.elements[0].length, j;
	var elements = [], i = cols;
	while (i--) {
	    j = rows;
	    elements[i] = [];
	    while (j--) {
		elements[i][j] = this.elements[j][i];
	    }
	}
	return Matrix.create(elements);
    },

    // Returns true iff the matrix is square
    isSquare: function() {
	return (this.elements.length == this.elements[0].length);
    },

    // Returns the (absolute) largest element of the matrix
    max: function() {
	var m = 0, i = this.elements.length, nj = this.elements[0].length, j;
	while (i--) {
	    j = nj;
	    while (j--) {
		if (Math.abs(this.elements[i][j]) > Math.abs(m)) { m = this.elements[i][j]; }
	    }
	}
	return m;
    },

    // Returns the indeces of the first match found by reading row-by-row from left to right
    indexOf: function(x) {
	var index = null, ni = this.elements.length, i, nj = this.elements[0].length, j;
	for (i = 0; i < ni; i++) {
	    for (j = 0; j < nj; j++) {
		if (this.elements[i][j] == x) { return {i: i + 1, j: j + 1}; }
	    }
	}
	return null;
    },

    // If the matrix is square, returns the diagonal elements as a vector.
    // Otherwise, returns null.
    diagonal: function() {
	if (!this.isSquare) { return null; }
	var els = [], n = this.elements.length;
	for (var i = 0; i < n; i++) {
	    els.push(this.elements[i][i]);
	}
	return $V(els);
    },

    // Make the matrix upper (right) triangular by Gaussian elimination.
    // This method only adds multiples of rows to other rows. No rows are
    // scaled up or switched, and the determinant is preserved.
    toRightTriangular: function() {
	var M = this.dup(), els;
	var n = this.elements.length, i, j, np = this.elements[0].length, p;
	for (i = 0; i < n; i++) {
	    if (M.elements[i][i] == 0) {
		for (j = i + 1; j < n; j++) {
		    if (M.elements[j][i] != 0) {
			els = [];
			for (p = 0; p < np; p++) { els.push(M.elements[i][p] + M.elements[j][p]); }
			M.elements[i] = els;
			break;
		    }
		}
	    }
	    if (M.elements[i][i] != 0) {
		for (j = i + 1; j < n; j++) {
		    var multiplier = M.elements[j][i] / M.elements[i][i];
		    els = [];
		    for (p = 0; p < np; p++) {
			// Elements with column numbers up to an including the number
			// of the row that we're subtracting can safely be set straight to
			// zero, since that's the point of this routine and it avoids having
			// to loop over and correct rounding errors later
			els.push(p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier);
		    }
		    M.elements[j] = els;
		}
	    }
	}
	return M;
    },

    toUpperTriangular: function() { return this.toRightTriangular(); },

    // Returns the determinant for square matrices
    determinant: function() {
	if (!this.isSquare()) { return null; }
	if (this.cols == 1 && this.rows == 1) { return this.row(1); }
	if (this.cols == 0 && this.rows == 0) { return 1; }
	var M = this.toRightTriangular();
	var det = M.elements[0][0], n = M.elements.length;
	for (var i = 1; i < n; i++) {
	    det = det * M.elements[i][i];
	}
	return det;
    },
    det: function() { return this.determinant(); },

    // Returns true iff the matrix is singular
    isSingular: function() {
	return (this.isSquare() && this.determinant() === 0);
    },

    // Returns the trace for square matrices
    trace: function() {
	if (!this.isSquare()) { return null; }
	var tr = this.elements[0][0], n = this.elements.length;
	for (var i = 1; i < n; i++) {
	    tr += this.elements[i][i];
	}
	return tr;
    },

    tr: function() { return this.trace(); },

    // Returns the rank of the matrix
    rank: function() {
	var M = this.toRightTriangular(), rank = 0;
	var i = this.elements.length, nj = this.elements[0].length, j;
	while (i--) {
	    j = nj;
	    while (j--) {
		if (Math.abs(M.elements[i][j]) > Sylvester.precision) { rank++; break; }
	    }
	}
	return rank;
    },

    rk: function() { return this.rank(); },

    // Returns the result of attaching the given argument to the right-hand side of the matrix
    augment: function(matrix) {
	var M = matrix.elements || matrix;
	if (typeof(M[0][0]) == 'undefined') { M = Matrix.create(M).elements; }
	var T = this.dup(), cols = T.elements[0].length;
	var i = T.elements.length, nj = M[0].length, j;
	if (i != M.length) { return null; }
	while (i--) {
	    j = nj;
	    while (j--) {
		T.elements[i][cols + j] = M[i][j];
	    }
	}
	return T;
    },

    // Returns the inverse (if one exists) using Gauss-Jordan
    inverse: function() {
	if (!this.isSquare() || this.isSingular()) { return null; }
	var n = this.elements.length, i = n, j;
	var M = this.augment(Matrix.I(n)).toRightTriangular();
	var np = M.elements[0].length, p, els, divisor;
	var inverse_elements = [], new_element;
	// Matrix is non-singular so there will be no zeros on the diagonal
	// Cycle through rows from last to first
	while (i--) {
	    // First, normalise diagonal elements to 1
	    els = [];
	    inverse_elements[i] = [];
	    divisor = M.elements[i][i];
	    for (p = 0; p < np; p++) {
        new_element = M.elements[i][p] / divisor;
		els.push(new_element);
		// Shuffle off the current row of the right hand side into the results
		// array as it will not be modified by later runs through this loop
		if (p >= n) { inverse_elements[i].push(new_element); }
	    }
	    M.elements[i] = els;
	    // Then, subtract this row from those above it to
	    // give the identity matrix on the left hand side
	    j = i;
	    while (j--) {
		els = [];
		for (p = 0; p < np; p++) {
		    els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
		}
		M.elements[j] = els;
	    }
	}
	return Matrix.create(inverse_elements);
    },

    inv: function() { return this.inverse(); },

    // Returns the result of rounding all the elements
    round: function() {
	return this.map(function(x) { return Math.round(x); });
    },

    // Returns a copy of the matrix with elements set to the given value if they
    // differ from it by less than Sylvester.precision
    snapTo: function(x) {
	return this.map(function(p) {
	    return (Math.abs(p - x) <= Sylvester.precision) ? x : p;
	});
    },

    // Returns a string representation of the matrix
    inspect: function() {
	var matrix_rows = [];
	var n = this.elements.length;
	for (var i = 0; i < n; i++) {
	    matrix_rows.push($V(this.elements[i]).inspect());
	}
	return matrix_rows.join('\n');
    },

    // Returns a array representation of the matrix
    toArray: function() {
    	var matrix_rows = [];
    	var n = this.elements.length;
    	for (var i = 0; i < n; i++) {
        matrix_rows.push(this.elements[i]);
    	}
      return matrix_rows;
    },


    // Set the matrix's elements from an array. If the argument passed
    // is a vector, the resulting matrix will be a single column.
    setElements: function(els) {
	var i, j, elements = els.elements || els;
	if (typeof(elements[0][0]) != 'undefined') {
	    i = elements.length;
	    this.elements = [];
	    while (i--) {
		j = elements[i].length;
		this.elements[i] = [];
		while (j--) {
		    this.elements[i][j] = elements[i][j];
		}
	    }
	    return this;
	}
	var n = elements.length;
	this.elements = [];
	for (i = 0; i < n; i++) {
	    this.elements.push([elements[i]]);
	}
	return this;
    },

    // return the indexes of the columns with the largest value
    // for each row
    maxColumnIndexes: function() {
	var maxes = [];

	for(var i = 1; i <= this.rows(); i++) {
	    var max = null;
	    var maxIndex = -1;

	    for(var j = 1; j <= this.cols(); j++) {
		if(max === null || this.e(i, j) > max) {
		    max = this.e(i, j);
		    maxIndex = j;
		}
	    }

	    maxes.push(maxIndex);
	}

	return $V(maxes);
    },

    // return the largest values in each row
    maxColumns: function() {
	var maxes = [];

	for(var i = 1; i <= this.rows(); i++) {
	    var max = null;

	    for(var j = 1; j <= this.cols(); j++) {
		if(max === null || this.e(i, j) > max) {
		    max = this.e(i, j);
		}
	    }

	    maxes.push(max);
	}

	return $V(maxes);
    },

    // return the indexes of the columns with the smallest values
    // for each row
    minColumnIndexes: function() {
	var mins = [];

	for(var i = 1; i <= this.rows(); i++) {
	    var min = null;
	    var minIndex = -1;

	    for(var j = 1; j <= this.cols(); j++) {
		if(min === null || this.e(i, j) < min) {
		    min = this.e(i, j);
		    minIndex = j;
		}
	    }

	    mins.push(minIndex);
	}

	return $V(mins);
    },

    // return the smallest values in each row
    minColumns: function() {
	var mins = [];

	for(var i = 1; i <= this.rows(); i++) {
	    var min = null;

	    for(var j = 1; j <= this.cols(); j++) {
		if(min === null || this.e(i, j) < min) {
		    min = this.e(i, j);
		}
	    }

	    mins.push(min);
	}

	return $V(mins);
    },
    
    // perorm a partial pivot on the matrix. essentially move the largest
    // row below-or-including the pivot and replace the pivot's row with it.
    // a pivot matrix is returned so multiplication can perform the transform.
    partialPivot: function(k, j, P, A, L) {
	var maxIndex = 0;
	var maxValue = 0;

	for(var i = k; i <= A.rows(); i++) {
	    if(Math.abs(A.e(i, j)) > maxValue) {
		maxValue = Math.abs(A.e(k, j));
		maxIndex = i;
	    }
	}

	if(maxIndex != k) {
	    var tmp = A.elements[k - 1];
	    A.elements[k - 1] = A.elements[maxIndex - 1];
	    A.elements[maxIndex - 1] = tmp;
	    
	    P.elements[k - 1][k - 1] = 0;
	    P.elements[k - 1][maxIndex - 1] = 1;
	    P.elements[maxIndex - 1][maxIndex - 1] = 0;
	    P.elements[maxIndex - 1][k - 1] = 1;
	}
	
	return P;
    },

    // solve lower-triangular matrix * x = b via forward substitution
    forwardSubstitute: function(b) {
	var xa = [];

	for(var i = 1; i <= this.rows(); i++) {
	    var w = 0;

	    for(var j = 1; j < i; j++) {
		w += this.e(i, j) * xa[j - 1];
	    }

	    xa.push((b.e(i) - w) / this.e(i, i));
	}

	return $V(xa);
    },

    // solve an upper-triangular matrix * x = b via back substitution
    backSubstitute: function(b) {
	var xa = [];

	for(var i = this.rows(); i > 0; i--) {
	    var w = 0;

	    for(var j = this.cols(); j > i; j--) {
		w += this.e(i, j) * xa[this.rows() - j];
	    }

	    xa.push((b.e(i) - w) / this.e(i, i));
	}

	return $V(xa.reverse());
    },
    
    luPack: luPack,
    luJs: luJs,
    svdJs: svdJs,
    svdPack: svdPack,
    qrJs: qrJs,
    qrPack: qrPack
};

// LU factorization from LAPACK
function luPack() {
    var lu = lapack.lu(this.elements);
    return {
	L: $M(lu.L),
	U: $M(lu.U),
	P: $M(lu.P)
	// don't pass back IPIV
    };
}

var tolerance =  1.4901e-08;

// pure Javascript LU factorization
function luJs() {
    var A = this.dup();
    var L = Matrix.I(A.rows());
    var P = Matrix.I(A.rows());
    var U = Matrix.Zeros(A.rows(), A.cols());
    var p = 1;

    for(var k = 1; k <= Math.min(A.cols(), A.rows()); k++) {
	P = A.partialPivot(k, p, P, A, L);
	
	for(var i = k + 1; i <= A.rows(); i++) {
	    var l = A.e(i, p) / A.e(k, p);
	    L.elements[i - 1][k - 1] = l;
	    
	    for(var j = k + 1 ; j <= A.cols(); j++) {
		A.elements[i - 1][j - 1] -= A.e(k, j) * l;
	    }
	}
	
	for(var j = k; j <= A.cols(); j++) {
	    U.elements[k - 1][j - 1] = A.e(k, j);
	}

	if(p < A.cols())
	    p++;
    }    
    
    return {L: L, U: U, P: P};
}

function getLapack() {
    try {
	return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'lapack'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch(e) {}
}

var lapack;

// if node-lapack is installed use the fast, native fortran routines
if(lapack = getLapack()) {
    Matrix.prototype.svd = svdPack;
    Matrix.prototype.qr = qrPack;
    Matrix.prototype.lu = luPack;
} else {
    // otherwise use the slower pure Javascript versions
    Matrix.prototype.svd = svdJs;
    Matrix.prototype.qr = qrJs;
    Matrix.prototype.lu = luJs;
}

// Constructor function
Matrix.create = function(aElements, ignoreLapack) {
    var M = new Matrix().setElements(aElements);
    return M;
};

// Identity matrix of size n
Matrix.I = function(n) {
    var els = [], i = n, j;
    while (i--) {
	j = n;
	els[i] = [];
	while (j--) {
	    els[i][j] = (i == j) ? 1 : 0;
	}
    }
    return Matrix.create(els);
};

Matrix.loadFile = function(file) {
    var contents = fs.readFileSync(file, 'utf-8');
    var matrix = [];

    var rowArray = contents.split('\n');
    for (var i = 0; i < rowArray.length; i++) {
	var d = rowArray[i].split(',');
	if (d.length > 1) {
	    matrix.push(d);
	}
    }

    var M = new Matrix();
    return M.setElements(matrix);
};

// Diagonal matrix - all off-diagonal elements are zero
Matrix.Diagonal = function(elements) {
    var i = elements.length;
    var M = Matrix.I(i);
    while (i--) {
	M.elements[i][i] = elements[i];
    }
    return M;
};

// Rotation matrix about some axis. If no axis is
// supplied, assume we're after a 2D transform
Matrix.Rotation = function(theta, a) {
    if (!a) {
	return Matrix.create([
	    [Math.cos(theta), -Math.sin(theta)],
	    [Math.sin(theta), Math.cos(theta)]
	]);
    }
    var axis = a.dup();
    if (axis.elements.length != 3) { return null; }
    var mod = axis.modulus();
    var x = axis.elements[0] / mod, y = axis.elements[1] / mod, z = axis.elements[2] / mod;
    var s = Math.sin(theta), c = Math.cos(theta), t = 1 - c;
    // Formula derived here: http://www.gamedev.net/reference/articles/article1199.asp
    // That proof rotates the co-ordinate system so theta
    // becomes -theta and sin becomes -sin here.
    return Matrix.create([
	[t * x * x + c, t * x * y - s * z, t * x * z + s * y],
	[t * x * y + s * z, t * y * y + c, t * y * z - s * x],
	[t * x * z - s * y, t * y * z + s * x, t * z * z + c]
    ]);
};

// Special case rotations
Matrix.RotationX = function(t) {
    var c = Math.cos(t), s = Math.sin(t);
    return Matrix.create([
	[1, 0, 0],
	[0, c, -s],
	[0, s, c]
    ]);
};

Matrix.RotationY = function(t) {
    var c = Math.cos(t), s = Math.sin(t);
    return Matrix.create([
	[c, 0, s],
	[0, 1, 0],
	[-s, 0, c]
    ]);
};

Matrix.RotationZ = function(t) {
    var c = Math.cos(t), s = Math.sin(t);
    return Matrix.create([
	[c, -s, 0],
	[s, c, 0],
	[0, 0, 1]
    ]);
};

// Random matrix of n rows, m columns
Matrix.Random = function(n, m) {
    if (arguments.length === 1) m = n;
    return Matrix.Zero(n, m).map(
	function() { return Math.random(); }
  );
};

Matrix.Fill = function(n, m, v) {
    if (arguments.length === 2) {
	v = m;
	m = n;
    }

    var els = [], i = n, j;

    while (i--) {
	j = m;
	els[i] = [];

	while (j--) {
	    els[i][j] = v;
	}
    }

    return Matrix.create(els);
};

// Matrix filled with zeros
Matrix.Zero = function(n, m) {
    return Matrix.Fill(n, m, 0);
};

// Matrix filled with zeros
Matrix.Zeros = function(n, m) {
    return Matrix.Zero(n, m);
};

// Matrix filled with ones
Matrix.One = function(n, m) {
    return Matrix.Fill(n, m, 1);
};

// Matrix filled with ones
Matrix.Ones = function(n, m) {
    return Matrix.One(n, m);
};

module.exports = Matrix;


/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/plane.js":
/*!************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/plane.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2011, Chris Umbel, James Coglan
// Plane class - depends on Vector. Some methods require Matrix and Line.
var Vector = __webpack_require__(/*! ./vector */ "./node_modules/sylvester/lib/node-sylvester/vector.js");
var Matrix = __webpack_require__(/*! ./matrix */ "./node_modules/sylvester/lib/node-sylvester/matrix.js");
var Line = __webpack_require__(/*! ./line */ "./node_modules/sylvester/lib/node-sylvester/line.js");

var Sylvester = __webpack_require__(/*! ./sylvester */ "./node_modules/sylvester/lib/node-sylvester/sylvester.js");

function Plane() {}
Plane.prototype = {

  // Returns true iff the plane occupies the same space as the argument
  eql: function(plane) {
    return (this.contains(plane.anchor) && this.isParallelTo(plane));
  },

  // Returns a copy of the plane
  dup: function() {
    return Plane.create(this.anchor, this.normal);
  },

  // Returns the result of translating the plane by the given vector
  translate: function(vector) {
    var V = vector.elements || vector;
    return Plane.create([
      this.anchor.elements[0] + V[0],
      this.anchor.elements[1] + V[1],
      this.anchor.elements[2] + (V[2] || 0)
    ], this.normal);
  },

  // Returns true iff the plane is parallel to the argument. Will return true
  // if the planes are equal, or if you give a line and it lies in the plane.
  isParallelTo: function(obj) {
    var theta;
    if (obj.normal) {
      // obj is a plane
      theta = this.normal.angleFrom(obj.normal);
      return (Math.abs(theta) <= Sylvester.precision || Math.abs(Math.PI - theta) <= Sylvester.precision);
    } else if (obj.direction) {
      // obj is a line
      return this.normal.isPerpendicularTo(obj.direction);
    }
    return null;
  },

  // Returns true iff the receiver is perpendicular to the argument
  isPerpendicularTo: function(plane) {
    var theta = this.normal.angleFrom(plane.normal);
    return (Math.abs(Math.PI/2 - theta) <= Sylvester.precision);
  },

  // Returns the plane's distance from the given object (point, line or plane)
  distanceFrom: function(obj) {
    if (this.intersects(obj) || this.contains(obj)) { return 0; }
    if (obj.anchor) {
      // obj is a plane or line
      var A = this.anchor.elements, B = obj.anchor.elements, N = this.normal.elements;
      return Math.abs((A[0] - B[0]) * N[0] + (A[1] - B[1]) * N[1] + (A[2] - B[2]) * N[2]);
    } else {
      // obj is a point
      var P = obj.elements || obj;
      var A = this.anchor.elements, N = this.normal.elements;
      return Math.abs((A[0] - P[0]) * N[0] + (A[1] - P[1]) * N[1] + (A[2] - (P[2] || 0)) * N[2]);
    }
  },

  // Returns true iff the plane contains the given point or line
  contains: function(obj) {
    if (obj.normal) { return null; }
    if (obj.direction) {
      return (this.contains(obj.anchor) && this.contains(obj.anchor.add(obj.direction)));
    } else {
      var P = obj.elements || obj;
      var A = this.anchor.elements, N = this.normal.elements;
      var diff = Math.abs(N[0]*(A[0] - P[0]) + N[1]*(A[1] - P[1]) + N[2]*(A[2] - (P[2] || 0)));
      return (diff <= Sylvester.precision);
    }
  },

  // Returns true iff the plane has a unique point/line of intersection with the argument
  intersects: function(obj) {
    if (typeof(obj.direction) == 'undefined' && typeof(obj.normal) == 'undefined') { return null; }
    return !this.isParallelTo(obj);
  },

  // Returns the unique intersection with the argument, if one exists. The result
  // will be a vector if a line is supplied, and a line if a plane is supplied.
  intersectionWith: function(obj) {
    if (!this.intersects(obj)) { return null; }
    if (obj.direction) {
      // obj is a line
      var A = obj.anchor.elements, D = obj.direction.elements,
          P = this.anchor.elements, N = this.normal.elements;
      var multiplier = (N[0]*(P[0]-A[0]) + N[1]*(P[1]-A[1]) + N[2]*(P[2]-A[2])) / (N[0]*D[0] + N[1]*D[1] + N[2]*D[2]);
      return Vector.create([A[0] + D[0]*multiplier, A[1] + D[1]*multiplier, A[2] + D[2]*multiplier]);
    } else if (obj.normal) {
      // obj is a plane
      var direction = this.normal.cross(obj.normal).toUnitVector();
      // To find an anchor point, we find one co-ordinate that has a value
      // of zero somewhere on the intersection, and remember which one we picked
      var N = this.normal.elements, A = this.anchor.elements,
          O = obj.normal.elements, B = obj.anchor.elements;
      var solver = Matrix.Zero(2,2), i = 0;
      while (solver.isSingular()) {
        i++;
        solver = Matrix.create([
          [ N[i%3], N[(i+1)%3] ],
          [ O[i%3], O[(i+1)%3]  ]
        ]);
      }
      // Then we solve the simultaneous equations in the remaining dimensions
      var inverse = solver.inverse().elements;
      var x = N[0]*A[0] + N[1]*A[1] + N[2]*A[2];
      var y = O[0]*B[0] + O[1]*B[1] + O[2]*B[2];
      var intersection = [
        inverse[0][0] * x + inverse[0][1] * y,
        inverse[1][0] * x + inverse[1][1] * y
      ];
      var anchor = [];
      for (var j = 1; j <= 3; j++) {
        // This formula picks the right element from intersection by
        // cycling depending on which element we set to zero above
        anchor.push((i == j) ? 0 : intersection[(j + (5 - i)%3)%3]);
      }
      return Line.create(anchor, direction);
    }
  },

  // Returns the point in the plane closest to the given point
  pointClosestTo: function(point) {
    var P = point.elements || point;
    var A = this.anchor.elements, N = this.normal.elements;
    var dot = (A[0] - P[0]) * N[0] + (A[1] - P[1]) * N[1] + (A[2] - (P[2] || 0)) * N[2];
    return Vector.create([P[0] + N[0] * dot, P[1] + N[1] * dot, (P[2] || 0) + N[2] * dot]);
  },

  // Returns a copy of the plane, rotated by t radians about the given line
  // See notes on Line#rotate.
  rotate: function(t, line) {
    var R = t.determinant ? t.elements : Matrix.Rotation(t, line.direction).elements;
    var C = line.pointClosestTo(this.anchor).elements;
    var A = this.anchor.elements, N = this.normal.elements;
    var C1 = C[0], C2 = C[1], C3 = C[2], A1 = A[0], A2 = A[1], A3 = A[2];
    var x = A1 - C1, y = A2 - C2, z = A3 - C3;
    return Plane.create([
      C1 + R[0][0] * x + R[0][1] * y + R[0][2] * z,
      C2 + R[1][0] * x + R[1][1] * y + R[1][2] * z,
      C3 + R[2][0] * x + R[2][1] * y + R[2][2] * z
    ], [
      R[0][0] * N[0] + R[0][1] * N[1] + R[0][2] * N[2],
      R[1][0] * N[0] + R[1][1] * N[1] + R[1][2] * N[2],
      R[2][0] * N[0] + R[2][1] * N[1] + R[2][2] * N[2]
    ]);
  },

  // Returns the reflection of the plane in the given point, line or plane.
  reflectionIn: function(obj) {
    if (obj.normal) {
      // obj is a plane
      var A = this.anchor.elements, N = this.normal.elements;
      var A1 = A[0], A2 = A[1], A3 = A[2], N1 = N[0], N2 = N[1], N3 = N[2];
      var newA = this.anchor.reflectionIn(obj).elements;
      // Add the plane's normal to its anchor, then mirror that in the other plane
      var AN1 = A1 + N1, AN2 = A2 + N2, AN3 = A3 + N3;
      var Q = obj.pointClosestTo([AN1, AN2, AN3]).elements;
      var newN = [Q[0] + (Q[0] - AN1) - newA[0], Q[1] + (Q[1] - AN2) - newA[1], Q[2] + (Q[2] - AN3) - newA[2]];
      return Plane.create(newA, newN);
    } else if (obj.direction) {
      // obj is a line
      return this.rotate(Math.PI, obj);
    } else {
      // obj is a point
      var P = obj.elements || obj;
      return Plane.create(this.anchor.reflectionIn([P[0], P[1], (P[2] || 0)]), this.normal);
    }
  },

  // Sets the anchor point and normal to the plane. If three arguments are specified,
  // the normal is calculated by assuming the three points should lie in the same plane.
  // If only two are sepcified, the second is taken to be the normal. Normal vector is
  // normalised before storage.
  setVectors: function(anchor, v1, v2) {
    anchor = Vector.create(anchor);
    anchor = anchor.to3D(); if (anchor === null) { return null; }
    v1 = Vector.create(v1);
    v1 = v1.to3D(); if (v1 === null) { return null; }
    if (typeof(v2) == 'undefined') {
      v2 = null;
    } else {
      v2 = Vector.create(v2);
      v2 = v2.to3D(); if (v2 === null) { return null; }
    }
    var A1 = anchor.elements[0], A2 = anchor.elements[1], A3 = anchor.elements[2];
    var v11 = v1.elements[0], v12 = v1.elements[1], v13 = v1.elements[2];
    var normal, mod;
    if (v2 !== null) {
      var v21 = v2.elements[0], v22 = v2.elements[1], v23 = v2.elements[2];
      normal = Vector.create([
        (v12 - A2) * (v23 - A3) - (v13 - A3) * (v22 - A2),
        (v13 - A3) * (v21 - A1) - (v11 - A1) * (v23 - A3),
        (v11 - A1) * (v22 - A2) - (v12 - A2) * (v21 - A1)
      ]);
      mod = normal.modulus();
      if (mod === 0) { return null; }
      normal = Vector.create([normal.elements[0] / mod, normal.elements[1] / mod, normal.elements[2] / mod]);
    } else {
      mod = Math.sqrt(v11*v11 + v12*v12 + v13*v13);
      if (mod === 0) { return null; }
      normal = Vector.create([v1.elements[0] / mod, v1.elements[1] / mod, v1.elements[2] / mod]);
    }
    this.anchor = anchor;
    this.normal = normal;
    return this;
  }
};

// Constructor function
Plane.create = function(anchor, v1, v2) {
  var P = new Plane();
  return P.setVectors(anchor, v1, v2);
};

// X-Y-Z planes
Plane.XY = Plane.create(Vector.Zero(3), Vector.k);
Plane.YZ = Plane.create(Vector.Zero(3), Vector.i);
Plane.ZX = Plane.create(Vector.Zero(3), Vector.j);
Plane.YX = Plane.XY; Plane.ZY = Plane.YZ; Plane.XZ = Plane.ZX;

// Returns the plane containing the given points (can be arrays as
// well as vectors). If the points are not coplanar, returns null.
Plane.fromPoints = function(points) {
  var np = points.length, list = [], i, P, n, N, A, B, C, D, theta, prevN, totalN = Vector.Zero(3);
  for (i = 0; i < np; i++) {
    P = Vector.create(points[i]).to3D();
    if (P === null) { return null; }
    list.push(P);
    n = list.length;
    if (n > 2) {
      // Compute plane normal for the latest three points
      A = list[n-1].elements; B = list[n-2].elements; C = list[n-3].elements;
      N = Vector.create([
        (A[1] - B[1]) * (C[2] - B[2]) - (A[2] - B[2]) * (C[1] - B[1]),
        (A[2] - B[2]) * (C[0] - B[0]) - (A[0] - B[0]) * (C[2] - B[2]),
        (A[0] - B[0]) * (C[1] - B[1]) - (A[1] - B[1]) * (C[0] - B[0])
      ]).toUnitVector();
      if (n > 3) {
        // If the latest normal is not (anti)parallel to the previous one, we've strayed off the plane.
        // This might be a slightly long-winded way of doing things, but we need the sum of all the normals
        // to find which way the plane normal should point so that the points form an anticlockwise list.
        theta = N.angleFrom(prevN);
        if (theta !== null) {
          if (!(Math.abs(theta) <= Sylvester.precision || Math.abs(theta - Math.PI) <= Sylvester.precision)) { return null; }
        }
      }
      totalN = totalN.add(N);
      prevN = N;
    }
  }
  // We need to add in the normals at the start and end points, which the above misses out
  A = list[1].elements; B = list[0].elements; C = list[n-1].elements; D = list[n-2].elements;
  totalN = totalN.add(Vector.create([
    (A[1] - B[1]) * (C[2] - B[2]) - (A[2] - B[2]) * (C[1] - B[1]),
    (A[2] - B[2]) * (C[0] - B[0]) - (A[0] - B[0]) * (C[2] - B[2]),
    (A[0] - B[0]) * (C[1] - B[1]) - (A[1] - B[1]) * (C[0] - B[0])
  ]).toUnitVector()).add(Vector.create([
    (B[1] - C[1]) * (D[2] - C[2]) - (B[2] - C[2]) * (D[1] - C[1]),
    (B[2] - C[2]) * (D[0] - C[0]) - (B[0] - C[0]) * (D[2] - C[2]),
    (B[0] - C[0]) * (D[1] - C[1]) - (B[1] - C[1]) * (D[0] - C[0])
  ]).toUnitVector());
  return Plane.create(list[0], totalN);
};

module.exports = Plane;


/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/sylvester.js":
/*!****************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/sylvester.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright (c) 2011, Chris Umbel, James Coglan
// This file is required in order for any other classes to work. Some Vector methods work with the
// other Sylvester classes and are useless unless they are included. Other classes such as Line and
// Plane will not function at all without Vector being loaded first.           

Math.sign = function(x) {
    return x < 0 ? -1: 1;
}
                                              
var Sylvester = {
    precision: 1e-6,
    approxPrecision: 1e-5
};

module.exports = Sylvester;


/***/ }),

/***/ "./node_modules/sylvester/lib/node-sylvester/vector.js":
/*!*************************************************************!*\
  !*** ./node_modules/sylvester/lib/node-sylvester/vector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2011, Chris Umbel, James Coglan
// This file is required in order for any other classes to work. Some Vector methods work with the
// other Sylvester classes and are useless unless they are included. Other classes such as Line and
// Plane will not function at all without Vector being loaded first.

var Sylvester = __webpack_require__(/*! ./sylvester */ "./node_modules/sylvester/lib/node-sylvester/sylvester.js"),
Matrix = __webpack_require__(/*! ./matrix */ "./node_modules/sylvester/lib/node-sylvester/matrix.js");

function Vector() {}
Vector.prototype = {

    norm: function() {
	var n = this.elements.length;
	var sum = 0;

	while (n--) {
	    sum += Math.pow(this.elements[n], 2);
	}

	return Math.sqrt(sum);
    },

    // Returns element i of the vector
    e: function(i) {
      return (i < 1 || i > this.elements.length) ? null : this.elements[i - 1];
    },

    // Returns the number of rows/columns the vector has
    dimensions: function() {
      return {rows: 1, cols: this.elements.length};
    },

    // Returns the number of rows in the vector
    rows: function() {
      return 1;
    },

    // Returns the number of columns in the vector
    cols: function() {
      return this.elements.length;
    },

    // Returns the modulus ('length') of the vector
    modulus: function() {
      return Math.sqrt(this.dot(this));
    },

    // Returns true iff the vector is equal to the argument
    eql: function(vector) {
    	var n = this.elements.length;
    	var V = vector.elements || vector;
    	if (n != V.length) { return false; }
    	while (n--) {
    	    if (Math.abs(this.elements[n] - V[n]) > Sylvester.precision) { return false; }
    	}
    	return true;
    },

    // Returns a copy of the vector
    dup: function() {
	    return Vector.create(this.elements);
    },

    // Maps the vector to another vector according to the given function
    map: function(fn) {
	var elements = [];
	this.each(function(x, i) {
	    elements.push(fn(x, i));
	});
	return Vector.create(elements);
    },

    // Calls the iterator for each element of the vector in turn
    each: function(fn) {
	var n = this.elements.length;
	for (var i = 0; i < n; i++) {
	    fn(this.elements[i], i + 1);
	}
    },

    // Returns a new vector created by normalizing the receiver
    toUnitVector: function() {
	var r = this.modulus();
	if (r === 0) { return this.dup(); }
	return this.map(function(x) { return x / r; });
    },

    // Returns the angle between the vector and the argument (also a vector)
    angleFrom: function(vector) {
	var V = vector.elements || vector;
	var n = this.elements.length, k = n, i;
	if (n != V.length) { return null; }
	var dot = 0, mod1 = 0, mod2 = 0;
	// Work things out in parallel to save time
	this.each(function(x, i) {
	    dot += x * V[i - 1];
	    mod1 += x * x;
	    mod2 += V[i - 1] * V[i - 1];
	});
	mod1 = Math.sqrt(mod1); mod2 = Math.sqrt(mod2);
	if (mod1 * mod2 === 0) { return null; }
	var theta = dot / (mod1 * mod2);
	if (theta < -1) { theta = -1; }
	if (theta > 1) { theta = 1; }
	return Math.acos(theta);
    },

    // Returns true iff the vector is parallel to the argument
    isParallelTo: function(vector) {
	var angle = this.angleFrom(vector);
	return (angle === null) ? null : (angle <= Sylvester.precision);
    },

    // Returns true iff the vector is antiparallel to the argument
    isAntiparallelTo: function(vector) {
	var angle = this.angleFrom(vector);
	return (angle === null) ? null : (Math.abs(angle - Math.PI) <= Sylvester.precision);
    },

    // Returns true iff the vector is perpendicular to the argument
    isPerpendicularTo: function(vector) {
	var dot = this.dot(vector);
	return (dot === null) ? null : (Math.abs(dot) <= Sylvester.precision);
    },

    // Returns the result of adding the argument to the vector
    add: function(value) {
	var V = value.elements || value;

	if (this.elements.length != V.length) 
	    return this.map(function(v) { return v + value });
	else
	    return this.map(function(x, i) { return x + V[i - 1]; });
    },

    // Returns the result of subtracting the argument from the vector
    subtract: function(v) {
	if (typeof(v) == 'number')
	    return this.map(function(k) { return k - v; });

	var V = v.elements || v;
	if (this.elements.length != V.length) { return null; }
	return this.map(function(x, i) { return x - V[i - 1]; });
    },

    // Returns the result of multiplying the elements of the vector by the argument
    multiply: function(k) {
	return this.map(function(x) { return x * k; });
    },

    elementMultiply: function(v) {
	return this.map(function(k, i) {
	    return v.e(i) * k;
	});
    },

    sum: function() {
	var sum = 0;
	this.map(function(x) { sum += x;});
	return sum;
    },

    chomp: function(n) {
	var elements = [];

	for (var i = n; i < this.elements.length; i++) {
	    elements.push(this.elements[i]);
	}

	return Vector.create(elements);
    },

    top: function(n) {
	var elements = [];

	for (var i = 0; i < n; i++) {
	    elements.push(this.elements[i]);
	}

	return Vector.create(elements);
    },

    augment: function(elements) {
	var newElements = this.elements;

	for (var i = 0; i < elements.length; i++) {
	    newElements.push(elements[i]);
	}

	return Vector.create(newElements);
    },

    x: function(k) { return this.multiply(k); },

    log: function() {
	return Vector.log(this);
    },

    elementDivide: function(vector) {
	return this.map(function(v, i) {
	    return v / vector.e(i);
	});
    },

    product: function() {
	var p = 1;

	this.map(function(v) {
	    p *= v;
	});

	return p;
    },

    // Returns the scalar product of the vector with the argument
    // Both vectors must have equal dimensionality
    dot: function(vector) {
	var V = vector.elements || vector;
	var i, product = 0, n = this.elements.length;	
	if (n != V.length) { return null; }
	while (n--) { product += this.elements[n] * V[n]; }
	return product;
    },

    // Returns the vector product of the vector with the argument
    // Both vectors must have dimensionality 3
    cross: function(vector) {
	var B = vector.elements || vector;
	if (this.elements.length != 3 || B.length != 3) { return null; }
	var A = this.elements;
	return Vector.create([
	    (A[1] * B[2]) - (A[2] * B[1]),
	    (A[2] * B[0]) - (A[0] * B[2]),
	    (A[0] * B[1]) - (A[1] * B[0])
	]);
    },

    // Returns the (absolute) largest element of the vector
    max: function() {
	var m = 0, i = this.elements.length;
	while (i--) {
	    if (Math.abs(this.elements[i]) > Math.abs(m)) { m = this.elements[i]; }
	}
	return m;
    },


    maxIndex: function() {
	var m = 0, i = this.elements.length;
	var maxIndex = -1;

	while (i--) {
	    if (Math.abs(this.elements[i]) > Math.abs(m)) { 
		m = this.elements[i]; 
		maxIndex = i + 1;
	    }
	}

	return maxIndex;
    },


    // Returns the index of the first match found
    indexOf: function(x) {
	var index = null, n = this.elements.length;
	for (var i = 0; i < n; i++) {
	    if (index === null && this.elements[i] == x) {
		index = i + 1;
	    }
	}
	return index;
    },

    // Returns a diagonal matrix with the vector's elements as its diagonal elements
    toDiagonalMatrix: function() {
	return Matrix.Diagonal(this.elements);
    },

    // Returns the result of rounding the elements of the vector
    round: function() {
	return this.map(function(x) { return Math.round(x); });
    },

    // Transpose a Vector, return a 1xn Matrix
    transpose: function() {
	var rows = this.elements.length;
	var elements = [];

	for (var i = 0; i < rows; i++) {
	    elements.push([this.elements[i]]);
	}
	return Matrix.create(elements);
    },

    // Returns a copy of the vector with elements set to the given value if they
    // differ from it by less than Sylvester.precision
    snapTo: function(x) {
	return this.map(function(y) {
	    return (Math.abs(y - x) <= Sylvester.precision) ? x : y;
	});
    },

    // Returns the vector's distance from the argument, when considered as a point in space
    distanceFrom: function(obj) {
	if (obj.anchor || (obj.start && obj.end)) { return obj.distanceFrom(this); }
	var V = obj.elements || obj;
	if (V.length != this.elements.length) { return null; }
	var sum = 0, part;
	this.each(function(x, i) {
	    part = x - V[i - 1];
	    sum += part * part;
	});
	return Math.sqrt(sum);
    },

    // Returns true if the vector is point on the given line
    liesOn: function(line) {
	return line.contains(this);
    },

    // Return true iff the vector is a point in the given plane
    liesIn: function(plane) {
	return plane.contains(this);
    },

    // Rotates the vector about the given object. The object should be a
    // point if the vector is 2D, and a line if it is 3D. Be careful with line directions!
    rotate: function(t, obj) {
	var V, R = null, x, y, z;
	if (t.determinant) { R = t.elements; }
	switch (this.elements.length) {
	case 2:
            V = obj.elements || obj;
            if (V.length != 2) { return null; }
            if (!R) { R = Matrix.Rotation(t).elements; }
            x = this.elements[0] - V[0];
            y = this.elements[1] - V[1];
            return Vector.create([
		V[0] + R[0][0] * x + R[0][1] * y,
		V[1] + R[1][0] * x + R[1][1] * y
            ]);
            break;
	case 3:
            if (!obj.direction) { return null; }
            var C = obj.pointClosestTo(this).elements;
            if (!R) { R = Matrix.Rotation(t, obj.direction).elements; }
            x = this.elements[0] - C[0];
            y = this.elements[1] - C[1];
            z = this.elements[2] - C[2];
            return Vector.create([
		C[0] + R[0][0] * x + R[0][1] * y + R[0][2] * z,
		C[1] + R[1][0] * x + R[1][1] * y + R[1][2] * z,
		C[2] + R[2][0] * x + R[2][1] * y + R[2][2] * z
            ]);
            break;
	default:
            return null;
	}
    },

    // Returns the result of reflecting the point in the given point, line or plane
    reflectionIn: function(obj) {
	if (obj.anchor) {
	    // obj is a plane or line
	    var P = this.elements.slice();
	    var C = obj.pointClosestTo(P).elements;
	    return Vector.create([C[0] + (C[0] - P[0]), C[1] + (C[1] - P[1]), C[2] + (C[2] - (P[2] || 0))]);
	} else {
	    // obj is a point
	    var Q = obj.elements || obj;
	    if (this.elements.length != Q.length) { return null; }
	    return this.map(function(x, i) { return Q[i - 1] + (Q[i - 1] - x); });
	}
    },

    // Utility to make sure vectors are 3D. If they are 2D, a zero z-component is added
    to3D: function() {
	var V = this.dup();
	switch (V.elements.length) {
	case 3: break;
	case 2: V.elements.push(0); break;
	default: return null;
	}
	return V;
    },

    // Returns a string representation of the vector
    inspect: function() {
	return '[' + this.elements.join(', ') + ']';
    },

    // Set vector's elements from an array
    setElements: function(els) {
	this.elements = (els.elements || els).slice();
	return this;
    }
};

// Constructor function
Vector.create = function(elements) {
    var V = new Vector();
    return V.setElements(elements);
};

// i, j, k unit vectors
Vector.i = Vector.create([1, 0, 0]);
Vector.j = Vector.create([0, 1, 0]);
Vector.k = Vector.create([0, 0, 1]);

// Random vector of size n
Vector.Random = function(n) {
    var elements = [];
    while (n--) { elements.push(Math.random()); }
    return Vector.create(elements);
};

Vector.Fill = function(n, v) {
    var elements = [];
    while (n--) { elements.push(v); }
    return Vector.create(elements);
};

// Vector filled with zeros
Vector.Zero = function(n) {
    return Vector.Fill(n, 0);
};

Vector.One = function(n) {
    return Vector.Fill(n, 1);
};

Vector.log = function(v) {
    return v.map(function(x) {
	return Math.log(x);
    });
};

module.exports = Vector;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bHZlc3Rlci9saWIvbm9kZS1zeWx2ZXN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bHZlc3Rlci9saWIvbm9kZS1zeWx2ZXN0ZXIvbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3lsdmVzdGVyL2xpYi9ub2RlLXN5bHZlc3Rlci9saW5lLnNlZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bHZlc3Rlci9saWIvbm9kZS1zeWx2ZXN0ZXIvbWF0cml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeWx2ZXN0ZXIvbGliL25vZGUtc3lsdmVzdGVyL3BsYW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeWx2ZXN0ZXIvbGliL25vZGUtc3lsdmVzdGVyL3N5bHZlc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3lsdmVzdGVyL2xpYi9ub2RlLXN5bHZlc3Rlci92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgU3lsdmVzdGVyID0gcmVxdWlyZSgnc3lsdmVzdGVyJyk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIHRlc3RTeWx2ZXN0ZXJKc0xpYnJhcnkoKTtcclxufTtcclxuXHJcbmxldCB0ZXN0U3lsdmVzdGVySnNMaWJyYXJ5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHUgPSBTeWx2ZXN0ZXIuVmVjdG9yLmNyZWF0ZShbMSwgMiwgM10pO1xyXG4gIGNvbnN0IHYgPSBTeWx2ZXN0ZXIuVmVjdG9yLmNyZWF0ZShbNCwgNSwgNl0pO1xyXG5cclxuICBjb25zdCBzID0gdS5hZGQodik7XHJcbiAgYWxlcnQocy5pbnNwZWN0KCkpO1xyXG5cclxuICBjb25zdCBkID0gdS5kb3Qodik7XHJcbiAgYWxlcnQoZCk7XHJcblxyXG4gIGNvbnN0IGMgPSB1LmNyb3NzKHYpO1xyXG4gIGFsZXJ0KGMuaW5zcGVjdCgpKTtcclxuXHJcbiAgY29uc3QgTSA9IFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKFtbMiwgLTFdLCBbLTIsIDFdLCBbLTEsIDJdXSk7XHJcbiAgY29uc3QgTiA9IFN5bHZlc3Rlci5NYXRyaXguY3JlYXRlKFtbNCwgLTNdLCBbMywgNV1dKTtcclxuXHJcbiAgY29uc3QgTU4gPSBNLm11bHRpcGx5KE4pO1xyXG4gIGFsZXJ0KE1OLmluc3BlY3QoKSk7XHJcblxyXG4gIGNvbnN0IEkgPSBTeWx2ZXN0ZXIuTWF0cml4LkkoNCk7XHJcbiAgYWxlcnQoSS5pbnNwZWN0KCkpO1xyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTEsIENocmlzIFVtYmVsXG5cbmV4cG9ydHMuVmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbmdsb2JhbC4kViA9IGV4cG9ydHMuVmVjdG9yLmNyZWF0ZTtcbmV4cG9ydHMuTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgnKTtcbmdsb2JhbC4kTSA9IGV4cG9ydHMuTWF0cml4LmNyZWF0ZTtcbmV4cG9ydHMuTGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xuZ2xvYmFsLiRMID0gZXhwb3J0cy5MaW5lLmNyZWF0ZTtcbmV4cG9ydHMuUGxhbmUgPSByZXF1aXJlKCcuL3BsYW5lJyk7XG5nbG9iYWwuJFAgPSBleHBvcnRzLlBsYW5lLmNyZWF0ZTtcbmV4cG9ydHMuTGluZS5TZWdtZW50ID0gcmVxdWlyZSgnLi9saW5lLnNlZ21lbnQnKTtcbmV4cG9ydHMuU3lsdmVzdGVyID0gcmVxdWlyZSgnLi9zeWx2ZXN0ZXInKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxMSwgQ2hyaXMgVW1iZWwsIEphbWVzIENvZ2xhblxudmFyIFZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgnKTtcbnZhciBQbGFuZSA9IHJlcXVpcmUoJy4vcGxhbmUnKTtcbnZhciBTeWx2ZXN0ZXIgPSByZXF1aXJlKCcuL3N5bHZlc3RlcicpO1xuXG4vLyBMaW5lIGNsYXNzIC0gZGVwZW5kcyBvbiBWZWN0b3IsIGFuZCBzb21lIG1ldGhvZHMgcmVxdWlyZSBNYXRyaXggYW5kIFBsYW5lLlxuXG5mdW5jdGlvbiBMaW5lKCkge31cbkxpbmUucHJvdG90eXBlID0ge1xuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgb2NjdXBpZXMgdGhlIHNhbWUgc3BhY2UgYXMgdGhlIGxpbmVcbiAgZXFsOiBmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuICh0aGlzLmlzUGFyYWxsZWxUbyhsaW5lKSAmJiB0aGlzLmNvbnRhaW5zKGxpbmUuYW5jaG9yKSk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIGNvcHkgb2YgdGhlIGxpbmVcbiAgZHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTGluZS5jcmVhdGUodGhpcy5hbmNob3IsIHRoaXMuZGlyZWN0aW9uKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdHJhbnNsYXRpbmcgdGhlIGxpbmUgYnkgdGhlIGdpdmVuIHZlY3Rvci9hcnJheVxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgIHZhciBWID0gdmVjdG9yLmVsZW1lbnRzIHx8IHZlY3RvcjtcbiAgICByZXR1cm4gTGluZS5jcmVhdGUoW1xuICAgICAgdGhpcy5hbmNob3IuZWxlbWVudHNbMF0gKyBWWzBdLFxuICAgICAgdGhpcy5hbmNob3IuZWxlbWVudHNbMV0gKyBWWzFdLFxuICAgICAgdGhpcy5hbmNob3IuZWxlbWVudHNbMl0gKyAoVlsyXSB8fCAwKVxuICAgIF0sIHRoaXMuZGlyZWN0aW9uKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGxpbmUgaXMgcGFyYWxsZWwgdG8gdGhlIGFyZ3VtZW50LiBIZXJlLCAncGFyYWxsZWwgdG8nXG4gIC8vIG1lYW5zIHRoYXQgdGhlIGFyZ3VtZW50J3MgZGlyZWN0aW9uIGlzIGVpdGhlciBwYXJhbGxlbCBvciBhbnRpcGFyYWxsZWwgdG9cbiAgLy8gdGhlIGxpbmUncyBvd24gZGlyZWN0aW9uLiBBIGxpbmUgaXMgcGFyYWxsZWwgdG8gYSBwbGFuZSBpZiB0aGUgdHdvIGRvIG5vdFxuICAvLyBoYXZlIGEgdW5pcXVlIGludGVyc2VjdGlvbi5cbiAgaXNQYXJhbGxlbFRvOiBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqLm5vcm1hbCB8fCAob2JqLnN0YXJ0ICYmIG9iai5lbmQpKSB7IHJldHVybiBvYmouaXNQYXJhbGxlbFRvKHRoaXMpOyB9XG4gICAgdmFyIHRoZXRhID0gdGhpcy5kaXJlY3Rpb24uYW5nbGVGcm9tKG9iai5kaXJlY3Rpb24pO1xuICAgIHJldHVybiAoTWF0aC5hYnModGhldGEpIDw9IFN5bHZlc3Rlci5wcmVjaXNpb24gfHwgTWF0aC5hYnModGhldGEgLSBNYXRoLlBJKSA8PSBTeWx2ZXN0ZXIucHJlY2lzaW9uKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSBsaW5lJ3MgcGVycGVuZGljdWxhciBkaXN0YW5jZSBmcm9tIHRoZSBhcmd1bWVudCxcbiAgLy8gd2hpY2ggY2FuIGJlIGEgcG9pbnQsIGEgbGluZSBvciBhIHBsYW5lXG4gIGRpc3RhbmNlRnJvbTogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5ub3JtYWwgfHwgKG9iai5zdGFydCAmJiBvYmouZW5kKSkgeyByZXR1cm4gb2JqLmRpc3RhbmNlRnJvbSh0aGlzKTsgfVxuICAgIGlmIChvYmouZGlyZWN0aW9uKSB7XG4gICAgICAvLyBvYmogaXMgYSBsaW5lXG4gICAgICBpZiAodGhpcy5pc1BhcmFsbGVsVG8ob2JqKSkgeyByZXR1cm4gdGhpcy5kaXN0YW5jZUZyb20ob2JqLmFuY2hvcik7IH1cbiAgICAgIHZhciBOID0gdGhpcy5kaXJlY3Rpb24uY3Jvc3Mob2JqLmRpcmVjdGlvbikudG9Vbml0VmVjdG9yKCkuZWxlbWVudHM7XG4gICAgICB2YXIgQSA9IHRoaXMuYW5jaG9yLmVsZW1lbnRzLCBCID0gb2JqLmFuY2hvci5lbGVtZW50cztcbiAgICAgIHJldHVybiBNYXRoLmFicygoQVswXSAtIEJbMF0pICogTlswXSArIChBWzFdIC0gQlsxXSkgKiBOWzFdICsgKEFbMl0gLSBCWzJdKSAqIE5bMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvYmogaXMgYSBwb2ludFxuICAgICAgdmFyIFAgPSBvYmouZWxlbWVudHMgfHwgb2JqO1xuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgRCA9IHRoaXMuZGlyZWN0aW9uLmVsZW1lbnRzO1xuICAgICAgdmFyIFBBMSA9IFBbMF0gLSBBWzBdLCBQQTIgPSBQWzFdIC0gQVsxXSwgUEEzID0gKFBbMl0gfHwgMCkgLSBBWzJdO1xuICAgICAgdmFyIG1vZFBBID0gTWF0aC5zcXJ0KFBBMSpQQTEgKyBQQTIqUEEyICsgUEEzKlBBMyk7XG4gICAgICBpZiAobW9kUEEgPT09IDApIHJldHVybiAwO1xuICAgICAgLy8gQXNzdW1lcyBkaXJlY3Rpb24gdmVjdG9yIGlzIG5vcm1hbGl6ZWRcbiAgICAgIHZhciBjb3NUaGV0YSA9IChQQTEgKiBEWzBdICsgUEEyICogRFsxXSArIFBBMyAqIERbMl0pIC8gbW9kUEE7XG4gICAgICB2YXIgc2luMiA9IDEgLSBjb3NUaGV0YSpjb3NUaGV0YTtcbiAgICAgIHJldHVybiBNYXRoLmFicyhtb2RQQSAqIE1hdGguc3FydChzaW4yIDwgMCA/IDAgOiBzaW4yKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIGFyZ3VtZW50IGlzIGEgcG9pbnQgb24gdGhlIGxpbmUsIG9yIGlmIHRoZSBhcmd1bWVudFxuICAvLyBpcyBhIGxpbmUgc2VnbWVudCBseWluZyB3aXRoaW4gdGhlIHJlY2VpdmVyXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqLnN0YXJ0ICYmIG9iai5lbmQpIHsgcmV0dXJuIHRoaXMuY29udGFpbnMob2JqLnN0YXJ0KSAmJiB0aGlzLmNvbnRhaW5zKG9iai5lbmQpOyB9XG4gICAgdmFyIGRpc3QgPSB0aGlzLmRpc3RhbmNlRnJvbShvYmopO1xuICAgIHJldHVybiAoZGlzdCAhPT0gbnVsbCAmJiBkaXN0IDw9IFN5bHZlc3Rlci5wcmVjaXNpb24pO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGFuY2hvciBvZiB0aGUgZ2l2ZW4gcG9pbnQuIE5lZ2F0aXZlIHZhbHVlcyBhcmVcbiAgLy8gcmV0dXJuZWQgZm9yIHBvaW50cyB0aGF0IGFyZSBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIHRvIHRoZSBsaW5lJ3MgZGlyZWN0aW9uIGZyb21cbiAgLy8gdGhlIGxpbmUncyBhbmNob3IgcG9pbnQuXG4gIHBvc2l0aW9uT2Y6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKHBvaW50KSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHZhciBQID0gcG9pbnQuZWxlbWVudHMgfHwgcG9pbnQ7XG4gICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgRCA9IHRoaXMuZGlyZWN0aW9uLmVsZW1lbnRzO1xuICAgIHJldHVybiAoUFswXSAtIEFbMF0pICogRFswXSArIChQWzFdIC0gQVsxXSkgKiBEWzFdICsgKChQWzJdIHx8IDApIC0gQVsyXSkgKiBEWzJdO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIGxpbmUgbGllcyBpbiB0aGUgZ2l2ZW4gcGxhbmVcbiAgbGllc0luOiBmdW5jdGlvbihwbGFuZSkge1xuICAgIHJldHVybiBwbGFuZS5jb250YWlucyh0aGlzKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSBsaW5lIGhhcyBhIHVuaXF1ZSBwb2ludCBvZiBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgYXJndW1lbnRcbiAgaW50ZXJzZWN0czogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5ub3JtYWwpIHsgcmV0dXJuIG9iai5pbnRlcnNlY3RzKHRoaXMpOyB9XG4gICAgcmV0dXJuICghdGhpcy5pc1BhcmFsbGVsVG8ob2JqKSAmJiB0aGlzLmRpc3RhbmNlRnJvbShvYmopIDw9IFN5bHZlc3Rlci5wcmVjaXNpb24pO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIHVuaXF1ZSBpbnRlcnNlY3Rpb24gcG9pbnQgd2l0aCB0aGUgYXJndW1lbnQsIGlmIG9uZSBleGlzdHNcbiAgaW50ZXJzZWN0aW9uV2l0aDogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5ub3JtYWwgfHwgKG9iai5zdGFydCAmJiBvYmouZW5kKSkgeyByZXR1cm4gb2JqLmludGVyc2VjdGlvbldpdGgodGhpcyk7IH1cbiAgICBpZiAoIXRoaXMuaW50ZXJzZWN0cyhvYmopKSB7IHJldHVybiBudWxsOyB9XG4gICAgdmFyIFAgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgWCA9IHRoaXMuZGlyZWN0aW9uLmVsZW1lbnRzLFxuICAgICAgICBRID0gb2JqLmFuY2hvci5lbGVtZW50cywgWSA9IG9iai5kaXJlY3Rpb24uZWxlbWVudHM7XG4gICAgdmFyIFgxID0gWFswXSwgWDIgPSBYWzFdLCBYMyA9IFhbMl0sIFkxID0gWVswXSwgWTIgPSBZWzFdLCBZMyA9IFlbMl07XG4gICAgdmFyIFBzdWJRMSA9IFBbMF0gLSBRWzBdLCBQc3ViUTIgPSBQWzFdIC0gUVsxXSwgUHN1YlEzID0gUFsyXSAtIFFbMl07XG4gICAgdmFyIFhkb3RRc3ViUCA9IC0gWDEqUHN1YlExIC0gWDIqUHN1YlEyIC0gWDMqUHN1YlEzO1xuICAgIHZhciBZZG90UHN1YlEgPSBZMSpQc3ViUTEgKyBZMipQc3ViUTIgKyBZMypQc3ViUTM7XG4gICAgdmFyIFhkb3RYID0gWDEqWDEgKyBYMipYMiArIFgzKlgzO1xuICAgIHZhciBZZG90WSA9IFkxKlkxICsgWTIqWTIgKyBZMypZMztcbiAgICB2YXIgWGRvdFkgPSBYMSpZMSArIFgyKlkyICsgWDMqWTM7XG4gICAgdmFyIGsgPSAoWGRvdFFzdWJQICogWWRvdFkgLyBYZG90WCArIFhkb3RZICogWWRvdFBzdWJRKSAvIChZZG90WSAtIFhkb3RZICogWGRvdFkpO1xuICAgIHJldHVybiBWZWN0b3IuY3JlYXRlKFtQWzBdICsgaypYMSwgUFsxXSArIGsqWDIsIFBbMl0gKyBrKlgzXSk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgcG9pbnQgb24gdGhlIGxpbmUgdGhhdCBpcyBjbG9zZXN0IHRvIHRoZSBnaXZlbiBwb2ludCBvciBsaW5lL2xpbmUgc2VnbWVudFxuICBwb2ludENsb3Nlc3RUbzogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5zdGFydCAmJiBvYmouZW5kKSB7XG4gICAgICAvLyBvYmogaXMgYSBsaW5lIHNlZ21lbnRcbiAgICAgIHZhciBQID0gb2JqLnBvaW50Q2xvc2VzdFRvKHRoaXMpO1xuICAgICAgcmV0dXJuIChQID09PSBudWxsKSA/IG51bGwgOiB0aGlzLnBvaW50Q2xvc2VzdFRvKFApO1xuICAgIH0gZWxzZSBpZiAob2JqLmRpcmVjdGlvbikge1xuICAgICAgLy8gb2JqIGlzIGEgbGluZVxuICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0cyhvYmopKSB7IHJldHVybiB0aGlzLmludGVyc2VjdGlvbldpdGgob2JqKTsgfVxuICAgICAgaWYgKHRoaXMuaXNQYXJhbGxlbFRvKG9iaikpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgIHZhciBEID0gdGhpcy5kaXJlY3Rpb24uZWxlbWVudHMsIEUgPSBvYmouZGlyZWN0aW9uLmVsZW1lbnRzO1xuICAgICAgdmFyIEQxID0gRFswXSwgRDIgPSBEWzFdLCBEMyA9IERbMl0sIEUxID0gRVswXSwgRTIgPSBFWzFdLCBFMyA9IEVbMl07XG4gICAgICAvLyBDcmVhdGUgcGxhbmUgY29udGFpbmluZyBvYmogYW5kIHRoZSBzaGFyZWQgbm9ybWFsIGFuZCBpbnRlcnNlY3QgdGhpcyB3aXRoIGl0XG4gICAgICAvLyBUaGFuayB5b3U6IGh0dHA6Ly93d3cuY2dhZmFxLmluZm8vd2lraS9MaW5lLWxpbmVfZGlzdGFuY2VcbiAgICAgIHZhciB4ID0gKEQzICogRTEgLSBEMSAqIEUzKSwgeSA9IChEMSAqIEUyIC0gRDIgKiBFMSksIHogPSAoRDIgKiBFMyAtIEQzICogRTIpO1xuICAgICAgdmFyIE4gPSBbeCAqIEUzIC0geSAqIEUyLCB5ICogRTEgLSB6ICogRTMsIHogKiBFMiAtIHggKiBFMV07XG4gICAgICB2YXIgUCA9IFBsYW5lLmNyZWF0ZShvYmouYW5jaG9yLCBOKTtcbiAgICAgIHJldHVybiBQLmludGVyc2VjdGlvbldpdGgodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9iaiBpcyBhIHBvaW50XG4gICAgICB2YXIgUCA9IG9iai5lbGVtZW50cyB8fCBvYmo7XG4gICAgICBpZiAodGhpcy5jb250YWlucyhQKSkgeyByZXR1cm4gVmVjdG9yLmNyZWF0ZShQKTsgfVxuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgRCA9IHRoaXMuZGlyZWN0aW9uLmVsZW1lbnRzO1xuICAgICAgdmFyIEQxID0gRFswXSwgRDIgPSBEWzFdLCBEMyA9IERbMl0sIEExID0gQVswXSwgQTIgPSBBWzFdLCBBMyA9IEFbMl07XG4gICAgICB2YXIgeCA9IEQxICogKFBbMV0tQTIpIC0gRDIgKiAoUFswXS1BMSksIHkgPSBEMiAqICgoUFsyXSB8fCAwKSAtIEEzKSAtIEQzICogKFBbMV0tQTIpLFxuICAgICAgICAgIHogPSBEMyAqIChQWzBdLUExKSAtIEQxICogKChQWzJdIHx8IDApIC0gQTMpO1xuICAgICAgdmFyIFYgPSBWZWN0b3IuY3JlYXRlKFtEMiAqIHggLSBEMyAqIHosIEQzICogeSAtIEQxICogeCwgRDEgKiB6IC0gRDIgKiB5XSk7XG4gICAgICB2YXIgayA9IHRoaXMuZGlzdGFuY2VGcm9tKFApIC8gVi5tb2R1bHVzKCk7XG4gICAgICByZXR1cm4gVmVjdG9yLmNyZWF0ZShbXG4gICAgICAgIFBbMF0gKyBWLmVsZW1lbnRzWzBdICogayxcbiAgICAgICAgUFsxXSArIFYuZWxlbWVudHNbMV0gKiBrLFxuICAgICAgICAoUFsyXSB8fCAwKSArIFYuZWxlbWVudHNbMl0gKiBrXG4gICAgICBdKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIGNvcHkgb2YgdGhlIGxpbmUgcm90YXRlZCBieSB0IHJhZGlhbnMgYWJvdXQgdGhlIGdpdmVuIGxpbmUuIFdvcmtzIGJ5XG4gIC8vIGZpbmRpbmcgdGhlIGFyZ3VtZW50J3MgY2xvc2VzdCBwb2ludCB0byB0aGlzIGxpbmUncyBhbmNob3IgcG9pbnQgKGNhbGwgdGhpcyBDKSBhbmRcbiAgLy8gcm90YXRpbmcgdGhlIGFuY2hvciBhYm91dCBDLiBBbHNvIHJvdGF0ZXMgdGhlIGxpbmUncyBkaXJlY3Rpb24gYWJvdXQgdGhlIGFyZ3VtZW50J3MuXG4gIC8vIEJlIGNhcmVmdWwgd2l0aCB0aGlzIC0gdGhlIHJvdGF0aW9uIGF4aXMnIGRpcmVjdGlvbiBhZmZlY3RzIHRoZSBvdXRjb21lIVxuICByb3RhdGU6IGZ1bmN0aW9uKHQsIGxpbmUpIHtcbiAgICAvLyBJZiB3ZSdyZSB3b3JraW5nIGluIDJEXG4gICAgaWYgKHR5cGVvZihsaW5lLmRpcmVjdGlvbikgPT0gJ3VuZGVmaW5lZCcpIHsgbGluZSA9IExpbmUuY3JlYXRlKGxpbmUudG8zRCgpLCBWZWN0b3Iuayk7IH1cbiAgICB2YXIgUiA9IE1hdHJpeC5Sb3RhdGlvbih0LCBsaW5lLmRpcmVjdGlvbikuZWxlbWVudHM7XG4gICAgdmFyIEMgPSBsaW5lLnBvaW50Q2xvc2VzdFRvKHRoaXMuYW5jaG9yKS5lbGVtZW50cztcbiAgICB2YXIgQSA9IHRoaXMuYW5jaG9yLmVsZW1lbnRzLCBEID0gdGhpcy5kaXJlY3Rpb24uZWxlbWVudHM7XG4gICAgdmFyIEMxID0gQ1swXSwgQzIgPSBDWzFdLCBDMyA9IENbMl0sIEExID0gQVswXSwgQTIgPSBBWzFdLCBBMyA9IEFbMl07XG4gICAgdmFyIHggPSBBMSAtIEMxLCB5ID0gQTIgLSBDMiwgeiA9IEEzIC0gQzM7XG4gICAgcmV0dXJuIExpbmUuY3JlYXRlKFtcbiAgICAgIEMxICsgUlswXVswXSAqIHggKyBSWzBdWzFdICogeSArIFJbMF1bMl0gKiB6LFxuICAgICAgQzIgKyBSWzFdWzBdICogeCArIFJbMV1bMV0gKiB5ICsgUlsxXVsyXSAqIHosXG4gICAgICBDMyArIFJbMl1bMF0gKiB4ICsgUlsyXVsxXSAqIHkgKyBSWzJdWzJdICogelxuICAgIF0sIFtcbiAgICAgIFJbMF1bMF0gKiBEWzBdICsgUlswXVsxXSAqIERbMV0gKyBSWzBdWzJdICogRFsyXSxcbiAgICAgIFJbMV1bMF0gKiBEWzBdICsgUlsxXVsxXSAqIERbMV0gKyBSWzFdWzJdICogRFsyXSxcbiAgICAgIFJbMl1bMF0gKiBEWzBdICsgUlsyXVsxXSAqIERbMV0gKyBSWzJdWzJdICogRFsyXVxuICAgIF0pO1xuICB9LFxuXG4gIC8vIFJldHVybnMgYSBjb3B5IG9mIHRoZSBsaW5lIHdpdGggaXRzIGRpcmVjdGlvbiB2ZWN0b3IgcmV2ZXJzZWQuXG4gIC8vIFVzZWZ1bCB3aGVuIHVzaW5nIGxpbmVzIGZvciByb3RhdGlvbnMuXG4gIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBMaW5lLmNyZWF0ZSh0aGlzLmFuY2hvciwgdGhpcy5kaXJlY3Rpb24ueCgtMSkpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIGxpbmUncyByZWZsZWN0aW9uIGluIHRoZSBnaXZlbiBwb2ludCBvciBsaW5lXG4gIHJlZmxlY3Rpb25JbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5ub3JtYWwpIHtcbiAgICAgIC8vIG9iaiBpcyBhIHBsYW5lXG4gICAgICB2YXIgQSA9IHRoaXMuYW5jaG9yLmVsZW1lbnRzLCBEID0gdGhpcy5kaXJlY3Rpb24uZWxlbWVudHM7XG4gICAgICB2YXIgQTEgPSBBWzBdLCBBMiA9IEFbMV0sIEEzID0gQVsyXSwgRDEgPSBEWzBdLCBEMiA9IERbMV0sIEQzID0gRFsyXTtcbiAgICAgIHZhciBuZXdBID0gdGhpcy5hbmNob3IucmVmbGVjdGlvbkluKG9iaikuZWxlbWVudHM7XG4gICAgICAvLyBBZGQgdGhlIGxpbmUncyBkaXJlY3Rpb24gdmVjdG9yIHRvIGl0cyBhbmNob3IsIHRoZW4gbWlycm9yIHRoYXQgaW4gdGhlIHBsYW5lXG4gICAgICB2YXIgQUQxID0gQTEgKyBEMSwgQUQyID0gQTIgKyBEMiwgQUQzID0gQTMgKyBEMztcbiAgICAgIHZhciBRID0gb2JqLnBvaW50Q2xvc2VzdFRvKFtBRDEsIEFEMiwgQUQzXSkuZWxlbWVudHM7XG4gICAgICB2YXIgbmV3RCA9IFtRWzBdICsgKFFbMF0gLSBBRDEpIC0gbmV3QVswXSwgUVsxXSArIChRWzFdIC0gQUQyKSAtIG5ld0FbMV0sIFFbMl0gKyAoUVsyXSAtIEFEMykgLSBuZXdBWzJdXTtcbiAgICAgIHJldHVybiBMaW5lLmNyZWF0ZShuZXdBLCBuZXdEKTtcbiAgICB9IGVsc2UgaWYgKG9iai5kaXJlY3Rpb24pIHtcbiAgICAgIC8vIG9iaiBpcyBhIGxpbmUgLSByZWZsZWN0aW9uIG9idGFpbmVkIGJ5IHJvdGF0aW5nIFBJIHJhZGlhbnMgYWJvdXQgb2JqXG4gICAgICByZXR1cm4gdGhpcy5yb3RhdGUoTWF0aC5QSSwgb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb2JqIGlzIGEgcG9pbnQgLSBqdXN0IHJlZmxlY3QgdGhlIGxpbmUncyBhbmNob3IgaW4gaXRcbiAgICAgIHZhciBQID0gb2JqLmVsZW1lbnRzIHx8IG9iajtcbiAgICAgIHJldHVybiBMaW5lLmNyZWF0ZSh0aGlzLmFuY2hvci5yZWZsZWN0aW9uSW4oW1BbMF0sIFBbMV0sIChQWzJdIHx8IDApXSksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2V0IHRoZSBsaW5lJ3MgYW5jaG9yIHBvaW50IGFuZCBkaXJlY3Rpb24uXG4gIHNldFZlY3RvcnM6IGZ1bmN0aW9uKGFuY2hvciwgZGlyZWN0aW9uKSB7XG4gICAgLy8gTmVlZCB0byBkbyB0aGlzIHNvIHRoYXQgbGluZSdzIHByb3BlcnRpZXMgYXJlIG5vdFxuICAgIC8vIHJlZmVyZW5jZXMgdG8gdGhlIGFyZ3VtZW50cyBwYXNzZWQgaW5cbiAgICBhbmNob3IgPSBWZWN0b3IuY3JlYXRlKGFuY2hvcik7XG4gICAgZGlyZWN0aW9uID0gVmVjdG9yLmNyZWF0ZShkaXJlY3Rpb24pO1xuICAgIGlmIChhbmNob3IuZWxlbWVudHMubGVuZ3RoID09IDIpIHthbmNob3IuZWxlbWVudHMucHVzaCgwKTsgfVxuICAgIGlmIChkaXJlY3Rpb24uZWxlbWVudHMubGVuZ3RoID09IDIpIHsgZGlyZWN0aW9uLmVsZW1lbnRzLnB1c2goMCk7IH1cbiAgICBpZiAoYW5jaG9yLmVsZW1lbnRzLmxlbmd0aCA+IDMgfHwgZGlyZWN0aW9uLmVsZW1lbnRzLmxlbmd0aCA+IDMpIHsgcmV0dXJuIG51bGw7IH1cbiAgICB2YXIgbW9kID0gZGlyZWN0aW9uLm1vZHVsdXMoKTtcbiAgICBpZiAobW9kID09PSAwKSB7IHJldHVybiBudWxsOyB9XG4gICAgdGhpcy5hbmNob3IgPSBhbmNob3I7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBWZWN0b3IuY3JlYXRlKFtcbiAgICAgIGRpcmVjdGlvbi5lbGVtZW50c1swXSAvIG1vZCxcbiAgICAgIGRpcmVjdGlvbi5lbGVtZW50c1sxXSAvIG1vZCxcbiAgICAgIGRpcmVjdGlvbi5lbGVtZW50c1syXSAvIG1vZFxuICAgIF0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG4vLyBDb25zdHJ1Y3RvciBmdW5jdGlvblxuTGluZS5jcmVhdGUgPSBmdW5jdGlvbihhbmNob3IsIGRpcmVjdGlvbikge1xuICB2YXIgTCA9IG5ldyBMaW5lKCk7XG4gIHJldHVybiBMLnNldFZlY3RvcnMoYW5jaG9yLCBkaXJlY3Rpb24pO1xufTtcblxuLy8gQXhlc1xuTGluZS5YID0gTGluZS5jcmVhdGUoVmVjdG9yLlplcm8oMyksIFZlY3Rvci5pKTtcbkxpbmUuWSA9IExpbmUuY3JlYXRlKFZlY3Rvci5aZXJvKDMpLCBWZWN0b3Iuaik7XG5MaW5lLlogPSBMaW5lLmNyZWF0ZShWZWN0b3IuWmVybygzKSwgVmVjdG9yLmspO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTEsIENocmlzIFVtYmVsLCBKYW1lcyBDb2dsYW5cbi8vIExpbmUuU2VnbWVudCBjbGFzcyAtIGRlcGVuZHMgb24gTGluZSBhbmQgaXRzIGRlcGVuZGVuY2llcy5cblxudmFyIExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcbnZhciBWZWN0b3IgPSByZXF1aXJlKCcuL3ZlY3RvcicpO1xuXG5MaW5lLlNlZ21lbnQgPSBmdW5jdGlvbigpIHt9O1xuTGluZS5TZWdtZW50LnByb3RvdHlwZSA9IHtcblxuICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSBsaW5lIHNlZ21lbnQgaXMgZXF1YWwgdG8gdGhlIGFyZ3VtZW50XG4gIGVxbDogZnVuY3Rpb24oc2VnbWVudCkge1xuICAgIHJldHVybiAodGhpcy5zdGFydC5lcWwoc2VnbWVudC5zdGFydCkgJiYgdGhpcy5lbmQuZXFsKHNlZ21lbnQuZW5kKSkgfHxcbiAgICAgICAgKHRoaXMuc3RhcnQuZXFsKHNlZ21lbnQuZW5kKSAmJiB0aGlzLmVuZC5lcWwoc2VnbWVudC5zdGFydCkpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgYSBjb3B5IG9mIHRoZSBsaW5lIHNlZ21lbnRcbiAgZHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTGluZS5TZWdtZW50LmNyZWF0ZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lIHNlZ21lbnRcbiAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgQSA9IHRoaXMuc3RhcnQuZWxlbWVudHMsIEIgPSB0aGlzLmVuZC5lbGVtZW50cztcbiAgICB2YXIgQzEgPSBCWzBdIC0gQVswXSwgQzIgPSBCWzFdIC0gQVsxXSwgQzMgPSBCWzJdIC0gQVsyXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KEMxKkMxICsgQzIqQzIgKyBDMypDMyk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgbGluZSBzZWdtZW50IGFzIGEgdmVjdG9yIGVxdWFsIHRvIGl0c1xuICAvLyBlbmQgcG9pbnQgcmVsYXRpdmUgdG8gaXRzIGVuZHBvaW50XG4gIHRvVmVjdG9yOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgQSA9IHRoaXMuc3RhcnQuZWxlbWVudHMsIEIgPSB0aGlzLmVuZC5lbGVtZW50cztcbiAgICByZXR1cm4gVmVjdG9yLmNyZWF0ZShbQlswXSAtIEFbMF0sIEJbMV0gLSBBWzFdLCBCWzJdIC0gQVsyXV0pO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIHNlZ21lbnQncyBtaWRwb2ludCBhcyBhIHZlY3RvclxuICBtaWRwb2ludDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIEEgPSB0aGlzLnN0YXJ0LmVsZW1lbnRzLCBCID0gdGhpcy5lbmQuZWxlbWVudHM7XG4gICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoWyhCWzBdICsgQVswXSkvMiwgKEJbMV0gKyBBWzFdKS8yLCAoQlsyXSArIEFbMl0pLzJdKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSBwbGFuZSB0aGF0IGJpc2VjdHMgdGhlIHNlZ21lbnRcbiAgYmlzZWN0aW5nUGxhbmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQbGFuZS5jcmVhdGUodGhpcy5taWRwb2ludCgpLCB0aGlzLnRvVmVjdG9yKCkpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0cmFuc2xhdGluZyB0aGUgbGluZSBieSB0aGUgZ2l2ZW4gdmVjdG9yL2FycmF5XG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgdmFyIFYgPSB2ZWN0b3IuZWxlbWVudHMgfHwgdmVjdG9yO1xuICAgIHZhciBTID0gdGhpcy5zdGFydC5lbGVtZW50cywgRSA9IHRoaXMuZW5kLmVsZW1lbnRzO1xuICAgIHJldHVybiBMaW5lLlNlZ21lbnQuY3JlYXRlKFxuICAgICAgW1NbMF0gKyBWWzBdLCBTWzFdICsgVlsxXSwgU1syXSArIChWWzJdIHx8IDApXSxcbiAgICAgIFtFWzBdICsgVlswXSwgRVsxXSArIFZbMV0sIEVbMl0gKyAoVlsyXSB8fCAwKV1cbiAgICApO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIGxpbmUgc2VnbWVudCBpcyBwYXJhbGxlbCB0byB0aGUgYXJndW1lbnQuIEl0IHNpbXBseSBmb3J3YXJkc1xuICAvLyB0aGUgbWV0aG9kIGNhbGwgb250byBpdHMgbGluZSBwcm9wZXJ0eS5cbiAgaXNQYXJhbGxlbFRvOiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdGhpcy5saW5lLmlzUGFyYWxsZWxUbyhvYmopO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGFyZ3VtZW50IGFuZCB0aGUgbGluZSBzZWdtZW50J3MgY2xvc2VzdCBwb2ludCB0byB0aGUgYXJndW1lbnRcbiAgZGlzdGFuY2VGcm9tOiBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgUCA9IHRoaXMucG9pbnRDbG9zZXN0VG8ob2JqKTtcbiAgICByZXR1cm4gKFAgPT09IG51bGwpID8gbnVsbCA6IFAuZGlzdGFuY2VGcm9tKG9iaik7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgZ2l2ZW4gcG9pbnQgbGllcyBvbiB0aGUgc2VnbWVudFxuICBjb250YWluczogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5zdGFydCAmJiBvYmouZW5kKSB7IHJldHVybiB0aGlzLmNvbnRhaW5zKG9iai5zdGFydCkgJiYgdGhpcy5jb250YWlucyhvYmouZW5kKTsgfVxuICAgIHZhciBQID0gKG9iai5lbGVtZW50cyB8fCBvYmopLnNsaWNlKCk7XG4gICAgaWYgKFAubGVuZ3RoID09IDIpIHsgUC5wdXNoKDApOyB9XG4gICAgaWYgKHRoaXMuc3RhcnQuZXFsKFApKSB7IHJldHVybiB0cnVlOyB9XG4gICAgdmFyIFMgPSB0aGlzLnN0YXJ0LmVsZW1lbnRzO1xuICAgIHZhciBWID0gVmVjdG9yLmNyZWF0ZShbU1swXSAtIFBbMF0sIFNbMV0gLSBQWzFdLCBTWzJdIC0gKFBbMl0gfHwgMCldKTtcbiAgICB2YXIgdmVjdCA9IHRoaXMudG9WZWN0b3IoKTtcbiAgICByZXR1cm4gVi5pc0FudGlwYXJhbGxlbFRvKHZlY3QpICYmIFYubW9kdWx1cygpIDw9IHZlY3QubW9kdWx1cygpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIGxpbmUgc2VnbWVudCBpbnRlcnNlY3RzIHRoZSBhcmd1bWVudFxuICBpbnRlcnNlY3RzOiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gKHRoaXMuaW50ZXJzZWN0aW9uV2l0aChvYmopICE9PSBudWxsKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSB1bmlxdWUgcG9pbnQgb2YgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGFyZ3VtZW50XG4gIGludGVyc2VjdGlvbldpdGg6IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghdGhpcy5saW5lLmludGVyc2VjdHMob2JqKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHZhciBQID0gdGhpcy5saW5lLmludGVyc2VjdGlvbldpdGgob2JqKTtcbiAgICByZXR1cm4gKHRoaXMuY29udGFpbnMoUCkgPyBQIDogbnVsbCk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgcG9pbnQgb24gdGhlIGxpbmUgc2VnbWVudCBjbG9zZXN0IHRvIHRoZSBnaXZlbiBvYmplY3RcbiAgcG9pbnRDbG9zZXN0VG86IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmoubm9ybWFsKSB7XG4gICAgICAvLyBvYmogaXMgYSBwbGFuZVxuICAgICAgdmFyIFYgPSB0aGlzLmxpbmUuaW50ZXJzZWN0aW9uV2l0aChvYmopO1xuICAgICAgaWYgKFYgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgIHJldHVybiB0aGlzLnBvaW50Q2xvc2VzdFRvKFYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvYmogaXMgYSBsaW5lIChzZWdtZW50KSBvciBwb2ludFxuICAgICAgdmFyIFAgPSB0aGlzLmxpbmUucG9pbnRDbG9zZXN0VG8ob2JqKTtcbiAgICAgIGlmIChQID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgICBpZiAodGhpcy5jb250YWlucyhQKSkgeyByZXR1cm4gUDsgfVxuICAgICAgcmV0dXJuICh0aGlzLmxpbmUucG9zaXRpb25PZihQKSA8IDAgPyB0aGlzLnN0YXJ0IDogdGhpcy5lbmQpLmR1cCgpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZXQgdGhlIHN0YXJ0IGFuZCBlbmQtcG9pbnRzIG9mIHRoZSBzZWdtZW50XG4gIHNldFBvaW50czogZnVuY3Rpb24oc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdGFydFBvaW50ID0gVmVjdG9yLmNyZWF0ZShzdGFydFBvaW50KS50bzNEKCk7XG4gICAgZW5kUG9pbnQgPSBWZWN0b3IuY3JlYXRlKGVuZFBvaW50KS50bzNEKCk7XG4gICAgaWYgKHN0YXJ0UG9pbnQgPT09IG51bGwgfHwgZW5kUG9pbnQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICB0aGlzLmxpbmUgPSBMaW5lLmNyZWF0ZShzdGFydFBvaW50LCBlbmRQb2ludC5zdWJ0cmFjdChzdGFydFBvaW50KSk7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0UG9pbnQ7XG4gICAgdGhpcy5lbmQgPSBlbmRQb2ludDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxuLy8gQ29uc3RydWN0b3IgZnVuY3Rpb25cbkxpbmUuU2VnbWVudC5jcmVhdGUgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgdmFyIFMgPSBuZXcgTGluZS5TZWdtZW50KCk7XG4gIHJldHVybiBTLnNldFBvaW50cyh2MSwgdjIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lLlNlZ21lbnQ7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTEsIENocmlzIFVtYmVsLCBKYW1lcyBDb2dsYW5cbi8vIE1hdHJpeCBjbGFzcyAtIGRlcGVuZHMgb24gVmVjdG9yLlxuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIFN5bHZlc3RlciA9IHJlcXVpcmUoJy4vc3lsdmVzdGVyJyk7XG52YXIgVmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcblxuLy8gYXVnbWVudCBhIG1hdHJpeCBNIHdpdGggaWRlbnRpdHkgcm93cy9jb2xzXG5mdW5jdGlvbiBpZGVudFNpemUoTSwgbSwgbiwgaykge1xuICAgIHZhciBlID0gTS5lbGVtZW50cztcbiAgICB2YXIgaSA9IGsgLSAxO1xuXG4gICAgd2hpbGUoaS0tKSB7XG5cdHZhciByb3cgPSBbXTtcblx0XG5cdGZvcih2YXIgaiA9IDA7IGogPCBuOyBqKyspXG5cdCAgICByb3cucHVzaChqID09IGkgPyAxIDogMCk7XG5cdFxuICAgICAgICBlLnVuc2hpZnQocm93KTtcbiAgICB9XG4gICAgXG4gICAgZm9yKHZhciBpID0gayAtIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgd2hpbGUoZVtpXS5sZW5ndGggPCBuKVxuICAgICAgICAgICAgZVtpXS51bnNoaWZ0KDApO1xuICAgIH1cblxuICAgIHJldHVybiAkTShlKTtcbn1cblxuZnVuY3Rpb24gcGNhKFgpIHtcbiAgICB2YXIgU2lnbWEgPSBYLnRyYW5zcG9zZSgpLngoWCkueCgxIC8gWC5yb3dzKCkpO1xuICAgIHZhciBzdmQgPSBTaWdtYS5zdmQoKTtcbiAgICByZXR1cm4ge1U6IHN2ZC5VLCBTOiBzdmQuU307XG59XG5cbi8vIHNpbmd1bGFyIHZhbHVlIGRlY29tcG9zaXRpb24gaW4gcHVyZSBqYXZhc2NyaXB0XG5mdW5jdGlvbiBzdmRKcygpIHtcbiAgICB2YXIgQSA9IHRoaXM7XG4gICAgdmFyIFYgPSBNYXRyaXguSShBLnJvd3MoKSk7XG4gICAgdmFyIFMgPSBBLnRyYW5zcG9zZSgpO1xuICAgIHZhciBVID0gTWF0cml4LkkoQS5jb2xzKCkpO1xuICAgIHZhciBlcnIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbWF4TG9vcCA9IDEwMDtcblxuICAgIHdoaWxlKGVyciA+IDIuMjczN2UtMTMgJiYgaSA8IG1heExvb3ApIHtcbiAgICAgICAgdmFyIHFyID0gUy50cmFuc3Bvc2UoKS5xckpzKCk7XG4gICAgICAgIFMgPSBxci5SO1xuICAgICAgICBWID0gVi54KHFyLlEpO1xuICAgICAgICBxciA9IFMudHJhbnNwb3NlKCkucXJKcygpO1xuICAgICAgICBVID0gVS54KHFyLlEpO1xuICAgICAgICBTID0gcXIuUjtcblxuICAgICAgICB2YXIgZSA9IFMudHJpdSgxKS51bnJvbGwoKS5ub3JtKCk7XG4gICAgICAgIHZhciBmID0gUy5kaWFnb25hbCgpLm5vcm0oKTtcblxuICAgICAgICBpZihmID09IDApXG4gICAgICAgICAgICBmID0gMTtcblxuICAgICAgICBlcnIgPSBlIC8gZjtcblxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgdmFyIHNzID0gUy5kaWFnb25hbCgpO1xuICAgIHZhciBzID0gW107XG5cbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IHNzLmNvbHMoKTsgaSsrKSB7XG4gICAgICAgIHZhciBzc24gPSBzcy5lKGkpO1xuICAgICAgICBzLnB1c2goTWF0aC5hYnMoc3NuKSk7XG5cbiAgICAgICAgaWYoc3NuIDwgMCkge1xuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IFUucm93cygpOyBqKyspIHtcbiAgICAgICAgICAgICAgICBWLmVsZW1lbnRzW2pdW2kgLSAxXSA9IC0oVi5lbGVtZW50c1tqXVtpIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtVOiBVLCBTOiAkVihzKS50b0RpYWdvbmFsTWF0cml4KCksIFY6IFZ9O1xufVxuXG4vLyBzaW5ndWxhciB2YWx1ZSBkZWNvbXBvc2l0aW9uIHVzaW5nIExBUEFDS1xuZnVuY3Rpb24gc3ZkUGFjaygpIHtcbiAgICB2YXIgcmVzdWx0ID0gbGFwYWNrLnNnZXN2ZCgnQScsICdBJywgdGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBVOiAkTShyZXN1bHQuVSksXG4gICAgICAgIFM6ICRNKHJlc3VsdC5TKS5jb2x1bW4oMSkudG9EaWFnb25hbE1hdHJpeCgpLFxuXHRWOiAkTShyZXN1bHQuVlQpLnRyYW5zcG9zZSgpXG4gICAgfTtcbn1cblxuLy8gUVIgZGVjb21wb3NpdGlvbiBpbiBwdXJlIGphdmFzY3JpcHRcbmZ1bmN0aW9uIHFySnMoKSB7XG4gICAgdmFyIG0gPSB0aGlzLnJvd3MoKTtcbiAgICB2YXIgbiA9IHRoaXMuY29scygpO1xuICAgIHZhciBRID0gTWF0cml4LkkobSk7XG4gICAgdmFyIEEgPSB0aGlzO1xuICAgIFxuICAgIGZvcih2YXIgayA9IDE7IGsgPCBNYXRoLm1pbihtLCBuKTsgaysrKSB7XG5cdHZhciBhayA9IEEuc2xpY2UoaywgMCwgaywgaykuY29sKDEpO1xuXHR2YXIgb25lWmVybyA9IFsxXTtcblx0XG5cdHdoaWxlKG9uZVplcm8ubGVuZ3RoIDw9ICBtIC0gaylcblx0ICAgIG9uZVplcm8ucHVzaCgwKTtcblx0XG5cdG9uZVplcm8gPSAkVihvbmVaZXJvKTtcblx0dmFyIHZrID0gYWsuYWRkKG9uZVplcm8ueChhay5ub3JtKCkgKiBNYXRoLnNpZ24oYWsuZSgxKSkpKTtcblx0dmFyIFZrID0gJE0odmspO1xuXHR2YXIgSGsgPSBNYXRyaXguSShtIC0gayArIDEpLnN1YnRyYWN0KFZrLngoMikueChWay50cmFuc3Bvc2UoKSkuZGl2KFZrLnRyYW5zcG9zZSgpLngoVmspLmUoMSwgMSkpKTtcblx0dmFyIFFrID0gaWRlbnRTaXplKEhrLCBtLCBuLCBrKTtcblx0QSA9IFFrLngoQSk7XG5cdC8vIHNsb3cgd2F5IHRvIGNvbXB1dGUgUVxuXHRRID0gUS54KFFrKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtROiBRLCBSOiBBfTtcbn1cblxuLy8gUVIgZGVjb21wb3NpdGlvbiB1c2luZyBMQVBBQ0tcbmZ1bmN0aW9uIHFyUGFjaygpIHtcbiAgICB2YXIgcXIgPSBsYXBhY2sucXIodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4ge1xuXHRROiAkTShxci5RKSxcblx0UjogJE0ocXIuUilcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBNYXRyaXgoKSB7fVxuTWF0cml4LnByb3RvdHlwZSA9IHtcbiAgICAvLyBzb2x2ZSBhIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zICh3b3JrIGluIHByb2dyZXNzKVxuICAgIHNvbHZlOiBmdW5jdGlvbihiKSB7XG5cdHZhciBsdSA9IHRoaXMubHUoKTtcblx0YiA9IGx1LlAueChiKTtcblx0dmFyIHkgPSBsdS5MLmZvcndhcmRTdWJzdGl0dXRlKGIpO1xuXHR2YXIgeCA9IGx1LlUuYmFja1N1YnN0aXR1dGUoeSk7XG5cdHJldHVybiBsdS5QLngoeCk7XG5cdC8vcmV0dXJuIHRoaXMuaW52KCkueChiKTtcbiAgICB9LFxuXG4gICAgLy8gcHJvamVjdCBhIG1hdHJpeCBvbnRvIGEgbG93ZXIgZGltXG4gICAgcGNhUHJvamVjdDogZnVuY3Rpb24oaywgVSkge1xuXHR2YXIgVSA9IFUgfHwgcGNhKHRoaXMpLlU7XG5cdHZhciBVcmVkdWNlPSBVLnNsaWNlKDEsIFUucm93cygpLCAxLCBrKTtcblx0cmV0dXJuIHtaOiB0aGlzLngoVXJlZHVjZSksIFU6IFV9O1xuICAgIH0sXG5cbiAgICAvLyByZWNvdmVyIGEgbWF0cml4IHRvIGEgaGlnaGVyIGRpbWVuc2lvblxuICAgIHBjYVJlY292ZXI6IGZ1bmN0aW9uKFUpIHtcblx0dmFyIGsgPSB0aGlzLmNvbHMoKTtcblx0dmFyIFVyZWR1Y2UgPSBVLnNsaWNlKDEsIFUucm93cygpLCAxLCBrKTtcblx0cmV0dXJuIHRoaXMueChVcmVkdWNlLnRyYW5zcG9zZSgpKTtcbiAgICB9LCAgICBcblxuICAgIC8vIGdyYWIgdGhlIHVwcGVyIHRyaWFuZ3VsYXIgcGFydCBvZiB0aGUgbWF0cml4XG4gICAgdHJpdTogZnVuY3Rpb24oaykge1xuXHRpZighaylcblx0ICAgIGsgPSAwO1xuXHRcblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgsIGksIGopIHtcblx0ICAgIHJldHVybiBqIC0gaSA+PSBrID8geCA6IDA7XG5cdH0pO1xuICAgIH0sXG5cbiAgICAvLyB1bnJvbGwgYSBtYXRyaXggaW50byBhIHZlY3RvclxuICAgIHVucm9sbDogZnVuY3Rpb24oKSB7XG5cdHZhciB2ID0gW107XG5cdFxuXHRmb3IodmFyIGkgPSAxOyBpIDw9IHRoaXMuY29scygpOyBpKyspIHtcblx0ICAgIGZvcih2YXIgaiA9IDE7IGogPD0gdGhpcy5yb3dzKCk7IGorKykge1xuXHRcdHYucHVzaCh0aGlzLmUoaiwgaSkpO1xuXHQgICAgfVxuXHR9XG5cblx0cmV0dXJuICRWKHYpO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gYSBzdWItYmxvY2sgb2YgdGhlIG1hdHJpeFxuICAgIHNsaWNlOiBmdW5jdGlvbihzdGFydFJvdywgZW5kUm93LCBzdGFydENvbCwgZW5kQ29sKSB7XG5cdHZhciB4ID0gW107XG5cdFxuXHRpZihlbmRSb3cgPT0gMClcblx0ICAgIGVuZFJvdyA9IHRoaXMucm93cygpO1xuXHRcblx0aWYoZW5kQ29sID09IDApXG5cdCAgICBlbmRDb2wgPSB0aGlzLmNvbHMoKTtcblxuXHRmb3IoaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG5cdCAgICB2YXIgcm93ID0gW107XG5cblx0ICAgIGZvcihqID0gc3RhcnRDb2w7IGogPD0gZW5kQ29sOyBqKyspIHtcblx0XHRyb3cucHVzaCh0aGlzLmUoaSwgaikpO1xuXHQgICAgfVxuXG5cdCAgICB4LnB1c2gocm93KTtcblx0fVxuXG5cdHJldHVybiAkTSh4KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBlbGVtZW50IChpLGopIG9mIHRoZSBtYXRyaXhcbiAgICBlOiBmdW5jdGlvbihpLGopIHtcblx0aWYgKGkgPCAxIHx8IGkgPiB0aGlzLmVsZW1lbnRzLmxlbmd0aCB8fCBqIDwgMSB8fCBqID4gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgpIHsgcmV0dXJuIG51bGw7IH1cblx0cmV0dXJuIHRoaXMuZWxlbWVudHNbaSAtIDFdW2ogLSAxXTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyByb3cgayBvZiB0aGUgbWF0cml4IGFzIGEgdmVjdG9yXG4gICAgcm93OiBmdW5jdGlvbihpKSB7XG5cdGlmIChpID4gdGhpcy5lbGVtZW50cy5sZW5ndGgpIHsgcmV0dXJuIG51bGw7IH1cblx0cmV0dXJuICRWKHRoaXMuZWxlbWVudHNbaSAtIDFdKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBjb2x1bW4gayBvZiB0aGUgbWF0cml4IGFzIGEgdmVjdG9yXG4gICAgY29sOiBmdW5jdGlvbihqKSB7XG5cdGlmIChqID4gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgpIHsgcmV0dXJuIG51bGw7IH1cblx0dmFyIGNvbCA9IFtdLCBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbC5wdXNoKHRoaXMuZWxlbWVudHNbaV1baiAtIDFdKTsgfVxuXHRyZXR1cm4gJFYoY29sKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHJvd3MvY29sdW1ucyB0aGUgbWF0cml4IGhhc1xuICAgIGRpbWVuc2lvbnM6IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge3Jvd3M6IHRoaXMuZWxlbWVudHMubGVuZ3RoLCBjb2xzOiB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aH07XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAgICByb3dzOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZWxlbWVudHMubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gICAgY29sczogZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgYXBwcm94RXFsOiBmdW5jdGlvbihtYXRyaXgpIHtcblx0cmV0dXJuIHRoaXMuZXFsKG1hdHJpeCwgU3lsdmVzdGVyLmFwcHJveFByZWNpc2lvbik7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIG1hdHJpeCBpcyBlcXVhbCB0byB0aGUgYXJndW1lbnQuIFlvdSBjYW4gc3VwcGx5XG4gICAgLy8gYSB2ZWN0b3IgYXMgdGhlIGFyZ3VtZW50LCBpbiB3aGljaCBjYXNlIHRoZSByZWNlaXZlciBtdXN0IGJlIGFcbiAgICAvLyBvbmUtY29sdW1uIG1hdHJpeCBlcXVhbCB0byB0aGUgdmVjdG9yLlxuICAgIGVxbDogZnVuY3Rpb24obWF0cml4LCBwcmVjaXNpb24pIHtcblx0dmFyIE0gPSBtYXRyaXguZWxlbWVudHMgfHwgbWF0cml4O1xuXHRpZiAodHlwZW9mKE1bMF1bMF0pID09ICd1bmRlZmluZWQnKSB7IE0gPSBNYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzOyB9XG5cdGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAhPSBNLmxlbmd0aCB8fFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50c1swXS5sZW5ndGggIT0gTVswXS5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBpID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsIG5qID0gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgsIGo7XG5cdHdoaWxlIChpLS0pIHsgaiA9IG5qO1xuXHRcdCAgICAgIHdoaWxlIChqLS0pIHtcblx0XHRcdCAgaWYgKE1hdGguYWJzKHRoaXMuZWxlbWVudHNbaV1bal0gLSBNW2ldW2pdKSA+IChwcmVjaXNpb24gfHwgU3lsdmVzdGVyLnByZWNpc2lvbikpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0ICAgICAgfVxuXHRcdCAgICB9XG5cdHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIGEgY29weSBvZiB0aGUgbWF0cml4XG4gICAgZHVwOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdHJpeC5jcmVhdGUodGhpcy5lbGVtZW50cyk7XG4gICAgfSxcblxuICAgIC8vIE1hcHMgdGhlIG1hdHJpeCB0byBhbm90aGVyIG1hdHJpeCAob2YgdGhlIHNhbWUgZGltZW5zaW9ucykgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBmdW5jdGlvblxuICAgIG1hcDogZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgZWxzID0gW10sIGkgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCwgbmogPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCwgajtcblx0d2hpbGUgKGktLSkgeyBqID0gbmo7XG5cdFx0ICAgICAgZWxzW2ldID0gW107XG5cdFx0ICAgICAgd2hpbGUgKGotLSkge1xuXHRcdFx0ICBlbHNbaV1bal0gPSBmbih0aGlzLmVsZW1lbnRzW2ldW2pdLCBpICsgMSwgaiArIDEpO1xuXHRcdCAgICAgIH1cblx0XHQgICAgfVxuXHRyZXR1cm4gTWF0cml4LmNyZWF0ZShlbHMpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSBhcmd1bWVudCBoYXMgdGhlIHNhbWUgZGltZW5zaW9ucyBhcyB0aGUgbWF0cml4XG4gICAgaXNTYW1lU2l6ZUFzOiBmdW5jdGlvbihtYXRyaXgpIHtcblx0dmFyIE0gPSBtYXRyaXguZWxlbWVudHMgfHwgbWF0cml4O1xuXHRpZiAodHlwZW9mKE1bMF1bMF0pID09ICd1bmRlZmluZWQnKSB7IE0gPSBNYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzOyB9XG5cdHJldHVybiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT0gTS5sZW5ndGggJiZcblx0XHR0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCA9PSBNWzBdLmxlbmd0aCk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgdGhlIGFyZ3VtZW50IHRvIHRoZSBtYXRyaXhcbiAgICBhZGQ6IGZ1bmN0aW9uKG1hdHJpeCkge1xuXHRpZih0eXBlb2YobWF0cml4KSA9PSAnbnVtYmVyJykge1xuXHQgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgsIGksIGopIHsgcmV0dXJuIHggKyBtYXRyaXh9KTtcblx0fSBlbHNlIHtcblx0ICAgIHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeDtcblx0ICAgIGlmICh0eXBlb2YoTVswXVswXSkgPT0gJ3VuZGVmaW5lZCcpIHsgTSA9IE1hdHJpeC5jcmVhdGUoTSkuZWxlbWVudHM7IH1cblx0ICAgIGlmICghdGhpcy5pc1NhbWVTaXplQXMoTSkpIHsgcmV0dXJuIG51bGw7IH1cblx0ICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih4LCBpLCBqKSB7IHJldHVybiB4ICsgTVtpIC0gMV1baiAtIDFdOyB9KTtcblx0fVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIGFyZ3VtZW50IGZyb20gdGhlIG1hdHJpeFxuICAgIHN1YnRyYWN0OiBmdW5jdGlvbihtYXRyaXgpIHtcblx0aWYodHlwZW9mKG1hdHJpeCkgPT0gJ251bWJlcicpIHtcblx0ICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih4LCBpLCBqKSB7IHJldHVybiB4IC0gbWF0cml4fSk7XG5cdH0gZWxzZSB7XG5cdCAgICB2YXIgTSA9IG1hdHJpeC5lbGVtZW50cyB8fCBtYXRyaXg7XG5cdCAgICBpZiAodHlwZW9mKE1bMF1bMF0pID09ICd1bmRlZmluZWQnKSB7IE0gPSBNYXRyaXguY3JlYXRlKE0pLmVsZW1lbnRzOyB9XG5cdCAgICBpZiAoIXRoaXMuaXNTYW1lU2l6ZUFzKE0pKSB7IHJldHVybiBudWxsOyB9XG5cdCAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCwgaSwgaikgeyByZXR1cm4geCAtIE1baSAtIDFdW2ogLSAxXTsgfSk7XG5cdH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgbWF0cml4IGNhbiBtdWx0aXBseSB0aGUgYXJndW1lbnQgZnJvbSB0aGUgbGVmdFxuICAgIGNhbk11bHRpcGx5RnJvbUxlZnQ6IGZ1bmN0aW9uKG1hdHJpeCkge1xuXHR2YXIgTSA9IG1hdHJpeC5lbGVtZW50cyB8fCBtYXRyaXg7XG5cdGlmICh0eXBlb2YoTVswXVswXSkgPT0gJ3VuZGVmaW5lZCcpIHsgTSA9IE1hdHJpeC5jcmVhdGUoTSkuZWxlbWVudHM7IH1cblx0Ly8gdGhpcy5jb2x1bW5zIHNob3VsZCBlcXVhbCBtYXRyaXgucm93c1xuXHRyZXR1cm4gKHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoID09IE0ubGVuZ3RoKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGEgbXVsdGlwbGljYXRpb24tc3R5bGUgb3BlcmF0aW9uIHRoZSBtYXRyaXggZnJvbSB0aGUgcmlnaHQgYnkgdGhlIGFyZ3VtZW50LlxuICAgIC8vIElmIHRoZSBhcmd1bWVudCBpcyBhIHNjYWxhciB0aGVuIGp1c3Qgb3BlcmF0ZSBvbiBhbGwgdGhlIGVsZW1lbnRzLiBJZiB0aGUgYXJndW1lbnQgaXNcbiAgICAvLyBhIHZlY3RvciwgYSB2ZWN0b3IgaXMgcmV0dXJuZWQsIHdoaWNoIHNhdmVzIHlvdSBoYXZpbmcgdG8gcmVtZW1iZXIgY2FsbGluZ1xuICAgIC8vIGNvbCgxKSBvbiB0aGUgcmVzdWx0LlxuICAgIG11bE9wOiBmdW5jdGlvbihtYXRyaXgsIG9wKSB7XG5cdGlmICghbWF0cml4LmVsZW1lbnRzKSB7XG5cdCAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCkgeyByZXR1cm4gb3AoeCwgbWF0cml4KTsgfSk7XG5cdH1cblxuXHR2YXIgcmV0dXJuVmVjdG9yID0gbWF0cml4Lm1vZHVsdXMgPyB0cnVlIDogZmFsc2U7XG5cdHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeDtcblx0aWYgKHR5cGVvZihNWzBdWzBdKSA9PSAndW5kZWZpbmVkJykgXG5cdCAgICBNID0gTWF0cml4LmNyZWF0ZShNKS5lbGVtZW50cztcblx0aWYgKCF0aGlzLmNhbk11bHRpcGx5RnJvbUxlZnQoTSkpIFxuXHQgICAgcmV0dXJuIG51bGw7IFxuXHR2YXIgZSA9IHRoaXMuZWxlbWVudHMsIHJvd1RoaXMsIHJvd0VsZW0sIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHN1bSwgbSA9IGUubGVuZ3RoLCBuID0gTVswXS5sZW5ndGgsIG8gPSBlWzBdLmxlbmd0aCwgaSA9IG0sIGosIGs7XG5cblx0d2hpbGUgKGktLSkge1xuICAgICAgICAgICAgcm93RWxlbSA9IFtdO1xuICAgICAgICAgICAgcm93VGhpcyA9IGVbaV07XG4gICAgICAgICAgICBqID0gbjtcblxuICAgICAgICAgICAgd2hpbGUgKGotLSkge1xuXHRcdHN1bSA9IDA7XG5cdFx0ayA9IG87XG5cblx0XHR3aGlsZSAoay0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBvcChyb3dUaGlzW2tdLCBNW2tdW2pdKTtcblx0XHR9XG5cblx0XHRyb3dFbGVtW2pdID0gc3VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50c1tpXSA9IHJvd0VsZW07XG5cdH1cblxuXHR2YXIgTSA9IE1hdHJpeC5jcmVhdGUoZWxlbWVudHMpO1xuXHRyZXR1cm4gcmV0dXJuVmVjdG9yID8gTS5jb2woMSkgOiBNO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZGl2aWRpbmcgdGhlIG1hdHJpeCBmcm9tIHRoZSByaWdodCBieSB0aGUgYXJndW1lbnQuXG4gICAgLy8gSWYgdGhlIGFyZ3VtZW50IGlzIGEgc2NhbGFyIHRoZW4ganVzdCBkaXZpZGUgYWxsIHRoZSBlbGVtZW50cy4gSWYgdGhlIGFyZ3VtZW50IGlzXG4gICAgLy8gYSB2ZWN0b3IsIGEgdmVjdG9yIGlzIHJldHVybmVkLCB3aGljaCBzYXZlcyB5b3UgaGF2aW5nIHRvIHJlbWVtYmVyIGNhbGxpbmdcbiAgICAvLyBjb2woMSkgb24gdGhlIHJlc3VsdC5cbiAgICBkaXY6IGZ1bmN0aW9uKG1hdHJpeCkge1xuXHRyZXR1cm4gdGhpcy5tdWxPcChtYXRyaXgsIGZ1bmN0aW9uKHgsIHkpIHsgcmV0dXJuIHggLyB5fSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBtdWx0aXBseWluZyB0aGUgbWF0cml4IGZyb20gdGhlIHJpZ2h0IGJ5IHRoZSBhcmd1bWVudC5cbiAgICAvLyBJZiB0aGUgYXJndW1lbnQgaXMgYSBzY2FsYXIgdGhlbiBqdXN0IG11bHRpcGx5IGFsbCB0aGUgZWxlbWVudHMuIElmIHRoZSBhcmd1bWVudCBpc1xuICAgIC8vIGEgdmVjdG9yLCBhIHZlY3RvciBpcyByZXR1cm5lZCwgd2hpY2ggc2F2ZXMgeW91IGhhdmluZyB0byByZW1lbWJlciBjYWxsaW5nXG4gICAgLy8gY29sKDEpIG9uIHRoZSByZXN1bHQuXG4gICAgbXVsdGlwbHk6IGZ1bmN0aW9uKG1hdHJpeCkge1xuXHRyZXR1cm4gdGhpcy5tdWxPcChtYXRyaXgsIGZ1bmN0aW9uKHgsIHkpIHsgcmV0dXJuIHggKiB5fSk7XG4gICAgfSxcblxuICAgIHg6IGZ1bmN0aW9uKG1hdHJpeCkgeyByZXR1cm4gdGhpcy5tdWx0aXBseShtYXRyaXgpOyB9LFxuXG4gICAgZWxlbWVudE11bHRpcGx5OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihrLCBpLCBqKSB7XG4gICAgICAgICAgICByZXR1cm4gdi5lKGksIGopICogaztcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIHN1bSBhbGwgZWxlbWVudHMgaW4gdGhlIG1hdHJpeFxuICAgIHN1bTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuXG4gICAgICAgIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgc3VtICs9IHg7fSk7XG5cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBhIFZlY3RvciBvZiBlYWNoIGNvbHVtIGF2ZXJhZ2VkLlxuICAgIG1lYW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpbSA9IHRoaXMuZGltZW5zaW9ucygpO1xuICAgICAgdmFyIHIgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGRpbS5jb2xzOyBpKyspIHtcbiAgICAgICAgci5wdXNoKHRoaXMuY29sKGkpLnN1bSgpIC8gZGltLnJvd3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRWKHIpO1xuICAgIH0sXG5cbiAgICBjb2x1bW46IGZ1bmN0aW9uKG4pIHtcblx0cmV0dXJuIHRoaXMuY29sKG4pO1xuICAgIH0sXG5cbiAgICAvLyBlbGVtZW50LXdpc2UgbG9nXG4gICAgbG9nOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubG9nKHgpOyB9KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBhIHN1Ym1hdHJpeCB0YWtlbiBmcm9tIHRoZSBtYXRyaXhcbiAgICAvLyBBcmd1bWVudCBvcmRlciBpczogc3RhcnQgcm93LCBzdGFydCBjb2wsIG5yb3dzLCBuY29sc1xuICAgIC8vIEVsZW1lbnQgc2VsZWN0aW9uIHdyYXBzIGlmIHRoZSByZXF1aXJlZCBpbmRleCBpcyBvdXRzaWRlIHRoZSBtYXRyaXgncyBib3VuZHMsIHNvIHlvdSBjb3VsZFxuICAgIC8vIHVzZSB0aGlzIHRvIHBlcmZvcm0gcm93L2NvbHVtbiBjeWNsaW5nIG9yIGNvcHktYXVnbWVudGluZy5cbiAgICBtaW5vcjogZnVuY3Rpb24oYSwgYiwgYywgZCkge1xuXHR2YXIgZWxlbWVudHMgPSBbXSwgbmkgPSBjLCBpLCBuaiwgajtcblx0dmFyIHJvd3MgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCwgY29scyA9IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoO1xuXHR3aGlsZSAobmktLSkge1xuXHQgICAgaSA9IGMgLSBuaSAtIDE7XG5cdCAgICBlbGVtZW50c1tpXSA9IFtdO1xuXHQgICAgbmogPSBkO1xuXHQgICAgd2hpbGUgKG5qLS0pIHtcblx0XHRqID0gZCAtIG5qIC0gMTtcblx0XHRlbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbKGEgKyBpIC0gMSkgJSByb3dzXVsoYiArIGogLSAxKSAlIGNvbHNdO1xuXHQgICAgfVxuXHR9XG5cdHJldHVybiBNYXRyaXguY3JlYXRlKGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgdHJhbnNwb3NlIG9mIHRoZSBtYXRyaXhcbiAgICB0cmFuc3Bvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb3dzID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsIGksIGNvbHMgPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCwgajtcblx0dmFyIGVsZW1lbnRzID0gW10sIGkgPSBjb2xzO1xuXHR3aGlsZSAoaS0tKSB7XG5cdCAgICBqID0gcm93cztcblx0ICAgIGVsZW1lbnRzW2ldID0gW107XG5cdCAgICB3aGlsZSAoai0tKSB7XG5cdFx0ZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2pdW2ldO1xuXHQgICAgfVxuXHR9XG5cdHJldHVybiBNYXRyaXguY3JlYXRlKGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgbWF0cml4IGlzIHNxdWFyZVxuICAgIGlzU3F1YXJlOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIChhYnNvbHV0ZSkgbGFyZ2VzdCBlbGVtZW50IG9mIHRoZSBtYXRyaXhcbiAgICBtYXg6IGZ1bmN0aW9uKCkge1xuXHR2YXIgbSA9IDAsIGkgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCwgbmogPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCwgajtcblx0d2hpbGUgKGktLSkge1xuXHQgICAgaiA9IG5qO1xuXHQgICAgd2hpbGUgKGotLSkge1xuXHRcdGlmIChNYXRoLmFicyh0aGlzLmVsZW1lbnRzW2ldW2pdKSA+IE1hdGguYWJzKG0pKSB7IG0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdOyB9XG5cdCAgICB9XG5cdH1cblx0cmV0dXJuIG07XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIGluZGVjZXMgb2YgdGhlIGZpcnN0IG1hdGNoIGZvdW5kIGJ5IHJlYWRpbmcgcm93LWJ5LXJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICBpbmRleE9mOiBmdW5jdGlvbih4KSB7XG5cdHZhciBpbmRleCA9IG51bGwsIG5pID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsIGksIG5qID0gdGhpcy5lbGVtZW50c1swXS5sZW5ndGgsIGo7XG5cdGZvciAoaSA9IDA7IGkgPCBuaTsgaSsrKSB7XG5cdCAgICBmb3IgKGogPSAwOyBqIDwgbmo7IGorKykge1xuXHRcdGlmICh0aGlzLmVsZW1lbnRzW2ldW2pdID09IHgpIHsgcmV0dXJuIHtpOiBpICsgMSwgajogaiArIDF9OyB9XG5cdCAgICB9XG5cdH1cblx0cmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8vIElmIHRoZSBtYXRyaXggaXMgc3F1YXJlLCByZXR1cm5zIHRoZSBkaWFnb25hbCBlbGVtZW50cyBhcyBhIHZlY3Rvci5cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybnMgbnVsbC5cbiAgICBkaWFnb25hbDogZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5pc1NxdWFyZSkgeyByZXR1cm4gbnVsbDsgfVxuXHR2YXIgZWxzID0gW10sIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0ICAgIGVscy5wdXNoKHRoaXMuZWxlbWVudHNbaV1baV0pO1xuXHR9XG5cdHJldHVybiAkVihlbHMpO1xuICAgIH0sXG5cbiAgICAvLyBNYWtlIHRoZSBtYXRyaXggdXBwZXIgKHJpZ2h0KSB0cmlhbmd1bGFyIGJ5IEdhdXNzaWFuIGVsaW1pbmF0aW9uLlxuICAgIC8vIFRoaXMgbWV0aG9kIG9ubHkgYWRkcyBtdWx0aXBsZXMgb2Ygcm93cyB0byBvdGhlciByb3dzLiBObyByb3dzIGFyZVxuICAgIC8vIHNjYWxlZCB1cCBvciBzd2l0Y2hlZCwgYW5kIHRoZSBkZXRlcm1pbmFudCBpcyBwcmVzZXJ2ZWQuXG4gICAgdG9SaWdodFRyaWFuZ3VsYXI6IGZ1bmN0aW9uKCkge1xuXHR2YXIgTSA9IHRoaXMuZHVwKCksIGVscztcblx0dmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCwgaSwgaiwgbnAgPSB0aGlzLmVsZW1lbnRzWzBdLmxlbmd0aCwgcDtcblx0Zm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuXHQgICAgaWYgKE0uZWxlbWVudHNbaV1baV0gPT0gMCkge1xuXHRcdGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG5cdFx0ICAgIGlmIChNLmVsZW1lbnRzW2pdW2ldICE9IDApIHtcblx0XHRcdGVscyA9IFtdO1xuXHRcdFx0Zm9yIChwID0gMDsgcCA8IG5wOyBwKyspIHsgZWxzLnB1c2goTS5lbGVtZW50c1tpXVtwXSArIE0uZWxlbWVudHNbal1bcF0pOyB9XG5cdFx0XHRNLmVsZW1lbnRzW2ldID0gZWxzO1xuXHRcdFx0YnJlYWs7XG5cdFx0ICAgIH1cblx0XHR9XG5cdCAgICB9XG5cdCAgICBpZiAoTS5lbGVtZW50c1tpXVtpXSAhPSAwKSB7XG5cdFx0Zm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcblx0XHQgICAgdmFyIG11bHRpcGxpZXIgPSBNLmVsZW1lbnRzW2pdW2ldIC8gTS5lbGVtZW50c1tpXVtpXTtcblx0XHQgICAgZWxzID0gW107XG5cdFx0ICAgIGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG5cdFx0XHQvLyBFbGVtZW50cyB3aXRoIGNvbHVtbiBudW1iZXJzIHVwIHRvIGFuIGluY2x1ZGluZyB0aGUgbnVtYmVyXG5cdFx0XHQvLyBvZiB0aGUgcm93IHRoYXQgd2UncmUgc3VidHJhY3RpbmcgY2FuIHNhZmVseSBiZSBzZXQgc3RyYWlnaHQgdG9cblx0XHRcdC8vIHplcm8sIHNpbmNlIHRoYXQncyB0aGUgcG9pbnQgb2YgdGhpcyByb3V0aW5lIGFuZCBpdCBhdm9pZHMgaGF2aW5nXG5cdFx0XHQvLyB0byBsb29wIG92ZXIgYW5kIGNvcnJlY3Qgcm91bmRpbmcgZXJyb3JzIGxhdGVyXG5cdFx0XHRlbHMucHVzaChwIDw9IGkgPyAwIDogTS5lbGVtZW50c1tqXVtwXSAtIE0uZWxlbWVudHNbaV1bcF0gKiBtdWx0aXBsaWVyKTtcblx0XHQgICAgfVxuXHRcdCAgICBNLmVsZW1lbnRzW2pdID0gZWxzO1xuXHRcdH1cblx0ICAgIH1cblx0fVxuXHRyZXR1cm4gTTtcbiAgICB9LFxuXG4gICAgdG9VcHBlclRyaWFuZ3VsYXI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy50b1JpZ2h0VHJpYW5ndWxhcigpOyB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgZGV0ZXJtaW5hbnQgZm9yIHNxdWFyZSBtYXRyaWNlc1xuICAgIGRldGVybWluYW50OiBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLmlzU3F1YXJlKCkpIHsgcmV0dXJuIG51bGw7IH1cblx0aWYgKHRoaXMuY29scyA9PSAxICYmIHRoaXMucm93cyA9PSAxKSB7IHJldHVybiB0aGlzLnJvdygxKTsgfVxuXHRpZiAodGhpcy5jb2xzID09IDAgJiYgdGhpcy5yb3dzID09IDApIHsgcmV0dXJuIDE7IH1cblx0dmFyIE0gPSB0aGlzLnRvUmlnaHRUcmlhbmd1bGFyKCk7XG5cdHZhciBkZXQgPSBNLmVsZW1lbnRzWzBdWzBdLCBuID0gTS5lbGVtZW50cy5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG5cdCAgICBkZXQgPSBkZXQgKiBNLmVsZW1lbnRzW2ldW2ldO1xuXHR9XG5cdHJldHVybiBkZXQ7XG4gICAgfSxcbiAgICBkZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5kZXRlcm1pbmFudCgpOyB9LFxuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgbWF0cml4IGlzIHNpbmd1bGFyXG4gICAgaXNTaW5ndWxhcjogZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5pc1NxdWFyZSgpICYmIHRoaXMuZGV0ZXJtaW5hbnQoKSA9PT0gMCk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHRyYWNlIGZvciBzcXVhcmUgbWF0cmljZXNcbiAgICB0cmFjZTogZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5pc1NxdWFyZSgpKSB7IHJldHVybiBudWxsOyB9XG5cdHZhciB0ciA9IHRoaXMuZWxlbWVudHNbMF1bMF0sIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIHtcblx0ICAgIHRyICs9IHRoaXMuZWxlbWVudHNbaV1baV07XG5cdH1cblx0cmV0dXJuIHRyO1xuICAgIH0sXG5cbiAgICB0cjogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnRyYWNlKCk7IH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSByYW5rIG9mIHRoZSBtYXRyaXhcbiAgICByYW5rOiBmdW5jdGlvbigpIHtcblx0dmFyIE0gPSB0aGlzLnRvUmlnaHRUcmlhbmd1bGFyKCksIHJhbmsgPSAwO1xuXHR2YXIgaSA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLCBuaiA9IHRoaXMuZWxlbWVudHNbMF0ubGVuZ3RoLCBqO1xuXHR3aGlsZSAoaS0tKSB7XG5cdCAgICBqID0gbmo7XG5cdCAgICB3aGlsZSAoai0tKSB7XG5cdFx0aWYgKE1hdGguYWJzKE0uZWxlbWVudHNbaV1bal0pID4gU3lsdmVzdGVyLnByZWNpc2lvbikgeyByYW5rKys7IGJyZWFrOyB9XG5cdCAgICB9XG5cdH1cblx0cmV0dXJuIHJhbms7XG4gICAgfSxcblxuICAgIHJrOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucmFuaygpOyB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGF0dGFjaGluZyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiB0aGUgbWF0cml4XG4gICAgYXVnbWVudDogZnVuY3Rpb24obWF0cml4KSB7XG5cdHZhciBNID0gbWF0cml4LmVsZW1lbnRzIHx8IG1hdHJpeDtcblx0aWYgKHR5cGVvZihNWzBdWzBdKSA9PSAndW5kZWZpbmVkJykgeyBNID0gTWF0cml4LmNyZWF0ZShNKS5lbGVtZW50czsgfVxuXHR2YXIgVCA9IHRoaXMuZHVwKCksIGNvbHMgPSBULmVsZW1lbnRzWzBdLmxlbmd0aDtcblx0dmFyIGkgPSBULmVsZW1lbnRzLmxlbmd0aCwgbmogPSBNWzBdLmxlbmd0aCwgajtcblx0aWYgKGkgIT0gTS5sZW5ndGgpIHsgcmV0dXJuIG51bGw7IH1cblx0d2hpbGUgKGktLSkge1xuXHQgICAgaiA9IG5qO1xuXHQgICAgd2hpbGUgKGotLSkge1xuXHRcdFQuZWxlbWVudHNbaV1bY29scyArIGpdID0gTVtpXVtqXTtcblx0ICAgIH1cblx0fVxuXHRyZXR1cm4gVDtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgaW52ZXJzZSAoaWYgb25lIGV4aXN0cykgdXNpbmcgR2F1c3MtSm9yZGFuXG4gICAgaW52ZXJzZTogZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5pc1NxdWFyZSgpIHx8IHRoaXMuaXNTaW5ndWxhcigpKSB7IHJldHVybiBudWxsOyB9XG5cdHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsIGkgPSBuLCBqO1xuXHR2YXIgTSA9IHRoaXMuYXVnbWVudChNYXRyaXguSShuKSkudG9SaWdodFRyaWFuZ3VsYXIoKTtcblx0dmFyIG5wID0gTS5lbGVtZW50c1swXS5sZW5ndGgsIHAsIGVscywgZGl2aXNvcjtcblx0dmFyIGludmVyc2VfZWxlbWVudHMgPSBbXSwgbmV3X2VsZW1lbnQ7XG5cdC8vIE1hdHJpeCBpcyBub24tc2luZ3VsYXIgc28gdGhlcmUgd2lsbCBiZSBubyB6ZXJvcyBvbiB0aGUgZGlhZ29uYWxcblx0Ly8gQ3ljbGUgdGhyb3VnaCByb3dzIGZyb20gbGFzdCB0byBmaXJzdFxuXHR3aGlsZSAoaS0tKSB7XG5cdCAgICAvLyBGaXJzdCwgbm9ybWFsaXNlIGRpYWdvbmFsIGVsZW1lbnRzIHRvIDFcblx0ICAgIGVscyA9IFtdO1xuXHQgICAgaW52ZXJzZV9lbGVtZW50c1tpXSA9IFtdO1xuXHQgICAgZGl2aXNvciA9IE0uZWxlbWVudHNbaV1baV07XG5cdCAgICBmb3IgKHAgPSAwOyBwIDwgbnA7IHArKykge1xuICAgICAgICBuZXdfZWxlbWVudCA9IE0uZWxlbWVudHNbaV1bcF0gLyBkaXZpc29yO1xuXHRcdGVscy5wdXNoKG5ld19lbGVtZW50KTtcblx0XHQvLyBTaHVmZmxlIG9mZiB0aGUgY3VycmVudCByb3cgb2YgdGhlIHJpZ2h0IGhhbmQgc2lkZSBpbnRvIHRoZSByZXN1bHRzXG5cdFx0Ly8gYXJyYXkgYXMgaXQgd2lsbCBub3QgYmUgbW9kaWZpZWQgYnkgbGF0ZXIgcnVucyB0aHJvdWdoIHRoaXMgbG9vcFxuXHRcdGlmIChwID49IG4pIHsgaW52ZXJzZV9lbGVtZW50c1tpXS5wdXNoKG5ld19lbGVtZW50KTsgfVxuXHQgICAgfVxuXHQgICAgTS5lbGVtZW50c1tpXSA9IGVscztcblx0ICAgIC8vIFRoZW4sIHN1YnRyYWN0IHRoaXMgcm93IGZyb20gdGhvc2UgYWJvdmUgaXQgdG9cblx0ICAgIC8vIGdpdmUgdGhlIGlkZW50aXR5IG1hdHJpeCBvbiB0aGUgbGVmdCBoYW5kIHNpZGVcblx0ICAgIGogPSBpO1xuXHQgICAgd2hpbGUgKGotLSkge1xuXHRcdGVscyA9IFtdO1xuXHRcdGZvciAocCA9IDA7IHAgPCBucDsgcCsrKSB7XG5cdFx0ICAgIGVscy5wdXNoKE0uZWxlbWVudHNbal1bcF0gLSBNLmVsZW1lbnRzW2ldW3BdICogTS5lbGVtZW50c1tqXVtpXSk7XG5cdFx0fVxuXHRcdE0uZWxlbWVudHNbal0gPSBlbHM7XG5cdCAgICB9XG5cdH1cblx0cmV0dXJuIE1hdHJpeC5jcmVhdGUoaW52ZXJzZV9lbGVtZW50cyk7XG4gICAgfSxcblxuICAgIGludjogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmludmVyc2UoKTsgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiByb3VuZGluZyBhbGwgdGhlIGVsZW1lbnRzXG4gICAgcm91bmQ6IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KTsgfSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYSBjb3B5IG9mIHRoZSBtYXRyaXggd2l0aCBlbGVtZW50cyBzZXQgdG8gdGhlIGdpdmVuIHZhbHVlIGlmIHRoZXlcbiAgICAvLyBkaWZmZXIgZnJvbSBpdCBieSBsZXNzIHRoYW4gU3lsdmVzdGVyLnByZWNpc2lvblxuICAgIHNuYXBUbzogZnVuY3Rpb24oeCkge1xuXHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24ocCkge1xuXHQgICAgcmV0dXJuIChNYXRoLmFicyhwIC0geCkgPD0gU3lsdmVzdGVyLnByZWNpc2lvbikgPyB4IDogcDtcblx0fSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICAgIGluc3BlY3Q6IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWF0cml4X3Jvd3MgPSBbXTtcblx0dmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0ICAgIG1hdHJpeF9yb3dzLnB1c2goJFYodGhpcy5lbGVtZW50c1tpXSkuaW5zcGVjdCgpKTtcblx0fVxuXHRyZXR1cm4gbWF0cml4X3Jvd3Muam9pbignXFxuJyk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYSBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgXHR2YXIgbWF0cml4X3Jvd3MgPSBbXTtcbiAgICBcdHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG4gICAgXHRmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBtYXRyaXhfcm93cy5wdXNoKHRoaXMuZWxlbWVudHNbaV0pO1xuICAgIFx0fVxuICAgICAgcmV0dXJuIG1hdHJpeF9yb3dzO1xuICAgIH0sXG5cblxuICAgIC8vIFNldCB0aGUgbWF0cml4J3MgZWxlbWVudHMgZnJvbSBhbiBhcnJheS4gSWYgdGhlIGFyZ3VtZW50IHBhc3NlZFxuICAgIC8vIGlzIGEgdmVjdG9yLCB0aGUgcmVzdWx0aW5nIG1hdHJpeCB3aWxsIGJlIGEgc2luZ2xlIGNvbHVtbi5cbiAgICBzZXRFbGVtZW50czogZnVuY3Rpb24oZWxzKSB7XG5cdHZhciBpLCBqLCBlbGVtZW50cyA9IGVscy5lbGVtZW50cyB8fCBlbHM7XG5cdGlmICh0eXBlb2YoZWxlbWVudHNbMF1bMF0pICE9ICd1bmRlZmluZWQnKSB7XG5cdCAgICBpID0gZWxlbWVudHMubGVuZ3RoO1xuXHQgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXHQgICAgd2hpbGUgKGktLSkge1xuXHRcdGogPSBlbGVtZW50c1tpXS5sZW5ndGg7XG5cdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xuXHRcdHdoaWxlIChqLS0pIHtcblx0XHQgICAgdGhpcy5lbGVtZW50c1tpXVtqXSA9IGVsZW1lbnRzW2ldW2pdO1xuXHRcdH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzO1xuXHR9XG5cdHZhciBuID0gZWxlbWVudHMubGVuZ3RoO1xuXHR0aGlzLmVsZW1lbnRzID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0ICAgIHRoaXMuZWxlbWVudHMucHVzaChbZWxlbWVudHNbaV1dKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIHRoZSBpbmRleGVzIG9mIHRoZSBjb2x1bW5zIHdpdGggdGhlIGxhcmdlc3QgdmFsdWVcbiAgICAvLyBmb3IgZWFjaCByb3dcbiAgICBtYXhDb2x1bW5JbmRleGVzOiBmdW5jdGlvbigpIHtcblx0dmFyIG1heGVzID0gW107XG5cblx0Zm9yKHZhciBpID0gMTsgaSA8PSB0aGlzLnJvd3MoKTsgaSsrKSB7XG5cdCAgICB2YXIgbWF4ID0gbnVsbDtcblx0ICAgIHZhciBtYXhJbmRleCA9IC0xO1xuXG5cdCAgICBmb3IodmFyIGogPSAxOyBqIDw9IHRoaXMuY29scygpOyBqKyspIHtcblx0XHRpZihtYXggPT09IG51bGwgfHwgdGhpcy5lKGksIGopID4gbWF4KSB7XG5cdFx0ICAgIG1heCA9IHRoaXMuZShpLCBqKTtcblx0XHQgICAgbWF4SW5kZXggPSBqO1xuXHRcdH1cblx0ICAgIH1cblxuXHQgICAgbWF4ZXMucHVzaChtYXhJbmRleCk7XG5cdH1cblxuXHRyZXR1cm4gJFYobWF4ZXMpO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gdGhlIGxhcmdlc3QgdmFsdWVzIGluIGVhY2ggcm93XG4gICAgbWF4Q29sdW1uczogZnVuY3Rpb24oKSB7XG5cdHZhciBtYXhlcyA9IFtdO1xuXG5cdGZvcih2YXIgaSA9IDE7IGkgPD0gdGhpcy5yb3dzKCk7IGkrKykge1xuXHQgICAgdmFyIG1heCA9IG51bGw7XG5cblx0ICAgIGZvcih2YXIgaiA9IDE7IGogPD0gdGhpcy5jb2xzKCk7IGorKykge1xuXHRcdGlmKG1heCA9PT0gbnVsbCB8fCB0aGlzLmUoaSwgaikgPiBtYXgpIHtcblx0XHQgICAgbWF4ID0gdGhpcy5lKGksIGopO1xuXHRcdH1cblx0ICAgIH1cblxuXHQgICAgbWF4ZXMucHVzaChtYXgpO1xuXHR9XG5cblx0cmV0dXJuICRWKG1heGVzKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIHRoZSBpbmRleGVzIG9mIHRoZSBjb2x1bW5zIHdpdGggdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZvciBlYWNoIHJvd1xuICAgIG1pbkNvbHVtbkluZGV4ZXM6IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWlucyA9IFtdO1xuXG5cdGZvcih2YXIgaSA9IDE7IGkgPD0gdGhpcy5yb3dzKCk7IGkrKykge1xuXHQgICAgdmFyIG1pbiA9IG51bGw7XG5cdCAgICB2YXIgbWluSW5kZXggPSAtMTtcblxuXHQgICAgZm9yKHZhciBqID0gMTsgaiA8PSB0aGlzLmNvbHMoKTsgaisrKSB7XG5cdFx0aWYobWluID09PSBudWxsIHx8IHRoaXMuZShpLCBqKSA8IG1pbikge1xuXHRcdCAgICBtaW4gPSB0aGlzLmUoaSwgaik7XG5cdFx0ICAgIG1pbkluZGV4ID0gajtcblx0XHR9XG5cdCAgICB9XG5cblx0ICAgIG1pbnMucHVzaChtaW5JbmRleCk7XG5cdH1cblxuXHRyZXR1cm4gJFYobWlucyk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiB0aGUgc21hbGxlc3QgdmFsdWVzIGluIGVhY2ggcm93XG4gICAgbWluQ29sdW1uczogZnVuY3Rpb24oKSB7XG5cdHZhciBtaW5zID0gW107XG5cblx0Zm9yKHZhciBpID0gMTsgaSA8PSB0aGlzLnJvd3MoKTsgaSsrKSB7XG5cdCAgICB2YXIgbWluID0gbnVsbDtcblxuXHQgICAgZm9yKHZhciBqID0gMTsgaiA8PSB0aGlzLmNvbHMoKTsgaisrKSB7XG5cdFx0aWYobWluID09PSBudWxsIHx8IHRoaXMuZShpLCBqKSA8IG1pbikge1xuXHRcdCAgICBtaW4gPSB0aGlzLmUoaSwgaik7XG5cdFx0fVxuXHQgICAgfVxuXG5cdCAgICBtaW5zLnB1c2gobWluKTtcblx0fVxuXG5cdHJldHVybiAkVihtaW5zKTtcbiAgICB9LFxuICAgIFxuICAgIC8vIHBlcm9ybSBhIHBhcnRpYWwgcGl2b3Qgb24gdGhlIG1hdHJpeC4gZXNzZW50aWFsbHkgbW92ZSB0aGUgbGFyZ2VzdFxuICAgIC8vIHJvdyBiZWxvdy1vci1pbmNsdWRpbmcgdGhlIHBpdm90IGFuZCByZXBsYWNlIHRoZSBwaXZvdCdzIHJvdyB3aXRoIGl0LlxuICAgIC8vIGEgcGl2b3QgbWF0cml4IGlzIHJldHVybmVkIHNvIG11bHRpcGxpY2F0aW9uIGNhbiBwZXJmb3JtIHRoZSB0cmFuc2Zvcm0uXG4gICAgcGFydGlhbFBpdm90OiBmdW5jdGlvbihrLCBqLCBQLCBBLCBMKSB7XG5cdHZhciBtYXhJbmRleCA9IDA7XG5cdHZhciBtYXhWYWx1ZSA9IDA7XG5cblx0Zm9yKHZhciBpID0gazsgaSA8PSBBLnJvd3MoKTsgaSsrKSB7XG5cdCAgICBpZihNYXRoLmFicyhBLmUoaSwgaikpID4gbWF4VmFsdWUpIHtcblx0XHRtYXhWYWx1ZSA9IE1hdGguYWJzKEEuZShrLCBqKSk7XG5cdFx0bWF4SW5kZXggPSBpO1xuXHQgICAgfVxuXHR9XG5cblx0aWYobWF4SW5kZXggIT0gaykge1xuXHQgICAgdmFyIHRtcCA9IEEuZWxlbWVudHNbayAtIDFdO1xuXHQgICAgQS5lbGVtZW50c1trIC0gMV0gPSBBLmVsZW1lbnRzW21heEluZGV4IC0gMV07XG5cdCAgICBBLmVsZW1lbnRzW21heEluZGV4IC0gMV0gPSB0bXA7XG5cdCAgICBcblx0ICAgIFAuZWxlbWVudHNbayAtIDFdW2sgLSAxXSA9IDA7XG5cdCAgICBQLmVsZW1lbnRzW2sgLSAxXVttYXhJbmRleCAtIDFdID0gMTtcblx0ICAgIFAuZWxlbWVudHNbbWF4SW5kZXggLSAxXVttYXhJbmRleCAtIDFdID0gMDtcblx0ICAgIFAuZWxlbWVudHNbbWF4SW5kZXggLSAxXVtrIC0gMV0gPSAxO1xuXHR9XG5cdFxuXHRyZXR1cm4gUDtcbiAgICB9LFxuXG4gICAgLy8gc29sdmUgbG93ZXItdHJpYW5ndWxhciBtYXRyaXggKiB4ID0gYiB2aWEgZm9yd2FyZCBzdWJzdGl0dXRpb25cbiAgICBmb3J3YXJkU3Vic3RpdHV0ZTogZnVuY3Rpb24oYikge1xuXHR2YXIgeGEgPSBbXTtcblxuXHRmb3IodmFyIGkgPSAxOyBpIDw9IHRoaXMucm93cygpOyBpKyspIHtcblx0ICAgIHZhciB3ID0gMDtcblxuXHQgICAgZm9yKHZhciBqID0gMTsgaiA8IGk7IGorKykge1xuXHRcdHcgKz0gdGhpcy5lKGksIGopICogeGFbaiAtIDFdO1xuXHQgICAgfVxuXG5cdCAgICB4YS5wdXNoKChiLmUoaSkgLSB3KSAvIHRoaXMuZShpLCBpKSk7XG5cdH1cblxuXHRyZXR1cm4gJFYoeGEpO1xuICAgIH0sXG5cbiAgICAvLyBzb2x2ZSBhbiB1cHBlci10cmlhbmd1bGFyIG1hdHJpeCAqIHggPSBiIHZpYSBiYWNrIHN1YnN0aXR1dGlvblxuICAgIGJhY2tTdWJzdGl0dXRlOiBmdW5jdGlvbihiKSB7XG5cdHZhciB4YSA9IFtdO1xuXG5cdGZvcih2YXIgaSA9IHRoaXMucm93cygpOyBpID4gMDsgaS0tKSB7XG5cdCAgICB2YXIgdyA9IDA7XG5cblx0ICAgIGZvcih2YXIgaiA9IHRoaXMuY29scygpOyBqID4gaTsgai0tKSB7XG5cdFx0dyArPSB0aGlzLmUoaSwgaikgKiB4YVt0aGlzLnJvd3MoKSAtIGpdO1xuXHQgICAgfVxuXG5cdCAgICB4YS5wdXNoKChiLmUoaSkgLSB3KSAvIHRoaXMuZShpLCBpKSk7XG5cdH1cblxuXHRyZXR1cm4gJFYoeGEucmV2ZXJzZSgpKTtcbiAgICB9LFxuICAgIFxuICAgIGx1UGFjazogbHVQYWNrLFxuICAgIGx1SnM6IGx1SnMsXG4gICAgc3ZkSnM6IHN2ZEpzLFxuICAgIHN2ZFBhY2s6IHN2ZFBhY2ssXG4gICAgcXJKczogcXJKcyxcbiAgICBxclBhY2s6IHFyUGFja1xufTtcblxuLy8gTFUgZmFjdG9yaXphdGlvbiBmcm9tIExBUEFDS1xuZnVuY3Rpb24gbHVQYWNrKCkge1xuICAgIHZhciBsdSA9IGxhcGFjay5sdSh0aGlzLmVsZW1lbnRzKTtcbiAgICByZXR1cm4ge1xuXHRMOiAkTShsdS5MKSxcblx0VTogJE0obHUuVSksXG5cdFA6ICRNKGx1LlApXG5cdC8vIGRvbid0IHBhc3MgYmFjayBJUElWXG4gICAgfTtcbn1cblxudmFyIHRvbGVyYW5jZSA9ICAxLjQ5MDFlLTA4O1xuXG4vLyBwdXJlIEphdmFzY3JpcHQgTFUgZmFjdG9yaXphdGlvblxuZnVuY3Rpb24gbHVKcygpIHtcbiAgICB2YXIgQSA9IHRoaXMuZHVwKCk7XG4gICAgdmFyIEwgPSBNYXRyaXguSShBLnJvd3MoKSk7XG4gICAgdmFyIFAgPSBNYXRyaXguSShBLnJvd3MoKSk7XG4gICAgdmFyIFUgPSBNYXRyaXguWmVyb3MoQS5yb3dzKCksIEEuY29scygpKTtcbiAgICB2YXIgcCA9IDE7XG5cbiAgICBmb3IodmFyIGsgPSAxOyBrIDw9IE1hdGgubWluKEEuY29scygpLCBBLnJvd3MoKSk7IGsrKykge1xuXHRQID0gQS5wYXJ0aWFsUGl2b3QoaywgcCwgUCwgQSwgTCk7XG5cdFxuXHRmb3IodmFyIGkgPSBrICsgMTsgaSA8PSBBLnJvd3MoKTsgaSsrKSB7XG5cdCAgICB2YXIgbCA9IEEuZShpLCBwKSAvIEEuZShrLCBwKTtcblx0ICAgIEwuZWxlbWVudHNbaSAtIDFdW2sgLSAxXSA9IGw7XG5cdCAgICBcblx0ICAgIGZvcih2YXIgaiA9IGsgKyAxIDsgaiA8PSBBLmNvbHMoKTsgaisrKSB7XG5cdFx0QS5lbGVtZW50c1tpIC0gMV1baiAtIDFdIC09IEEuZShrLCBqKSAqIGw7XG5cdCAgICB9XG5cdH1cblx0XG5cdGZvcih2YXIgaiA9IGs7IGogPD0gQS5jb2xzKCk7IGorKykge1xuXHQgICAgVS5lbGVtZW50c1trIC0gMV1baiAtIDFdID0gQS5lKGssIGopO1xuXHR9XG5cblx0aWYocCA8IEEuY29scygpKVxuXHQgICAgcCsrO1xuICAgIH0gICAgXG4gICAgXG4gICAgcmV0dXJuIHtMOiBMLCBVOiBVLCBQOiBQfTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFwYWNrKCkge1xuICAgIHRyeSB7XG5cdHJldHVybiByZXF1aXJlKCdsYXBhY2snKTtcbiAgICB9IGNhdGNoKGUpIHt9XG59XG5cbnZhciBsYXBhY2s7XG5cbi8vIGlmIG5vZGUtbGFwYWNrIGlzIGluc3RhbGxlZCB1c2UgdGhlIGZhc3QsIG5hdGl2ZSBmb3J0cmFuIHJvdXRpbmVzXG5pZihsYXBhY2sgPSBnZXRMYXBhY2soKSkge1xuICAgIE1hdHJpeC5wcm90b3R5cGUuc3ZkID0gc3ZkUGFjaztcbiAgICBNYXRyaXgucHJvdG90eXBlLnFyID0gcXJQYWNrO1xuICAgIE1hdHJpeC5wcm90b3R5cGUubHUgPSBsdVBhY2s7XG59IGVsc2Uge1xuICAgIC8vIG90aGVyd2lzZSB1c2UgdGhlIHNsb3dlciBwdXJlIEphdmFzY3JpcHQgdmVyc2lvbnNcbiAgICBNYXRyaXgucHJvdG90eXBlLnN2ZCA9IHN2ZEpzO1xuICAgIE1hdHJpeC5wcm90b3R5cGUucXIgPSBxckpzO1xuICAgIE1hdHJpeC5wcm90b3R5cGUubHUgPSBsdUpzO1xufVxuXG4vLyBDb25zdHJ1Y3RvciBmdW5jdGlvblxuTWF0cml4LmNyZWF0ZSA9IGZ1bmN0aW9uKGFFbGVtZW50cywgaWdub3JlTGFwYWNrKSB7XG4gICAgdmFyIE0gPSBuZXcgTWF0cml4KCkuc2V0RWxlbWVudHMoYUVsZW1lbnRzKTtcbiAgICByZXR1cm4gTTtcbn07XG5cbi8vIElkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbk1hdHJpeC5JID0gZnVuY3Rpb24obikge1xuICAgIHZhciBlbHMgPSBbXSwgaSA9IG4sIGo7XG4gICAgd2hpbGUgKGktLSkge1xuXHRqID0gbjtcblx0ZWxzW2ldID0gW107XG5cdHdoaWxlIChqLS0pIHtcblx0ICAgIGVsc1tpXVtqXSA9IChpID09IGopID8gMSA6IDA7XG5cdH1cbiAgICB9XG4gICAgcmV0dXJuIE1hdHJpeC5jcmVhdGUoZWxzKTtcbn07XG5cbk1hdHJpeC5sb2FkRmlsZSA9IGZ1bmN0aW9uKGZpbGUpIHtcbiAgICB2YXIgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0Zi04Jyk7XG4gICAgdmFyIG1hdHJpeCA9IFtdO1xuXG4gICAgdmFyIHJvd0FycmF5ID0gY29udGVudHMuc3BsaXQoJ1xcbicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93QXJyYXkubGVuZ3RoOyBpKyspIHtcblx0dmFyIGQgPSByb3dBcnJheVtpXS5zcGxpdCgnLCcpO1xuXHRpZiAoZC5sZW5ndGggPiAxKSB7XG5cdCAgICBtYXRyaXgucHVzaChkKTtcblx0fVxuICAgIH1cblxuICAgIHZhciBNID0gbmV3IE1hdHJpeCgpO1xuICAgIHJldHVybiBNLnNldEVsZW1lbnRzKG1hdHJpeCk7XG59O1xuXG4vLyBEaWFnb25hbCBtYXRyaXggLSBhbGwgb2ZmLWRpYWdvbmFsIGVsZW1lbnRzIGFyZSB6ZXJvXG5NYXRyaXguRGlhZ29uYWwgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICAgIHZhciBpID0gZWxlbWVudHMubGVuZ3RoO1xuICAgIHZhciBNID0gTWF0cml4LkkoaSk7XG4gICAgd2hpbGUgKGktLSkge1xuXHRNLmVsZW1lbnRzW2ldW2ldID0gZWxlbWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBNO1xufTtcblxuLy8gUm90YXRpb24gbWF0cml4IGFib3V0IHNvbWUgYXhpcy4gSWYgbm8gYXhpcyBpc1xuLy8gc3VwcGxpZWQsIGFzc3VtZSB3ZSdyZSBhZnRlciBhIDJEIHRyYW5zZm9ybVxuTWF0cml4LlJvdGF0aW9uID0gZnVuY3Rpb24odGhldGEsIGEpIHtcbiAgICBpZiAoIWEpIHtcblx0cmV0dXJuIE1hdHJpeC5jcmVhdGUoW1xuXHQgICAgW01hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKV0sXG5cdCAgICBbTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSldXG5cdF0pO1xuICAgIH1cbiAgICB2YXIgYXhpcyA9IGEuZHVwKCk7XG4gICAgaWYgKGF4aXMuZWxlbWVudHMubGVuZ3RoICE9IDMpIHsgcmV0dXJuIG51bGw7IH1cbiAgICB2YXIgbW9kID0gYXhpcy5tb2R1bHVzKCk7XG4gICAgdmFyIHggPSBheGlzLmVsZW1lbnRzWzBdIC8gbW9kLCB5ID0gYXhpcy5lbGVtZW50c1sxXSAvIG1vZCwgeiA9IGF4aXMuZWxlbWVudHNbMl0gLyBtb2Q7XG4gICAgdmFyIHMgPSBNYXRoLnNpbih0aGV0YSksIGMgPSBNYXRoLmNvcyh0aGV0YSksIHQgPSAxIC0gYztcbiAgICAvLyBGb3JtdWxhIGRlcml2ZWQgaGVyZTogaHR0cDovL3d3dy5nYW1lZGV2Lm5ldC9yZWZlcmVuY2UvYXJ0aWNsZXMvYXJ0aWNsZTExOTkuYXNwXG4gICAgLy8gVGhhdCBwcm9vZiByb3RhdGVzIHRoZSBjby1vcmRpbmF0ZSBzeXN0ZW0gc28gdGhldGFcbiAgICAvLyBiZWNvbWVzIC10aGV0YSBhbmQgc2luIGJlY29tZXMgLXNpbiBoZXJlLlxuICAgIHJldHVybiBNYXRyaXguY3JlYXRlKFtcblx0W3QgKiB4ICogeCArIGMsIHQgKiB4ICogeSAtIHMgKiB6LCB0ICogeCAqIHogKyBzICogeV0sXG5cdFt0ICogeCAqIHkgKyBzICogeiwgdCAqIHkgKiB5ICsgYywgdCAqIHkgKiB6IC0gcyAqIHhdLFxuXHRbdCAqIHggKiB6IC0gcyAqIHksIHQgKiB5ICogeiArIHMgKiB4LCB0ICogeiAqIHogKyBjXVxuICAgIF0pO1xufTtcblxuLy8gU3BlY2lhbCBjYXNlIHJvdGF0aW9uc1xuTWF0cml4LlJvdGF0aW9uWCA9IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKHQpLCBzID0gTWF0aC5zaW4odCk7XG4gICAgcmV0dXJuIE1hdHJpeC5jcmVhdGUoW1xuXHRbMSwgMCwgMF0sXG5cdFswLCBjLCAtc10sXG5cdFswLCBzLCBjXVxuICAgIF0pO1xufTtcblxuTWF0cml4LlJvdGF0aW9uWSA9IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKHQpLCBzID0gTWF0aC5zaW4odCk7XG4gICAgcmV0dXJuIE1hdHJpeC5jcmVhdGUoW1xuXHRbYywgMCwgc10sXG5cdFswLCAxLCAwXSxcblx0Wy1zLCAwLCBjXVxuICAgIF0pO1xufTtcblxuTWF0cml4LlJvdGF0aW9uWiA9IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKHQpLCBzID0gTWF0aC5zaW4odCk7XG4gICAgcmV0dXJuIE1hdHJpeC5jcmVhdGUoW1xuXHRbYywgLXMsIDBdLFxuXHRbcywgYywgMF0sXG5cdFswLCAwLCAxXVxuICAgIF0pO1xufTtcblxuLy8gUmFuZG9tIG1hdHJpeCBvZiBuIHJvd3MsIG0gY29sdW1uc1xuTWF0cml4LlJhbmRvbSA9IGZ1bmN0aW9uKG4sIG0pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkgbSA9IG47XG4gICAgcmV0dXJuIE1hdHJpeC5aZXJvKG4sIG0pLm1hcChcblx0ZnVuY3Rpb24oKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpOyB9XG4gICk7XG59O1xuXG5NYXRyaXguRmlsbCA9IGZ1bmN0aW9uKG4sIG0sIHYpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuXHR2ID0gbTtcblx0bSA9IG47XG4gICAgfVxuXG4gICAgdmFyIGVscyA9IFtdLCBpID0gbiwgajtcblxuICAgIHdoaWxlIChpLS0pIHtcblx0aiA9IG07XG5cdGVsc1tpXSA9IFtdO1xuXG5cdHdoaWxlIChqLS0pIHtcblx0ICAgIGVsc1tpXVtqXSA9IHY7XG5cdH1cbiAgICB9XG5cbiAgICByZXR1cm4gTWF0cml4LmNyZWF0ZShlbHMpO1xufTtcblxuLy8gTWF0cml4IGZpbGxlZCB3aXRoIHplcm9zXG5NYXRyaXguWmVybyA9IGZ1bmN0aW9uKG4sIG0pIHtcbiAgICByZXR1cm4gTWF0cml4LkZpbGwobiwgbSwgMCk7XG59O1xuXG4vLyBNYXRyaXggZmlsbGVkIHdpdGggemVyb3Ncbk1hdHJpeC5aZXJvcyA9IGZ1bmN0aW9uKG4sIG0pIHtcbiAgICByZXR1cm4gTWF0cml4Llplcm8obiwgbSk7XG59O1xuXG4vLyBNYXRyaXggZmlsbGVkIHdpdGggb25lc1xuTWF0cml4Lk9uZSA9IGZ1bmN0aW9uKG4sIG0pIHtcbiAgICByZXR1cm4gTWF0cml4LkZpbGwobiwgbSwgMSk7XG59O1xuXG4vLyBNYXRyaXggZmlsbGVkIHdpdGggb25lc1xuTWF0cml4Lk9uZXMgPSBmdW5jdGlvbihuLCBtKSB7XG4gICAgcmV0dXJuIE1hdHJpeC5PbmUobiwgbSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxMSwgQ2hyaXMgVW1iZWwsIEphbWVzIENvZ2xhblxuLy8gUGxhbmUgY2xhc3MgLSBkZXBlbmRzIG9uIFZlY3Rvci4gU29tZSBtZXRob2RzIHJlcXVpcmUgTWF0cml4IGFuZCBMaW5lLlxudmFyIFZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgnKTtcbnZhciBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbnZhciBTeWx2ZXN0ZXIgPSByZXF1aXJlKCcuL3N5bHZlc3RlcicpO1xuXG5mdW5jdGlvbiBQbGFuZSgpIHt9XG5QbGFuZS5wcm90b3R5cGUgPSB7XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgcGxhbmUgb2NjdXBpZXMgdGhlIHNhbWUgc3BhY2UgYXMgdGhlIGFyZ3VtZW50XG4gIGVxbDogZnVuY3Rpb24ocGxhbmUpIHtcbiAgICByZXR1cm4gKHRoaXMuY29udGFpbnMocGxhbmUuYW5jaG9yKSAmJiB0aGlzLmlzUGFyYWxsZWxUbyhwbGFuZSkpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgYSBjb3B5IG9mIHRoZSBwbGFuZVxuICBkdXA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQbGFuZS5jcmVhdGUodGhpcy5hbmNob3IsIHRoaXMubm9ybWFsKTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdHJhbnNsYXRpbmcgdGhlIHBsYW5lIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICB2YXIgViA9IHZlY3Rvci5lbGVtZW50cyB8fCB2ZWN0b3I7XG4gICAgcmV0dXJuIFBsYW5lLmNyZWF0ZShbXG4gICAgICB0aGlzLmFuY2hvci5lbGVtZW50c1swXSArIFZbMF0sXG4gICAgICB0aGlzLmFuY2hvci5lbGVtZW50c1sxXSArIFZbMV0sXG4gICAgICB0aGlzLmFuY2hvci5lbGVtZW50c1syXSArIChWWzJdIHx8IDApXG4gICAgXSwgdGhpcy5ub3JtYWwpO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIHBsYW5lIGlzIHBhcmFsbGVsIHRvIHRoZSBhcmd1bWVudC4gV2lsbCByZXR1cm4gdHJ1ZVxuICAvLyBpZiB0aGUgcGxhbmVzIGFyZSBlcXVhbCwgb3IgaWYgeW91IGdpdmUgYSBsaW5lIGFuZCBpdCBsaWVzIGluIHRoZSBwbGFuZS5cbiAgaXNQYXJhbGxlbFRvOiBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgdGhldGE7XG4gICAgaWYgKG9iai5ub3JtYWwpIHtcbiAgICAgIC8vIG9iaiBpcyBhIHBsYW5lXG4gICAgICB0aGV0YSA9IHRoaXMubm9ybWFsLmFuZ2xlRnJvbShvYmoubm9ybWFsKTtcbiAgICAgIHJldHVybiAoTWF0aC5hYnModGhldGEpIDw9IFN5bHZlc3Rlci5wcmVjaXNpb24gfHwgTWF0aC5hYnMoTWF0aC5QSSAtIHRoZXRhKSA8PSBTeWx2ZXN0ZXIucHJlY2lzaW9uKTtcbiAgICB9IGVsc2UgaWYgKG9iai5kaXJlY3Rpb24pIHtcbiAgICAgIC8vIG9iaiBpcyBhIGxpbmVcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbC5pc1BlcnBlbmRpY3VsYXJUbyhvYmouZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgcmVjZWl2ZXIgaXMgcGVycGVuZGljdWxhciB0byB0aGUgYXJndW1lbnRcbiAgaXNQZXJwZW5kaWN1bGFyVG86IGZ1bmN0aW9uKHBsYW5lKSB7XG4gICAgdmFyIHRoZXRhID0gdGhpcy5ub3JtYWwuYW5nbGVGcm9tKHBsYW5lLm5vcm1hbCk7XG4gICAgcmV0dXJuIChNYXRoLmFicyhNYXRoLlBJLzIgLSB0aGV0YSkgPD0gU3lsdmVzdGVyLnByZWNpc2lvbik7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgcGxhbmUncyBkaXN0YW5jZSBmcm9tIHRoZSBnaXZlbiBvYmplY3QgKHBvaW50LCBsaW5lIG9yIHBsYW5lKVxuICBkaXN0YW5jZUZyb206IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICh0aGlzLmludGVyc2VjdHMob2JqKSB8fCB0aGlzLmNvbnRhaW5zKG9iaikpIHsgcmV0dXJuIDA7IH1cbiAgICBpZiAob2JqLmFuY2hvcikge1xuICAgICAgLy8gb2JqIGlzIGEgcGxhbmUgb3IgbGluZVxuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgQiA9IG9iai5hbmNob3IuZWxlbWVudHMsIE4gPSB0aGlzLm5vcm1hbC5lbGVtZW50cztcbiAgICAgIHJldHVybiBNYXRoLmFicygoQVswXSAtIEJbMF0pICogTlswXSArIChBWzFdIC0gQlsxXSkgKiBOWzFdICsgKEFbMl0gLSBCWzJdKSAqIE5bMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvYmogaXMgYSBwb2ludFxuICAgICAgdmFyIFAgPSBvYmouZWxlbWVudHMgfHwgb2JqO1xuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgTiA9IHRoaXMubm9ybWFsLmVsZW1lbnRzO1xuICAgICAgcmV0dXJuIE1hdGguYWJzKChBWzBdIC0gUFswXSkgKiBOWzBdICsgKEFbMV0gLSBQWzFdKSAqIE5bMV0gKyAoQVsyXSAtIChQWzJdIHx8IDApKSAqIE5bMl0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSBwbGFuZSBjb250YWlucyB0aGUgZ2l2ZW4gcG9pbnQgb3IgbGluZVxuICBjb250YWluczogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iai5ub3JtYWwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAob2JqLmRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuICh0aGlzLmNvbnRhaW5zKG9iai5hbmNob3IpICYmIHRoaXMuY29udGFpbnMob2JqLmFuY2hvci5hZGQob2JqLmRpcmVjdGlvbikpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIFAgPSBvYmouZWxlbWVudHMgfHwgb2JqO1xuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgTiA9IHRoaXMubm9ybWFsLmVsZW1lbnRzO1xuICAgICAgdmFyIGRpZmYgPSBNYXRoLmFicyhOWzBdKihBWzBdIC0gUFswXSkgKyBOWzFdKihBWzFdIC0gUFsxXSkgKyBOWzJdKihBWzJdIC0gKFBbMl0gfHwgMCkpKTtcbiAgICAgIHJldHVybiAoZGlmZiA8PSBTeWx2ZXN0ZXIucHJlY2lzaW9uKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmZiB0aGUgcGxhbmUgaGFzIGEgdW5pcXVlIHBvaW50L2xpbmUgb2YgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGFyZ3VtZW50XG4gIGludGVyc2VjdHM6IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICh0eXBlb2Yob2JqLmRpcmVjdGlvbikgPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKG9iai5ub3JtYWwpID09ICd1bmRlZmluZWQnKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuICF0aGlzLmlzUGFyYWxsZWxUbyhvYmopO1xuICB9LFxuXG4gIC8vIFJldHVybnMgdGhlIHVuaXF1ZSBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgYXJndW1lbnQsIGlmIG9uZSBleGlzdHMuIFRoZSByZXN1bHRcbiAgLy8gd2lsbCBiZSBhIHZlY3RvciBpZiBhIGxpbmUgaXMgc3VwcGxpZWQsIGFuZCBhIGxpbmUgaWYgYSBwbGFuZSBpcyBzdXBwbGllZC5cbiAgaW50ZXJzZWN0aW9uV2l0aDogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCF0aGlzLmludGVyc2VjdHMob2JqKSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIGlmIChvYmouZGlyZWN0aW9uKSB7XG4gICAgICAvLyBvYmogaXMgYSBsaW5lXG4gICAgICB2YXIgQSA9IG9iai5hbmNob3IuZWxlbWVudHMsIEQgPSBvYmouZGlyZWN0aW9uLmVsZW1lbnRzLFxuICAgICAgICAgIFAgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgTiA9IHRoaXMubm9ybWFsLmVsZW1lbnRzO1xuICAgICAgdmFyIG11bHRpcGxpZXIgPSAoTlswXSooUFswXS1BWzBdKSArIE5bMV0qKFBbMV0tQVsxXSkgKyBOWzJdKihQWzJdLUFbMl0pKSAvIChOWzBdKkRbMF0gKyBOWzFdKkRbMV0gKyBOWzJdKkRbMl0pO1xuICAgICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoW0FbMF0gKyBEWzBdKm11bHRpcGxpZXIsIEFbMV0gKyBEWzFdKm11bHRpcGxpZXIsIEFbMl0gKyBEWzJdKm11bHRpcGxpZXJdKTtcbiAgICB9IGVsc2UgaWYgKG9iai5ub3JtYWwpIHtcbiAgICAgIC8vIG9iaiBpcyBhIHBsYW5lXG4gICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5ub3JtYWwuY3Jvc3Mob2JqLm5vcm1hbCkudG9Vbml0VmVjdG9yKCk7XG4gICAgICAvLyBUbyBmaW5kIGFuIGFuY2hvciBwb2ludCwgd2UgZmluZCBvbmUgY28tb3JkaW5hdGUgdGhhdCBoYXMgYSB2YWx1ZVxuICAgICAgLy8gb2YgemVybyBzb21ld2hlcmUgb24gdGhlIGludGVyc2VjdGlvbiwgYW5kIHJlbWVtYmVyIHdoaWNoIG9uZSB3ZSBwaWNrZWRcbiAgICAgIHZhciBOID0gdGhpcy5ub3JtYWwuZWxlbWVudHMsIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cyxcbiAgICAgICAgICBPID0gb2JqLm5vcm1hbC5lbGVtZW50cywgQiA9IG9iai5hbmNob3IuZWxlbWVudHM7XG4gICAgICB2YXIgc29sdmVyID0gTWF0cml4Llplcm8oMiwyKSwgaSA9IDA7XG4gICAgICB3aGlsZSAoc29sdmVyLmlzU2luZ3VsYXIoKSkge1xuICAgICAgICBpKys7XG4gICAgICAgIHNvbHZlciA9IE1hdHJpeC5jcmVhdGUoW1xuICAgICAgICAgIFsgTltpJTNdLCBOWyhpKzEpJTNdIF0sXG4gICAgICAgICAgWyBPW2klM10sIE9bKGkrMSklM10gIF1cbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgICAvLyBUaGVuIHdlIHNvbHZlIHRoZSBzaW11bHRhbmVvdXMgZXF1YXRpb25zIGluIHRoZSByZW1haW5pbmcgZGltZW5zaW9uc1xuICAgICAgdmFyIGludmVyc2UgPSBzb2x2ZXIuaW52ZXJzZSgpLmVsZW1lbnRzO1xuICAgICAgdmFyIHggPSBOWzBdKkFbMF0gKyBOWzFdKkFbMV0gKyBOWzJdKkFbMl07XG4gICAgICB2YXIgeSA9IE9bMF0qQlswXSArIE9bMV0qQlsxXSArIE9bMl0qQlsyXTtcbiAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSBbXG4gICAgICAgIGludmVyc2VbMF1bMF0gKiB4ICsgaW52ZXJzZVswXVsxXSAqIHksXG4gICAgICAgIGludmVyc2VbMV1bMF0gKiB4ICsgaW52ZXJzZVsxXVsxXSAqIHlcbiAgICAgIF07XG4gICAgICB2YXIgYW5jaG9yID0gW107XG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSAzOyBqKyspIHtcbiAgICAgICAgLy8gVGhpcyBmb3JtdWxhIHBpY2tzIHRoZSByaWdodCBlbGVtZW50IGZyb20gaW50ZXJzZWN0aW9uIGJ5XG4gICAgICAgIC8vIGN5Y2xpbmcgZGVwZW5kaW5nIG9uIHdoaWNoIGVsZW1lbnQgd2Ugc2V0IHRvIHplcm8gYWJvdmVcbiAgICAgICAgYW5jaG9yLnB1c2goKGkgPT0gaikgPyAwIDogaW50ZXJzZWN0aW9uWyhqICsgKDUgLSBpKSUzKSUzXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTGluZS5jcmVhdGUoYW5jaG9yLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgfSxcblxuICAvLyBSZXR1cm5zIHRoZSBwb2ludCBpbiB0aGUgcGxhbmUgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgcG9pbnRDbG9zZXN0VG86IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgdmFyIFAgPSBwb2ludC5lbGVtZW50cyB8fCBwb2ludDtcbiAgICB2YXIgQSA9IHRoaXMuYW5jaG9yLmVsZW1lbnRzLCBOID0gdGhpcy5ub3JtYWwuZWxlbWVudHM7XG4gICAgdmFyIGRvdCA9IChBWzBdIC0gUFswXSkgKiBOWzBdICsgKEFbMV0gLSBQWzFdKSAqIE5bMV0gKyAoQVsyXSAtIChQWzJdIHx8IDApKSAqIE5bMl07XG4gICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoW1BbMF0gKyBOWzBdICogZG90LCBQWzFdICsgTlsxXSAqIGRvdCwgKFBbMl0gfHwgMCkgKyBOWzJdICogZG90XSk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyBhIGNvcHkgb2YgdGhlIHBsYW5lLCByb3RhdGVkIGJ5IHQgcmFkaWFucyBhYm91dCB0aGUgZ2l2ZW4gbGluZVxuICAvLyBTZWUgbm90ZXMgb24gTGluZSNyb3RhdGUuXG4gIHJvdGF0ZTogZnVuY3Rpb24odCwgbGluZSkge1xuICAgIHZhciBSID0gdC5kZXRlcm1pbmFudCA/IHQuZWxlbWVudHMgOiBNYXRyaXguUm90YXRpb24odCwgbGluZS5kaXJlY3Rpb24pLmVsZW1lbnRzO1xuICAgIHZhciBDID0gbGluZS5wb2ludENsb3Nlc3RUbyh0aGlzLmFuY2hvcikuZWxlbWVudHM7XG4gICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgTiA9IHRoaXMubm9ybWFsLmVsZW1lbnRzO1xuICAgIHZhciBDMSA9IENbMF0sIEMyID0gQ1sxXSwgQzMgPSBDWzJdLCBBMSA9IEFbMF0sIEEyID0gQVsxXSwgQTMgPSBBWzJdO1xuICAgIHZhciB4ID0gQTEgLSBDMSwgeSA9IEEyIC0gQzIsIHogPSBBMyAtIEMzO1xuICAgIHJldHVybiBQbGFuZS5jcmVhdGUoW1xuICAgICAgQzEgKyBSWzBdWzBdICogeCArIFJbMF1bMV0gKiB5ICsgUlswXVsyXSAqIHosXG4gICAgICBDMiArIFJbMV1bMF0gKiB4ICsgUlsxXVsxXSAqIHkgKyBSWzFdWzJdICogeixcbiAgICAgIEMzICsgUlsyXVswXSAqIHggKyBSWzJdWzFdICogeSArIFJbMl1bMl0gKiB6XG4gICAgXSwgW1xuICAgICAgUlswXVswXSAqIE5bMF0gKyBSWzBdWzFdICogTlsxXSArIFJbMF1bMl0gKiBOWzJdLFxuICAgICAgUlsxXVswXSAqIE5bMF0gKyBSWzFdWzFdICogTlsxXSArIFJbMV1bMl0gKiBOWzJdLFxuICAgICAgUlsyXVswXSAqIE5bMF0gKyBSWzJdWzFdICogTlsxXSArIFJbMl1bMl0gKiBOWzJdXG4gICAgXSk7XG4gIH0sXG5cbiAgLy8gUmV0dXJucyB0aGUgcmVmbGVjdGlvbiBvZiB0aGUgcGxhbmUgaW4gdGhlIGdpdmVuIHBvaW50LCBsaW5lIG9yIHBsYW5lLlxuICByZWZsZWN0aW9uSW46IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmoubm9ybWFsKSB7XG4gICAgICAvLyBvYmogaXMgYSBwbGFuZVxuICAgICAgdmFyIEEgPSB0aGlzLmFuY2hvci5lbGVtZW50cywgTiA9IHRoaXMubm9ybWFsLmVsZW1lbnRzO1xuICAgICAgdmFyIEExID0gQVswXSwgQTIgPSBBWzFdLCBBMyA9IEFbMl0sIE4xID0gTlswXSwgTjIgPSBOWzFdLCBOMyA9IE5bMl07XG4gICAgICB2YXIgbmV3QSA9IHRoaXMuYW5jaG9yLnJlZmxlY3Rpb25JbihvYmopLmVsZW1lbnRzO1xuICAgICAgLy8gQWRkIHRoZSBwbGFuZSdzIG5vcm1hbCB0byBpdHMgYW5jaG9yLCB0aGVuIG1pcnJvciB0aGF0IGluIHRoZSBvdGhlciBwbGFuZVxuICAgICAgdmFyIEFOMSA9IEExICsgTjEsIEFOMiA9IEEyICsgTjIsIEFOMyA9IEEzICsgTjM7XG4gICAgICB2YXIgUSA9IG9iai5wb2ludENsb3Nlc3RUbyhbQU4xLCBBTjIsIEFOM10pLmVsZW1lbnRzO1xuICAgICAgdmFyIG5ld04gPSBbUVswXSArIChRWzBdIC0gQU4xKSAtIG5ld0FbMF0sIFFbMV0gKyAoUVsxXSAtIEFOMikgLSBuZXdBWzFdLCBRWzJdICsgKFFbMl0gLSBBTjMpIC0gbmV3QVsyXV07XG4gICAgICByZXR1cm4gUGxhbmUuY3JlYXRlKG5ld0EsIG5ld04pO1xuICAgIH0gZWxzZSBpZiAob2JqLmRpcmVjdGlvbikge1xuICAgICAgLy8gb2JqIGlzIGEgbGluZVxuICAgICAgcmV0dXJuIHRoaXMucm90YXRlKE1hdGguUEksIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9iaiBpcyBhIHBvaW50XG4gICAgICB2YXIgUCA9IG9iai5lbGVtZW50cyB8fCBvYmo7XG4gICAgICByZXR1cm4gUGxhbmUuY3JlYXRlKHRoaXMuYW5jaG9yLnJlZmxlY3Rpb25JbihbUFswXSwgUFsxXSwgKFBbMl0gfHwgMCldKSwgdGhpcy5ub3JtYWwpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZXRzIHRoZSBhbmNob3IgcG9pbnQgYW5kIG5vcm1hbCB0byB0aGUgcGxhbmUuIElmIHRocmVlIGFyZ3VtZW50cyBhcmUgc3BlY2lmaWVkLFxuICAvLyB0aGUgbm9ybWFsIGlzIGNhbGN1bGF0ZWQgYnkgYXNzdW1pbmcgdGhlIHRocmVlIHBvaW50cyBzaG91bGQgbGllIGluIHRoZSBzYW1lIHBsYW5lLlxuICAvLyBJZiBvbmx5IHR3byBhcmUgc2VwY2lmaWVkLCB0aGUgc2Vjb25kIGlzIHRha2VuIHRvIGJlIHRoZSBub3JtYWwuIE5vcm1hbCB2ZWN0b3IgaXNcbiAgLy8gbm9ybWFsaXNlZCBiZWZvcmUgc3RvcmFnZS5cbiAgc2V0VmVjdG9yczogZnVuY3Rpb24oYW5jaG9yLCB2MSwgdjIpIHtcbiAgICBhbmNob3IgPSBWZWN0b3IuY3JlYXRlKGFuY2hvcik7XG4gICAgYW5jaG9yID0gYW5jaG9yLnRvM0QoKTsgaWYgKGFuY2hvciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHYxID0gVmVjdG9yLmNyZWF0ZSh2MSk7XG4gICAgdjEgPSB2MS50bzNEKCk7IGlmICh2MSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIGlmICh0eXBlb2YodjIpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2MiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHYyID0gVmVjdG9yLmNyZWF0ZSh2Mik7XG4gICAgICB2MiA9IHYyLnRvM0QoKTsgaWYgKHYyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgfVxuICAgIHZhciBBMSA9IGFuY2hvci5lbGVtZW50c1swXSwgQTIgPSBhbmNob3IuZWxlbWVudHNbMV0sIEEzID0gYW5jaG9yLmVsZW1lbnRzWzJdO1xuICAgIHZhciB2MTEgPSB2MS5lbGVtZW50c1swXSwgdjEyID0gdjEuZWxlbWVudHNbMV0sIHYxMyA9IHYxLmVsZW1lbnRzWzJdO1xuICAgIHZhciBub3JtYWwsIG1vZDtcbiAgICBpZiAodjIgIT09IG51bGwpIHtcbiAgICAgIHZhciB2MjEgPSB2Mi5lbGVtZW50c1swXSwgdjIyID0gdjIuZWxlbWVudHNbMV0sIHYyMyA9IHYyLmVsZW1lbnRzWzJdO1xuICAgICAgbm9ybWFsID0gVmVjdG9yLmNyZWF0ZShbXG4gICAgICAgICh2MTIgLSBBMikgKiAodjIzIC0gQTMpIC0gKHYxMyAtIEEzKSAqICh2MjIgLSBBMiksXG4gICAgICAgICh2MTMgLSBBMykgKiAodjIxIC0gQTEpIC0gKHYxMSAtIEExKSAqICh2MjMgLSBBMyksXG4gICAgICAgICh2MTEgLSBBMSkgKiAodjIyIC0gQTIpIC0gKHYxMiAtIEEyKSAqICh2MjEgLSBBMSlcbiAgICAgIF0pO1xuICAgICAgbW9kID0gbm9ybWFsLm1vZHVsdXMoKTtcbiAgICAgIGlmIChtb2QgPT09IDApIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgIG5vcm1hbCA9IFZlY3Rvci5jcmVhdGUoW25vcm1hbC5lbGVtZW50c1swXSAvIG1vZCwgbm9ybWFsLmVsZW1lbnRzWzFdIC8gbW9kLCBub3JtYWwuZWxlbWVudHNbMl0gLyBtb2RdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kID0gTWF0aC5zcXJ0KHYxMSp2MTEgKyB2MTIqdjEyICsgdjEzKnYxMyk7XG4gICAgICBpZiAobW9kID09PSAwKSB7IHJldHVybiBudWxsOyB9XG4gICAgICBub3JtYWwgPSBWZWN0b3IuY3JlYXRlKFt2MS5lbGVtZW50c1swXSAvIG1vZCwgdjEuZWxlbWVudHNbMV0gLyBtb2QsIHYxLmVsZW1lbnRzWzJdIC8gbW9kXSk7XG4gICAgfVxuICAgIHRoaXMuYW5jaG9yID0gYW5jaG9yO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG4vLyBDb25zdHJ1Y3RvciBmdW5jdGlvblxuUGxhbmUuY3JlYXRlID0gZnVuY3Rpb24oYW5jaG9yLCB2MSwgdjIpIHtcbiAgdmFyIFAgPSBuZXcgUGxhbmUoKTtcbiAgcmV0dXJuIFAuc2V0VmVjdG9ycyhhbmNob3IsIHYxLCB2Mik7XG59O1xuXG4vLyBYLVktWiBwbGFuZXNcblBsYW5lLlhZID0gUGxhbmUuY3JlYXRlKFZlY3Rvci5aZXJvKDMpLCBWZWN0b3Iuayk7XG5QbGFuZS5ZWiA9IFBsYW5lLmNyZWF0ZShWZWN0b3IuWmVybygzKSwgVmVjdG9yLmkpO1xuUGxhbmUuWlggPSBQbGFuZS5jcmVhdGUoVmVjdG9yLlplcm8oMyksIFZlY3Rvci5qKTtcblBsYW5lLllYID0gUGxhbmUuWFk7IFBsYW5lLlpZID0gUGxhbmUuWVo7IFBsYW5lLlhaID0gUGxhbmUuWlg7XG5cbi8vIFJldHVybnMgdGhlIHBsYW5lIGNvbnRhaW5pbmcgdGhlIGdpdmVuIHBvaW50cyAoY2FuIGJlIGFycmF5cyBhc1xuLy8gd2VsbCBhcyB2ZWN0b3JzKS4gSWYgdGhlIHBvaW50cyBhcmUgbm90IGNvcGxhbmFyLCByZXR1cm5zIG51bGwuXG5QbGFuZS5mcm9tUG9pbnRzID0gZnVuY3Rpb24ocG9pbnRzKSB7XG4gIHZhciBucCA9IHBvaW50cy5sZW5ndGgsIGxpc3QgPSBbXSwgaSwgUCwgbiwgTiwgQSwgQiwgQywgRCwgdGhldGEsIHByZXZOLCB0b3RhbE4gPSBWZWN0b3IuWmVybygzKTtcbiAgZm9yIChpID0gMDsgaSA8IG5wOyBpKyspIHtcbiAgICBQID0gVmVjdG9yLmNyZWF0ZShwb2ludHNbaV0pLnRvM0QoKTtcbiAgICBpZiAoUCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIGxpc3QucHVzaChQKTtcbiAgICBuID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKG4gPiAyKSB7XG4gICAgICAvLyBDb21wdXRlIHBsYW5lIG5vcm1hbCBmb3IgdGhlIGxhdGVzdCB0aHJlZSBwb2ludHNcbiAgICAgIEEgPSBsaXN0W24tMV0uZWxlbWVudHM7IEIgPSBsaXN0W24tMl0uZWxlbWVudHM7IEMgPSBsaXN0W24tM10uZWxlbWVudHM7XG4gICAgICBOID0gVmVjdG9yLmNyZWF0ZShbXG4gICAgICAgIChBWzFdIC0gQlsxXSkgKiAoQ1syXSAtIEJbMl0pIC0gKEFbMl0gLSBCWzJdKSAqIChDWzFdIC0gQlsxXSksXG4gICAgICAgIChBWzJdIC0gQlsyXSkgKiAoQ1swXSAtIEJbMF0pIC0gKEFbMF0gLSBCWzBdKSAqIChDWzJdIC0gQlsyXSksXG4gICAgICAgIChBWzBdIC0gQlswXSkgKiAoQ1sxXSAtIEJbMV0pIC0gKEFbMV0gLSBCWzFdKSAqIChDWzBdIC0gQlswXSlcbiAgICAgIF0pLnRvVW5pdFZlY3RvcigpO1xuICAgICAgaWYgKG4gPiAzKSB7XG4gICAgICAgIC8vIElmIHRoZSBsYXRlc3Qgbm9ybWFsIGlzIG5vdCAoYW50aSlwYXJhbGxlbCB0byB0aGUgcHJldmlvdXMgb25lLCB3ZSd2ZSBzdHJheWVkIG9mZiB0aGUgcGxhbmUuXG4gICAgICAgIC8vIFRoaXMgbWlnaHQgYmUgYSBzbGlnaHRseSBsb25nLXdpbmRlZCB3YXkgb2YgZG9pbmcgdGhpbmdzLCBidXQgd2UgbmVlZCB0aGUgc3VtIG9mIGFsbCB0aGUgbm9ybWFsc1xuICAgICAgICAvLyB0byBmaW5kIHdoaWNoIHdheSB0aGUgcGxhbmUgbm9ybWFsIHNob3VsZCBwb2ludCBzbyB0aGF0IHRoZSBwb2ludHMgZm9ybSBhbiBhbnRpY2xvY2t3aXNlIGxpc3QuXG4gICAgICAgIHRoZXRhID0gTi5hbmdsZUZyb20ocHJldk4pO1xuICAgICAgICBpZiAodGhldGEgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIShNYXRoLmFicyh0aGV0YSkgPD0gU3lsdmVzdGVyLnByZWNpc2lvbiB8fCBNYXRoLmFicyh0aGV0YSAtIE1hdGguUEkpIDw9IFN5bHZlc3Rlci5wcmVjaXNpb24pKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRvdGFsTiA9IHRvdGFsTi5hZGQoTik7XG4gICAgICBwcmV2TiA9IE47XG4gICAgfVxuICB9XG4gIC8vIFdlIG5lZWQgdG8gYWRkIGluIHRoZSBub3JtYWxzIGF0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cywgd2hpY2ggdGhlIGFib3ZlIG1pc3NlcyBvdXRcbiAgQSA9IGxpc3RbMV0uZWxlbWVudHM7IEIgPSBsaXN0WzBdLmVsZW1lbnRzOyBDID0gbGlzdFtuLTFdLmVsZW1lbnRzOyBEID0gbGlzdFtuLTJdLmVsZW1lbnRzO1xuICB0b3RhbE4gPSB0b3RhbE4uYWRkKFZlY3Rvci5jcmVhdGUoW1xuICAgIChBWzFdIC0gQlsxXSkgKiAoQ1syXSAtIEJbMl0pIC0gKEFbMl0gLSBCWzJdKSAqIChDWzFdIC0gQlsxXSksXG4gICAgKEFbMl0gLSBCWzJdKSAqIChDWzBdIC0gQlswXSkgLSAoQVswXSAtIEJbMF0pICogKENbMl0gLSBCWzJdKSxcbiAgICAoQVswXSAtIEJbMF0pICogKENbMV0gLSBCWzFdKSAtIChBWzFdIC0gQlsxXSkgKiAoQ1swXSAtIEJbMF0pXG4gIF0pLnRvVW5pdFZlY3RvcigpKS5hZGQoVmVjdG9yLmNyZWF0ZShbXG4gICAgKEJbMV0gLSBDWzFdKSAqIChEWzJdIC0gQ1syXSkgLSAoQlsyXSAtIENbMl0pICogKERbMV0gLSBDWzFdKSxcbiAgICAoQlsyXSAtIENbMl0pICogKERbMF0gLSBDWzBdKSAtIChCWzBdIC0gQ1swXSkgKiAoRFsyXSAtIENbMl0pLFxuICAgIChCWzBdIC0gQ1swXSkgKiAoRFsxXSAtIENbMV0pIC0gKEJbMV0gLSBDWzFdKSAqIChEWzBdIC0gQ1swXSlcbiAgXSkudG9Vbml0VmVjdG9yKCkpO1xuICByZXR1cm4gUGxhbmUuY3JlYXRlKGxpc3RbMF0sIHRvdGFsTik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYW5lO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDExLCBDaHJpcyBVbWJlbCwgSmFtZXMgQ29nbGFuXG4vLyBUaGlzIGZpbGUgaXMgcmVxdWlyZWQgaW4gb3JkZXIgZm9yIGFueSBvdGhlciBjbGFzc2VzIHRvIHdvcmsuIFNvbWUgVmVjdG9yIG1ldGhvZHMgd29yayB3aXRoIHRoZVxuLy8gb3RoZXIgU3lsdmVzdGVyIGNsYXNzZXMgYW5kIGFyZSB1c2VsZXNzIHVubGVzcyB0aGV5IGFyZSBpbmNsdWRlZC4gT3RoZXIgY2xhc3NlcyBzdWNoIGFzIExpbmUgYW5kXG4vLyBQbGFuZSB3aWxsIG5vdCBmdW5jdGlvbiBhdCBhbGwgd2l0aG91dCBWZWN0b3IgYmVpbmcgbG9hZGVkIGZpcnN0LiAgICAgICAgICAgXG5cbk1hdGguc2lnbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCA8IDAgPyAtMTogMTtcbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnZhciBTeWx2ZXN0ZXIgPSB7XG4gICAgcHJlY2lzaW9uOiAxZS02LFxuICAgIGFwcHJveFByZWNpc2lvbjogMWUtNVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeWx2ZXN0ZXI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTEsIENocmlzIFVtYmVsLCBKYW1lcyBDb2dsYW5cbi8vIFRoaXMgZmlsZSBpcyByZXF1aXJlZCBpbiBvcmRlciBmb3IgYW55IG90aGVyIGNsYXNzZXMgdG8gd29yay4gU29tZSBWZWN0b3IgbWV0aG9kcyB3b3JrIHdpdGggdGhlXG4vLyBvdGhlciBTeWx2ZXN0ZXIgY2xhc3NlcyBhbmQgYXJlIHVzZWxlc3MgdW5sZXNzIHRoZXkgYXJlIGluY2x1ZGVkLiBPdGhlciBjbGFzc2VzIHN1Y2ggYXMgTGluZSBhbmRcbi8vIFBsYW5lIHdpbGwgbm90IGZ1bmN0aW9uIGF0IGFsbCB3aXRob3V0IFZlY3RvciBiZWluZyBsb2FkZWQgZmlyc3QuXG5cbnZhciBTeWx2ZXN0ZXIgPSByZXF1aXJlKCcuL3N5bHZlc3RlcicpLFxuTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgnKTtcblxuZnVuY3Rpb24gVmVjdG9yKCkge31cblZlY3Rvci5wcm90b3R5cGUgPSB7XG5cbiAgICBub3JtOiBmdW5jdGlvbigpIHtcblx0dmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0dmFyIHN1bSA9IDA7XG5cblx0d2hpbGUgKG4tLSkge1xuXHQgICAgc3VtICs9IE1hdGgucG93KHRoaXMuZWxlbWVudHNbbl0sIDIpO1xuXHR9XG5cblx0cmV0dXJuIE1hdGguc3FydChzdW0pO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIGVsZW1lbnQgaSBvZiB0aGUgdmVjdG9yXG4gICAgZTogZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIChpIDwgMSB8fCBpID4gdGhpcy5lbGVtZW50cy5sZW5ndGgpID8gbnVsbCA6IHRoaXMuZWxlbWVudHNbaSAtIDFdO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygcm93cy9jb2x1bW5zIHRoZSB2ZWN0b3IgaGFzXG4gICAgZGltZW5zaW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge3Jvd3M6IDEsIGNvbHM6IHRoaXMuZWxlbWVudHMubGVuZ3RofTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHZlY3RvclxuICAgIHJvd3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB2ZWN0b3JcbiAgICBjb2xzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgbW9kdWx1cyAoJ2xlbmd0aCcpIG9mIHRoZSB2ZWN0b3JcbiAgICBtb2R1bHVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kb3QodGhpcykpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSB2ZWN0b3IgaXMgZXF1YWwgdG8gdGhlIGFyZ3VtZW50XG4gICAgZXFsOiBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICBcdHZhciBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG4gICAgXHR2YXIgViA9IHZlY3Rvci5lbGVtZW50cyB8fCB2ZWN0b3I7XG4gICAgXHRpZiAobiAhPSBWLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBcdHdoaWxlIChuLS0pIHtcbiAgICBcdCAgICBpZiAoTWF0aC5hYnModGhpcy5lbGVtZW50c1tuXSAtIFZbbl0pID4gU3lsdmVzdGVyLnByZWNpc2lvbikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBcdH1cbiAgICBcdHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIGEgY29weSBvZiB0aGUgdmVjdG9yXG4gICAgZHVwOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBWZWN0b3IuY3JlYXRlKHRoaXMuZWxlbWVudHMpO1xuICAgIH0sXG5cbiAgICAvLyBNYXBzIHRoZSB2ZWN0b3IgdG8gYW5vdGhlciB2ZWN0b3IgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBmdW5jdGlvblxuICAgIG1hcDogZnVuY3Rpb24oZm4pIHtcblx0dmFyIGVsZW1lbnRzID0gW107XG5cdHRoaXMuZWFjaChmdW5jdGlvbih4LCBpKSB7XG5cdCAgICBlbGVtZW50cy5wdXNoKGZuKHgsIGkpKTtcblx0fSk7XG5cdHJldHVybiBWZWN0b3IuY3JlYXRlKGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gQ2FsbHMgdGhlIGl0ZXJhdG9yIGZvciBlYWNoIGVsZW1lbnQgb2YgdGhlIHZlY3RvciBpbiB0dXJuXG4gICAgZWFjaDogZnVuY3Rpb24oZm4pIHtcblx0dmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0ICAgIGZuKHRoaXMuZWxlbWVudHNbaV0sIGkgKyAxKTtcblx0fVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIGEgbmV3IHZlY3RvciBjcmVhdGVkIGJ5IG5vcm1hbGl6aW5nIHRoZSByZWNlaXZlclxuICAgIHRvVW5pdFZlY3RvcjogZnVuY3Rpb24oKSB7XG5cdHZhciByID0gdGhpcy5tb2R1bHVzKCk7XG5cdGlmIChyID09PSAwKSB7IHJldHVybiB0aGlzLmR1cCgpOyB9XG5cdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih4KSB7IHJldHVybiB4IC8gcjsgfSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvciBhbmQgdGhlIGFyZ3VtZW50IChhbHNvIGEgdmVjdG9yKVxuICAgIGFuZ2xlRnJvbTogZnVuY3Rpb24odmVjdG9yKSB7XG5cdHZhciBWID0gdmVjdG9yLmVsZW1lbnRzIHx8IHZlY3Rvcjtcblx0dmFyIG4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCwgayA9IG4sIGk7XG5cdGlmIChuICE9IFYubGVuZ3RoKSB7IHJldHVybiBudWxsOyB9XG5cdHZhciBkb3QgPSAwLCBtb2QxID0gMCwgbW9kMiA9IDA7XG5cdC8vIFdvcmsgdGhpbmdzIG91dCBpbiBwYXJhbGxlbCB0byBzYXZlIHRpbWVcblx0dGhpcy5lYWNoKGZ1bmN0aW9uKHgsIGkpIHtcblx0ICAgIGRvdCArPSB4ICogVltpIC0gMV07XG5cdCAgICBtb2QxICs9IHggKiB4O1xuXHQgICAgbW9kMiArPSBWW2kgLSAxXSAqIFZbaSAtIDFdO1xuXHR9KTtcblx0bW9kMSA9IE1hdGguc3FydChtb2QxKTsgbW9kMiA9IE1hdGguc3FydChtb2QyKTtcblx0aWYgKG1vZDEgKiBtb2QyID09PSAwKSB7IHJldHVybiBudWxsOyB9XG5cdHZhciB0aGV0YSA9IGRvdCAvIChtb2QxICogbW9kMik7XG5cdGlmICh0aGV0YSA8IC0xKSB7IHRoZXRhID0gLTE7IH1cblx0aWYgKHRoZXRhID4gMSkgeyB0aGV0YSA9IDE7IH1cblx0cmV0dXJuIE1hdGguYWNvcyh0aGV0YSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIHZlY3RvciBpcyBwYXJhbGxlbCB0byB0aGUgYXJndW1lbnRcbiAgICBpc1BhcmFsbGVsVG86IGZ1bmN0aW9uKHZlY3Rvcikge1xuXHR2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlRnJvbSh2ZWN0b3IpO1xuXHRyZXR1cm4gKGFuZ2xlID09PSBudWxsKSA/IG51bGwgOiAoYW5nbGUgPD0gU3lsdmVzdGVyLnByZWNpc2lvbik7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZmYgdGhlIHZlY3RvciBpcyBhbnRpcGFyYWxsZWwgdG8gdGhlIGFyZ3VtZW50XG4gICAgaXNBbnRpcGFyYWxsZWxUbzogZnVuY3Rpb24odmVjdG9yKSB7XG5cdHZhciBhbmdsZSA9IHRoaXMuYW5nbGVGcm9tKHZlY3Rvcik7XG5cdHJldHVybiAoYW5nbGUgPT09IG51bGwpID8gbnVsbCA6IChNYXRoLmFicyhhbmdsZSAtIE1hdGguUEkpIDw9IFN5bHZlc3Rlci5wcmVjaXNpb24pO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWZmIHRoZSB2ZWN0b3IgaXMgcGVycGVuZGljdWxhciB0byB0aGUgYXJndW1lbnRcbiAgICBpc1BlcnBlbmRpY3VsYXJUbzogZnVuY3Rpb24odmVjdG9yKSB7XG5cdHZhciBkb3QgPSB0aGlzLmRvdCh2ZWN0b3IpO1xuXHRyZXR1cm4gKGRvdCA9PT0gbnVsbCkgPyBudWxsIDogKE1hdGguYWJzKGRvdCkgPD0gU3lsdmVzdGVyLnByZWNpc2lvbik7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgdGhlIGFyZ3VtZW50IHRvIHRoZSB2ZWN0b3JcbiAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHZhciBWID0gdmFsdWUuZWxlbWVudHMgfHwgdmFsdWU7XG5cblx0aWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoICE9IFYubGVuZ3RoKSBcblx0ICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2ICsgdmFsdWUgfSk7XG5cdGVsc2Vcblx0ICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih4LCBpKSB7IHJldHVybiB4ICsgVltpIC0gMV07IH0pO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIGFyZ3VtZW50IGZyb20gdGhlIHZlY3RvclxuICAgIHN1YnRyYWN0OiBmdW5jdGlvbih2KSB7XG5cdGlmICh0eXBlb2YodikgPT0gJ251bWJlcicpXG5cdCAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oaykgeyByZXR1cm4gayAtIHY7IH0pO1xuXG5cdHZhciBWID0gdi5lbGVtZW50cyB8fCB2O1xuXHRpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggIT0gVi5sZW5ndGgpIHsgcmV0dXJuIG51bGw7IH1cblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgsIGkpIHsgcmV0dXJuIHggLSBWW2kgLSAxXTsgfSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBtdWx0aXBseWluZyB0aGUgZWxlbWVudHMgb2YgdGhlIHZlY3RvciBieSB0aGUgYXJndW1lbnRcbiAgICBtdWx0aXBseTogZnVuY3Rpb24oaykge1xuXHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCkgeyByZXR1cm4geCAqIGs7IH0pO1xuICAgIH0sXG5cbiAgICBlbGVtZW50TXVsdGlwbHk6IGZ1bmN0aW9uKHYpIHtcblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGssIGkpIHtcblx0ICAgIHJldHVybiB2LmUoaSkgKiBrO1xuXHR9KTtcbiAgICB9LFxuXG4gICAgc3VtOiBmdW5jdGlvbigpIHtcblx0dmFyIHN1bSA9IDA7XG5cdHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgc3VtICs9IHg7fSk7XG5cdHJldHVybiBzdW07XG4gICAgfSxcblxuICAgIGNob21wOiBmdW5jdGlvbihuKSB7XG5cdHZhciBlbGVtZW50cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSBuOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgZWxlbWVudHMucHVzaCh0aGlzLmVsZW1lbnRzW2ldKTtcblx0fVxuXG5cdHJldHVybiBWZWN0b3IuY3JlYXRlKGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgdG9wOiBmdW5jdGlvbihuKSB7XG5cdHZhciBlbGVtZW50cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdCAgICBlbGVtZW50cy5wdXNoKHRoaXMuZWxlbWVudHNbaV0pO1xuXHR9XG5cblx0cmV0dXJuIFZlY3Rvci5jcmVhdGUoZWxlbWVudHMpO1xuICAgIH0sXG5cbiAgICBhdWdtZW50OiBmdW5jdGlvbihlbGVtZW50cykge1xuXHR2YXIgbmV3RWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIG5ld0VsZW1lbnRzLnB1c2goZWxlbWVudHNbaV0pO1xuXHR9XG5cblx0cmV0dXJuIFZlY3Rvci5jcmVhdGUobmV3RWxlbWVudHMpO1xuICAgIH0sXG5cbiAgICB4OiBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLm11bHRpcGx5KGspOyB9LFxuXG4gICAgbG9nOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFZlY3Rvci5sb2codGhpcyk7XG4gICAgfSxcblxuICAgIGVsZW1lbnREaXZpZGU6IGZ1bmN0aW9uKHZlY3Rvcikge1xuXHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odiwgaSkge1xuXHQgICAgcmV0dXJuIHYgLyB2ZWN0b3IuZShpKTtcblx0fSk7XG4gICAgfSxcblxuICAgIHByb2R1Y3Q6IGZ1bmN0aW9uKCkge1xuXHR2YXIgcCA9IDE7XG5cblx0dGhpcy5tYXAoZnVuY3Rpb24odikge1xuXHQgICAgcCAqPSB2O1xuXHR9KTtcblxuXHRyZXR1cm4gcDtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgc2NhbGFyIHByb2R1Y3Qgb2YgdGhlIHZlY3RvciB3aXRoIHRoZSBhcmd1bWVudFxuICAgIC8vIEJvdGggdmVjdG9ycyBtdXN0IGhhdmUgZXF1YWwgZGltZW5zaW9uYWxpdHlcbiAgICBkb3Q6IGZ1bmN0aW9uKHZlY3Rvcikge1xuXHR2YXIgViA9IHZlY3Rvci5lbGVtZW50cyB8fCB2ZWN0b3I7XG5cdHZhciBpLCBwcm9kdWN0ID0gMCwgbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoO1x0XG5cdGlmIChuICE9IFYubGVuZ3RoKSB7IHJldHVybiBudWxsOyB9XG5cdHdoaWxlIChuLS0pIHsgcHJvZHVjdCArPSB0aGlzLmVsZW1lbnRzW25dICogVltuXTsgfVxuXHRyZXR1cm4gcHJvZHVjdDtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgdmVjdG9yIHByb2R1Y3Qgb2YgdGhlIHZlY3RvciB3aXRoIHRoZSBhcmd1bWVudFxuICAgIC8vIEJvdGggdmVjdG9ycyBtdXN0IGhhdmUgZGltZW5zaW9uYWxpdHkgM1xuICAgIGNyb3NzOiBmdW5jdGlvbih2ZWN0b3IpIHtcblx0dmFyIEIgPSB2ZWN0b3IuZWxlbWVudHMgfHwgdmVjdG9yO1xuXHRpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggIT0gMyB8fCBCLmxlbmd0aCAhPSAzKSB7IHJldHVybiBudWxsOyB9XG5cdHZhciBBID0gdGhpcy5lbGVtZW50cztcblx0cmV0dXJuIFZlY3Rvci5jcmVhdGUoW1xuXHQgICAgKEFbMV0gKiBCWzJdKSAtIChBWzJdICogQlsxXSksXG5cdCAgICAoQVsyXSAqIEJbMF0pIC0gKEFbMF0gKiBCWzJdKSxcblx0ICAgIChBWzBdICogQlsxXSkgLSAoQVsxXSAqIEJbMF0pXG5cdF0pO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIHRoZSAoYWJzb2x1dGUpIGxhcmdlc3QgZWxlbWVudCBvZiB0aGUgdmVjdG9yXG4gICAgbWF4OiBmdW5jdGlvbigpIHtcblx0dmFyIG0gPSAwLCBpID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0ICAgIGlmIChNYXRoLmFicyh0aGlzLmVsZW1lbnRzW2ldKSA+IE1hdGguYWJzKG0pKSB7IG0gPSB0aGlzLmVsZW1lbnRzW2ldOyB9XG5cdH1cblx0cmV0dXJuIG07XG4gICAgfSxcblxuXG4gICAgbWF4SW5kZXg6IGZ1bmN0aW9uKCkge1xuXHR2YXIgbSA9IDAsIGkgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblx0dmFyIG1heEluZGV4ID0gLTE7XG5cblx0d2hpbGUgKGktLSkge1xuXHQgICAgaWYgKE1hdGguYWJzKHRoaXMuZWxlbWVudHNbaV0pID4gTWF0aC5hYnMobSkpIHsgXG5cdFx0bSA9IHRoaXMuZWxlbWVudHNbaV07IFxuXHRcdG1heEluZGV4ID0gaSArIDE7XG5cdCAgICB9XG5cdH1cblxuXHRyZXR1cm4gbWF4SW5kZXg7XG4gICAgfSxcblxuXG4gICAgLy8gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG1hdGNoIGZvdW5kXG4gICAgaW5kZXhPZjogZnVuY3Rpb24oeCkge1xuXHR2YXIgaW5kZXggPSBudWxsLCBuID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdCAgICBpZiAoaW5kZXggPT09IG51bGwgJiYgdGhpcy5lbGVtZW50c1tpXSA9PSB4KSB7XG5cdFx0aW5kZXggPSBpICsgMTtcblx0ICAgIH1cblx0fVxuXHRyZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYSBkaWFnb25hbCBtYXRyaXggd2l0aCB0aGUgdmVjdG9yJ3MgZWxlbWVudHMgYXMgaXRzIGRpYWdvbmFsIGVsZW1lbnRzXG4gICAgdG9EaWFnb25hbE1hdHJpeDogZnVuY3Rpb24oKSB7XG5cdHJldHVybiBNYXRyaXguRGlhZ29uYWwodGhpcy5lbGVtZW50cyk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiByb3VuZGluZyB0aGUgZWxlbWVudHMgb2YgdGhlIHZlY3RvclxuICAgIHJvdW5kOiBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCk7IH0pO1xuICAgIH0sXG5cbiAgICAvLyBUcmFuc3Bvc2UgYSBWZWN0b3IsIHJldHVybiBhIDF4biBNYXRyaXhcbiAgICB0cmFuc3Bvc2U6IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm93cyA9IHRoaXMuZWxlbWVudHMubGVuZ3RoO1xuXHR2YXIgZWxlbWVudHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuXHQgICAgZWxlbWVudHMucHVzaChbdGhpcy5lbGVtZW50c1tpXV0pO1xuXHR9XG5cdHJldHVybiBNYXRyaXguY3JlYXRlKGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBhIGNvcHkgb2YgdGhlIHZlY3RvciB3aXRoIGVsZW1lbnRzIHNldCB0byB0aGUgZ2l2ZW4gdmFsdWUgaWYgdGhleVxuICAgIC8vIGRpZmZlciBmcm9tIGl0IGJ5IGxlc3MgdGhhbiBTeWx2ZXN0ZXIucHJlY2lzaW9uXG4gICAgc25hcFRvOiBmdW5jdGlvbih4KSB7XG5cdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbih5KSB7XG5cdCAgICByZXR1cm4gKE1hdGguYWJzKHkgLSB4KSA8PSBTeWx2ZXN0ZXIucHJlY2lzaW9uKSA/IHggOiB5O1xuXHR9KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgdmVjdG9yJ3MgZGlzdGFuY2UgZnJvbSB0aGUgYXJndW1lbnQsIHdoZW4gY29uc2lkZXJlZCBhcyBhIHBvaW50IGluIHNwYWNlXG4gICAgZGlzdGFuY2VGcm9tOiBmdW5jdGlvbihvYmopIHtcblx0aWYgKG9iai5hbmNob3IgfHwgKG9iai5zdGFydCAmJiBvYmouZW5kKSkgeyByZXR1cm4gb2JqLmRpc3RhbmNlRnJvbSh0aGlzKTsgfVxuXHR2YXIgViA9IG9iai5lbGVtZW50cyB8fCBvYmo7XG5cdGlmIChWLmxlbmd0aCAhPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCkgeyByZXR1cm4gbnVsbDsgfVxuXHR2YXIgc3VtID0gMCwgcGFydDtcblx0dGhpcy5lYWNoKGZ1bmN0aW9uKHgsIGkpIHtcblx0ICAgIHBhcnQgPSB4IC0gVltpIC0gMV07XG5cdCAgICBzdW0gKz0gcGFydCAqIHBhcnQ7XG5cdH0pO1xuXHRyZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmVjdG9yIGlzIHBvaW50IG9uIHRoZSBnaXZlbiBsaW5lXG4gICAgbGllc09uOiBmdW5jdGlvbihsaW5lKSB7XG5cdHJldHVybiBsaW5lLmNvbnRhaW5zKHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZmYgdGhlIHZlY3RvciBpcyBhIHBvaW50IGluIHRoZSBnaXZlbiBwbGFuZVxuICAgIGxpZXNJbjogZnVuY3Rpb24ocGxhbmUpIHtcblx0cmV0dXJuIHBsYW5lLmNvbnRhaW5zKHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyBSb3RhdGVzIHRoZSB2ZWN0b3IgYWJvdXQgdGhlIGdpdmVuIG9iamVjdC4gVGhlIG9iamVjdCBzaG91bGQgYmUgYVxuICAgIC8vIHBvaW50IGlmIHRoZSB2ZWN0b3IgaXMgMkQsIGFuZCBhIGxpbmUgaWYgaXQgaXMgM0QuIEJlIGNhcmVmdWwgd2l0aCBsaW5lIGRpcmVjdGlvbnMhXG4gICAgcm90YXRlOiBmdW5jdGlvbih0LCBvYmopIHtcblx0dmFyIFYsIFIgPSBudWxsLCB4LCB5LCB6O1xuXHRpZiAodC5kZXRlcm1pbmFudCkgeyBSID0gdC5lbGVtZW50czsgfVxuXHRzd2l0Y2ggKHRoaXMuZWxlbWVudHMubGVuZ3RoKSB7XG5cdGNhc2UgMjpcbiAgICAgICAgICAgIFYgPSBvYmouZWxlbWVudHMgfHwgb2JqO1xuICAgICAgICAgICAgaWYgKFYubGVuZ3RoICE9IDIpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgICAgIGlmICghUikgeyBSID0gTWF0cml4LlJvdGF0aW9uKHQpLmVsZW1lbnRzOyB9XG4gICAgICAgICAgICB4ID0gdGhpcy5lbGVtZW50c1swXSAtIFZbMF07XG4gICAgICAgICAgICB5ID0gdGhpcy5lbGVtZW50c1sxXSAtIFZbMV07XG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yLmNyZWF0ZShbXG5cdFx0VlswXSArIFJbMF1bMF0gKiB4ICsgUlswXVsxXSAqIHksXG5cdFx0VlsxXSArIFJbMV1bMF0gKiB4ICsgUlsxXVsxXSAqIHlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cdGNhc2UgMzpcbiAgICAgICAgICAgIGlmICghb2JqLmRpcmVjdGlvbikgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIEMgPSBvYmoucG9pbnRDbG9zZXN0VG8odGhpcykuZWxlbWVudHM7XG4gICAgICAgICAgICBpZiAoIVIpIHsgUiA9IE1hdHJpeC5Sb3RhdGlvbih0LCBvYmouZGlyZWN0aW9uKS5lbGVtZW50czsgfVxuICAgICAgICAgICAgeCA9IHRoaXMuZWxlbWVudHNbMF0gLSBDWzBdO1xuICAgICAgICAgICAgeSA9IHRoaXMuZWxlbWVudHNbMV0gLSBDWzFdO1xuICAgICAgICAgICAgeiA9IHRoaXMuZWxlbWVudHNbMl0gLSBDWzJdO1xuICAgICAgICAgICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoW1xuXHRcdENbMF0gKyBSWzBdWzBdICogeCArIFJbMF1bMV0gKiB5ICsgUlswXVsyXSAqIHosXG5cdFx0Q1sxXSArIFJbMV1bMF0gKiB4ICsgUlsxXVsxXSAqIHkgKyBSWzFdWzJdICogeixcblx0XHRDWzJdICsgUlsyXVswXSAqIHggKyBSWzJdWzFdICogeSArIFJbMl1bMl0gKiB6XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXHRkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyB0aGUgcmVzdWx0IG9mIHJlZmxlY3RpbmcgdGhlIHBvaW50IGluIHRoZSBnaXZlbiBwb2ludCwgbGluZSBvciBwbGFuZVxuICAgIHJlZmxlY3Rpb25JbjogZnVuY3Rpb24ob2JqKSB7XG5cdGlmIChvYmouYW5jaG9yKSB7XG5cdCAgICAvLyBvYmogaXMgYSBwbGFuZSBvciBsaW5lXG5cdCAgICB2YXIgUCA9IHRoaXMuZWxlbWVudHMuc2xpY2UoKTtcblx0ICAgIHZhciBDID0gb2JqLnBvaW50Q2xvc2VzdFRvKFApLmVsZW1lbnRzO1xuXHQgICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoW0NbMF0gKyAoQ1swXSAtIFBbMF0pLCBDWzFdICsgKENbMV0gLSBQWzFdKSwgQ1syXSArIChDWzJdIC0gKFBbMl0gfHwgMCkpXSk7XG5cdH0gZWxzZSB7XG5cdCAgICAvLyBvYmogaXMgYSBwb2ludFxuXHQgICAgdmFyIFEgPSBvYmouZWxlbWVudHMgfHwgb2JqO1xuXHQgICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoICE9IFEubGVuZ3RoKSB7IHJldHVybiBudWxsOyB9XG5cdCAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCwgaSkgeyByZXR1cm4gUVtpIC0gMV0gKyAoUVtpIC0gMV0gLSB4KTsgfSk7XG5cdH1cbiAgICB9LFxuXG4gICAgLy8gVXRpbGl0eSB0byBtYWtlIHN1cmUgdmVjdG9ycyBhcmUgM0QuIElmIHRoZXkgYXJlIDJELCBhIHplcm8gei1jb21wb25lbnQgaXMgYWRkZWRcbiAgICB0bzNEOiBmdW5jdGlvbigpIHtcblx0dmFyIFYgPSB0aGlzLmR1cCgpO1xuXHRzd2l0Y2ggKFYuZWxlbWVudHMubGVuZ3RoKSB7XG5cdGNhc2UgMzogYnJlYWs7XG5cdGNhc2UgMjogVi5lbGVtZW50cy5wdXNoKDApOyBicmVhaztcblx0ZGVmYXVsdDogcmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIFY7XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICAgIGluc3BlY3Q6IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gJ1snICsgdGhpcy5lbGVtZW50cy5qb2luKCcsICcpICsgJ10nO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgdmVjdG9yJ3MgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICAgIHNldEVsZW1lbnRzOiBmdW5jdGlvbihlbHMpIHtcblx0dGhpcy5lbGVtZW50cyA9IChlbHMuZWxlbWVudHMgfHwgZWxzKS5zbGljZSgpO1xuXHRyZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vLyBDb25zdHJ1Y3RvciBmdW5jdGlvblxuVmVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgdmFyIFYgPSBuZXcgVmVjdG9yKCk7XG4gICAgcmV0dXJuIFYuc2V0RWxlbWVudHMoZWxlbWVudHMpO1xufTtcblxuLy8gaSwgaiwgayB1bml0IHZlY3RvcnNcblZlY3Rvci5pID0gVmVjdG9yLmNyZWF0ZShbMSwgMCwgMF0pO1xuVmVjdG9yLmogPSBWZWN0b3IuY3JlYXRlKFswLCAxLCAwXSk7XG5WZWN0b3IuayA9IFZlY3Rvci5jcmVhdGUoWzAsIDAsIDFdKTtcblxuLy8gUmFuZG9tIHZlY3RvciBvZiBzaXplIG5cblZlY3Rvci5SYW5kb20gPSBmdW5jdGlvbihuKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgd2hpbGUgKG4tLSkgeyBlbGVtZW50cy5wdXNoKE1hdGgucmFuZG9tKCkpOyB9XG4gICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoZWxlbWVudHMpO1xufTtcblxuVmVjdG9yLkZpbGwgPSBmdW5jdGlvbihuLCB2KSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgd2hpbGUgKG4tLSkgeyBlbGVtZW50cy5wdXNoKHYpOyB9XG4gICAgcmV0dXJuIFZlY3Rvci5jcmVhdGUoZWxlbWVudHMpO1xufTtcblxuLy8gVmVjdG9yIGZpbGxlZCB3aXRoIHplcm9zXG5WZWN0b3IuWmVybyA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gVmVjdG9yLkZpbGwobiwgMCk7XG59O1xuXG5WZWN0b3IuT25lID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBWZWN0b3IuRmlsbChuLCAxKTtcbn07XG5cblZlY3Rvci5sb2cgPSBmdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIHYubWFwKGZ1bmN0aW9uKHgpIHtcblx0cmV0dXJuIE1hdGgubG9nKHgpO1xuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9