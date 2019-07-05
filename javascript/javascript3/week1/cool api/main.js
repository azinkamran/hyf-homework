function loadAnswer(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => {console.log(json)
        const img = document.querySelector("#image");
        img.src = json["message"];
    });
}
loadAnswer();
document.getElementById("btnReload").addEventListener("click", loadAnswer);