import { Fragment, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import classes from './signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { validEmail, validPassword } from './Regex'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/Auth-Slice'

const SignUp=()=>{

    const dispatch=useDispatch()
    const History=useNavigate()

    const emailref=useRef()
    const passref=useRef()
    const conpassref=useRef()
    const [pwdError, setPwdError] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [conpwdError, setConpwdError]=useState(false)
    const [error,setError]= useState('')

    const storedToken=localStorage.getItem('tokenId')
    useEffect(()=>{
        dispatch(authActions.login(storedToken))
    })

    const submitHandler=(e)=>{
        e.preventDefault()
        const enteredEmail=emailref.current.value
        const enteredPass=passref.current.value
        const enteredconpass=conpassref.current.value

        if(!validEmail.test(enteredEmail)){
            // setEmailErr('EmailId is not valid')
            setError('Email is not valid')
        }
        if(!validPassword.test(enteredPass)){
            // setPwdError('Password should contain specail characters')
            setError('Password is not valid')

        }
        if(enteredPass!==enteredconpass){
            // setConpwdError('Password and Conform password is not matching')
            setError('Password and conform password is not matching')

        }

        let url;
        if(enteredPass===enteredconpass && validPassword.test(enteredPass)){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1o1tFI2qFlm_ukyUsvtG3IgcEmkllduI'
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPass,
                conformpassword:enteredconpass,
                returnSecureToken:true
            }),
            headers:{
                'content-Type':'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                console.log('signup done')
                return res.json()
            }
            else{
                return res.json().then((data)=>{
                    let Errormessage='Authentication Failed'
                    if(data && data.error && data.error.message){
                        Errormessage=data.error.message
                        console.log(Errormessage)

                    }
                    throw new Error(Errormessage)
                })
            }
        }).then((data)=>{
            dispatch(authActions.login(data.idtoken))
            console.log('signup done')
            alert('Account created')
            History('/')
            setError('')
        }).catch((error)=>{
            // alert(error.message)
            console.log(error)
        })
    }


    return( 
        <Fragment>
            <section className={classes.form}>
                <h1>SignUp</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' placeholder='Email' required ref={emailref}/>
                    </div>

                    <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' placeholder='Password' required ref={passref}/>
                    </div>

                    <div className={classes.control}>
                    <label htmlFor='conformpassword'>Conform Password</label>
                    <input id='conformpassword' type='password' placeholder='Conform password' required ref={conpassref}/>
                    </div>
                     <span style={{color:'red',fontWeight:'bold'}}>{error}</span>
                   <div>
                    <Button variant='primary' type='submit'>SignUp</Button>
                    </div>

                </form>
                    <Link to='/'><Button style={{marginTop:'0.5rem'}} variant='outline-info' >Have an Account?</Button></Link>

            </section>
        </Fragment>
        
    )
}
export default SignUp