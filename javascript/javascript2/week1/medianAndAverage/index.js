const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
const hPrices = document.querySelector("ul")
for( const price of housePrices){
    const li=document.createElement("li")
    li.innerHTML= price
    hPrices.appendChild(li)
}

function average(){
    let avg=0
    for(let i=0;i<housePrices.length;i++){
        avg += housePrices[i]
    }
    avg = avg / housePrices.length
    return avg.toFixed(2)
}

const myBtn = document.querySelector("button.myBtn")
myBtn.addEventListener("click",clicked)

function clicked(){
    const showAvg = document.querySelector("div.avg")
    const p = document.createElement("p")
    p.innerHTML = average()
    showAvg.appendChild(p)
}


function median(){
    let sortArray = housePrices.sort(function(a, b){return a - b})
    if(sortArray.length % 2 === 0){
        return( (sortArray[(sortArray.length)/2 -1] + sortArray[(sortArray.length)/2]) / 2 )
    }else{
        return(sortArray[(sortArray.length-1)/2] )
    }  
}

const myBtn1 = document.querySelector("button.myBtn1")
myBtn1.addEventListener("click",click1)

function click1(){
    
    const showMed = document.querySelector("div.med")
    const p= document.createElement("p")
    p.innerHTML = median()
    showMed.appendChild(p)
}

