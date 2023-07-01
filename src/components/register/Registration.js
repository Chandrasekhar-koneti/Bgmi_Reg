import { Button } from "react-bootstrap"
import classes from './registration.module.css'
import Naav from "./Nav"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


const Registration=()=>{
    // const History=useNavigate()
    const[dataa,setData]=useState([])

    const nameref=useRef()
    const Player1ref=useRef()
    const player2ref=useRef()
    const player3ref=useRef()
    const player4ref=useRef()
    const numberref=useRef()

    let mail=localStorage.getItem('enteredemail')
    let usermail
    if(mail!==null){
        const regex=/[`@.`]/g
        usermail=mail.replace(regex,'')
    }
    console.log(usermail)

    


    const submitHandler=()=>{
        const enterdname=nameref.current.value
        const enterdplayer1=Player1ref.current.value
        const enterdplayer2=player2ref.current.value
        const enterdplayer3=player3ref.current.value
        const enterdplayer4=player4ref.current.value
        const enterdnumber=numberref.current.value
        fetch(`https://bgmi-4f04c-default-rtdb.firebaseio.com/deatils/${usermail}.json`,{
            method:'POST',
            body:JSON.stringify({
                Teamname:enterdname,
                player1:enterdplayer1,
                player2:enterdplayer2,
                player3:enterdplayer3,
                player4:enterdplayer4,
                Number:enterdnumber
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                nameref.current.value = '';
                Player1ref.current.value = '';
                player2ref.current.value = '';
                player3ref.current.value = '';
                player4ref.current.value = '';
                numberref.current.value = '';
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
            console.log('DONE')
            alert('details submitted')
        }).catch((error)=>{
            alert(error)
        })
    }

    let responseData
    useEffect(()=>{
        const list=[]
        fetch(`https://bgmi-4f04c-default-rtdb.firebaseio.com/deatils/${usermail}.json`,)
        .then((res)=>{
           return res.json()
        }).then((data)=>{
            responseData=data
            console.log('responsedata is',responseData)
            if(responseData!== null){
                Object.entries(responseData).forEach((item)=>{
                    list.push({
                        id:item[0],
                        Teamname:item[1].Teamname,
                        player1:item[1].player1,
                        player2:item[1].player2,
                        player3:item[1].player3,
                        player4:item[1].player4,
                        Number:item[1].Number,
    
                    })
                    // console.log(list)
                })
            }
           
            setData(list)
            // setData([list,...dataa])
            console.log('data',dataa)
        }).catch((err)=>{
            alert(err)
        })
    },[])

      
    // {dataa.length !==0 && dataa.map((item,index)=>{
    //     console.log('item is',item)
    // })}
    


    return(
        <>
        <Naav />

        <section className={classes.container}>
            <h2>Enter your team details</h2>
            <form>
                <div className={classes.control}>
                <input placeholder="Team name" type="text" required id="team" ref={nameref}/>
                </div>
                <div className={classes.control}>
                    <input placeholder="Player1 name" type="text" required ref={Player1ref}/>
                </div>
                <div className={classes.control}>
                    <input placeholder="Player2 name" type="text" required  ref={player2ref}/>
                </div>
                <div className={classes.control}>
                    <input placeholder="Player3 name" type="text" required ref={player3ref}/>
                </div>
                <div className={classes.control}>
                    <input placeholder="Player4 name" type="text" required ref={player4ref}/>
                </div>
                <div className={classes.control}>
                    <input placeholder="Team leader mobile number" type="number" required ref={numberref}/>
                </div>
            </form>
            <Button variant="success" onClick={submitHandler}>Submit Details</Button>
        </section>
        <div className={classes.data}>
            {dataa.length !==0 && dataa.map((item,index)=>(
                <li className={classes.li} key={index}>
                    <h2 className={classes.h2}>
                        <span>{item.Teamname}</span>
                        <span>{item.player1}</span>
                        <span>{item.player2}</span>
                        <span>{item.player3}</span>
                        <span>{item.player4}</span>
                        <span>{item.Number}</span>
                    </h2>
                </li>
            ))}


        </div>
        </>
    )
}
export default Registration