
import './App.css';
import NewSubscription from './Subscriptions/NewSubscription/NewSubscription';
import Subscriptions from './Subscriptions/Subscriptions'
import Filter from './Subscriptions/Filter';
import { useState } from 'react';

function App() {
  let Subscriptions=[
    {
    id:"1",
    date:new Date('2023','12','18'),
   title: "Monthly Subscription",
    amount:"4597.230"
  },
  {
    id:"2",
    date: new Date('2024','2','15'),
   title: "Annualy Subscription",
    amount:"4597.230"
  },
  {
    id:"3",
    date:new Date('2025','8','06'),
   title: "Quanterly Subscription",
    amount:"4597.230"
  },

]
const [filterData,setFilterData]=useState('2021');
   const addSubscriptionHandler=(data)=>{
    Subscriptions.push(data)
    console.log(data)

   }
   const filterChangeHandler = (data)=>{
    console.log("Filter Change  handler",data)

       setFilterData(data)

   }
   


  return (
  <>
   
   <NewSubscription onAddSubscription={addSubscriptionHandler}/>
   <Filter onFilterChange={filterChangeHandler} selectedFilter={filterData}/>

    {Subscriptions.map(subscription=>< Subscriptions date ={subscription.date} title={subscription[0].title} amount={subscription[0].amount} /> )}
        {/* 
    <Subscriptions passedDate={Subsriptions[0].date.toISOString()}  passedTitle={Subsriptions[0].title} passedAmount={Subsriptions[0].amount} />
    <Subscriptions passedDate={Subsriptions[1].date.toISOString()}  passedTitle={Subsriptions[1].title} passedAmount={Subsriptions[1].amount} />
    <Subscriptions passedDate={Subsriptions[2].date.toISOString()}  passedTitle={Subsriptions[2].title} passedAmount={Subsriptions[2].amount} /> */}
  </>
  );
}

export default App;
