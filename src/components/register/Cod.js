import { Button } from 'react-bootstrap'
import cod from '../images/call-of-duty-mobile-poster-4010.webp'
import classes from './cod.module.css'
import Footer from '../Main/Footer'
import Naav from './Nav'
import { Link } from 'react-router-dom'

const Cod=()=>{

    const isLoggedIn=localStorage.getItem('enteredemail')
    return(
        <>
        <Naav />
        
        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Squad</h1>
            <h2>8pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.100</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Solo</h1>
            <h2>7pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.50</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Duo</h1>
            <h2>6pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.80</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Squad</h1>
            <h2>10pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.100</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Duo</h1>
            <h2>5pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.50</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.containe}>
        <img src={cod} alt="" />
        <h1>Solo</h1>
            <h2>4pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.50</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <Footer />
              
            
        </>
    )
}
export default Cod