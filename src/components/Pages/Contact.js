import { Button } from "react-bootstrap"
import classes from './contact.module.css'
import Naav from "../register/Nav"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Contact=()=>{
    const emailref=useRef()
    const numberref=useRef()
    const textref=useRef()
    const History=useNavigate()


    const submitHandler=()=>{
        const enteredemail=emailref.current.value
        const enterednumber=numberref.current.value
        const enteredtext=textref.current.value
        if(enteredemail && enterednumber && enteredtext !== null){
    
            
            alert('Your request is submitted.Our member will contact you')
        }
        else{
            alert('Fill your details')
        }
    }
    return(
        <>
        <Naav />
        <section className={classes.container}>
            <h1>Fill Your Details</h1>
            <form>
                <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type='email' id='email' placeholder="Email" required ref={emailref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="number">Mobile</label>
                    <input type="number" placeholder="Mobile number" required  ref={numberref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Problem</label>
                    <input type='text' placeholder="Write your problem" required ref={textref} />
                </div>
                <Button variant="success" onClick={submitHandler}>Submit</Button>
            </form>
        </section>
      
        </>
    )
}
export default Contact