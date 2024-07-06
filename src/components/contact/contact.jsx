import { useEffect } from 'react'
import Facebook from './../../assets/images/facebook.svg'
import Instagram from './../../assets/images/instagram.svg'
import Twitter from './../../assets/images/twitter.svg'
import Logo from './../../assets/images/logoNoBackground.png'
import classes from './contact.module.css'

const Contact = () => {
    useEffect( () => {
        document.querySelector('#contact').className = classes.contact;
        document.querySelector('#logo').className = classes.logo;
        document.querySelector('#text').className = classes.text;
        document.querySelector('#follow').className = classes.follow;
        document.querySelector('#icon').className = classes.icon;
        document.querySelector('#vl').className = classes.vl;
    }, []);
    return (
        <div id="contact">
            <div id="text">
                <p> Email: fakeemail@fakestore.com</p>
                <p> Phone Number: +99 (123) 456 7890</p>
                <p> Address: 1234 Fake Street, Fake City, Fake Province, Fake Country, 00000</p>
                <p id="follow">Follow Us:</p>
                <div id="icon">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>
            <div id="vl"></div>
            <img src={Logo} alt="logo" id="logo" />
        </div>
    )
}

export default Contact