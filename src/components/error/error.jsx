import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from'./error.module.css';

const Error = () => {
  const navigateTo = useNavigate();
  
  const handleShopClick = () =>{
    navigateTo("/shop");
  };

  return (
    <div className={classes.error}>
      <h1>Select an item first from shop </h1>
      <button onClick={handleShopClick}>Go to Shop</button>
    </div>
  );
};

export default Error;