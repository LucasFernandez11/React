import { CardGroup } from "react-bootstrap";
import Item from "../item/Item";

const ItemList = ({products}) => {
  return (
    <CardGroup >
    
        {products?.map(p => <Item key={p.id} p={p}/>)}   
        
      
    </CardGroup>
  )
}

export default ItemList
