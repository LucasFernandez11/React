import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";



const ItemListContainer = () => {
  const { idCategory } = useParams();
  const { products, loading } = useProducts();
  

  const filterProducts = idCategory ? products.filter(({ category }) => category === idCategory) : products
  // console.log(products)
  


  return (
   
    <div>
      <h1> Catalogo Completo</h1>
      <hr />
      {
       !loading ?<ItemList products={filterProducts}/> : <LinearProgress />
      } 
    </div>
   
  );
};

export default ItemListContainer;

