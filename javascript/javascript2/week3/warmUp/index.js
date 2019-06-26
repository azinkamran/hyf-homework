/**
1-Log out the text Called after 2.5 seconds 2.5 seconds after the script
  is loaded.
 */
setTimeout(() => {
  console.log("logged after 2,5 seconds");
}, 2500);

/*
2-Create a function that takes 2 parameters: delay and stringToLog. Calling 
  this function should log out the stringToLog after delay seconds. Call the
  function you have created with some different arguments.
 */
// const delay = setTimeout( () => {
//   console.log('logged after 3 seconds')
// }, 3000);

function showStrAfterDelay(str, delay) {
  setTimeout(() => {
    console.log(str, `after ${delay / 1000} sec(s)`);
  }, delay);
}

showStrAfterDelay("Hello Azin", 1000);
showStrAfterDelay("HYF", 1500);

/*
3-Create a button in html. When clicking this button, use the function you
 created in the previous task to log out the text: 3.5 seconds after button 
 is clicked 3.5 seconds after the button is clicked.
*/
const myBtn = document.querySelector("button.delayBtn");

myBtn.addEventListener("click", function() {
  setTimeout(() => {
    console.log("clicked-logged after 3,5 seconds");
  }, 3500);
});

/*
4-Create two functions and assign them to two different variables. One function
 logs out Earth, the other function logs out Saturn. Now create a new third 
 function that has one parameter: planetLogFunction. The only thing the third 
 function should do is call the provided parameter function. Try call the 
 third function once with the Earth function and once with the Saturn 
 function.
*/
const earth = () => {
  console.log("Earth");
};

const saturn = () => {
  console.log("Saturn");
};

const planet = planetLogFunction => {
  planetLogFunction();
};

planet(earth);
planet(saturn);

/*
5-Create a button with the text called "Log location". When this button is
 clicked the location (latitude, longitude) of the user should be logged out
  using this browser api
*/

function success(pos) {
  let crd = pos.coords;
  console.log(`Your current position is:`);
  console.log(`Latitude: ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More-less ${crd.accuracy} meters`);
}

function error(err) {
  console.warn(`ERROR (${err.code}): ${err.message}`);
}

const myBtn1 = document.querySelector("button.locationBtn");

myBtn1.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(success, error);
});

/*
6-Optional Now show that location on a map using fx the Google maps api
*/

/*
7-Create a function called runAfterDelay. It has two parameters: delay and
  callback. When called the function should wait delay seconds and then call
  the provided callback function. Try and call this function with different
  delays and different callback functions
*/

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}
const firstname = () => {
  console.log("Azin");
};
const age = () => {
  console.log("32");
};

runAfterDelay(2000, earth);
runAfterDelay(2000, firstname);
runAfterDelay(2000, age);

/*
8-Check if we have double clicked on the page. A double click is defined by
 two clicks within 0.5 seconds. If a double click has been detected, log out
 the text: "double click!"
*/

let lastClick = 0;

window.addEventListener("click", function() {
  //console.log("hereeeee")
  const date = new Date();
  const time = date.getTime();

  if (time - lastClick < 500) {
    console.log("double");
  }
  lastClick = time;
});

/*
9-Create a function called jokeCreator that has three parameters: 
shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - 
function. If you set tellFunnyJoke to true it should call the logFunnyJoke 
function that should log out a funny joke. And vice versa.
*/

function logFunnyJoke() {
  console.log("Funny Joke :))");
}

function logBadJoke() {
  console.log("Bad Joke :|");
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
