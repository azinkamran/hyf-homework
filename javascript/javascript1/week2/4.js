console.log();
console.log("Weather wear:");
console.log();
//Weather wear
const temp= -3

function whatToWearToday(temp){
    if (temp<0){
        return("wear as warm as you can")
    }else if(temp<10){
        return("wear a warmm jacket and gloves and scarf")
    }else if(temp<18){
        return("wear a jacket")
    }else if(temp<22){
        return("wear T-shirt and short")
    }else{
        return("were as light as you can")
    }
}

console.log(whatToWearToday(temp))
console.log(whatToWearToday(5))
console.log(whatToWearToday(14))
console.log(whatToWearToday(19))
console.log()
