import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <h1 className = 'text-3xl font-bold mt-5 ml-5 text-center'>Catálago de Productos</h1>
    <ItemListContainer />
    </>
  );
}

export default App;
