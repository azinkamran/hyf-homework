console.log()
console.log("When will we be there??")
console.log()
//When will we be there??

const speed = 100;
const destinationDistance = 432;


function howLong(speed,destinationDistance) {
    const timeToDestination={
        hour :  Math.floor(destinationDistance / speed),
        min :  Math.floor((destinationDistance % speed) * 60 / speed)
    }
    return timeToDestination
}
const time = howLong(speed,destinationDistance)
console.log("It will take ",time.hour,"hour(s) and ",time.min," minute(s)");
console.log()
