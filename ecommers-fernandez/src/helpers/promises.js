import { products } from "../data/products";


export const task = new Promise((resolve, reject) => {
  resolve(true);
  // reject("Message Error from Reject");
});

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(products);
  }, 2000);
});