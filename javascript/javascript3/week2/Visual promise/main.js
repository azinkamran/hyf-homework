const redCircle = document.querySelector("#red");
const blueCircle = document.querySelector("#blue");
const greenCircle = document.querySelector("#green");

function moveRed() {
  moveElement(document.querySelector("li.red"), { x: 20, y: 300 }).then(() => {
    console.log("Red Element has been moved");
  });
}
function moveBlue() {
  moveElement(document.querySelector("li.blue"), { x: 400, y: 300 }).then(
    () => {
      console.log("Blue Element has been moved");
    }
  );
}
function moveGreen() {
  moveElement(document.querySelector("li.green"), { x: 400, y: 20 }).then(
    () => {
      console.log("Green Element has been moved");
      span.classList.add("shown");
    }
  );
}

//all
const span = document.querySelector("span");
const allBtn = document.querySelector("#allBtn");
allBtn.addEventListener("click", function() {
  Promise.all([moveRed(), moveGreen(), moveBlue()])
    .then(() => console.log("all moved"))
    .catch(console.log);
});

//one by one
function oneByOne() {
  return new Promise((resolve, reject) => {
    moveRed();
    setTimeout(() => {
      moveBlue();
    }, 2000);
    setTimeout(() => {
      moveGreen();
    }, 4000);
    setTimeout(() => {
      resolve("all moved seperately");
      reject(new Error());
    }, 6000);
  });
}
const individualBtn = document.querySelector("#individualBtn");
individualBtn.addEventListener("click", oneByOne);

//reset
function reset() {
  document.location.reload(true);
}
const restbtn = document.querySelector("#resetBtn");
restbtn.addEventListener("click", reset);
