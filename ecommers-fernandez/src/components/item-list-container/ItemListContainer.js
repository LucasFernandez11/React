import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("termina el consumo de api");
    }
  };

  if (loading) {
    return <h1>Espere, cargando...</h1>;
  }

  return (
    <div>
      <h3>Producto seleccionado</h3>
      <ul>
      <li className="itemListProducts">{selectedItem && selectedItem.name}</li>
      <li className="itemListProducts">{selectedItem && selectedItem.description}</li>     
      <li className="itemListProducts">Cantidad seleccionada: {selectedItem && selectedItem.stock}</li>
      </ul>
      <hr />      
      {products.map((product) => (
        <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
};

export default ItemListContainer;

