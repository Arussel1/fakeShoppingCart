import { useState,useEffect } from 'react';
import Logo from './assets/images/logoNoBackground.png'
import Cart from './assets/images/cart.svg'
import Circle from './assets/images/circle.svg'
import Home from './assets/components/home/Home.jsx'
import Shop from './assets/components/shop/Shop.jsx'
import Detail from './assets/components/detail/detail.jsx';
import Contact from './assets/components/contact/contact.jsx';
import CartComponent from './assets/components/cart/Cart.jsx';
import './App.css'
function App() {
  const [items,setItems] = useState([]);
  const addItems = (item) => {
    setItems([...items, item]);
  };

  useEffect(() => {
    document.querySelector('#nav').classList.add('nav');
  }, []);

  useEffect( () => {
    if(items.length <= 0){
      document.querySelector('.itemContainer').classList.add('hidden');
    }else{
      document.querySelector('.itemContainer').classList.remove('hidden');
    }
  }, [items]);

  return (
    <div>
    <div id="nav">
      <img src={Logo} alt="logo" className="logo" />
      <button className='navButton'>Home</button>
      <button className='navButton'>Shop</button>
      <button className='navButton'>Contact Us</button>
      <button id="cart" className='navButton'>
        <img src={Cart} alt="cart" className='cart' />
        <div className='itemContainer'>
          <img src={Circle} alt="itemNumber" className='item' ></img>
          <p className="itemText">{items.length}</p>
        </div>
      </button>
    </div>
    <CartComponent itemsList={items} setItemsList={setItems}></CartComponent>
    </div>
  )
}

export default App
