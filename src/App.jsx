import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer 
      proximamente = 'Proximamente, aquí estara el catalogo de la tienda'
    />
    </>
  );
}

export default App;
