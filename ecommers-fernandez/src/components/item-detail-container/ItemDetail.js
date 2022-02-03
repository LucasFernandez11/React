
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";


const ItemDetail = ()=> {
  const {products} = useProducts();
  const {id} = useParams()

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0){
      const selectedProduct = products.find((product)=> product.id === id);
      setSelectedItem(selectedProduct);
    };  
    
  }, [products]);

  return (
    <div>
      <h3>Producto seleccionado</h3>
      <ul>
      <div className="imagenProducto col-md-4 ">{selectedItem && selectedItem.imagen && (
        <img src={selectedItem.imagen} alt="selectedItemImage" />
      )}</div>
      <li className="itemListProducts">{selectedItem && selectedItem.name}</li>
      <li className="itemListProducts">{selectedItem && selectedItem.description}</li>     
      <li className="itemListProducts">Cantidad seleccionada: {selectedItem && selectedItem.stock}</li>
      </ul>      
    </div>
  )
  

 
  
}

export default ItemDetail;


