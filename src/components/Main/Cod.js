import { Button } from 'react-bootstrap'
import cod from '../images/call-of-duty-mobile-poster-4010.webp'
import classes from './cod.module.css'
import Nav_Header from './Navbar'
import Footer from './Footer'

const Cod=()=>{
    return(
        <>
        <Nav_Header />
        
        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Squad</h1>
            <h2>8pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.100</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Solo</h1>
            <h2>7pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.50</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Duo</h1>
            <h2>6pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.80</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Squad</h1>
            <h2>10pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.100</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Duo</h1>
            <h2>5pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.50</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <div className={classes.container}>
        <img src={cod} alt="" />
        <h1>Solo</h1>
            <h2>4pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.50</h2></span>
            <Button variant='primary'>JOIN</Button>
        </div>

        <Footer />
              
            
        </>
    )
}
export default Cod