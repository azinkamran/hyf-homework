const displayBenjamin = document.querySelector("#benjamin");
const displayAzin = document.querySelector("#Azin");
const displayFatemeh = document.querySelector("#Fatemeh");

const showBtn = document.getElementById("btnShow");

function getApiBenjamin() {
  fetch("https://api.github.com/search/repositories?q=user:benna100")
    .then(res => res.json())
    .then(posts => {
      // console.log(posts)
      console.log(posts.items[0].owner.login);
      displayBenjamin.textContent =
        posts.items[0].owner.login +
        "'s repositories" +
        " URL: " +
        posts.items[0].owner.url;
    })
    .catch(error => console.log(error));
}

function getApiAzin() {
  fetch("https://api.github.com/search/repositories?q=user:azinkamran")
    .then(res => res.json())
    .then(posts => {
      console.log(posts);
      console.log(posts.items[0].owner.login);
      displayAzin.textContent =
        posts.items[0].owner.login +
        "'s repositories" +
        " URL: " +
        posts.items[0].owner.url;
    })
    .catch(error => console.log(error));
}

function getApiFatemeh() {
  fetch("https://api.github.com/search/repositories?q=user:Fatemeh-Pakpour")
    .then(res => res.json())
    .then(posts => {
      // console.log(posts)
      console.log(posts.items[0].owner.login);
      displayFatemeh.textContent =
        posts.items[0].owner.login +
        "'s repositories" +
        " URL: " +
        posts.items[0].owner.url;
    })
    .catch(error => console.log(error));
}

// getApiBenjamin()
// getApiAzin()
// getApiFatemeh()

showBtn.addEventListener("click", function() {
  Promise.all([getApiBenjamin(), getApiAzin(), getApiFatemeh()]);
});
