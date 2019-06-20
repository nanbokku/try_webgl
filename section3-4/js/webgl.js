export class GL {
  constructor() {
    const canvas = document.getElementById('myGLCanvas');
    this.shaderProgram = null;

    const names = ['webgl', 'experimental-webgl'];

    names.forEach(name => {
      try {
        this.gl = WebGLDebugUtils.makeDebugContext(canvas.getContext(name));
      } catch (e) {
        if (this.gl) return;
      }
    });

    if (this.gl) {
      this.gl.viewportWidth = canvas.width;
      this.gl.viewportHeight = canvas.height;
    } else {
      if (window.WebGLRenderingContext) {
        alert('Access to http://get.webgl.org');
      } else {
        alert('Access to http://get.webgl.org/troubleshooting');
      }
    }
  }

  startup() {
    this.setupShaders();
    this.setupBuffers();

    this.gl.clearColor(1.0, 1.0, 1.0, 1.0);

    this.draw();
  }

  draw() {
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer);
    this.gl.vertexAttribPointer(
      this.vertexPositionAttribute,
      this.triangleVertexBuffer.positionSize,
      this.gl.FLOAT,
      false,
      16,
      0
    );
    this.gl.vertexAttribPointer(
      this.vertexColorAttribute,
      this.triangleVertexBuffer.colorSize,
      this.gl.UNSIGNED_BYTE,
      true,
      16,
      12
    );

    this.gl.drawArrays(
      this.gl.TRIANGLES,
      0,
      this.triangleVertexBuffer.numberOfItems
    );
  }

  setupBuffers() {
    this.triangleVertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.triangleVertexBuffer);

    const triangleVertices = [
      0.0,
      0.5,
      0.0,
      255,
      0,
      0,
      255,
      0.5,
      -0.5,
      0.0,
      0,
      255,
      6,
      255,
      -0.5,
      -0.5,
      0.0,
      0,
      0,
      255,
      255
    ];

    const numOfVertices = 3;
    // 1個の頂点要素に必要なバイト数
    const vertexSizeInBytes =
      3 * Float32Array.BYTES_PER_ELEMENT + 4 * Uint8Array.BYTES_PER_ELEMENT;
    const vertexSizeInFloats =
      vertexSizeInBytes / Float32Array.BYTES_PER_ELEMENT;

    const buffer = new ArrayBuffer(numOfVertices * vertexSizeInBytes);
    // バッファにビューをマップする
    let positionView = new Float32Array(buffer);
    let colorView = new Uint8Array(buffer);

    let positionOffsetInFloats = 0;
    let colorOffsetInBytes = 12;
    for (var i = 0, k = 0; i < numOfVertices; i++) {
      positionView[positionOffsetInFloats] = triangleVertices[k];
      positionView[positionOffsetInFloats + 1] = triangleVertices[k + 1];
      positionView[positionOffsetInFloats + 2] = triangleVertices[k + 2];
      colorView[colorOffsetInBytes] = triangleVertices[k + 3];
      colorView[colorOffsetInBytes + 1] = triangleVertices[k + 4];
      colorView[colorOffsetInBytes + 2] = triangleVertices[k + 5];
      colorView[colorOffsetInBytes + 3] = triangleVertices[k + 6];

      k += 7;
      positionOffsetInFloats += vertexSizeInFloats;
      colorOffsetInBytes += vertexSizeInBytes;
    }

    this.gl.bufferData(this.gl.ARRAY_BUFFER, buffer, this.gl.STATIC_DRAW);
    this.triangleVertexBuffer.positionSize = 3;
    this.triangleVertexBuffer.colorSize = 4;
    this.triangleVertexBuffer.numberOfItems = 3;
  }

  setupShaders() {
    const vertexShader = this.loadShaderFromDOM('shader-vs');
    const fragmentShader = this.loadShaderFromDOM('shader-fs');

    this.shaderProgram = this.gl.createProgram();
    this.gl.attachShader(this.shaderProgram, vertexShader);
    this.gl.attachShader(this.shaderProgram, fragmentShader);
    this.gl.linkProgram(this.shaderProgram);

    if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
      alert(this.gl.getProgramInfoLog(this.shaderProgram));
      return;
    }

    this.gl.useProgram(this.shaderProgram);

    this.vertexPositionAttribute = this.gl.getAttribLocation(
      this.shaderProgram,
      'aVertexPosition'
    );
    this.vertexColorAttribute = this.gl.getAttribLocation(
      this.shaderProgram,
      'aVertexColor'
    );

    this.gl.enableVertexAttribArray(this.vertexPositionAttribute);
    this.gl.enableVertexAttribArray(this.vertexColorAttribute);
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
      alert(this.gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }
}
