console.log()
console.log("When will we be there??")
console.log()
//When will we be there??

const speed = 100;
const destinationDistance = 432;

let min = 0
let hour = 0

function howLong(speed,destinationDistance) {
    hour =  Math.floor(destinationDistance / speed)
    min =  Math.floor((destinationDistance % speed) * 60 / speed)
}

howLong(speed,destinationDistance)
console.log("It will take ",hour,"hour(s) and ",min," minute(s)"); // 4 hours and 42 minutes
console.log()