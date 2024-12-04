import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product"
                     data-cost="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}
 document.addEventListener(
    "click",
    (clickEvent)=>{
        const prodClicked=clickEvent.target
        const cost=prodClicked.dataset.cost
        if (prodClicked.dataset.type === "product")
            window.alert(`${prodClicked.innerText} costs \n${cost}$`)

    }

 )
