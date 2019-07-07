import { mat4 } from 'gl-matrix';

export class TableDrawer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas = WebGLDebugUtils.makeLostContextSimulatingCanvas(this.canvas);
    this.canvas.addEventListener(
      'webglcontextlost',
      event => {
        event.preventDefault();
        cancelAnimationFrame(this.requestId);

        this.ongoingImageLoads.forEach(img => {
          img.onload = undefined;
        });
        this.ongoingImageLoads = [];
      },
      false
    );
    this.canvas.addEventListener(
      'webglcontextrestored',
      event => {
        this.setupShaders();
        this.setupFloorBuffers();
        this.setupCubeBuffers();
        this.setupTextures();

        this.gl.frontFace(this.gl.CCW);
        this.gl.cullFace(this.gl.BACK);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.requestId = requestAnimationFrame(() => {
          this.draw();
        });
      },
      false
    );

    window.addEventListener('mousedown', () => {
      this.canvas.loseContext();
    });

    this.gl = this.getWebGLContext(this.canvas);

    this.modelViewMatrix = mat4.create();
    this.projectionMatrix = mat4.create();
    this.modelViewMatrixStack = [];
    this.ongoingImageLoads = [];

    this.setupShaders();
    this.setupFloorBuffers();
    this.setupCubeBuffers();
    this.setupTextures();

    this.gl.frontFace(this.gl.CCW);
    this.gl.cullFace(this.gl.BACK);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  }

  draw() {
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    mat4.perspective(
      this.projectionMatrix,
      45,
      this.gl.viewportWidth / this.gl.viewportHeight,
      1,
      100.0
    );
    mat4.identity(this.modelViewMatrix);
    mat4.lookAt(this.modelViewMatrix, [8, 5, -10], [0, 0, 0], [0, 1, 0]);

    this.uploadModelViewMatrixToShader();
    this.uploadProjectionMatrixToShader();

    this.gl.uniform1i(this.uniformSamplerLocation, 0);

    this.drawFloor();

    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 1.1, 0.0]);
    this.uploadModelViewMatrixToShader();
    this.drawTable();
    this.popModelViewMatrix();

    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 2.7, 0.0]);
    mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [0.5, 0.5, 0.5]);
    this.uploadModelViewMatrixToShader();
    this.drawCube(this.boxTexture);
    this.popModelViewMatrix();

    this.requestId = requestAnimationFrame(() => {
      this.draw();
    });
  }

  textureFinishLoading(image, texture) {
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);

    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      image
    );

    this.gl.generateMipmap(this.gl.TEXTURE_2D);

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR
    );

    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.MIRRORED_REPEAT
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.MIRRORED_REPEAT
    );
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
  }

  loadImageForTexture(url, texture) {
    let image = new Image();
    image.onload = () => {
      this.ongoingImageLoads.splice(this.ongoingImageLoads.indexOf(image), 1);
      this.textureFinishLoading(image, texture);
    };

    this.ongoingImageLoads.push(image);
    image.crossOrigin = 'anonymous';
    image.src = url;
  }

  setupTextures() {
    this.woodTexture = this.gl.createTexture();
    this.loadImageForTexture('/img/wood_128x128.jpg', this.woodTexture);

    this.groundTexture = this.gl.createTexture();
    this.loadImageForTexture('/img/wood_floor_256.jpg', this.groundTexture);

    this.boxTexture = this.gl.createTexture();
    this.loadImageForTexture('/img/wicker_256.jpg', this.boxTexture);
  }

  uploadModelViewMatrixToShader() {
    this.gl.uniformMatrix4fv(
      this.uniformMVMatrixLocation,
      false,
      this.modelViewMatrix
    );
  }

  uploadProjectionMatrixToShader() {
    this.gl.uniformMatrix4fv(
      this.uniformPMatrixLocation,
      false,
      this.projectionMatrix
    );
  }

  drawFloor() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.floorVertexBuffer);
    this.gl.vertexAttribPointer(
      this.vertexPositionAttributeLocation,
      this.FLOOR_VERTEX_POS_BUF_ITEM_SIZE,
      this.gl.FLOAT,
      false,
      Float32Array.BYTES_PER_ELEMENT * 5,
      0
    );
    this.gl.vertexAttribPointer(
      this.vertexTextureAttributeLocation,
      this.FLOOR_VERTEX_TEX_COORD_BUF_ITEM_SIZE,
      this.gl.FLOAT,
      false,
      Float32Array.BYTES_PER_ELEMENT * 5,
      Float32Array.BYTES_PER_ELEMENT * 3
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.groundTexture);

    this.gl.drawArrays(
      this.gl.TRIANGLE_FAN,
      0,
      this.FLOOR_VERTEX_POS_BUF_NUM_ITEMS
    );
  }

  drawCube(texture) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexPositionBuffer);
    this.gl.vertexAttribPointer(
      this.vertexPositionAttributeLocation,
      this.CUBE_VERTEX_POS_BUF_ITEM_SIZE,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.bindBuffer(
      this.gl.ARRAY_BUFFER,
      this.cubeVertexTextureCoordinateBuffer
    );
    this.gl.vertexAttribPointer(
      this.vertexTextureAttributeLocation,
      this.CUBE_VERTEX_TEX_COORD_BUF_ITEM_SIZE,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

    this.gl.bindBuffer(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.cubeVertexIndexBuffer
    );

    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.CUBE_VERTEX_INDEX_BUF_NUM_ITEMS,
      this.gl.UNSIGNED_BYTE,
      0
    );
  }

  drawTable() {
    this.pushModelViewMatrix();
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [0.0, 1.0, 0.0]);
    mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [2.0, 0.1, 2.0]);
    this.uploadModelViewMatrixToShader();
    this.drawCube(this.woodTexture);
    this.popModelViewMatrix();

    for (let i = -1; i <= 1; i += 2) {
      for (let j = -1; j <= 1; j += 2) {
        this.pushModelViewMatrix();
        mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [
          i * 1.9,
          -0.1,
          j * 1.9
        ]);
        mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [0.1, 1.0, 0.1]);
        this.uploadModelViewMatrixToShader();
        this.drawCube(this.woodTexture);
        this.popModelViewMatrix();
      }
    }
  }

  pushModelViewMatrix() {
    let copyToPush = mat4.clone(this.modelViewMatrix);
    this.modelViewMatrixStack.push(copyToPush);
  }

  popModelViewMatrix() {
    if (this.modelViewMatrixStack.length === 0) {
      throw 'Error popModelViewMatrix() - Stack was empty.';
    }

    this.modelViewMatrix = this.modelViewMatrixStack.pop();
  }

  setupCubeBuffers() {
    this.cubeVertexPositionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexPositionBuffer);

    const cubeVertexPositions = [
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
      new Float32Array(cubeVertexPositions),
      this.gl.STATIC_DRAW
    );

    this.CUBE_VERTEX_POS_BUF_ITEM_SIZE = 3;
    this.CUBE_VERTEX_POS_BUF_NUM_ITEMS = 24;

    this.cubeVertexTextureCoordinateBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(
      this.gl.ARRAY_BUFFER,
      this.cubeVertexTextureCoordinateBuffer
    );

    const textureCoordinates = [
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0,
      1.0,

      0.0,
      1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,

      0.0,
      1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,

      0.0,
      1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,

      0.0,
      1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0,
      0.0,

      0.0,
      1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      0.0,
      0.0
    ];

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(textureCoordinates),
      this.gl.STATIC_DRAW
    );
    this.CUBE_VERTEX_TEX_COORD_BUF_ITEM_SIZE = 2;
    this.CUBE_VERTEX_TEX_COORD_BUF_NUM_ITEMS = 24;

    this.cubeVertexIndexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(
      this.gl.ELEMENT_ARRAY_BUFFER,
      this.cubeVertexIndexBuffer
    );

    const cubeVertexIndices = [
      0,
      1,
      2,
      0,
      2,
      3,
      4,
      6,
      5,
      4,
      7,
      6,
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
      22,
      21,
      20,
      23,
      22
    ];

    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint8Array(cubeVertexIndices),
      this.gl.STATIC_DRAW
    );
    this.CUBE_VERTEX_INDEX_BUF_ITEM_SIZE = 1;
    this.CUBE_VERTEX_INDEX_BUF_NUM_ITEMS = 36;
  }

  setupFloorBuffers() {
    this.floorVertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.floorVertexBuffer);

    const floorVertex = [
      5.0,
      0.0,
      5.0,
      2.0,
      0.0,
      5.0,
      0.0,
      -5.0,
      2.0,
      2.0,
      -5.0,
      0.0,
      -5.0,
      0.0,
      2.0,
      -5.0,
      0.0,
      5.0,
      0.0,
      0.0
    ];

    this.FLOOR_VERTEX_POS_BUF_ITEM_SIZE = 3;
    this.FLOOR_VERTEX_POS_BUF_NUM_ITEMS = 4;
    this.FLOOR_VERTEX_TEX_COORD_BUF_ITEM_SIZE = 2;
    this.FLOOR_VERTEX_TEX_COORD_BUF_NUM_ITEMS = 4;

    const vertexSizeInBytes =
      Float32Array.BYTES_PER_ELEMENT * this.FLOOR_VERTEX_POS_BUF_ITEM_SIZE +
      Float32Array.BYTES_PER_ELEMENT *
        this.FLOOR_VERTEX_TEX_COORD_BUF_ITEM_SIZE;
    const vertexSizeInFloats =
      vertexSizeInBytes / Float32Array.BYTES_PER_ELEMENT;

    const arrayBuffer = new ArrayBuffer(
      vertexSizeInBytes * this.FLOOR_VERTEX_POS_BUF_NUM_ITEMS
    );
    const positionView = new Float32Array(arrayBuffer);
    const textureView = new Float32Array(arrayBuffer);

    let positionOffsetInFloats = 0;
    let textureOffsetInFloats =
      (Float32Array.BYTES_PER_ELEMENT * this.FLOOR_VERTEX_POS_BUF_ITEM_SIZE) /
      Float32Array.BYTES_PER_ELEMENT;
    for (let i = 0; i < this.FLOOR_VERTEX_POS_BUF_NUM_ITEMS; i++) {
      positionView[positionOffsetInFloats] = floorVertex[i * 5];
      positionView[positionOffsetInFloats + 1] = floorVertex[i * 5 + 1];
      positionView[positionOffsetInFloats + 2] = floorVertex[i * 5 + 2];
      textureView[textureOffsetInFloats] = floorVertex[i * 5 + 3];
      textureView[textureOffsetInFloats + 1] = floorVertex[i * 5 + 4];

      positionOffsetInFloats += vertexSizeInFloats;
      textureOffsetInFloats += vertexSizeInFloats;
    }

    this.gl.bufferData(this.gl.ARRAY_BUFFER, arrayBuffer, this.gl.STATIC_DRAW);
  }

  setupShaders() {
    const vertexShader = this.loadShaderFromDOM('shader-vs');
    const fragmentShader = this.loadShaderFromDOM('shader-fs');

    const shaderProgram = this.gl.createProgram();
    this.gl.attachShader(shaderProgram, vertexShader);
    this.gl.attachShader(shaderProgram, fragmentShader);
    this.gl.linkProgram(shaderProgram);

    if (
      !this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS) &&
      !this.gl.isContextLost()
    ) {
      console.error(this.gl.getProgramInfoLog(shaderProgram));
      this.gl.deleteProgram(shaderProgram);
      return null;
    }

    this.gl.useProgram(shaderProgram);

    this.vertexPositionAttributeLocation = this.gl.getAttribLocation(
      shaderProgram,
      'aVertexPosition'
    );
    this.vertexTextureAttributeLocation = this.gl.getAttribLocation(
      shaderProgram,
      'aTextureCoordinates'
    );
    this.uniformPMatrixLocation = this.gl.getUniformLocation(
      shaderProgram,
      'uPMatrix'
    );
    this.uniformMVMatrixLocation = this.gl.getUniformLocation(
      shaderProgram,
      'uMVMatrix'
    );
    this.uniformSamplerLocation = this.gl.getUniformLocation(
      shaderProgram,
      'uSampler'
    );

    this.gl.enableVertexAttribArray(this.vertexPositionAttributeLocation);
    this.gl.enableVertexAttribArray(this.vertexTextureAttributeLocation);
  }

  loadShaderFromDOM(id) {
    const shaderScript = document.getElementById(id);
    if (!shaderScript) {
      console.error('Not found shader script');
      return null;
    }

    let shader = null;
    if (shaderScript.type === 'x-shader/x-vertex') {
      shader = this.gl.createShader(this.gl.VERTEX_SHADER);
    } else if (shaderScript.type === 'x-shader/x-fragment') {
      shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    } else {
      console.error('Not found type of shader script');
      this.gl.deleteShader(shader);
      return null;
    }

    this.gl.shaderSource(shader, shaderScript.textContent);
    this.gl.compileShader(shader);

    if (
      !this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS) &&
      !this.gl.isContextLost()
    ) {
      console.error(this.gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  getWebGLContext(canvas) {
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
      console.error('Failed to create WebGL context');
      return null;
    }

    return context;
  }
}
