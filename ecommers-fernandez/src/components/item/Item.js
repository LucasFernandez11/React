const Item = ({name, price, id, setSelectedItem}) => {
  const selecItem = ()=>  setSelectedItem({id, name, price});

  return (
    <div>
      <h2>nombre del producto: {name}</h2>
      <h2>Precio del producto: ${price}</h2>
      <button onClick={selecItem}>Seleccionar Producto</button>
      <hr/>
    </div>
  )
}

export default Item
