const functionalComponent = ({name, price, model}) => {
  return (
    <div>
       <h1>Productos</h1>
        <h2>Categotia: {name} </h2>
        <h2>Modelo: {model}</h2>
        <h2>Precio: ${price}</h2>
    </div>
  )
}

export default functionalComponent
