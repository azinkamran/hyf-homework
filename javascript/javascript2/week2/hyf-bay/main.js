console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  products.forEach(product => {
    const li = document.createElement("li");

    const shipsToHTML = product.shipsTo.reduce(
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li class="name">${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

//Azin

//clear ul
function clearUl() {
  const eachli = document.querySelector("section.products ul");
  while (eachli.firstChild) {
    eachli.removeChild(eachli.firstChild);
  }
}

// Filter products

const searchInput = document.querySelector("input");
searchInput.addEventListener("keyup", inputChange);

function inputChange() {
  const searchingText = searchInput.value.toLowerCase().trim();
  // console.log(searchingText)

  if (!searchingText) {
    renderProducts(products);
  }
  //console.log(products)

  const matchedProducts = products.filter(product =>
    product.name.toLowerCase().startsWith(searchingText)
  );
  //console.log(matchedProducts)

  clearUl();
  renderProducts(matchedProducts);
  console.log(matchedProducts);
}

//sort
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const sortSelectee = document.querySelector("div.sort select");
sortSelectee.addEventListener("change", sortBy);

function sortBy() {
  //console.log("jsjdjdjjdj")
  if (sortSelectee.value === "cheap") {
    //console.log("cheap")
    products.sort(dynamicSort("price"));
    //console.log(products)
    clearUl();
    renderProducts(products);
  }
  if (sortSelectee.value === "expensive") {
    // console.log("expensive")
    products.sort(dynamicSort("price"));
    products.reverse();
    // console.log(products)
    clearUl();
    renderProducts(products);
  }
  if (sortSelectee.value === "name") {
    //console.log("name")
    products.sort(dynamicSort("name"));
    //  console.log(products)
    clearUl();
    renderProducts(products);
  }
}

// filter countries
const countrySelected = document.querySelector(" div.country select");
countrySelected.addEventListener("change", fliterCountries);

function fliterCountries() {
  if (countrySelected.value === "denmark") {
    // console.log("denmark")
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Denmark")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
  }
  if (countrySelected.value === "sweden") {
    //console.log("sweden");
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Sweden")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
   
  }
  if (countrySelected.value === "norway") {
    // console.log("norway")
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Norway")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
  }
  if (countrySelected.value === "germany") {
    // console.log("germany")
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Norway")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
  }
  if (countrySelected.value === "iceland") {
    // console.log("iceland")
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Iceland")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
  }
  if (countrySelected.value === "england") {
    // console.log("england")
    clearUl();
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("England")
    );
   // console.log(matchCountry);
    renderProducts(matchCountry)
  }
}
