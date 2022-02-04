import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { idCategory } = useParams();
  const { products, loading } = useProducts();

  const filterProducts = idCategory ? products.filter(({ category }) => category === idCategory) : products
  
  


  return (
    <>
    <div>
      <h1>Lista de productos</h1>
      <hr />
      {
        !loading ? <ItemList products={filterProducts}/> : <h1>cargando...</h1>
      }
      

     
    </div>
    </>
  );
};

export default ItemListContainer;

