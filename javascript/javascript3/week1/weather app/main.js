function loadWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=c420894612ad7c234717b982d7a3994c&units=metric"
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const h1 = document.querySelector("#city");
      h1.textContent = "Your current city is:  " + json["name"];

      const p = document.querySelector("#description");
      p.textContent = "currnet weather is: " + json["weather"][0].description;

      const p2 = document.querySelector("#temp");
      p2.textContent = "current tempreture is: " + json["main"].temp;
    });
}

document.getElementById("currnet").addEventListener("click", loadWeather);

function inputWeather() {
  const input = document.querySelector("#insertedCity");
  console.log(input.value.toLowerCase());
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?appid=c420894612ad7c234717b982d7a3994c&units=metric&q=" +
      input.value.toLowerCase()
  )
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      const h1s = document.querySelector("#searchedCity");
      h1s.textContent =  json["name"];

      const ps = document.querySelector("#searchedDescription");
      ps.textContent = "currnet weather is: " + json["weather"][0].description;

      const ps2 = document.querySelector("#searchedTemp");
      ps2.textContent = "current tempreture is: " + json["main"].temp;
    });
}

document.getElementById("show").addEventListener("click", inputWeather);
