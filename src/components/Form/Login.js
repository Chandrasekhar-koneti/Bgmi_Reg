import { Fragment, useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import classes from './login.module.css'
import { useDispatch } from "react-redux"
import { authActions } from "../Store/Auth-Slice"


const SignIn=()=>{

    const dispatch=useDispatch()
    const History=useNavigate()
    const[isLogin, setIsLogin]=useState(true)

   const emailinputref=useRef()
   const passwordref=useRef()

   const storedToken=localStorage.getItem('tokenId')
   useEffect(()=>{
    dispatch(authActions.login(storedToken))
   },[dispatch,storedToken])

   const submitHandler=(e)=>{
    e.preventDefault()
    const enteredEmail=emailinputref.current.value
    const enteredPassword=passwordref.current.value

    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1o1tFI2qFlm_ukyUsvtG3IgcEmkllduI'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'content-Type':'application/json'
        }
    }).then((res)=>{
        if(res.ok){
            localStorage.setItem('enteredemail',enteredEmail)
            return res.json()
        }
        else{
            return res.json().then((data)=>{
                let Errormessage='Authentication failed'
                if(data && data.error && data.error.message){
                    Errormessage=data.error.message
                }
                throw new Error(Errormessage)
            })
        }
    }).then((data)=>{
        dispatch(authActions.login(data.idToken))
        console.log('signIIIIN DONE')
        History('/')
    }).catch((error)=>{
        alert(error)
    })
   } 


    return(
        <Fragment>
            <section className={classes.form}>
                    <h1>SignIn</h1>
                    <form onSubmit={submitHandler}>
                        <div className={classes.control}>
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" id="email" type="email"  ref={emailinputref} required/>
                        </div>

                        <div className={classes.control}>
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" ref={passwordref} required/>
                        </div>
                        <div>
                        <Button variant="primary" type="submit">SignIn</Button>
                        </div>
                    </form>
                    <Link to='/signup'><Button variant="outline-info" style={{marginTop:'0.5rem'}}>Create an Account</Button></Link>
            </section>

        </Fragment>
    )
}
export default SignIn