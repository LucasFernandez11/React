import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Cart from "../components/cart/Cart";
import ItemDetail from "../components/item-detail-container/ItemDetail";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import NavBar from "../components/navBar/NavBar";
import NotFound from "../components/not-found/NotFound";


const Routes =()=> {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" element={<ItemListContainer/>}/>        
        <Route exact path="/cart" element={<Cart/>}/>        
        <Route exact path="/category/:idCategory" element={<ItemListContainer/>}/>      
        <Route exact path="/detail/:idDetail" element={<ItemDetail/>}/>  
        <Route exact path="/*" element={<NotFound/>}/>  
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;