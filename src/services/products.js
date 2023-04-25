import { fetchAndParse } from "./utils";

export function getProducts() {
    return fetchAndParse("https://fakestoreapi.com/products");
}

export function getProduct(){
    return fetchAndParse("https://fakestoreapi.com/products/${id}")
}