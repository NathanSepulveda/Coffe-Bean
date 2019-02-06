import { createOrder } from "./CreateOrder.js"

/*
    Use the `as` keyword to alias a function
    name from another module to use in this module
    when there is a naming conflict
*/
import { createOrder as postOrder } from "./DataManager.js"


const buyButton = document.querySelector("#placeOrder")

buyButton.addEventListener("click", () => {
    // Collect user input
    const name;
    const quantity;
    const productId;
    const sizeId;

    // Build order object from input
    const newOrderObject = createOrder(name, quantity, productId, sizeId)

    // POST to API (x)
    postOrder(newOrderObject)

    // Build new card from current order

    // Append new card to DOM
})