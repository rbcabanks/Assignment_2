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
  //gl.uniformMatrix4fv(u_translateM,false,vertices.elements);
  var n = 3 // number of vertices
  
    // creating buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    // bind the buffer object to the target
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    // write date into buffer object
    var first= new Float32Array([0,0,0,1,1,0,1,0,0]);  
    
    var second= new Float32Array([0,0,0,0,1,0,1,1,0]);  

    var a_Position = gl.getAttribLocation(gl.program,'a_Position');
    if(a_Position<0){
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }
    //Assign buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,0,0);

    //Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(first),gl.DYNAMIC_DRAW);

    gl.uniformMatrix4fv(u_ModelMatrix,false,vertices.elements);
    
    gl.drawArrays(gl.TRIANGLES,0,n);
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
