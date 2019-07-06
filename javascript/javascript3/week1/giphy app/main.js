const ul = document.querySelector("ul");

function showGiphy() {
  ul.textContent = "";
  const input = document.querySelector("#inputgify");
  console.log(input.value.toLowerCase());
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=atQzizm1amhi6MEkw1XO9GIMoxfbCfNp&q=" +
      input.value.toLowerCase() +
      "&"
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);

      const inputNumber = document.querySelector("#howMany");

      if ((inputNumber.value >= 1) & (inputNumber.value <= 25)) {
        for (let i = 0; i < inputNumber.value; i++) {
          const li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = '<img src="' + json.data[i].images.original.url + '">';
        }
      } else {
        for (let i = 0; i < 25; i++) {
          const li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = '<img src="' + json.data[i].images.original.url + '">';
        }
      }
    });
}

document.getElementById("search").addEventListener("click", showGiphy);
