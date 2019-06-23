export class GL {
  constructor() {
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.shaderProgram = Object.create(ProgramObject);
    this.hexagonVertexBuffer = Object.create(BufferObject);
    this.triangleVertexBuffer = Object.create(BufferObject);
    this.triangleVertexColorBuffer = Object.create(BufferObject);
    this.stripVertexBuffer = Object.create(BufferObject);
    this.stripElementBuffer = Object.create(BufferObject);
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
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    // 六角形の描画
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.hexagonVertexBuffer.buffer);
    // 無効にするのは，全部の頂点に一定の色を使うため
    this.gl.disableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    this.gl.vertexAttrib4f(
      this.shaderProgram.vertexColorAttribute,
      0.0,
      0.0,
      0.0,
      1.0
    );
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexPositionAttribute,
      this.hexagonVertexBuffer.itemSize,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.drawArrays(
      this.gl.LINE_STRIP,
      0,
      this.hexagonVertexBuffer.numOfItems
    );

    // 三角形の描画
    // 各頂点に違う色を使う
    this.gl.enableVertexAttribArray(this.shaderProgram.vertexColorAttribute);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer.buffer);
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexPositionAttribute,
      this.triangleVertexBuffer.itemSize,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.bindBuffer(
      this.gl.ARRAY_BUFFER,
      this.triangleVertexColorBuffer.buffer
    );
    this.gl.vertexAttribPointer(
      this.shaderProgram.vertexColorAttribute,
      this.triangleVertexColorBuffer.itemSize,
      this.gl.FLOAT,
      true,
      0,
      0
    );

    this.gl.drawArrays(
      this.gl.TRIANGLES,
      0,
      this.triangleVertexBuffer.numOfItems
    );

    // 三角形ストリップ
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.stripVertexBuffer.buffer);
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

    // 補助線
    this.gl.drawArrays(this.gl.LINE_STRIP, 0, 11);
    this.gl.drawArrays(this.gl.LINE_STRIP, 11, 11);
  }

  setupBuffers() {
    // 六角形
    this.hexagonVertexBuffer.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.hexagonVertexBuffer.buffer);

    const hexagonVertices = [
      -0.3,
      0.6,
      0.0,
      -0.4,
      0.8,
      0.0,
      -0.6,
      0.8,
      0.0,
      -0.7,
      0.6,
      0.0,
      -0.6,
      0.4,
      0.0,
      -0.4,
      0.4,
      0.0,
      -0.3,
      0.6,
      0.0
    ];
    this.hexagonVertexBuffer.itemSize = 3;
    this.hexagonVertexBuffer.numOfItems = 7;

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(hexagonVertices),
      this.gl.STATIC_DRAW
    );

    // 三角形
    this.triangleVertexBuffer.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer.buffer);

    const triangleVertices = [0.3, 0.4, 0.0, 0.7, 0.4, 0.0, 0.5, 0.8, 0.0];
    this.triangleVertexBuffer.itemSize = 3;
    this.triangleVertexBuffer.numOfItems = 3;

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(triangleVertices),
      this.gl.STATIC_DRAW
    );

    // 色付き三角形
    this.triangleVertexColorBuffer.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(
      this.gl.ARRAY_BUFFER,
      this.triangleVertexColorBuffer.buffer
    );

    const colors = [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0];
    this.triangleVertexColorBuffer.itemSize = 4;
    this.triangleVertexColorBuffer.numOfItems = 3;

    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(colors),
      this.gl.STATIC_DRAW
    );

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
