import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getProducts();
    }, []);
    const getProducts = async ()=> {
        try {
            const resault = await productsAPI
        } catch (error) {
            console.log({error});
            
        }finally {
            console.log("termina el consumo de productsApi");
        }
    };

    return {
        products,
    };

};

export default useProducts;