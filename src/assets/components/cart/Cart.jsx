import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Delete from './../../images/trashcan.svg';
import Plus from './../../images/plus.svg';
import Minus from './../../images/minus.svg';
import classes from './cart.module.css';

const CartComponent = ({ itemsList, setItemsList}) => {

    useEffect( () => {
        if (itemsList.length === 0){
            document.querySelector("#noItemText").className = classes.noItemText;
        }else{
            document.querySelector("#cartContainer").className = classes.cartContainer;
        }
    }, [itemsList])
    
    const handleCounterChange = (id, delta) => {
        setItemsList(prevCounterList =>
            prevCounterList.map(counterItem =>
                counterItem.id === id ? { ...counterItem, counter: Math.max(1, counterItem.counter + delta) } : counterItem
            )
        );
    };

    const handleDelete = (id) => {
        const newItemsList = itemsList.filter(item => item.id !== id);
        setItemsList(newItemsList);
    }
    const itemDisplay = itemsList.map((item) => {
        return (
            <div key={item.id} className={classes.container}>
                <img src={item.image} alt="itemImage" />
                <div className={classes.info}>
                    <div className={classes.top}>
                        <p className="fontBold">{item.title}</p>
                        <button onClick={() => handleDelete(item.id)}><img src={Delete} alt="Delete" /></button>
                    </div>
                    <p>${item.price}</p>
                    <div className={classes.input}>
                        Quantities:
                        <button id="minus" onClick={() => handleCounterChange(item.id, -1)}>
                            <img src={Minus} alt="minus" />
                        </button>
                        <input type="number" min="1" value={item.counter ? item.counter : 1} readOnly />
                        <button id="plus" onClick={() => handleCounterChange(item.id, 1)}>
                            <img src={Plus} alt="plus" />
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    const total = itemsList.reduce((sum, item) => {
        const counterItem = itemsList.find(counterItem => counterItem.id === item.id);
        const quantity = counterItem ? counterItem.counter : 1;
        return sum + (item.price * quantity);
    }, 0);

    return (
        itemDisplay.length !== 0 ? <div id="cartContainer">
            {itemDisplay}
            <div className={classes.total}>
                Total: ${total.toFixed(2)}
            </div>
            <button>Checkout</button>
        </div> : <div id="noItemText">
            <p >No item to checkout right now</p>
            <button>Return to Shop</button>
        </div>
    );
};

CartComponent.propTypes = {
    itemsList: PropTypes.array.isRequired,
    setItemsList: PropTypes.func.isRequired,
};

export default CartComponent;