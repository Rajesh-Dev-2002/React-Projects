import './FormSubscription.css'
import React, { useState } from "react"
const FormSubscription = (props)=>{
    // const [userTitle,setuserTitle]= useState([])
    // const[userDate,setuserDate]= useState([])
    // const [userAmount,setuserAmount]= useState([])
    const [form,setForm]=useState({
        userTitle:'Enter the User Title',
        userDate:'',
        userAmount:'Enter Amount'
    })


    const titleChangeHandler =(event)=>{
     // console.log("event change",event.currentTarget.value);
    //  setuserTitle(event.target.value)
     setForm({...form,userTitle:event.target.value})
     console.log(form);
     
    }
    const dateChangeHandler =(event)=>{
       // console.log("event change",event.currentTarget.value);
    //    setuserDate(event.target.value)
    setForm({...form,userDate:event.target.value})
    console.log(form);
    }
    const amountChangeHandler = (event)=>{
    //    // console.log("event change",event.target.value)
    //    setuserAmount(event.currentTarget.value)
    //    console.log(userAmount)

    setForm({...form,userAmount:event.target.value})
    console.log(form);
   
    }
    const submitHandler =(event)=>{
        event.preventDefault()
        const Subscription = {
            title:form.userTitle,
            amount:form.userAmount,
            date:form.userDate
        }
        props.onSave(Subscription)
        console.log(Subscription)
          
    }
    return (
        <form onSubmit={submitHandler} >
            <div className="form_subscription_controls">
                <div className="form_subscription_control">
                    <label >Title</label>
                    <input type="text" value={form.userTitle}  onChange={titleChangeHandler} />
                </div>
                <div className="form_subscription_control">
                    <label >Date</label>
                    <input type="date" onChange={dateChangeHandler} />
                </div>
                <div className="form_subscription_control">
                    <label >Amount</label>
                    <input type="text" value={form.userAmount} onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="form_subscription_action">
                <button type='submit' >Add Subscription</button>
            </div>
        </form>
    )
}
export default FormSubscription