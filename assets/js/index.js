import {
    getProducts,
    getProductsDetail
} from './function.js'

const params = new URLSearchParams(window.location.search)
const prodID = params.get("prodID")

if(prodID){
    await getProductsDetail(prodID)
}else{
    console.log("failed")
}

await getProducts()