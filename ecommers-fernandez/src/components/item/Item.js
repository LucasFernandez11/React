import { useState } from "react";
import ItemCounter from "../item-counter/itemCounter";


const Item = ({ id, name, description, stock, setSelectedItem, imagen}) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, description, stock: sotckSelected, imagen });

  return (
    <>
      <div className="contentProduct container" >
          <h2>Producto: {name}</h2>
        <div className="row d-flex align-items-center"> 
        <div className="imagenProducto col-md-4 ">{imagen}</div>
        <h2 className="fs-4 my-2 col-md-8">Descripción: {description}</h2>
        <h2 className="fs-5 my-2">Stock disponible: {stock}</h2>
        </div>
        <ItemCounter stock={stock} setSotckSelected={setSotckSelected} />
        <button className=" my-3"  onClick={selectItem}>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;
