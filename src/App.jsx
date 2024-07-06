import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from './assets/images/logoNoBackground.png'
import Cart from './assets/images/cart.svg'
import Circle from './assets/images/circle.svg'
import Error from './components/error/error.jsx';
import Home from './components/home/Home.jsx'
import Shop from './components/shop/Shop.jsx'
import Detail from './components/detail/detail.jsx';
import Contact from './components/contact/contact.jsx';
import CartComponent from './components/cart/Cart.jsx';
import './App.css'
const App = () => {
  const navigateTo = useNavigate();
  const [items,setItems] = useState([]);
  const addItems = (item) => {
    const duplicate = items.find(element => element.id === item.id)
    if(!duplicate){
      setItems([...items, item]);
    } else {
      setItems(items.map(element =>
        element.id === item.id ? { ...element, counter: element.counter + item.counter } : element
      ));
    }
  };

  const handleHomeClick = () =>{
    navigateTo("/");
  }
  
  const handleShopClick = () =>{
    navigateTo("/shop");
  }

  const handleContactClick = () =>{
    navigateTo("/contact");
  }

  const handleCartClick = () =>{
    navigateTo("/cart");
  }

  return (
    <div>
    <div id="nav" className='nav'>
      <img src={Logo} alt="logo" className="logo" />
      <button className='navButton' onClick={handleHomeClick}>Home</button>
      <button className='navButton' onClick={handleShopClick}>Shop</button>
      <button className='navButton' onClick={handleContactClick}>Contact Us</button>
      <button id="cart" className='navButton' onClick={handleCartClick}>
        <img src={Cart} alt="cart" className='cart' />
        <div className={`itemContainer ${items.length <= 0 ? 'hidden' : ''}`}>
          <img src={Circle} alt="itemNumber" className='item' ></img>
          <p className="itemText">{items.length}</p>
        </div>
      </button>
    </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/detail" element={<Detail addItems={addItems}/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<CartComponent itemsList={items} setItemsList={setItems} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
