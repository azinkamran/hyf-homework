console.log()
console.log("ٔNote pad")
console.log()
//ٔNote pad

let notes=[]
/////
//Extra feature
function CurrnetDay() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear()

    if(dd<10) dd="0"+dd
    if(mm<10) mm="0"+mm
    
    return(dd+'-'+mm+'-'+yyyy)   
}

//save note

let id
let dateAdded 

function addNote(content,id) {
    dateAdded=CurrnetDay()
    id = notes.length
    notes.push({id,content,dateAdded})    
}

let content = "Something that I want to write down"
addNote(content,id)

content = "something somtheing something"
addNote(content,id)

content = "another thing"
addNote(content,id)

console.log("added to the notes")
console.log()

//Get a note

function getNoteFromId(id) {
    for(let i=0;i<notes.length;i++){
        if(notes[i].id=== id){
            console.log("the note you are looking for is ::",notes[id])
            return
        }
    }
    console.log("you dont have this id")
}

id = 2
getNoteFromId(id)
id = 4
getNoteFromId(id)

//Get all notes
for(let i=0;i<notes.length;i++){
    console.log(notes[i].content)
}
console.log()

//Log out notes

console.log(notes)
console.log()

//Unique feature