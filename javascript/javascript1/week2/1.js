console.log();
console.log("Flight booking fullname function:");
console.log();
//Flight booking fullname function
const firstName=["Azin","Reza"];
const surName=["Kamran","Yazdi"];

function getFullname(firstName,surName){
    return (firstName+" "+surName)
}
for (let i = 0; i < 2; i++) {
    console.log( getFullname(firstName[i],surName[i]));
}

console.log();
console.log("Formal fullname:");
console.log();
//Formal fullname
const useFormalName=[false,true]

function getformalFullname(firstName,surName,useFormalName){
    if (useFormalName) {
        return("Mr. "+firstName+" "+surName)
    }else{
        return("Ms. "+firstName+" "+surName)
    }
}

for (let i = 0; i < 2; i++) {
    console.log( getformalFullname(firstName[i],surName[i],i));
}