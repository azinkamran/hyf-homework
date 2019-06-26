/*
Function as a variable

Create funtions that are used in these different ways:
*/
/*
Create an array with 3 items. All items should be functions. Iterate through 
the array and call all the functions.


*/

const functionArray = [name, age, job];

function name() {
  console.log("Azin");
}
function age() {
  console.log("32");
}
function job() {
  console.log("front end developer");
}

for (const func of functionArray) {
  func();
}

/*
Create a function as a const and try creating a function normally. Call both 
functions.
*/

const firstname = () => {
  console.log("Azin");
};
function lastname() {
  console.log("Kamran");
}

firstname();
lastname();
/*
Create an object that has a key whose value is a function. Try calling this 
function.
*/

const nameObject = {
  name: "my name is",
  call: function() {
    console.log("Azin");
  }
};

nameObject.call();
