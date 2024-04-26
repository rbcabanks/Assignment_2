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
    //color=
    var n = 6 // number of vertices
    // creating buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    //vertices=vertices+vertices2;
    // bind the buffer object to the target
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    // write date into buffer object
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),gl.DYNAMIC_DRAW);
  
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
  }