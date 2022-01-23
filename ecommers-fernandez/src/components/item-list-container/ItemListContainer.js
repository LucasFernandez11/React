import { useState } from "react";
import Item from "../item/Item";


const items = [
    {id:"1", name:"iphone X", price:'$150000' },
    {id:"2", name:"galaxy Z", price:'$120000' },
    {id:"3", name:"Redm Note 10", price:'$135000' },
    {id:"4", name:"iphone 11", price:'$200000' },
    
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem ] = useState(null)
  
  return (
    <div>
      <h2>lista de productos</h2>
      <h3>producto seleccionado</h3>
      <p>{selectedItem ? selectedItem.name : "ningun producto"}</p>
      <p>{selectedItem ? selectedItem.price : "ningun producto"}</p>
      <hr/>
      {items.map(({id, name, price})=> (
        <Item 
           key={id} 
           id={id}
           name={name} 
           price={price} 
           setSelectedItem={setSelectedItem} />

      ))}
    </div>
  );
};

export default ItemListContainer
