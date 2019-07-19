const displayPost = document.querySelector("#post");
const showBtn = document.getElementById("btnShow");

function getRandomPost() {
  let randomNumber = Math.floor(Math.random() * 100);
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      //console.log(posts)
      console.log(posts[randomNumber].body);
      displayPost.textContent = posts[randomNumber].body;
      btnShow.innerHTML = "Show an other Post";
    })
    .catch(error => console.log(error));
}

function yesNo(){
  fetch("https://yesno.wtf/api")
  .then(response => response.json())
  .then(json => {
    //console.log(json)
      const img = document.querySelector("#image");
      const display = document.querySelector("h1");
       display.textContent = json.answer.toUpperCase();
      img.src = json["image"];
  });
}

getRandomPost();

function loadingtime() {
  btnShow.innerHTML = "Loading...";
}

function changePost() {
  setTimeout(() => {
    getRandomPost();
  }, 3000);
}

showBtn.addEventListener("click", function() {
  loadingtime();
  Promise.all ([changePost (), yesNo ()]);
  // //changePost();
  // yesNo()
});
