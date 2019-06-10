console.log();
console.log("Candy helper:");
console.log();
//Candy helper
const candyType = ["Sweet","Chocolate","Toffee","Chewing-gum"];
const pricePerGram = [0.5,0.7,1.1,0.03];
let weight = 0;
let boughtCandyPrices= [0,0,0,0]
const amountToSpend= Math.random() * 100

function addCandy(candyType,weight){
    if(candyType=="Sweet"){
        boughtCandyPrices[0] += weight * pricePerGram[0]
        return(boughtCandyPrices[0].toFixed(2))
    }
    if(candyType=="Chocolate"){
        boughtCandyPrices[1] += weight * pricePerGram[1]
        return(boughtCandyPrices[1].toFixed(2))
    }
    if(candyType=="Toffee"){
        boughtCandyPrices[2] += weight * pricePerGram[2]
        return(boughtCandyPrices[2].toFixed(2))
    }
    if(candyType=="Chewing-gum"){
        boughtCandyPrices[3] += weight * pricePerGram[3]
        return(boughtCandyPrices[3].toFixed(2))
    }
}

function canBuyMoreCandy(){
    let total=0
    for(let i=0;i<4;i++){
        total+=boughtCandyPrices[i]
    }
    if (total<50){
        console.log("You can buy more candy")
    }else{
        console.log("You already bought enough")
    }
}
console.log("You should pay ",addCandy("Sweet", 200))

console.log("You should pay ",addCandy("Chocolate", 15))
console.log("You should pay ",addCandy("Toffee", 12))
console.log("You should pay ",addCandy("Chewing-gum", 22))
console.log()

canBuyMoreCandy()