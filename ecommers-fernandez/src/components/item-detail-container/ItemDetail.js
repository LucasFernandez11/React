
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { CartContext } from "../../context/CartContext";
import ItemCounter from "../item-counter/ItemCounter";


const ItemDetail = ()=> {  
  const {products} = useProducts();
  const {idDetail} = useParams();
  const [stockSelected, setStockSelected] = useState(0);
  const  { stock, id, name } = products;
  const [selectedItem, setSelectedItem] = useState(null);
  const { addItem } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(0);
  const [userName, setUserName] = useState("");

  const onAdd = (counter) => {
    addItem({
      ...selectedItem,
      cantidad:counter
    });
    //agregando producto
    console.log(selectedItem.id, selectedItem.name)
  }  
  
  
  useEffect(() => {
    if (products.length > 0){
      const selectedProduct = products.find((product)=> product.id === idDetail);
      setSelectedItem(selectedProduct);
    };  
    
  }, [products]);
  // console.log(selectedItem)

  

  

  return (
    <div className="container contentProduct d-flex align-items-center">
      <h3>Producto seleccionado</h3>
      <div className="imagenProducto col-md-4 ">{selectedItem && selectedItem.imagen && (
        <img src={selectedItem.imagen} alt="selectedItemImage" />
      )}</div>
      <div className="col-md-8">
      <li className="itemListProducts">{selectedItem && selectedItem.name}</li>
      <li className="itemListProducts">{selectedItem && selectedItem.description}</li>     
      <li className="itemListProducts">Cantidad seleccionada: </li>
      </div>       
      <ItemCounter stock={stock} setStockSelected={setStockSelected} onAdd={onAdd}/>
      <Link className="my-3" to={`/cart/`}>Terminar compra</Link>
      
      
      
      
    </div>
  
  )
  

 
  
};

export default ItemDetail;


