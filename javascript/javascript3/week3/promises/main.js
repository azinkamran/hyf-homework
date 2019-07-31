const ul = document.querySelector("ul");

const showBtn = document.getElementById("btnShow");

const benjamin="https://api.github.com/search/repositories?q=user:benna100"
const Azin="https://api.github.com/search/repositories?q=user:azinkamran"
const Fatemeh="https://api.github.com/search/repositories?q=user:Fatemeh-Pakpour"

function fetchAddress(adr){
  fetch(adr)
  .then(res => res.json())
  .then(posts => {
    // console.log(posts)
    console.log(posts.items[0].owner.login);
    
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = posts.items[0].owner.login + "'s repositories";
    const li2 = document.createElement("li");
    ul.appendChild(li2);
    li2.innerHTML = " URL: " + posts.items[0].owner.url;
  })
  .catch(error => console.log(error));
}


showBtn.addEventListener("click", function() {
  Promise.all([fetchAddress(benjamin), fetchAddress(Azin), fetchAddress(Fatemeh)]);
});
