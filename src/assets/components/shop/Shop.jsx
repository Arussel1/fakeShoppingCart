import { useState, useEffect } from "react";
import classes from './shop.module.css';
import arrowDown from './../../images/arrowDown.svg';

const Shop = () => {
    const [result,setResult] = useState([]);
    const [sortList,setSortList] = useState(false);
    const toggleSort = (e) =>{
        setSortList(prev => !prev);
    }
    // data fetching from REST API
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products?limit=20');
            const result = await res.json();
            setResult(result);
            console.log(result)
        }
        fetchData();
    },[]);
    
    // CSS Module
    useEffect(() => {
        document.querySelector('label').className = classes.label;
        document.querySelector('input').className = classes.input;
        document.querySelector('#menu').className = classes.menu;
        document.querySelector('#sortButton').className = classes.sortButton;
        document.querySelector('#cards').className = classes.cards;
        document.querySelector('#sortLists').className = classes.sortLists;
    },[]);

    // Toggle Sort List
    useEffect( () => {
        if(!sortList){
            document.querySelector('#sortLists').classList.add(classes.hidden);
        }else{
            document.querySelector('#sortLists').classList.remove(classes.hidden);
        }
    },[sortList])
    // Create cards based on fetch data
    const cards = result.map( (item) => 
        <button className={classes.card} key={item.id}>
            <img src={item.image} alt="itemImage" className={classes.displayImage}/>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
        </button>
        );
    return (
        <>
        <div id="menu">
            <label htmlFor="search">
                <input type="text" placeholder="Search.." />
            </label>
            <button id="sortButton" onClick={toggleSort}>
                Sort
                <img src={arrowDown} alt="arrow down"/>
            </button>
            <div id="sortLists">
                    <button>From A-Z</button>
                    <button>From Z-A</button>
                    <button>From High to Low</button>
                    <button>From Low to High</button>
                </div>
        </div>
        <div id="cards">
            {cards}
        </div>
        </>
    )
}

export default Shop;