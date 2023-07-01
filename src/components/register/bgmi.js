import { Button } from 'react-bootstrap'
import bgmi from '../images/1fd08ede20cf8adda0ae967fde676f4a.jpg'
import classes from './bgmi.module.css'
import Footer from '../Main/Footer'
import Naav from './Nav'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Bgmi=()=>{
    const isLoggedIn=localStorage.getItem('enteredemail')
    console.log(isLoggedIn)

    return(
        <>
        <Naav />
        
        <div className={classes.container}>
        <img src={bgmi} alt="" />
        <h1>Squad</h1>
            <h2>8pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.100</h2></span>

            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> } 
        </div>



        <div className={classes.container}>
        <img src={bgmi} alt="" />
        <h1>Solo</h1>
            <h2>7pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.50</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.container}>
        <img src={bgmi} alt="" />
        <h1>Duo</h1>
            <h2>6pm</h2>
            <h3>TPP</h3>
            <span><h2>Rs.80</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.container}>
        <img src={bgmi} alt="" />
        <h1>Squad</h1>
            <h2>10pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.100</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.container}>
        <img src={bgmi} alt="" />
        <h1>Duo</h1>
            <h2>5pm</h2>
            <h3>FPP</h3>
            <span><h2>Rs.50</h2></span>
            {isLoggedIn ? <Link to='/registration'><Button variant='primary'>JOIN</Button></Link>:
           <Link to='/signin'><Button>Join</Button></Link> }        </div>

        <div className={classes.container}>
        <img src={bgmi} alt="" />
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
export default Bgmi