import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Slipper from './../../images/slipperNoBackground.png'
import Plus from './../../images/plus.svg'
import Minus from './../../images/minus.svg'
import classes from './detail.module.css'

const Detail = ({ image, title, price, description }) => {
    const [counter, setCounter] = useState(1);
    const handleInputChange = (e) =>{
        if(Number(e.target.value) > 1){
            setCounter(prev => Number(e.target.value));
        }else{
            setCounter(1);
        }
    }
    const counterDecrement = (e) => {
        if(counter > 1){
            setCounter(prev => prev - 1);
        }
    }
    const counterIncrement = (e) =>{
        setCounter(prev => prev + 1);
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
                        <button className='fontBold'>Return to Shop</button>
                        <button className='fontBold'>Add to Cart</button>
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
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
}

Detail.defaultProps  = {
    image: Slipper,
    title: "Slippers",
    price: 25,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.",
}

export default Detail;