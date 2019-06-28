//vlidator for input box

function validate(evt) {
  let theEvent = evt || window.event;
  let key;
  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  let regex = /[0-9]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

const gameTime = 0;
let countl = 0;
let counts = 0;
//restart
const myBtn1 = document.querySelector("button.restartBtn");
myBtn1.addEventListener("click", Rclicked);

function Rclicked(){
    countl =0
    counts=0
    document.getElementById("result").innerHTML=""
    document.getElementById("countdown").innerHTML =""
}
//button clicked get the value from input box

const myBtn = document.querySelector("button.startBtn");
myBtn.addEventListener("click", clicked);

function clicked() {
  let inputSec = document.getElementById("seconds").value;
  if (inputSec.trim() != 0) {
    console.log(inputSec);
    //count down timer
    let timeleft = inputSec;
    let downloadTimer = setInterval(function() {
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";
      timeleft -= 1;

      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time Out";
        console.log("time out");
        console.log(`L pressed :  ${countl} times`);
        console.log(`S pressed :  ${counts} times`);
        document.removeEventListener("keyup", countLetters);
        if (counts > countl) {
          document.getElementById("result").innerHTML = "The winner is S presser";
        } else {
            document.getElementById("result").innerHTML = "The winner is L presser";
        }
      }
    }, 1000);

    //count s , l
    //debugger
    if (timeleft > 0) {
      document.addEventListener("keyup", countLetters);

      function countLetters() {
        let whichChar = event.which || event.keyCode;

        if (whichChar === 76) {
          countl += 1;
        }
        if (whichChar === 83) {
          counts += 1;
        }
        console.log(`L ${countl}`);
        console.log(`S ${counts}`);
      }
    }
  }
}
