
let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const shortestWord = document.querySelector("ul");

for(const word of danishWords){
    const li= document.createElement("li")
    li.innerHTML = word;
    shortestWord.appendChild(li);
}

const myBtn = document.querySelector("button.myBtn")

myBtn.addEventListener("click",clicked)

function findTheshortest(){
    let temp = danishWords[0]
    for(const word of danishWords){
        if(word.length< temp.length){
            temp=word
        }
    }
    return temp
}

function clicked(){
    const showParagraph = document.querySelector("div");
    const p=document.createElement("p");
    p.innerHTML = findTheshortest();
    showParagraph.appendChild(p);

}

