const searchBtn = document.querySelector("#searchBtn");

const addFlat = document.querySelector("#addFlat");
const addMobile = document.querySelector("#addMobile");
const addLaptop = document.querySelector("#addLaptop");
const addMicrowave = document.querySelector("#addMicrowave");
const addIpad = document.querySelector("#addIpad");

const removeFlat = document.querySelector("#removeFlat");
const removeMobile = document.querySelector("#removeMobile");
const removeLaptop = document.querySelector("#removeLaptop");
const removeMicrowave = document.querySelector("#removeMicrowave");
const removeIpad = document.querySelector("#removeIpad");

const ul = document.querySelector("ul");
const pTotal = document.querySelector("#total");

const user = "https://jsonplaceholder.typicode.com/users/1";
const pUser = document.querySelector("#user");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency() {
    let dkkUsd = [0.15];
    let result = 0;
    result = this.price * dkkUsd;
    console.log(`it is ${this.price} in dkk and ${result} in usd`);
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  searchProduct() {
    // Implement functionality here
    let searchInput = document.getElementById("searchInput").value;
    if (searchInput.trim() != 0) {
      //console.log("happy");
      const searchedItem = this.products.filter(
        product => product.name.search(searchInput) !== -1
      );
      console.log(searchedItem);
    }
  }

  getTotal() {
    // Implement functionality here
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      const price = this.products[i].price;
      total += price;
    }
    //return total;
    pTotal.innerHTML = `Total price is: ${total}`;
  }

  renderProducts() {
    // Implement functionality here
    ul.textContent = "";
    for (let i = 0; i < this.products.length; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = this.products[i].name + this.products[i].price;

      let button = document.createElement("button");
      button.innerHTML = "remove";
      button.id = "remove" + this.products[i].name;
      button.className = "remove" + this.products[i].name;
      ul.appendChild(button);
      // console.dir(button)
    }
  }

  getUser() {
    // Implement functionality here
    fetch(user)
      .then(res => res.json())
      .then(posts => {
        //console.log(posts);
        console.log(posts.company.name);
        pUser.innerHTML = `Welcome ${
          posts.company.name
        } Open Console to see the whole functionality :)`;
      })
      .catch(error => console.log(error));
  }
}

const flatscreen = new Product("flat-screen", 5000);

const mobile = new Product("mobile", 3000);
const laptop = new Product("laptop", 4500);
const microwave = new Product("microwave", 3500);
const ipad = new Product("ipad", 3500);

//add to cart
const Cart = new ShoppingCart([]);

addFlat.addEventListener("click", function() {
  let isThere = false;
  if (Cart.products.length == 0) {
    Cart.addProduct(flatscreen);
    console.log(Cart);
    flatscreen.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
    return;
  } else {
    for (i = 0; i < Cart.products.length; i++) {
      if (Cart.products[i].name === "flat-screen") {
        isThere = true;
      }
    }
  }

  if (!isThere) {
    Cart.addProduct(flatscreen);
    console.log(Cart);
    flatscreen.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
  } else {
    console.log("you already added this item");
  }
});

addMobile.addEventListener("click", function() {
  let isThere = false;
  if (Cart.products.length == 0) {
    Cart.addProduct(mobile);
    console.log(Cart);
    mobile.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
    return;
  } else {
    for (i = 0; i < Cart.products.length; i++) {
      if (Cart.products[i].name === "mobile") {
        isThere = true;
      }
    }
  }
  if (!isThere) {
    Cart.addProduct(mobile);
    console.log(Cart);
    mobile.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
  } else {
    console.log("you already added this item");
  }
});
addLaptop.addEventListener("click", function() {
  let isThere = false;
  if (Cart.products.length == 0) {
    Cart.addProduct(laptop);
    console.log(Cart);
    laptop.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
    return;
  } else {
    for (i = 0; i < Cart.products.length; i++) {
      if (Cart.products[i].name === "laptop") {
        isThere = true;
      }
    }
  }

  if (!isThere) {
    Cart.addProduct(laptop);
    console.log(Cart);
    laptop.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
  } else {
    console.log("you already added this item");
  }
});
addMicrowave.addEventListener("click", function() {
  let isThere = false;
  if (Cart.products.length == 0) {
    Cart.addProduct(microwave);
    console.log(Cart);
    microwave.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
    return;
  } else {
    for (i = 0; i < Cart.products.length; i++) {
      if (Cart.products[i].name === "microwave") {
        isThere = true;
      }
    }
  }

  if (!isThere) {
    Cart.addProduct(microwave);
    console.log(Cart);
    microwave.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
  } else {
    console.log("you already added this item");
  }
});
addIpad.addEventListener("click", function() {
  let isThere = false;
  if (Cart.products.length == 0) {
    Cart.addProduct(ipad);
    console.log(Cart);
    ipad.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
    return;
  } else {
    for (i = 0; i < Cart.products.length; i++) {
      if (Cart.products[i].name === "ipad") {
        isThere = true;
      }
    }
  }

  if (!isThere) {
    Cart.addProduct(ipad);
    console.log(Cart);
    ipad.convertToCurrency();
    Cart.renderProducts();
    Cart.getTotal();
  } else {
    console.log("you already added this item");
  }
});

//remove from cart
// removeflat-screen.addEventListener("click",function(){
//   console.log("pressses")
// })

//
removeFlat.addEventListener("click", function() {
  Cart.removeProduct(flatscreen);
  console.log(Cart);
  Cart.renderProducts();
  Cart.getTotal();
});
removeMobile.addEventListener("click", function() {
  Cart.removeProduct(mobile);
  console.log(Cart);
  Cart.renderProducts();
  Cart.getTotal();
});
removeLaptop.addEventListener("click", function() {
  Cart.removeProduct(laptop);
  console.log(Cart);
  Cart.renderProducts();
  Cart.getTotal();
});
removeMicrowave.addEventListener("click", function() {
  Cart.removeProduct(microwave);
  console.log(Cart);
  Cart.renderProducts();
  Cart.getTotal();
});
removeIpad.addEventListener("click", function() {
  Cart.removeProduct(ipad);
  console.log(Cart);
  Cart.renderProducts();
  Cart.getTotal();
});

//search
searchBtn.addEventListener("click", function() {
  Cart.searchProduct();
});

//get user
Cart.getUser();
