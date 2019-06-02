console.log();
console.log("Student manager:");
console.log();
//Student manager

const class07Students = [];
const studentsNames=["Azin","Azin","Fatemeh","Ida","Azin","Lilla","Cloudia","Reza","Abd","Chiris","Queen","Rasmus"]
let count= 0

function addStudentToClass(studentsNames) {
    for (let i = 0; i < studentsNames.length; i++) {
        getNumberOfStudents(class07Students)
        if(count<6 || studentsNames[i]=="Queen"){
            for (let j=0;j<10;j++){
                if( class07Students.includes(studentsNames[i])){
                   console.log('Student ' + studentsNames[i] + ' is already in the class')
                }else{
                    class07Students.push(studentsNames[i])
                }
            }
        }else{
            console.log("Cannot add more students to class 07")
        }
    }
}


function getNumberOfStudents(class07Students) {
    count=class07Students.length
    return(count)
}

addStudentToClass(studentsNames)
console.log(class07Students)
