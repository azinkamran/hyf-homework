let p;
let p2;
function RewriteTime(time) {
  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("called");
      reject("error");
    }, time);
  });
}

RewriteTime(1000);
p.then(console.log);
p.catch(console.log);

//location

function getLocation() {
  p2 = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(
          "Latitude: " +
            position.coords.latitude +
            ", Longitude: " +
            position.coords.longitude
        );
      },
      error => {
        reject(error);
      }
    );
  });
}

getLocation();
p2.then(console.log);
p2.catch(console.log);
