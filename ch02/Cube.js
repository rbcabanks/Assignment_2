class Cube {
    constructor() {
      this.type = 'cube';
      this.color = [1.0, 1.0, 1.0, 1.0];
      this.matrix=new Matrix4();    
    }
    // rendering function... originally was in colorpoints render function
    render(){
        var rgba = this.color;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix,false,this.matrix.elements);
        drawTriangle([0,0,0,1,1,0,1,0,0]);
        drawTriangle([0,0,0,0,1,0,1,1,0]);
    }
}
function drawCube(vertices) {
  var face1  = new Float32Array([
    1.0,-1.0,1.0, // triangle 1 : begin
    1.0,-1.0,-1.0,
    1.0, 1.0,-1.0, // triangle 1 : end
    1.0, -1.0,1.0, // triangle 2 : begin
    1.0,1.0,-1.0,
    1.0, 1.0,1.0, // triangle 2 : end
  ]);

  var face2  = new Float32Array([  
    -1.0,-1.0,-1.0,
    -1.0,-1.0,1.0,
    -1.0,1.0,1.0,
    -1.0,-1.0,-1.0,
    -1.0,1.0,1.0,
    -1.0,1.0,-1.0,
  ]);

  var face3  = new Float32Array([
    1.0,1.0,1.0,
    -1.0, 1.0, 1.0,
    -1.0,-1.0,1.0,
    1.0,1.0, 1.0,
    -1.0,-1.0, 1.0,
    1.0,-1.0, 1.0,
  ]); 

  var face4  = new Float32Array([
    1.0,-1.0, -1.0,
  -1.0,-1.0, -1.0,
  -1.0,1.0, -1.0,
  1.0, -1.0, -1.0,
  -1.0,1.0,-1.0,
  1.0, 1.0,-1.0,
  ]);

  var face5  = new Float32Array([
    1.0,1.0,-1.0,
    -1.0, 1.0, -1.0,
    -1.0,1.0, 1.0,
    1.0, 1.0, -1.0,
    1.0, 1.0,1.0,
    -1.0, 1.0,1.0,
  ]);

  var face6  = new Float32Array([
    1.0, -1.0, -1.0,
    -1.0,-1.0,-1.0,
    -1.0, -1.0, 1.0,
    1.0, -1.0, -1.0,
    1.0, -1.0, 1.0,
    -1.0,-1.0, 1.0
  ]);


  var verticesCube = new Float32Array([   // Vertex coordinates
  -1.0,-1.0,-1.0, // triangle 1 : begin
  -1.0,-1.0, 1.0,
  -1.0, 1.0, 1.0, // triangle 1 : end
  1.0, 1.0,-1.0, // triangle 2 : begin
  -1.0,-1.0,-1.0,
  -1.0, 1.0,-1.0, // triangle 2 : end

  1.0,-1.0, 1.0,
  -1.0,-1.0,-1.0,
  1.0,-1.0,-1.0,
  1.0, 1.0,-1.0,
  1.0,-1.0,-1.0,
  -1.0,-1.0,-1.0,

  -1.0,-1.0,-1.0,
  -1.0, 1.0, 1.0,
  -1.0, 1.0,-1.0,
  1.0,-1.0, 1.0,
  -1.0,-1.0, 1.0,
  -1.0,-1.0,-1.0,

  -1.0, 1.0, 1.0,
  -1.0,-1.0, 1.0,
  1.0,-1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0,-1.0,-1.0,
  1.0, 1.0,-1.0,

  1.0,-1.0,-1.0,
  1.0, 1.0, 1.0,
  1.0,-1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0,-1.0,
  -1.0, 1.0,-1.0,

  1.0, 1.0, 1.0,
  -1.0, 1.0,-1.0,
  -1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  -1.0, 1.0, 1.0,
  1.0,-1.0, 1.0
  ]);

  //var n = 3 // number of vertices
  
    // creating buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    // bind the buffer object to the target
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    // write date into buffer object

    //var first= new Float32Array([0,0,0,1,1,0,1,0,0]);  
    
    //var second= new Float32Array([0,0,0,0,1,0,1,1,0]);  

    var a_Position = gl.getAttribLocation(gl.program,'a_Position');
    if(a_Position<0){
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }
    //Assign buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,0,0);

    //Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
/*
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesCube),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,0,0,1,1); //color of triangle

    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, verticesCube.length/3);*/

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face1),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,1,1,1,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face1.length/3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face2),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,1,0,0,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face2.length/3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face3),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,0,0,.8,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face3.length/3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face4),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,.5,0,.7,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face4.length/3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face5),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,0,.5,.6,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face5.length/3);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(face6),gl.DYNAMIC_DRAW);
    gl.uniform4f(u_FragColor,0,.5,.2,1); //color of triangle
    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    gl.drawArrays(gl.TRIANGLES,0, face6.length/3);
}

/*
function drawCube(vertices) {

    var rgba = [1.0, .5, 1.0, 1.0];
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    var n = 3 // number of vertices
    // creating buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    // bind the buffer object to the target
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    // write date into buffer object (first triangle)
    var vertices2 = new Float32Array([0,0,0,1,1,0,1,0,0]);
    var first= new Matrix4(0,0,0,1,1,0,1,0,0);
    console.log(first);
    //first.multiply(vertices);
    //console.log(first);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(first.elements),gl.DYNAMIC_DRAW);
    var a_Position = gl.getAttribLocation(gl.program,'a_Position');
    if(a_Position<0){
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }
    
    //Assign buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,0,0);
    //Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
    gl.drawArrays(gl.TRIANGLES,0,n);

    
    //second triangle (front face)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,0,0,0,1,0,1,1,0]),gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(a_Position);
    gl.drawArrays(gl.TRIANGLES,0,n);


    gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,1,0,0,1,1,1,1,1]),gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(a_Position);
    gl.drawArrays(gl.TRIANGLES,0,n);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,1,0,1,1,1,1,1,0]),gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(a_Position);
    gl.drawArrays(gl.TRIANGLES,0,n);
*/
