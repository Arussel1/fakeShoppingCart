import { useEffect } from 'react'
import shoppingImage from './../../images/ShoppingImage.png'
import classes from './home.module.css'
export default function Home(){
    useEffect( () => {
        document.querySelector('#home').className = classes.home;
        document.querySelector('#shoppingImage').className = classes.shoppingImage;
        document.querySelector('#text').className = classes.text;
    }, [])
    
    return (
        <div id='home'>
            <div id="text">
                <h1>The best shopping web in 2024</h1>
                <p>Come in and discover the varieties of items in our website. Click below to learn more</p>
                <button>Shop Now</button>
            </div>
            <img src={shoppingImage} alt="shoppingImage" id="shoppingImage"/>
        </div>
    )
}