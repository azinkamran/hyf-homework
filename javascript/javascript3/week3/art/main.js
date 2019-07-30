let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let crcl = canvas.getContext("2d");

// draw a sample circle
// crcl.beginPath();
// crcl.arc(100, 75, 50, 0, 2 * Math.PI);
// crcl.stroke();
// crcl.fillStyle = "red";
// crcl.fill();

class circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    crcl.beginPath();
    crcl.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    //crcl.stroke();
    crcl.fillStyle = this.fillColor;
    crcl.fill();
  }
}

//test the class
// const c1 = new circle(50, 50, 20, 0, 2 , "#000000");
// c1.draw();

//create random circle on the window
// setInterval(function() {
//   crcl.clearRect(0, 0, canvas.width, canvas.height)

//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   const x = getRandomInt(0, canvas.width);
//   const y = getRandomInt(0, canvas.height);
//   const r= getRandomInt(0,50);
//   const fillColor = getRandomColor()

//   const c1 = new circle(x, y, r, 0, 2* Math.PI, fillColor);
//   c1.draw();
//   console.log("drew a circle")
// }, 500);

//mouse move

document.addEventListener("mousemove", function(e) {
  //console.log(e)
  console.log("X: ", e.x, "Y: ", e.y);
  let mouseX = e.x;
  let mouseY = e.y;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const x = getRandomInt(mouseX, mouseX+10);
  const y = getRandomInt(mouseY, mouseY+10);
  const r = getRandomInt(0, 50);
  const fillColor = getRandomColor();

  const c2 = new circle(x, y, r, 0, 2* Math.PI, fillColor);
  c2.draw();
  console.log("drew a circle near mouse")
});
