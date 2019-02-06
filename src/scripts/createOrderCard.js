import { getOrders,
    getProducts,
    getSizes,
    createOrder } from "./DataManager.js"

let orderHtml = () => {
    let sizes = []
    let productsArea = document.querySelector("#products")
    let sizesArea = document.querySelector("#sizes")
    getSizes().then(
        (arrayOfSizes) => {
            // 100% sure we have sizes
            console.log(arrayOfSizes)
            sizes = arrayOfSizes
        }
    ).then(
        () => {
             return getProducts()
        }
    )
    .then(
        (productArray) => {
            console.log(productArray)
            console.log(sizes)
            sizes.forEach(size => {
                sizesArea.innerHTML += `
                <option>${size.size}</option>`
            productArray.forEach(product => {
                productsArea.innerHTML += `
                <option>${product.name}</option>
                `
            })
            });
        }
    )
}


export {orderHtml}

