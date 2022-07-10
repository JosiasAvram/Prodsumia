import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './Components/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/products' element={<ItemListContainer />} />
          <Route path = '/item/:itemId' element = {<ItemDetailsContainer />} />
          <Route path = '/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
