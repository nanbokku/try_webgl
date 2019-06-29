import { mat4 } from 'gl-matrix';

export class GL {
  constructor() {
    this.gl = this.getWebGLContext();
    this.shaderProgram = this.setupShaders();
    [
      this.floorPositionBuffer,
      this.floorIndexBuffer
    ] = this.setupFloorBuffers();
    [this.cubePositionBuffer, this.cubeIndexBuffer] = this.setupCubeBuffers();
    this.modelViewMatrix = mat4.create();
    this.projectionMatrix = mat4.create();
    this.modelViewMatrixStack = [];

    this.gl.frontFace(this.gl.CCW);
    this.gl.cullFace(this.gl.BACK);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
  }

  draw() {
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    mat4.perspective(
      this.projectionMatrix,
      45,
      this.gl.viewportWidth / this.gl.viewportHeight,
      0.1,
      100
    );
    mat4.identity(this.modelViewMatrix);
    mat4.lookAt(this.modelViewMatrix, [8, 5, -10], [0, 0, 0], [0, 1, 0]);

    this.uploadModelViewMatrixToShader();
    this.uploadProjectionMatrixToShader();

    this.drawFloor(1.0, 0.0, 0.0, 1.0);

    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 1.1, 0.0]);
    this.uploadModelViewMatrixToShader();
    this.drawTable();
    this.popModelViewMatrix();

    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 2.7, 0.0]);
    mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [0.5, 0.5, 0.5]);
    this.uploadModelViewMatrixToShader();
    this.drawCube(0.0, 0.0, 1.0, 1.0);
    this.popModelViewMatrix();
  }

  drawFloor(r, g, b, a) {
    this.gl.disableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    this.gl.vertexAttrib4f(this.shaderProgram.vertexColorAttribute, r, g, b, a);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.floorPositionBuffer);
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexPositionAttribute,
      this.floorPositionBuffer.itemSize,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.floorIndexBuffer);
    this.gl.drawElements(
      this.gl.TRIANGLE_FAN,
      this.floorIndexBuffer.numOfItems,
      this.gl.UNSIGNED_BYTE,
      0
    );
  }

  uploadModelViewMatrixToShader() {
    this.gl.uniformMatrix4fv(
      this.shaderProgram.uniformMVMatrix,
      false,
      this.modelViewMatrix
    );
  }

  uploadProjectionMatrixToShader() {
    this.gl.uniformMatrix4fv(
      this.shaderProgram.uniformPMatrix,
      false,
      this.projectionMatrix
    );
  }

  drawCube(r, g, b, a) {
    this.gl.disableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    this.gl.vertexAttrib4f(this.shaderProgram.vertexColorAttribute, r, g, b, a);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubePositionBuffer);
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexPositionAttribute,
      this.cubePositionBuffer.itemSize,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.cubeIndexBuffer);
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.cubeIndexBuffer.numOfItems,
      this.gl.UNSIGNED_BYTE,
      0
    );
  }

  drawTable() {
    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 1.0, 0.0]);
    mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [2.0, 0.1, 2.0]);
    this.uploadModelViewMatrixToShader();
    this.drawCube(0.72, 0.53, 0.04, 1.0);
    this.popModelViewMatrix();

    for (var i = -1; i <= 1; i += 2) {
      for (var j = -1; j <= 1; j += 2) {
        this.pushModelViewMatrix();
        mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [
          i * 1.9,
          -0.1,
          j * 1.9
        ]);
        mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [0.1, 1.0, 0.1]);
        this.uploadModelViewMatrixToShader();
        this.drawCube(0.72, 0.53, 0.04, 1.0);
        this.popModelViewMatrix();
      }
    }
  }

  setupCubeBuffers() {
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

    const cubeVertexPosition = [
      1.0,
      1.0,
      1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,
      1.0,

      1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      1.0,
      -1.0,
      -1.0,

      -1.0,
      1.0,
      1.0,
      -1.0,
      1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      1.0,

      1.0,
      1.0,
      1.0,
      1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,

      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      1.0,

      1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      -1.0,
      1.0
    ];

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(cubeVertexPosition),
      this.gl.STATIC_DRAW
    );

    positionBuffer.itemSize = 3;
    positionBuffer.numOfItems = 24;

    const indexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const cubeVertexIndex = [
      0,
      1,
      2,
      0,
      2,
      3,
      4,
      7,
      6,
      4,
      6,
      5,
      8,
      9,
      10,
      8,
      10,
      11,
      12,
      13,
      14,
      12,
      14,
      15,
      16,
      17,
      18,
      16,
      18,
      19,
      20,
      23,
      22,
      20,
      22,
      21
    ];

    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint8Array(cubeVertexIndex),
      this.gl.STATIC_DRAW
    );

    indexBuffer.itemSize = 1;
    indexBuffer.numOfItems = 36;

    return [positionBuffer, indexBuffer];
  }

  setupFloorBuffers() {
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

    const floorVertexPosition = [
      5.0,
      0.0,
      5.0,
      5.0,
      0.0,
      -5.0,
      -5.0,
      0.0,
      -5.0,
      -5.0,
      0.0,
      5.0
    ];

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(floorVertexPosition),
      this.gl.STATIC_DRAW
    );

    positionBuffer.numOfItems = 4;
    positionBuffer.itemSize = 3;

    const indexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const floorVertexIndex = [0, 1, 2, 3];

    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint8Array(floorVertexIndex),
      this.gl.STATIC_DRAW
    );

    indexBuffer.itemSize = 1;
    indexBuffer.numOfItems = 4;

    return [positionBuffer, indexBuffer];
  }

  pushModelViewMatrix() {
    var copyToPush = mat4.clone(this.modelViewMatrix);
    this.modelViewMatrixStack.push(copyToPush);
  }

  popModelViewMatrix() {
    if (this.modelViewMatrixStack.length === 0) {
      throw 'Error popModelViewMatri() - Stack was empty';
    }
    this.modelViewMatrix = this.modelViewMatrixStack.pop();
  }

  setupShaders() {
    const vertexShader = this.getShaderFromDOM('shader-vs');
    const fragmentShader = this.getShaderFromDOM('shader-fs');

    const shaderProgram = this.gl.createProgram();
    this.gl.attachShader(shaderProgram, vertexShader);
    this.gl.attachShader(shaderProgram, fragmentShader);
    this.gl.linkProgram(shaderProgram);

    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
      alert(this.gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    this.gl.useProgram(shaderProgram);
    shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(
      shaderProgram,
      'aVertexPosition'
    );
    shaderProgram.vertexColorAttribute = this.gl.getAttribLocation(
      shaderProgram,
      'aVertexColor'
    );
    shaderProgram.uniformMVMatrix = this.gl.getUniformLocation(
      shaderProgram,
      'uMVMatrix'
    );
    shaderProgram.uniformPMatrix = this.gl.getUniformLocation(
      shaderProgram,
      'uPMatrix'
    );

    this.gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    return shaderProgram;
  }

  getShaderFromDOM(id) {
    const shaderScript = document.getElementById(id);
    if (!shaderScript) return null;

    let shader = null;
    if (shaderScript.type === 'x-shader/x-vertex') {
      shader = this.gl.createShader(this.gl.VERTEX_SHADER);
    } else if (shaderScript.type === 'x-shader/x-fragment') {
      shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    } else {
      alert(this.gl.getShaderInfoLog(shader));
      return null;
    }

    this.gl.shaderSource(shader, shaderScript.textContent);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      alert(this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  getWebGLContext() {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
      return null;
    }

    const names = ['webgl', 'experimental-webgl'];
    let context = null;
    names.forEach(name => {
      try {
        context = canvas.getContext(name);
      } catch (e) {
        if (context) return;
      }
    });

    if (context) {
      context.viewportWidth = canvas.clientWidth;
      context.viewportHeight = canvas.clientHeight;
    } else {
      alert('Failed to create WebGLContext');
      return null;
    }

    return context;
  }
}
