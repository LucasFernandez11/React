import { LinearProgress } from "@material-ui/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";


const ItemListContainer = () => {
  const { idCategory } = useParams();
  const { products, loading } = useProducts();
  const { items } = useContext(CartContext);

  const filterProducts = idCategory ? products.filter(({ category }) => category === idCategory) : products
  console.log(products)
  


  return (
    <>
    <div>
      <h1> Catalogo Completo</h1>
      <hr />
      {
       !loading ?<ItemList products={filterProducts}/> : <LinearProgress />
      } 
    </div>
    </>
  );
};

export default ItemListContainer;

