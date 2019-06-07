console.log()
console.log("Item array removal")
console.log()
//Item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here

for(let i=0;i<names.length;i++){
    if(names[i]=== nameToRemove)
    delete names[i]
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']