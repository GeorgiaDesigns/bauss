import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import Products from './components/products';
import MainSection from './components/main';
import Header from './components/header';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); 
    
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddtoCart = async (productId, qty) => {
    const { cart } = await commerce.cart.add(productId, qty);
    setCart(cart);
  }
  const handleUpdateCartQty = async (productId, qty) => {
    const { cart } = await commerce.cart.update(productId, qty);
    setCart(cart);
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }
  

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div className="App">
      <Header cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
      <MainSection/>
      <Products products={products} onAddToCart={handleAddtoCart}/>
    </div>
  );
}

export default App;
