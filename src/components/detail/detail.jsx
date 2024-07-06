import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Plus from './../../assets/images/plus.svg';
import Minus from './../../assets/images/minus.svg';
import classes from './detail.module.css';

const Detail = ({ addItems }) => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const [counter, setCounter] = useState(1);
    
    useEffect(() => {
        if (!location.state) {
            navigateTo("/error");
        }
    }, [location.state, navigateTo]);
    
    if (!location.state) {
        return null;
    }

    const { id, image, title, price, description } = location.state;

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        setCounter(value > 1 ? value : 1);
    };

    const counterDecrement = () => {
        setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1));
    };

    const counterIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const handleItemsChange = () => {
        addItems({ id, title, price, counter, image });
    };

    const handleShopClick = () => {
        navigateTo("/shop");
    };

    return (
        <div>
            <div className={classes.container}>
                <img src={image} alt="itemImage" />
                <div className={classes.info}>
                    <p className="fontBold">{title}</p>
                    <p>${price}</p>
                    <div className={classes.input}>
                        <button onClick={counterDecrement} id="minus">
                            <img src={Minus} alt="minus" />
                        </button>
                        <input type="number" min="1" value={counter} onChange={handleInputChange} />
                        <button onClick={counterIncrement} id="plus">
                            <img src={Plus} alt="plus" />
                        </button>
                    </div>
                    <div className={classes.return}>
                        <button className='fontBold' onClick={handleShopClick}>Return to Shop</button>
                        <button className='fontBold' onClick={handleItemsChange}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className={classes.text}>
                <p className='fontBold'>Description:</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

Detail.propTypes = {
    addItems: PropTypes.func.isRequired,
};

export default Detail;
