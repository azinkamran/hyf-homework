let p;
function call(resolveAfter) {
  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am called asynchronously");
      reject("error");
    }, resolveAfter);
  });
}

call(3000);
p.then(console.log);
p.catch(console.log);

call(6000);
p.then(console.log);
p.catch(console.log);
