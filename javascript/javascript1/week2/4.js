console.log();
console.log("Weather wear:");
console.log();
//Weather wear
const temp= -3

function whatToWearToday(temp){
    if (temp<0){
        console.log("wear as warm as you can")
    }else if(temp<10){
        console.log("wear a warmm jacket and gloves and scarf")
    }else if(temp<18){
        console.log("wear a jacket")
    }else if(temp<22){
        console.log("wear T-shirt and short")
    }else{
        console.log("were as light as you can")
    }
}
whatToWearToday(temp)