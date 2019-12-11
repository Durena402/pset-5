window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    this.document.getElementById("hello").onclick = sayHello;
    this.document.getElementById("rectangle").onclick = drawRectangle;
    this.document.getElementById("color").onclick = drawColoredRectangle;
}

/*
 * Exercise 1.
 */
const sayHello = function() {
  let canvas = document.getElementById("student-canvas-1")
  let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, 1024, 128);
  let message = prompt("Message: ");
  while (message.length > 50){
    alert("Your message is too long. Keep it under 50 characters.");
    message = prompt("Message: ");
  }
   ctx.font = '48px sans-serif';
   ctx.strokeText(message, 30, 70, 994);
};
/*
 * Exercise 2.
 */
const drawRectangle = function() {
  let canvas = document.getElementById("student-canvas-2")
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);
  let width = prompt("Width: ");
  let height = prompt("Height: ");
  let x = prompt("X: ");
  let y = prompt("Y: ");

  while (isNaN(width) || width < 1 || width > 1024 || isNaN(height) || height < 1 || height > 512 || isNaN(x) || x < 1 || x >= 1024 || isNaN(y) || y < 1 || y >= 512 ||  x > 1024 - width || y > 512 -  height) {
    if (x == null || y == null || width == null || height == null) {
      ctx.clearRect(0, 0, 1024, 512);
      return;
    }
    if (isNaN(width) || width < 1 || width > 1024){
      alert("Your width must be between 1 and 1024.");
    }
    if (isNaN(height) || height < 1 || height > 512){
      alert("Your height must be between 1 and 512.");
    }
    if (isNaN(x) || x < 1 || x > 1024){
      alert("Your X is invaid.");
    }
    if (isNaN(y) || y < 1 || y > 512){
      alert("Your Y is invaid.");
    }
    if ( x > 1024 - width || y > 512 -  height){
      alert("Your rectangle is out of the bounds of the canvas.");
    }

   width = prompt("Width: ");
   height = prompt("Height: ");
   x = prompt("X: ");
   y = prompt("Y: ");
 }
  ctx.strokeRect( x, y, width, height);
};
// Something is wrong
/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let color = prompt("Color: ");
  color = color.toLowerCase();
  color = color.trim();
  while (color !== "black" && color !== "blue" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow"){
    alert("Your color is not valid.");
    color = prompt("Color: ");
  }
  ctx.fillStyle = color
   ctx.fillRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
