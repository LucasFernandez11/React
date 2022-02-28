
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { CartContext } from "../../context/CartContext";
import ItemCounter from "../item-counter/itemCounter";
import { Button, Card, CardGroup } from "react-bootstrap";


const ItemDetail = ()=> {  
  const {products} = useProducts();
  const {idDetail} = useParams();
  const [stockSelected, setStockSelected] = useState(0);
  const  { stock } = products;
  const [selectedItem, setSelectedItem] = useState(null);
  const { addItem } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(0);
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0)
 
  const onAdd = (counter) => {
    addItem(selectedItem,counter);
    setCount(counter)
    //agregando producto
    // console.log(selectedItem.id, selectedItem.name)
  }    
  
  useEffect(() => {
    if (products.length > 0){
      const selectedProduct = products.find((product)=> product.id === parseInt(idDetail));
      setSelectedItem(selectedProduct);
    };  
    
  }, [products]);
  // console.log(selectedItem)  

  return <div className="container contentProduct d-flex align-items-center w-50">
    <h2>Detalle del producto</h2>   
         <CardGroup className="mx-auto container bg-transparent w-100 ">
              <Card className="my-3" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={selectedItem && selectedItem.imagen} alt="selectedItemImage" />
                  <Card.Body>
                    <Card.Title>Producto: {selectedItem && selectedItem.name}</Card.Title>
                    <Card.Text>
                    <p>
                        Descripción: {selectedItem && selectedItem.descripcion} 
                      </p>
                      <p>
                        Cantidad disponible: {selectedItem && selectedItem.stock} 
                        </p>
                    </Card.Text>
                    {   count === 0 ?                 
                        <ItemCounter stock={selectedItem && selectedItem.stock}  setStockSelected={setStockSelected} onAdd={onAdd}/>
                        :
                      <Button className="mx-2 mt-3" variant="outline-success" size="lg"><Link className="my-3 text-decoration-none" to={`/cart/`}>Ir al carrito</Link></Button>
                    }
                  </Card.Body>
              </Card>
          </CardGroup>
          
            
             <Link className="mb-5" to='/'><Button variant="outline-danger" size="lg">Volver al listado</Button></Link> 
    </div>
};

export default ItemDetail;


