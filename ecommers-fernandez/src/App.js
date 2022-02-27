import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from '../src/routes/Routes';
import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';



function App() {
  

  useEffect(() => {  
   },[])
  
  
  return (
    <div className="App">   
    <CartProvider>
    {/* <ResizeComponent/> */}
        <Routes/>   

    </CartProvider>
           

    </div>
  );
}

export default App;
