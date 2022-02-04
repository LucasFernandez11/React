import Item from "../item/Item";

const ItemList = ({products}) => {
  return (
    <div>
        {products?.map(p => <Item key={p.id} p={p}/>)}
        
      
    </div>
  )
}

export default ItemList
