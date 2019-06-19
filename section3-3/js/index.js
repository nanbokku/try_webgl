window.onload = () => {
  startup();
};

let startup = () => {
  const canvas = document.getElementById('myGLCanvas');
  const gl = WebGLDebugUtils.makeDebugContext(createGLContext(canvas));
  const shaderProgram = setupShader(gl);
  const [vertexBuffer, elementBuffer] = setupBuffer(gl, shaderProgram);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  drawElements(gl, shaderProgram, vertexBuffer, elementBuffer);
};

let createGLContext = canvas => {
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
    context.viewportWidth = canvas.width;
    context.viewportHeight = canvas.height;
  } else {
    if (!window.WebGLRenderingContext) {
      alert('Access to http://get.webgl.org');
    } else {
      alert('Access to http://get.webgl.org/troubleshooting');
    }
  }

  return context;
};

let setupShader = gl => {
  const vertexShader = loadShader(gl, 'shader-vs');
  const fragmentShader = loadShader(gl, 'shader-fs');

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Failed to setup shaders ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  gl.useProgram(shaderProgram);

  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    'aVertexPosition'
  );

  shaderProgram.vertexResolutionUniform = gl.getUniformLocation(
    shaderProgram,
    'uResolution'
  );

  return shaderProgram;
};

let loadShader = (gl, id) => {
  const shaderScript = document.getElementById(id);
  const shaderSource = shaderScript.textContent;

  let shader;
  if (shaderScript.type === 'x-shader/x-vertex') {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else if (shaderScript.type === 'x-shader/x-fragment') {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('Failed to compiling shader ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

let setupBuffer = (gl, shaderProgram) => {
  const vertices = [
    10.0,
    50.0,
    0.0,
    0.0,
    50.0,
    0.0,
    10.0,
    40.0,
    0.0,
    0.0,
    40.0,
    0.0,
    10.0,
    30.0,
    0.0,
    0.0,
    30.0,
    0.0,
    10.0,
    20.0,
    0.0,
    0.0,
    20.0,
    0.0,
    10.0,
    10.0,
    0.0,
    0.0,
    10.0,
    0.0,
    10.0,
    0.0,
    0.0,

    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    20.0,
    50.0,
    0.0,
    20.0,
    50.0,
    0.0,
    10.0,
    50.0,
    0.0,
    20.0,
    40.0,
    0.0,
    10.0,
    40.0,
    0.0,
    20.0,
    30.0,
    0.0
  ];

  const index = [0, 1, 2, 2, 1, 3, 2, 3, 4, 4, 3, 5, 4, 5, 6, 6, 5, 7];

  const arrayBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  arrayBuffer.itemSize = 3;
  arrayBuffer.numberOfItems = 18;

  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

  const elementBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(index),
    gl.STATIC_DRAW
  );
  elementBuffer.itemSize = 1;
  elementBuffer.numberOfItems = 18;

  return [arrayBuffer, elementBuffer];
};

let drawArrays = (gl, shaderProgram, vertexBuffer) => {
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

  gl.uniform2f(
    shaderProgram.vertexResolutionUniform,
    gl.canvas.width,
    gl.canvas.height
  );

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexBuffer.numberOfItems);
};

let drawElements = (gl, shaderProgram, vertexBuffer, elementBuffer) => {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.vertexAttribPointer(
    shaderProgram.vertexPositionAttribute,
    vertexBuffer.itemSize,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.uniform2f(
    shaderProgram.vertexResolutionUniform,
    gl.canvas.width,
    gl.canvas.height
  );

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);

  gl.drawElements(
    gl.TRIANGLE_STRIP,
    elementBuffer.numberOfItems,
    gl.UNSIGNED_SHORT,
    0
  );
};
