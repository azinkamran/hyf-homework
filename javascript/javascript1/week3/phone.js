console.log()
console.log("Smart phone")
console.log()
//Smart phone
//////

//calculating current date
function CurrnetDay() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear()

    if(dd<10) dd="0"+dd
    if(mm<10) mm="0"+mm
    
    return(dd+'-'+mm+'-'+yyyy)   
}
//////

//Adding an activity
let activities=[]

function addActivity(date,activity,duration) {
    activities.push({date,activity,duration})
}

addActivity('06-06-2019', 'Youtube', 30);
addActivity('06-06-2019', 'face book', 10);
addActivity(CurrnetDay(), 'Youtube', 40);
addActivity(CurrnetDay(), 'Instagram', 10);
console.log(activities)
console.log()

//Show my status
//Usage limit
const limit =30

function showStatus() {
    let activityAmount = 0
    if(activities.length===0){
        console.log("Add some activities before calling showStatus")
    }else{
        for(let i=0;i<activities.length;i++){
            activityAmount+= activities[i].duration
        }
        console.log("You have ",activities.length," activities. They amount to ", activityAmount," min. of usage")
        if(activityAmount >= limit){
            console.log("You have reached your limit, no more smartphoning for you!")
        }
    }
}

showStatus()
console.log()

// showStatus of specific day

function showStatusspecificDate(specificDate) {
    for(let i=0;i<activities.length;i++){
        if(activities[i].date=== specificDate){
            console.log("your activity on "+specificDate+" is"+ activities[i].activity + activities[i].duration+" minutes")
        }
    }
}

showStatusspecificDate('06-06-2019')

//most time on

function mostTime() {
    let maxTime = activities[0].duration
    let j=0
    for(let i=1;i<activities.length;i++){
        if(maxTime < activities[i].duration){
            maxTime = activities[i].duration
            j= i
        }
    }
    
    console.log("your spend most of your time on"+ activities[j].activity)
}

mostTime()