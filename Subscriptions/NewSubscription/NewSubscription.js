import FormSubscription from './FormSubscription';
import './NewSubscription.css';
const NewSubscription=(props)=>{
  const onSaveHandler=(data)=>{
    const subscription={...data,id:Math.random().toString}
    props.onAddSubscription(subscription)

  }
    return(
        <div className='new_subscription'>
          <FormSubscription onSave={onSaveHandler} />
        </div>
      
        
    )
}
export  default NewSubscription