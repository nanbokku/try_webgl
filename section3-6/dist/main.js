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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl.js */ "./js/webgl.js");


window.onload = () => {
  const gl = new _webgl_js__WEBPACK_IMPORTED_MODULE_0__["GL"]();
};


/***/ }),

/***/ "./js/webgl.js":
/*!*********************!*\
  !*** ./js/webgl.js ***!
  \*********************/
/*! exports provided: GL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GL", function() { return GL; });
class GL {
  constructor() {
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.shaderProgram = new Object(ProgramObject);
    this.hexagonVertexBuffer = new Object(BufferObject);
    this.triangleVertexBuffer = new Object(BufferObject);
    this.triangleVertexColorBuffer = new Object(BufferObject);
    this.stripVertexBuffer = new Object(BufferObject);
    this.stripElementBuffer = new Object(BufferObject);
    this.gl = WebGLDebugUtils.makeDebugContext(this.createContext());

    this.setupShaders();
    this.setupBuffers();

    this.gl.clearColor(1.0, 1.0, 1.0, 1.0);

    this.gl.frontFace(this.gl.CCW);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);

    this.draw();
  }

  createContext() {
    const canvas = document.getElementById('myGLCanvas');
    const names = ['webgl', 'experimental-webgl'];

    let context;
    names.forEach(name => {
      try {
        context = canvas.getContext(name);
      } catch (e) {
        if (context) return;
      }
    });

    if (context) {
      this.viewportWidth = canvas.clientWidth;
      this.viewportHeight = canvas.clientHeight;
    } else {
      alert('Failed to create WebGL context!');
    }

    return context;
  }

  draw() {
    this.gl.viewport(0, 0, this.viewportWidth, this.viewportHeight);
    // this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    // // 六角形の描画
    // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.hexagonVertexBuffer.buffer);
    // // 無効にするのは，全部の頂点に一定の色を使うため
    // this.gl.disableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    // this.gl.vertexAttrib4f(
    //   this.shaderProgram.vertexColorAttribute,
    //   0.0,
    //   0.0,
    //   0.0,
    //   1.0
    // );
    // this.gl.vertexAttribPointer(
    //   this.hexagonVertexBuffer.vertexPositionAttribute,
    //   this.hexagonVertexBuffer.itemSize,
    //   this.gl.FLOAT,
    //   false,
    //   0,
    //   0
    // );

    // this.gl.drawArrays(
    //   this.gl.LINE_STRIP,
    //   0,
    //   this.hexagonVertexBuffer.numOfItems
    // );

    // // 三角形の描画
    // // 各頂点に違う色を使う
    // this.gl.enableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer.buffer);
    // this.gl.vertexAttribPointer(
    //   this.shaderProgram.vertexPositionAttribute,
    //   this.triangleVertexBuffer.itemSize,
    //   this.gl.FLOAT,
    //   false,
    //   0,
    //   0
    // );

    // this.gl.bindBuffer(
    //   this.gl.ARRAY_BUFFER,
    //   this.triangleVertexColorBuffer.buffer
    // );
    // this.gl.vertexAttribPointer(
    //   this.shaderProgram.vertexColorAttribute,
    //   this.triangleVertexColorBuffer.itemSize,
    //   this.gl.FLOAT,
    //   true,
    //   0,
    //   0
    // );

    // this.gl.drawArrays(
    //   this.gl.TRIANGLES,
    //   0,
    //   this.triangleVertexBuffer.numOfItems
    // );

    // 三角形ストリップ
    // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.stripVertexBuffer.buffer);
    // 全ての頂点に一定の色を使うため
    this.gl.disableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    this.gl.vertexAttrib4f(
      this.shaderProgram.vertexColorAttribute,
      1.0,
      1.0,
      0.0,
      1.0
    );
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexPositionAttribute,
      this.stripVertexBuffer.itemSize,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.bindBuffer(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.stripElementBuffer.buffer
    );

    this.gl.drawElements(
      this.gl.TRIANGLE_STRIP,
      this.stripElementBuffer.numOfItems,
      this.gl.UNSIGNED_SHORT,
      0
    );
    this.gl.vertexAttrib4f(
      this.shaderProgram.vertexColorAttribute,
      0.0,
      0.0,
      0.0,
      1.0
    );

    // // 補助線
    // this.gl.drawArrays(this.gl.LINE_STRIP, 0, 11);
    // this.gl.drawArrays(this.gl.LINE_STRIP, 11, 11);
  }

  setupBuffers() {
    // // 六角形
    // this.hexagonVertexBuffer.buffer = this.gl.createBuffer();
    // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.hexagonVertexBuffer.buffer);

    // const hexagonVertices = [
    //   -0.3,
    //   0.6,
    //   0.0,
    //   -0.4,
    //   0.8,
    //   0.0,
    //   -0.6,
    //   0.8,
    //   0.0,
    //   -0.7,
    //   0.6,
    //   0.0,
    //   -0.6,
    //   0.4,
    //   0.0,
    //   -0.4,
    //   0.4,
    //   0.0,
    //   -0.3,
    //   0.6,
    //   0.0
    // ];
    // this.triangleVertexBuffer.itemSize = 3;
    // this.triangleVertexBuffer.numOfItems = 7;

    // this.gl.bufferData(
    //   this.gl.ARRAY_BUFFER,
    //   new Float32Array(hexagonVertices),
    //   this.gl.STATIC_DRAW
    // );

    // // 三角形
    // this.triangleVertexBuffer.buffer = this.gl.createBuffer();
    // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer.buffer);

    // const triangleVertices = [0.3, 0.4, 0.0, 0.7, 0.4, 0.0, 0.5, 0.8, 0.0];
    // this.triangleVertexBuffer.itemSize = 3;
    // this.triangleVertexBuffer.numOfItems = 3;

    // this.gl.bufferData(
    //   this.gl.ARRAY_BUFFER,
    //   new Float32Array(triangleVertices),
    //   this.gl.STATIC_DRAW
    // );

    // // 色付き三角形
    // this.triangleVertexColorBuffer.buffer = this.gl.createBuffer();
    // this.gl.bindBuffer(
    //   this.gl.ARRAY_BUFFER,
    //   this.triangleVertexColorBuffer.buffer
    // );

    // const colors = [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0];
    // this.triangleVertexColorBuffer.itemSize = 4;
    // this.triangleVertexColorBuffer.numOfItems = 3;

    // this.gl.bufferData(
    //   this.gl.ARRAY_BUFFER,
    //   new Float32Array(colors),
    //   this.gl.STATIC_DRAW
    // );

    // strip triangle
    this.stripVertexBuffer.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.stripVertexBuffer.buffer);

    const stripVertices = [
      -0.5,
      0.2,
      0.0,
      -0.4,
      0.0,
      0.0,
      -0.3,
      0.2,
      0.0,
      -0.2,
      0.0,
      0.0,
      -0.1,
      0.2,
      0.0,
      0.0,
      0.0,
      0.0,
      0.1,
      0.2,
      0.0,
      0.2,
      0.0,
      0.0,
      0.3,
      0.2,
      0.0,
      0.4,
      0.0,
      0.0,
      0.5,
      0.2,
      0.0,
      -0.5,
      -0.3,
      0.0,
      -0.4,
      -0.5,
      0.0,
      -0.3,
      -0.3,
      0.0,
      -0.2,
      -0.5,
      0.0,
      -0.1,
      -0.3,
      0.0,
      0.0,
      -0.5,
      0.0,
      0.1,
      -0.3,
      0.0,
      0.2,
      -0.5,
      0.0,
      0.3,
      -0.3,
      0.0,
      0.4,
      -0.5,
      0.0,
      0.5,
      -0.3,
      0.0
    ];
    this.stripVertexBuffer.itemSize = 3;
    this.stripVertexBuffer.numOfItems = 22;

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(stripVertices),
      this.gl.STATIC_DRAW
    );

    // element buffer for strip triangle
    this.stripElementBuffer.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.stripElementBuffer.buffer
    );

    const indices = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      10,
      10,
      11,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ];
    this.stripElementBuffer.itemSize = 1;
    this.stripElementBuffer.numOfItems = 25;

    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      this.gl.STATIC_DRAW
    );
  }

  setupShaders() {
    const vertexShader = this.loadShaderFromDOM('shader-vs');
    const fragmentShader = this.loadShaderFromDOM('shader-fs');

    this.shaderProgram.program = this.gl.createProgram();
    this.gl.attachShader(this.shaderProgram.program, vertexShader);
    this.gl.attachShader(this.shaderProgram.program, fragmentShader);
    this.gl.linkProgram(this.shaderProgram.program);

    if (
      !this.gl.getProgramParameter(
        this.shaderProgram.program,
        this.gl.LINK_STATUS
      )
    ) {
      alert(
        'Failed to setup shaders: ' +
          this.gl.getProgramInfoLog(this.shaderProgram.program)
      );
    }

    this.gl.useProgram(this.shaderProgram.program);

    this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(
      this.shaderProgram.program,
      'aVertexPosition'
    );
    this.shaderProgram.vertexColorAttribute = this.gl.getAttribLocation(
      this.shaderProgram.program,
      'aVertexColor'
    );

    this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);
  }

  loadShaderFromDOM(id) {
    const shaderScript = document.getElementById(id);

    if (!shaderScript) {
      return null;
    }

    const shaderSource = shaderScript.textContent;
    let shader;
    if (shaderScript.type === 'x-shader/x-vertex') {
      shader = this.gl.createShader(this.gl.VERTEX_SHADER);
    } else if (shaderScript.type === 'x-shader/x-fragment') {
      shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    } else {
      return null;
    }

    this.gl.shaderSource(shader, shaderSource);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      alert('Failed to setup shader: ' + this.gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }
}

let BufferObject = {
  buffer: null,
  itemSize: 0,
  numOfItems: 0
};

let ProgramObject = {
  program: null,
  vertexPositionAttribute: 0,
  vertexColorAttribute: 0
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvd2ViZ2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWdDOztBQUVoQztBQUNBLGlCQUFpQiw0Q0FBRTtBQUNuQjs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgR0wgfSBmcm9tICcuL3dlYmdsLmpzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2wgPSBuZXcgR0woKTtcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIEdMIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IDA7XHJcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gMDtcclxuICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSA9IG5ldyBPYmplY3QoUHJvZ3JhbU9iamVjdCk7XHJcbiAgICB0aGlzLmhleGFnb25WZXJ0ZXhCdWZmZXIgPSBuZXcgT2JqZWN0KEJ1ZmZlck9iamVjdCk7XHJcbiAgICB0aGlzLnRyaWFuZ2xlVmVydGV4QnVmZmVyID0gbmV3IE9iamVjdChCdWZmZXJPYmplY3QpO1xyXG4gICAgdGhpcy50cmlhbmdsZVZlcnRleENvbG9yQnVmZmVyID0gbmV3IE9iamVjdChCdWZmZXJPYmplY3QpO1xyXG4gICAgdGhpcy5zdHJpcFZlcnRleEJ1ZmZlciA9IG5ldyBPYmplY3QoQnVmZmVyT2JqZWN0KTtcclxuICAgIHRoaXMuc3RyaXBFbGVtZW50QnVmZmVyID0gbmV3IE9iamVjdChCdWZmZXJPYmplY3QpO1xyXG4gICAgdGhpcy5nbCA9IFdlYkdMRGVidWdVdGlscy5tYWtlRGVidWdDb250ZXh0KHRoaXMuY3JlYXRlQ29udGV4dCgpKTtcclxuXHJcbiAgICB0aGlzLnNldHVwU2hhZGVycygpO1xyXG4gICAgdGhpcy5zZXR1cEJ1ZmZlcnMoKTtcclxuXHJcbiAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuXHJcbiAgICB0aGlzLmdsLmZyb250RmFjZSh0aGlzLmdsLkNDVyk7XHJcbiAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XHJcbiAgICB0aGlzLmdsLmN1bGxGYWNlKHRoaXMuZ2wuQkFDSyk7XHJcblxyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb250ZXh0KCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215R0xDYW52YXMnKTtcclxuICAgIGNvbnN0IG5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTtcclxuXHJcbiAgICBsZXQgY29udGV4dDtcclxuICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWUpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQpIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvbnRleHQpIHtcclxuICAgICAgdGhpcy52aWV3cG9ydFdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gY3JlYXRlIFdlYkdMIGNvbnRleHQhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMudmlld3BvcnRIZWlnaHQpO1xyXG4gICAgLy8gdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIC8vIC8vIOWFreinkuW9ouOBruaPj+eUu1xyXG4gICAgLy8gdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmhleGFnb25WZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcclxuICAgIC8vIC8vIOeEoeWKueOBq+OBmeOCi+OBruOBr++8jOWFqOmDqOOBrumggueCueOBq+S4gOWumuOBruiJsuOCkuS9v+OBhuOBn+OCgVxyXG4gICAgLy8gdGhpcy5nbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleENvbG9yQXR0cmlidXRlKTtcclxuICAgIC8vIHRoaXMuZ2wudmVydGV4QXR0cmliNGYoXHJcbiAgICAvLyAgIHRoaXMuc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhDb2xvckF0dHJpYnV0ZSxcclxuICAgIC8vICAgMC4wLFxyXG4gICAgLy8gICAwLjAsXHJcbiAgICAvLyAgIDAuMCxcclxuICAgIC8vICAgMS4wXHJcbiAgICAvLyApO1xyXG4gICAgLy8gdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgLy8gICB0aGlzLmhleGFnb25WZXJ0ZXhCdWZmZXIudmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsXHJcbiAgICAvLyAgIHRoaXMuaGV4YWdvblZlcnRleEJ1ZmZlci5pdGVtU2l6ZSxcclxuICAgIC8vICAgdGhpcy5nbC5GTE9BVCxcclxuICAgIC8vICAgZmFsc2UsXHJcbiAgICAvLyAgIDAsXHJcbiAgICAvLyAgIDBcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gdGhpcy5nbC5kcmF3QXJyYXlzKFxyXG4gICAgLy8gICB0aGlzLmdsLkxJTkVfU1RSSVAsXHJcbiAgICAvLyAgIDAsXHJcbiAgICAvLyAgIHRoaXMuaGV4YWdvblZlcnRleEJ1ZmZlci5udW1PZkl0ZW1zXHJcbiAgICAvLyApO1xyXG5cclxuICAgIC8vIC8vIOS4ieinkuW9ouOBruaPj+eUu1xyXG4gICAgLy8gLy8g5ZCE6aCC54K544Gr6YGV44GG6Imy44KS5L2/44GGXHJcbiAgICAvLyB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhDb2xvckF0dHJpYnV0ZSk7XHJcbiAgICAvLyB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMudHJpYW5nbGVWZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcclxuICAgIC8vIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgIC8vICAgdGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLFxyXG4gICAgLy8gICB0aGlzLnRyaWFuZ2xlVmVydGV4QnVmZmVyLml0ZW1TaXplLFxyXG4gICAgLy8gICB0aGlzLmdsLkZMT0FULFxyXG4gICAgLy8gICBmYWxzZSxcclxuICAgIC8vICAgMCxcclxuICAgIC8vICAgMFxyXG4gICAgLy8gKTtcclxuXHJcbiAgICAvLyB0aGlzLmdsLmJpbmRCdWZmZXIoXHJcbiAgICAvLyAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgLy8gICB0aGlzLnRyaWFuZ2xlVmVydGV4Q29sb3JCdWZmZXIuYnVmZmVyXHJcbiAgICAvLyApO1xyXG4gICAgLy8gdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgLy8gICB0aGlzLnNoYWRlclByb2dyYW0udmVydGV4Q29sb3JBdHRyaWJ1dGUsXHJcbiAgICAvLyAgIHRoaXMudHJpYW5nbGVWZXJ0ZXhDb2xvckJ1ZmZlci5pdGVtU2l6ZSxcclxuICAgIC8vICAgdGhpcy5nbC5GTE9BVCxcclxuICAgIC8vICAgdHJ1ZSxcclxuICAgIC8vICAgMCxcclxuICAgIC8vICAgMFxyXG4gICAgLy8gKTtcclxuXHJcbiAgICAvLyB0aGlzLmdsLmRyYXdBcnJheXMoXHJcbiAgICAvLyAgIHRoaXMuZ2wuVFJJQU5HTEVTLFxyXG4gICAgLy8gICAwLFxyXG4gICAgLy8gICB0aGlzLnRyaWFuZ2xlVmVydGV4QnVmZmVyLm51bU9mSXRlbXNcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8g5LiJ6KeS5b2i44K544OI44Oq44OD44OXXHJcbiAgICAvLyB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuc3RyaXBWZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcclxuICAgIC8vIOWFqOOBpuOBrumggueCueOBq+S4gOWumuOBruiJsuOCkuS9v+OBhuOBn+OCgVxyXG4gICAgdGhpcy5nbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleENvbG9yQXR0cmlidXRlKTtcclxuICAgIHRoaXMuZ2wudmVydGV4QXR0cmliNGYoXHJcbiAgICAgIHRoaXMuc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhDb2xvckF0dHJpYnV0ZSxcclxuICAgICAgMS4wLFxyXG4gICAgICAxLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMS4wXHJcbiAgICApO1xyXG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICB0aGlzLnNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsXHJcbiAgICAgIHRoaXMuc3RyaXBWZXJ0ZXhCdWZmZXIuaXRlbVNpemUsXHJcbiAgICAgIHRoaXMuZ2wuRkxPQVQsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICAwLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihcclxuICAgICAgdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUixcclxuICAgICAgdGhpcy5zdHJpcEVsZW1lbnRCdWZmZXIuYnVmZmVyXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKFxyXG4gICAgICB0aGlzLmdsLlRSSUFOR0xFX1NUUklQLFxyXG4gICAgICB0aGlzLnN0cmlwRWxlbWVudEJ1ZmZlci5udW1PZkl0ZW1zLFxyXG4gICAgICB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWI0ZihcclxuICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleENvbG9yQXR0cmlidXRlLFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4wLFxyXG4gICAgICAxLjBcclxuICAgICk7XHJcblxyXG4gICAgLy8gLy8g6KOc5Yqp57eaXHJcbiAgICAvLyB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5MSU5FX1NUUklQLCAwLCAxMSk7XHJcbiAgICAvLyB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5MSU5FX1NUUklQLCAxMSwgMTEpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBCdWZmZXJzKCkge1xyXG4gICAgLy8gLy8g5YWt6KeS5b2iXHJcbiAgICAvLyB0aGlzLmhleGFnb25WZXJ0ZXhCdWZmZXIuYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIC8vIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5oZXhhZ29uVmVydGV4QnVmZmVyLmJ1ZmZlcik7XHJcblxyXG4gICAgLy8gY29uc3QgaGV4YWdvblZlcnRpY2VzID0gW1xyXG4gICAgLy8gICAtMC4zLFxyXG4gICAgLy8gICAwLjYsXHJcbiAgICAvLyAgIDAuMCxcclxuICAgIC8vICAgLTAuNCxcclxuICAgIC8vICAgMC44LFxyXG4gICAgLy8gICAwLjAsXHJcbiAgICAvLyAgIC0wLjYsXHJcbiAgICAvLyAgIDAuOCxcclxuICAgIC8vICAgMC4wLFxyXG4gICAgLy8gICAtMC43LFxyXG4gICAgLy8gICAwLjYsXHJcbiAgICAvLyAgIDAuMCxcclxuICAgIC8vICAgLTAuNixcclxuICAgIC8vICAgMC40LFxyXG4gICAgLy8gICAwLjAsXHJcbiAgICAvLyAgIC0wLjQsXHJcbiAgICAvLyAgIDAuNCxcclxuICAgIC8vICAgMC4wLFxyXG4gICAgLy8gICAtMC4zLFxyXG4gICAgLy8gICAwLjYsXHJcbiAgICAvLyAgIDAuMFxyXG4gICAgLy8gXTtcclxuICAgIC8vIHRoaXMudHJpYW5nbGVWZXJ0ZXhCdWZmZXIuaXRlbVNpemUgPSAzO1xyXG4gICAgLy8gdGhpcy50cmlhbmdsZVZlcnRleEJ1ZmZlci5udW1PZkl0ZW1zID0gNztcclxuXHJcbiAgICAvLyB0aGlzLmdsLmJ1ZmZlckRhdGEoXHJcbiAgICAvLyAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgLy8gICBuZXcgRmxvYXQzMkFycmF5KGhleGFnb25WZXJ0aWNlcyksXHJcbiAgICAvLyAgIHRoaXMuZ2wuU1RBVElDX0RSQVdcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gLy8g5LiJ6KeS5b2iXHJcbiAgICAvLyB0aGlzLnRyaWFuZ2xlVmVydGV4QnVmZmVyLmJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAvLyB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMudHJpYW5nbGVWZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcclxuXHJcbiAgICAvLyBjb25zdCB0cmlhbmdsZVZlcnRpY2VzID0gWzAuMywgMC40LCAwLjAsIDAuNywgMC40LCAwLjAsIDAuNSwgMC44LCAwLjBdO1xyXG4gICAgLy8gdGhpcy50cmlhbmdsZVZlcnRleEJ1ZmZlci5pdGVtU2l6ZSA9IDM7XHJcbiAgICAvLyB0aGlzLnRyaWFuZ2xlVmVydGV4QnVmZmVyLm51bU9mSXRlbXMgPSAzO1xyXG5cclxuICAgIC8vIHRoaXMuZ2wuYnVmZmVyRGF0YShcclxuICAgIC8vICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAvLyAgIG5ldyBGbG9hdDMyQXJyYXkodHJpYW5nbGVWZXJ0aWNlcyksXHJcbiAgICAvLyAgIHRoaXMuZ2wuU1RBVElDX0RSQVdcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gLy8g6Imy5LuY44GN5LiJ6KeS5b2iXHJcbiAgICAvLyB0aGlzLnRyaWFuZ2xlVmVydGV4Q29sb3JCdWZmZXIuYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIC8vIHRoaXMuZ2wuYmluZEJ1ZmZlcihcclxuICAgIC8vICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAvLyAgIHRoaXMudHJpYW5nbGVWZXJ0ZXhDb2xvckJ1ZmZlci5idWZmZXJcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gY29uc3QgY29sb3JzID0gWzEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAxLjBdO1xyXG4gICAgLy8gdGhpcy50cmlhbmdsZVZlcnRleENvbG9yQnVmZmVyLml0ZW1TaXplID0gNDtcclxuICAgIC8vIHRoaXMudHJpYW5nbGVWZXJ0ZXhDb2xvckJ1ZmZlci5udW1PZkl0ZW1zID0gMztcclxuXHJcbiAgICAvLyB0aGlzLmdsLmJ1ZmZlckRhdGEoXHJcbiAgICAvLyAgIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLFxyXG4gICAgLy8gICBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksXHJcbiAgICAvLyAgIHRoaXMuZ2wuU1RBVElDX0RSQVdcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gc3RyaXAgdHJpYW5nbGVcclxuICAgIHRoaXMuc3RyaXBWZXJ0ZXhCdWZmZXIuYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5zdHJpcFZlcnRleEJ1ZmZlci5idWZmZXIpO1xyXG5cclxuICAgIGNvbnN0IHN0cmlwVmVydGljZXMgPSBbXHJcbiAgICAgIC0wLjUsXHJcbiAgICAgIDAuMixcclxuICAgICAgMC4wLFxyXG4gICAgICAtMC40LFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgLTAuMyxcclxuICAgICAgMC4yLFxyXG4gICAgICAwLjAsXHJcbiAgICAgIC0wLjIsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4wLFxyXG4gICAgICAtMC4xLFxyXG4gICAgICAwLjIsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4wLFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4xLFxyXG4gICAgICAwLjIsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4yLFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4zLFxyXG4gICAgICAwLjIsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC40LFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC41LFxyXG4gICAgICAwLjIsXHJcbiAgICAgIDAuMCxcclxuICAgICAgLTAuNSxcclxuICAgICAgLTAuMyxcclxuICAgICAgMC4wLFxyXG4gICAgICAtMC40LFxyXG4gICAgICAtMC41LFxyXG4gICAgICAwLjAsXHJcbiAgICAgIC0wLjMsXHJcbiAgICAgIC0wLjMsXHJcbiAgICAgIDAuMCxcclxuICAgICAgLTAuMixcclxuICAgICAgLTAuNSxcclxuICAgICAgMC4wLFxyXG4gICAgICAtMC4xLFxyXG4gICAgICAtMC4zLFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMCxcclxuICAgICAgLTAuNSxcclxuICAgICAgMC4wLFxyXG4gICAgICAwLjEsXHJcbiAgICAgIC0wLjMsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC4yLFxyXG4gICAgICAtMC41LFxyXG4gICAgICAwLjAsXHJcbiAgICAgIDAuMyxcclxuICAgICAgLTAuMyxcclxuICAgICAgMC4wLFxyXG4gICAgICAwLjQsXHJcbiAgICAgIC0wLjUsXHJcbiAgICAgIDAuMCxcclxuICAgICAgMC41LFxyXG4gICAgICAtMC4zLFxyXG4gICAgICAwLjBcclxuICAgIF07XHJcbiAgICB0aGlzLnN0cmlwVmVydGV4QnVmZmVyLml0ZW1TaXplID0gMztcclxuICAgIHRoaXMuc3RyaXBWZXJ0ZXhCdWZmZXIubnVtT2ZJdGVtcyA9IDIyO1xyXG5cclxuICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShcclxuICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXHJcbiAgICAgIG5ldyBGbG9hdDMyQXJyYXkoc3RyaXBWZXJ0aWNlcyksXHJcbiAgICAgIHRoaXMuZ2wuU1RBVElDX0RSQVdcclxuICAgICk7XHJcblxyXG4gICAgLy8gZWxlbWVudCBidWZmZXIgZm9yIHN0cmlwIHRyaWFuZ2xlXHJcbiAgICB0aGlzLnN0cmlwRWxlbWVudEJ1ZmZlci5idWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgdGhpcy5nbC5iaW5kQnVmZmVyKFxyXG4gICAgICB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLFxyXG4gICAgICB0aGlzLnN0cmlwRWxlbWVudEJ1ZmZlci5idWZmZXJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaW5kaWNlcyA9IFtcclxuICAgICAgMCxcclxuICAgICAgMSxcclxuICAgICAgMixcclxuICAgICAgMyxcclxuICAgICAgNCxcclxuICAgICAgNSxcclxuICAgICAgNixcclxuICAgICAgNyxcclxuICAgICAgOCxcclxuICAgICAgOSxcclxuICAgICAgMTAsXHJcbiAgICAgIDEwLFxyXG4gICAgICAxMCxcclxuICAgICAgMTEsXHJcbiAgICAgIDExLFxyXG4gICAgICAxMixcclxuICAgICAgMTMsXHJcbiAgICAgIDE0LFxyXG4gICAgICAxNSxcclxuICAgICAgMTYsXHJcbiAgICAgIDE3LFxyXG4gICAgICAxOCxcclxuICAgICAgMTksXHJcbiAgICAgIDIwLFxyXG4gICAgICAyMVxyXG4gICAgXTtcclxuICAgIHRoaXMuc3RyaXBFbGVtZW50QnVmZmVyLml0ZW1TaXplID0gMTtcclxuICAgIHRoaXMuc3RyaXBFbGVtZW50QnVmZmVyLm51bU9mSXRlbXMgPSAyNTtcclxuXHJcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoXHJcbiAgICAgIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsXHJcbiAgICAgIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSxcclxuICAgICAgdGhpcy5nbC5TVEFUSUNfRFJBV1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldHVwU2hhZGVycygpIHtcclxuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlckZyb21ET00oJ3NoYWRlci12cycpO1xyXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmxvYWRTaGFkZXJGcm9tRE9NKCdzaGFkZXItZnMnKTtcclxuXHJcbiAgICB0aGlzLnNoYWRlclByb2dyYW0ucHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIodGhpcy5zaGFkZXJQcm9ncmFtLnByb2dyYW0sIHZlcnRleFNoYWRlcik7XHJcbiAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLnNoYWRlclByb2dyYW0ucHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgdGhpcy5nbC5saW5rUHJvZ3JhbSh0aGlzLnNoYWRlclByb2dyYW0ucHJvZ3JhbSk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5nbC5nZXRQcm9ncmFtUGFyYW1ldGVyKFxyXG4gICAgICAgIHRoaXMuc2hhZGVyUHJvZ3JhbS5wcm9ncmFtLFxyXG4gICAgICAgIHRoaXMuZ2wuTElOS19TVEFUVVNcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgICdGYWlsZWQgdG8gc2V0dXAgc2hhZGVyczogJyArXHJcbiAgICAgICAgICB0aGlzLmdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuc2hhZGVyUHJvZ3JhbS5wcm9ncmFtKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnNoYWRlclByb2dyYW0ucHJvZ3JhbSk7XHJcblxyXG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtLnByb2dyYW0sXHJcbiAgICAgICdhVmVydGV4UG9zaXRpb24nXHJcbiAgICApO1xyXG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleENvbG9yQXR0cmlidXRlID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihcclxuICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtLnByb2dyYW0sXHJcbiAgICAgICdhVmVydGV4Q29sb3InXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlKTtcclxuICB9XHJcblxyXG4gIGxvYWRTaGFkZXJGcm9tRE9NKGlkKSB7XHJcbiAgICBjb25zdCBzaGFkZXJTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgaWYgKCFzaGFkZXJTY3JpcHQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hhZGVyU291cmNlID0gc2hhZGVyU2NyaXB0LnRleHRDb250ZW50O1xyXG4gICAgbGV0IHNoYWRlcjtcclxuICAgIGlmIChzaGFkZXJTY3JpcHQudHlwZSA9PT0gJ3gtc2hhZGVyL3gtdmVydGV4Jykge1xyXG4gICAgICBzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgfSBlbHNlIGlmIChzaGFkZXJTY3JpcHQudHlwZSA9PT0gJ3gtc2hhZGVyL3gtZnJhZ21lbnQnKSB7XHJcbiAgICAgIHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcclxuICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHNldHVwIHNoYWRlcjogJyArIHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNoYWRlcjtcclxuICB9XHJcbn1cclxuXHJcbmxldCBCdWZmZXJPYmplY3QgPSB7XHJcbiAgYnVmZmVyOiBudWxsLFxyXG4gIGl0ZW1TaXplOiAwLFxyXG4gIG51bU9mSXRlbXM6IDBcclxufTtcclxuXHJcbmxldCBQcm9ncmFtT2JqZWN0ID0ge1xyXG4gIHByb2dyYW06IG51bGwsXHJcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGU6IDAsXHJcbiAgdmVydGV4Q29sb3JBdHRyaWJ1dGU6IDBcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==