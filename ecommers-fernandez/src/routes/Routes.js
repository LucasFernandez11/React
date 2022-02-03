import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import ItemDetail from "../components/item-detail-container/ItemDetail";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import NavBar from "../components/navBar/NavBar";
import NotFound from "../components/not-found/NotFound";


const Routes =()=> {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route path="/" element={<ItemListContainer/>}/>        
        <Route path="/category" element={<ItemListContainer/>}/>      
        <Route path="/detail" element={<ItemDetail/>}/>  
        <Route path="/*" element={<NotFound/>}/>  
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;