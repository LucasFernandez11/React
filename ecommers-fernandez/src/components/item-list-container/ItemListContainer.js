import { LinearProgress } from "@material-ui/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { idCategory } = useParams();
  const { products, loading } = useProducts();
  const { items } = useContext(CartContext);

  const filterProducts = idCategory ? products.filter(({ category }) => category === idCategory) : products
  
  


  return (
    <>
    <div>
      <h1> lista de productos</h1>
      <hr />
      {
       !loading ?<ItemList products={filterProducts}/> : <LinearProgress />
      } 
    </div>
    </>
  );
};

export default ItemListContainer;

