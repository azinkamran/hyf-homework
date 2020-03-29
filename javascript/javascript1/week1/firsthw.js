console.log()
//----Age-ify (A future age calculator)

console.log("age-ify")
console.log()


const yearOfBirth = 1986
const yearFuture = 2045


console.log("in \'" , yearFuture , "\' I will be \'",yearFuture - yearOfBirth , "\' years old")

console.log()
//----Goodboy-Oldboy (A dog age calculator)

console.log("Goodboy-Oldboy")
console.log()

const dogYearOfBirth = 2019
const dogYearFuture = 2045

const dogYear = dogYearFuture - dogYearOfBirth

let shouldShowResultInDogYears=[false,true]

if (shouldShowResultInDogYears[0]) {
    console.log("in \'",dogYearFuture,"\' the dog is \'", dogYear , "\' years old")
}else{
    console.log("in \'",dogYearFuture,"\' the dog is \'", dogYear * 7 , "\' years old-human agewise")
}

console.log()
//----Housey pricey (A house price estimator)

console.log("Housey pricey")
console.log()

let wide =[8,5] 
let deep =[10,11]
let high = [10,8]
let garden =[100,70]
let volume=[0,0] 
let housePrice = [0,0]

volume[0] = wide[0] * deep[0] * high[0]
volume[1] = wide[1] * deep[1] * high[1]

housePrice[0] = volume[0] * 2.5 * 1000 + garden[0] * 300
housePrice[1] = volume[1] * 2.5 * 1000 + garden[1] * 300

if (housePrice[0]<=2500000) {
    console.log("Peter",housePrice[0]," is a fair price")
}else{
    console.log("Peter",housePrice[0]," is not a fair price")
}

if (housePrice[1]<=1000000) {
    console.log("Julia ",housePrice[1]," is a fair price")
}else{
    console.log("Julia ",housePrice[1]," is not a fair price")
}

console.log()
//----Ez Namey (Startup name generator)

console.log("Ez Namey")
console.log()

const firstWords = ["Easy","Awesome","Corporate","zeroOne","fantastic","click","webster","nerdy","amazing","berry"]
const secondWords =["script","bizarre","club","cph","wonderful","try","design","monster","noMilk","production"]

const randomNumber = [Math.floor(Math.random() * 10) + 0, Math.floor(Math.random() * 10) + 0]
console.log("Start up name can be \'",firstWords[randomNumber[0]], secondWords[randomNumber[1]],"\'")


console.log()