
import './App.css';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FunctionalComponent from './components/function-component/FunctionalComponent';
import ItemListContainer from './components/item-list-container/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <hr />          
        {/* <FunctionalComponent name="celular" model="samsung note" price={  25000}/> */}
        <hr /> 
        <ItemListContainer/>
    </div>
  );
}

export default App;
