console.log();
console.log("Flight booking fullname function:");
console.log();
//Flight booking fullname function
const firstName=["Azin","Reza"];
const surName=["Kamran","Yazdi"];
const useFormalName=[false,true]

function getFullname(firstName,surName,useFormalName){
    if(useFormalName){
        return ("Sir "+firstName+" "+surName)
    }else{
        return (" "+firstName+" "+surName)
    }
}
for (let i = 0; i < 2; i++) {
    console.log( getFullname(firstName[i],surName[i],i));
}

