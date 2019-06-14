const sprit=["The fullmoon wolf","crying butterfly ","flying tiger","happy pink panther","lazy ponda","cute grafe","brave lion"]


const myBtn = document.querySelector("button.myBtn")
myBtn.addEventListener("click",clicked)

function clicked(){
    const showAvg = document.querySelector("div.animal")
    const p = document.createElement("p")
    let inputName = document.getElementById("myName").value 
    if(inputName.trim() !=0){
        p.innerHTML =inputName + " - " + sprit[Math.floor (Math.random() * sprit.length)];
        showAvg.appendChild(p)
    }
    
}

const myBtn1 = document.querySelector("button.myBtn1")
myBtn1.addEventListener("click",addClick)

function addClick(){
    const SpiritAnimal = document.querySelector("div.newSpiritAnimal")
    const p = document.createElement("p")
    if( (document.getElementById("mySpirit").value.trim())!=0){
        sprit[sprit.length]= document.getElementById("mySpirit").value 
        p.innerHTML =sprit
        SpiritAnimal.appendChild(p)
    }
    
}