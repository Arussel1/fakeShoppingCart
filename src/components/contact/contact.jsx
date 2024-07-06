import Facebook from './../../assets/images/facebook.svg'
import Instagram from './../../assets/images/instagram.svg'
import Twitter from './../../assets/images/twitter.svg'
import Logo from './../../assets/images/logoNoBackground.png'
import classes from './contact.module.css'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <div className={classes.text}>
                <p> Email: fakeemail@fakestore.com</p>
                <p> Phone Number: +99 (123) 456 7890</p>
                <p> Address: 1234 Fake Street, Fake City, Fake Province, Fake Country, 00000</p>
                <p className={classes.follow}>Follow Us:</p>
                <div className={classes.icon}>
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>
            <div className={classes.vl}></div>
            <img src={Logo} alt="logo" className={classes.logo} />
        </div>
    )
}

export default Contact