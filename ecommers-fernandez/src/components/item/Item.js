import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../item-counter/ItemCounter";



const Item = ({ id, name, price, description, stock, setSelectedItem, imagen}) => {
  const [stockSelected, setStockSelected] = useState(0);
 

  return (
    <>
      <div className="contentProduct container" >
          <h2>Producto: {name}</h2>
        <div className="row d-flex align-items-center"> 
          <div className="imagenProducto col-md-4 ">{imagen}</div>
          <h2 className="fs-4 my-2 col-md-8">Descripción: {description} </h2>
          <h3>{price}</h3>
          <h3></h3>
          <h2 className="fs-5 my-2">Stock disponible: {stock}</h2>
        </div>
        <ItemCounter stock={stock} setStockSelected={setStockSelected} />
        <Link className="my-3" to={`/item/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;
