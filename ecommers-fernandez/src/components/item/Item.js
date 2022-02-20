import { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCounter from "../item-counter/itemCounter";



const Item = ({p}) => {
  const [stockSelected, setStockSelected] = useState(0);
  const  {id, name, price, description, stock , imagen} = p;

  

  return (  
    <>
      <CardGroup className="mx-auto">
          <Card className="my-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imagen} alt={name} />
              <Card.Body>
                <Card.Title>Producto: {name}</Card.Title>
                <Card.Text>
                  {/* Descripción: {description}  */}
                </Card.Text>
                <Link to={`/detail/${id}`}>Seleccionar producto</Link>
              </Card.Body>
          </Card>
      </CardGroup>
     
    </>
  );
};

export default Item;
