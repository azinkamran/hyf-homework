console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  productsUl.innerHTML = "";
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
// function clearUl() {
//   const eachli = document.querySelector("section.products ul");
//   while (eachli.firstChild) {
//     eachli.removeChild(eachli.firstChild);
//   }
// }

// Filter products

const searchInput = document.querySelector("input");
searchInput.addEventListener("keyup", inputChange);

function inputChange() {
  const searchingText = searchInput.value.toLowerCase().trim();

  if (!searchingText) {
    renderProducts(products);
  }

  const matchedProducts = products.filter(product =>
    product.name.toLowerCase().startsWith(searchingText)
  );

  renderProducts(matchedProducts);
  console.log(matchedProducts);
}

//sort
function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const sortSelectee = document.querySelector("div.sort select");
sortSelectee.addEventListener("change", sortBy);

function sortBy() {
  if (sortSelectee.value === "cheap") {
    products.sort(dynamicSort("price"));

    renderProducts(products);
  }
  if (sortSelectee.value === "expensive") {
    
    products.sort(dynamicSort("price"));
    products.reverse();

    renderProducts(products);
  }
  if (sortSelectee.value === "name") {
    products.sort(dynamicSort("name"));

    renderProducts(products);
  }
}

// filter countries
//
const countrySelected = document.querySelector(" div.country select");
countrySelected.addEventListener("change", fliterCountries);

function fliterCountries() {
  if (countrySelected.value === "denmark") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Denmark")
    );

    renderProducts(matchCountry);
  }
  if (countrySelected.value === "sweden") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Sweden")
    );

    renderProducts(matchCountry);
  }
  if (countrySelected.value === "norway") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Norway")
    );

    renderProducts(matchCountry);
  }
  if (countrySelected.value === "germany") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Germany")
    );

    renderProducts(matchCountry);
  }
  if (countrySelected.value === "iceland") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("Iceland")
    );

    renderProducts(matchCountry);
  }
  if (countrySelected.value === "england") {
    const matchCountry = products.filter(product =>
      product.shipsTo.includes("England")
    );

    renderProducts(matchCountry);
  }
}
