import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../item-counter/ItemCounter";



const Item = ({p}) => {
  const [stockSelected, setStockSelected] = useState(0);
  const  {id, name, price, description, stock , imagen} = p;

  return (
    <>
      <div className="contentProduct container" >
          <h2>Producto: {name}</h2>
        <div className="row d-flex align-items-center"> 
          <img className="imagenProducto col-md-4 col-sm-12 " src={imagen} alt={name}/>
          <h2 className="fs-4 my-2 col-md-8 col-sm-12">Descripción: {description} </h2>
          <h3>{price}</h3>
          <h3></h3>
          <h2 className="fs-5 my-2">Stock disponible: {stock}</h2>
        </div>
        <ItemCounter stock={stock} setStockSelected={setStockSelected} />
        <Link className="my-3" to={`/detail/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;
