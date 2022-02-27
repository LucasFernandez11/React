import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/config";


const useProducts = () => {
    const [products, setProducts] = useState([]);

    const [loading , setLoading] =  useState(true);

    useEffect(()=> {

        getProducts()
        .then(()=>setLoading(false))
    }, []);

    const getProducts = async ()=> {

        try {
            const catalogo = []
           const result = await getDocs(
               collection(db, 'Productos')            
           )
           result.forEach((doc) => {
               catalogo.push(doc.data())
            //    console.log(doc.data())
            // console.log(`${doc.id} => ${doc.data()}`);
          }); 
        //   console.log(catalogo)
           setProducts(catalogo)
                     
        } catch (error) {
            console.log(error)
            
        }
    };

    return {
        products,
        loading
    };

};

export default useProducts;