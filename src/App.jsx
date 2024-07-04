import { useState,useEffect } from 'react';
import Logo from './assets/images/logoNoBackground.png'
import Cart from './assets/images/cart.svg'
import Home from './assets/components/home/Home.jsx'
import Shop from './assets/components/shop/Shop.jsx'
import './App.css'
function App() {
  const [items,getItems] = useState(0);
  useEffect(() => {
    document.querySelector('#nav').classList.add('nav');
  }, []);

  return (
    <div id='container'>
    <div id="nav">
      <img src={Logo} alt="logo" className="logo" />
      <button className='navButton'>Home</button>
      <button className='navButton'>Shop</button>
      <button className='navButton'>Contact Us</button>
      <button id="cart" className='navButton'>
        <img src={Cart} alt="cart" />
      </button>
    </div>
    <Shop></Shop>
    </div>
  )
}

export default App
