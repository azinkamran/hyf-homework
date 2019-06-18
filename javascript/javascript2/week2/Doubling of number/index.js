let numbers = [1, 2, 3, 4];

const newNumbers = numbers
  .filter(odd => odd % 2 ===0)
  .map(odd => odd * 2)
console.log("double odd numbers are: "+newNumbers)