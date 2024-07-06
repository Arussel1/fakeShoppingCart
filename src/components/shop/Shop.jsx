import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import classes from './shop.module.css';
import arrowDown from './../../assets/images/arrowDown.svg';

const Shop = () => {
    const navigate = useNavigate();
    const [result,setResult] = useState([]);
    const [sortList,setSortList] = useState(false);
    const [sortOrder, setSortOrder] = useState('');
    const [searchQuery, setSearchQuery] = useState('')
    const toggleSort = () =>{
        setSortList(prev => !prev);
    }
    const handleCardClick = (item) => {
        navigate('/shop/detail', { state: { ...item } });
      };
    // data fetching from REST API
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products?limit=20');
            const result = await res.json();
            setResult(result);
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
    },[sortList]);

    // Sort the results
    useEffect(() => {
        if (sortOrder) {
            const sortedResult = [...result].sort((a, b) => {
                switch (sortOrder) {
                    case 'A-Z':
                        return a.title.localeCompare(b.title);
                    case 'Z-A':
                        return b.title.localeCompare(a.title);
                    case 'High-Low':
                        return b.price - a.price;
                    case 'Low-High':
                        return a.price - b.price;
                    default:
                        return 0;
                }
            });
            setResult(sortedResult);
        }
    }, [sortOrder]);

    const filteredResult = result.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    // Create cards based on fetch data
    const cards = filteredResult.map((item) => (
        <button className={classes.card} key={item.id} onClick={() => handleCardClick(item)}>
            <img src={item.image} alt="itemImage" className={classes.displayImage}/>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
        </button>
    ));
    return (
        <>
        <div id="menu">
            <label htmlFor="search">
                <input 
                    type="text" 
                    placeholder="Search.."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
            </label>
            <button id="sortButton" onClick={toggleSort}>
                Sort
                <img src={arrowDown} alt="arrow down"/>
            </button>
            <div id="sortLists">
                    <button onClick={() => setSortOrder('A-Z')} >From A-Z</button>
                    <button onClick={() => setSortOrder('Z-A')}> From Z-A</button>
                    <button onClick={() => setSortOrder('High-Low')}>From High to Low</button>
                    <button onClick={() => setSortOrder('Low-High')}>From Low to High</button>
                </div>
        </div>
        <div id="cards">
            {cards}
        </div>
        </>
    )
}

export default Shop;