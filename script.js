//Adding item selected to the cart
//Deleting item selected to  the cart
//Updating the total price each time an item is added or removed from the cart

//Selectors
const cart = document.querySelector(".cart");
const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelector(".product-price");

const addBtn = document.querySelectorAll(".add");
addBtn.forEach(button => {
    button.addEventListener("click", addToCart);
})

//Add to cart
function addToCart(e) {
    e.preventDefault();
    //Create DIV
    const item = document.createElement("div");
    item.classList.add("item");
    //Add name
    const name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = e.target.parentNode.querySelector(".product-name").innerText;
    item.appendChild(name);
    //Add price
    const price = document.createElement("h2");
    price.classList.add("product-price");
    price.innerText = e.target.parentNode.querySelector(".product-price").innerText;
    item.appendChild(price);
    //Remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.innerText = "Remove from cart";
    item.appendChild(removeBtn);
    cart.appendChild(item);
}

