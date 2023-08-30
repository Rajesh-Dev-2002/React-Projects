
import React from 'react'
import './Subscription.css'
import {useState} from 'react'
export default function Subscriptions(props) {

const [title,setTitle] = useState(props.passedTitle);
  const noClickHandler = () =>{
   setTitle("On Change");


  }

  return (
    <div className="subscription">
        
        <div className='subscription_date'>{props.passedDate}</div>
        <h2 className='subscription_title'>{title}</h2>
        <div className='subscription_price'>{props.passedAmount}</div>
        <button type='button'id='changeTitleButton' onClick={noClickHandler}>Change Title</button>
      
    </div>
  )
}
