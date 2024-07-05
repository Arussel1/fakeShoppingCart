import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Plus from './../../images/plus.svg'
import Minus from './../../images/minus.svg'
import classes from './detail.module.css'

const Detail = ({ addItems }) => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const { id, image, title, price, description } = location.state;
    const [counter, setCounter] = useState(1);
    const handleInputChange = (e) =>{
        if(Number(e.target.value) > 1){
            setCounter(Number(e.target.value));
        }else{
            setCounter(1);
        }
    }
    const counterDecrement = () => {
        if(counter > 1){
            setCounter(counter - 1);
        }
    }
    const counterIncrement = () =>{
        setCounter(counter + 1);
    }
    
    const handleItemsChange = () => {
        addItems({ id, title, price, counter, image });
    };

    const handleShopClick = () =>{
        navigateTo("/shop");
      }

    useEffect( () => {
        document.querySelector('#container').className = classes.container;
        document.querySelector('#info').className = classes.info;
        document.querySelector('#input').className = classes.input;
        document.querySelector('#return').className = classes.return;
        document.querySelector('#displayText').className = classes.text;
    },[]);

    return (
        <div>
            <div id="container">
                <img src={image} alt="itemImage" />
                <div id="info">
                    <p className="fontBold">{title}</p>
                    <p>${price}</p>
                    <div id="input">
                        <button onClick={counterDecrement} id="minus">
                            <img src={Minus} alt="minus"/>
                        </button>
                        <input type="number" min="1" value={counter} onChange={handleInputChange}/>
                        <button onClick={counterIncrement} id="plus">
                        <img src={Plus} alt="plus" />
                        </button>
                    </div>
                    <div id="return">
                        <button className='fontBold' onClick={handleShopClick}>Return to Shop</button>
                        <button className='fontBold' onClick={handleItemsChange}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div id="displayText">
                <p className='fontBold'>Description:</p>
                <p>{description}</p>
            </div>
        </div>
        
    )
}

Detail.propTypes  = {
    addItems: PropTypes.func.isRequired,
}

export default Detail;