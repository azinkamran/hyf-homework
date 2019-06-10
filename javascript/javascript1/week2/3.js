console.log();
console.log("Event application:");
console.log();
//Event application

const week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const today = new Date()
const day = 14

function getEventWeekday(day){
    return(week[day % 7])
}
console.log(getEventWeekday(day))
console.log(getEventWeekday(today))
console.log()