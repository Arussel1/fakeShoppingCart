import shoppingImage from './../../assets/images/ShoppingImage.png'
import { useNavigate } from 'react-router-dom';
import classes from './home.module.css'
 const Home = () => {
    const navigateTo = useNavigate();

    const handleShopClick = () =>{
        navigateTo("/shop");
      }
    return (
        <div className={classes.home}>
            <div className={classes.text}>
                <h1 className='fontBold'>The best shopping web in 2024</h1>
                <p>Come in and discover the varieties of items in our website. Click below to learn more</p>
                <button onClick={handleShopClick}>Shop Now</button>
            </div>
            <img src={shoppingImage} alt="shoppingImage" className={classes.shoppingImage}/>
        </div>
    )
}

export default Home;