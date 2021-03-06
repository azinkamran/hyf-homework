console.log('Script loaded');

console.log(getAvailableProducts());


//Azin from here

function renderProducts(products){
    const productUl = document.querySelector("section.products > ul");
    for(const item of products){
        const li = document.createElement("li")
        li.innerHTML = "Item Name: " + item.name  
        productUl.appendChild(li)

        const liPrice = document.createElement("li")
        liPrice.innerHTML =  " Price: " + item.price
        productUl.appendChild(liPrice)

        const liRating = document.createElement("li")
        liRating.innerHTML = " Rating: " + item.rating 
        productUl.appendChild(liRating)

        const liShipsTo = document.createElement("li")
        liShipsTo.innerHTML =  "Ships to: " + item.shipsTo
        productUl.appendChild(liShipsTo)
    }
}




const testProductNames1 = [{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},{
    id: 23771824,
    name: 'Mobile phone',
    price: 4200,
    rating: 4.3,
    shipsTo: [ 'denmark', 'germany'],
},{
    id: 23771825,
    name: 'Wallet',
    price: 500,
    rating: 3.9,
    shipsTo: [ 'denmark', 'germany'],
}];
//const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];

renderProducts(testProductNames1); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text


const products = getAvailableProducts();
console.log(products) // logs out


function getAvailableProducts(){
    
}
