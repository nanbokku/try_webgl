window.onload = () => {
  startup();
};

let startup = () => {
  const canvas = document.getElementById('myGLCanvas');
  const gl = WebGLDebugUtils.makeDebugContext(createGLContext(canvas));
  const shaderProgram = setupShaders(gl);
  const vertexBuffer = setupBuffers(gl);
  gl.clearColor(0.0, 1.0, 0.0, 1.0);
  draw(gl, shaderProgram, vertexBuffer);
};

let createGLContext = canvas => {
  const names = ['webgl', 'experimental-webgl'];
  let context = null;

  for (var i = 0; i < names.length; i++) {
    try {
      context = canvas.getContext(names[i]);
    } catch (e) {
      if (context) break;
    }
  }

  if (context) {
    context.viewportWidth = canvas.width;
    context.viewportHeight = canvas.height;
  } else {
    if (!window.WebGLRenderingContext) {
      // このブラウザはWebGLを認識しない
      // ユーザーがブラウザの更新情報を得られるように"http://get.webgl.org"へのリンクを示す．
      alert('Access to http://get.webgl.org');
    } else {
      alert('Access to http://get.webgl.org/troubleshooting');
    }
  }

  return context;
};

let loadShaderFromDOM = (gl, id) => {
  const shaderScript = document.getElementById(id);
  if (!shaderScript) {
    return null;
  }

  const shaderSource = shaderScript.textContent;
  let shader;
  if (shaderScript.type === 'x-shader/x-fragment') {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type === 'x-shader/x-vertex') {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    deleteShader(shader);
    return null;
  }

  return shader;
};

let loadShader = (gl, type, shaderSource) => {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('Error compiling shader' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

let setupShaders = gl => {
  // const vertexShaderSource =
  //   "attribute vec3 aVertexPosition;\n" +
  //   "void main() {\n" +
  //   " gl_Position = vec4(aVertexPosition, 1.0);\n" +
  //   "}\n";
  // const fragmentShaderSource =
  //   "precision mediump float;\n" +
  //   "void main() {\n" +
  //   " gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" +
  //   "}\n";

  // const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  // const fragmentShader = loadShader(
  //   gl,
  //   gl.FRAGMENT_SHADER,
  //   fragmentShaderSource
  // );

  const vertexShader = loadShaderFromDOM(gl, 'shader-vs');
  const fragmentShader = loadShaderFromDOM(gl, 'shader-fs');

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Failed to setup shaders');
  }

  gl.useProgram(shaderProgram);

  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    'aVertexPosition'
  );

  return shaderProgram;
};

let setupBuffers = gl => {
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  const triangleVertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(triangleVertices),
    gl.STATIC_DRAW
  );
  vertexBuffer.itemSize = 3;
  vertexBuffer.numberOfItems = 3;

  return vertexBuffer;
};

let draw = (gl, shaderProgram, vertexBuffer) => {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.vertexAttribPointer(
    shaderProgram.vertexPositionAttribute,
    vertexBuffer.itemSize,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
  gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.numberOfItems);
};
