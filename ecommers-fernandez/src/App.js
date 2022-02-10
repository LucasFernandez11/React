
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from '../src/routes/Routes';
import ResizeComponent from './components/resize-component/ResizeComponent';
import { useEffect, useState } from 'react';



function App() {
  const [dimension, setdimension] = useState({height: window.innerHeight , width: window.innerWidth})

  useEffect(() => {
   console.log({height: window.innerHeight , width: window.innerWidth})
  
   },[])
  
  
  return (
    <div className="App">   
    <CartProvide>
    <ResizeComponent/>
        <Routes/>   

    </CartProvide>
           

    </div>
  );
}

export default App;
