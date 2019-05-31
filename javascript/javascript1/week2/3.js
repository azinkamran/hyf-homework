console.log();
console.log("Event application:");
console.log();
//Event application

const week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const today = new Date()
const day = 14

function getEventWeekday(day){
    console.log(week[(0+day)%7])
}

getEventWeekday(day)