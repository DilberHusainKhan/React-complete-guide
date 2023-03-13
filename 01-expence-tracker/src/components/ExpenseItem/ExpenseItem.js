import React from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card'; 


const ExpenseItem = (data) => {

  let title = data.title;
  const clickHandler=()=>{
    console.log("Update title");
    title="Update";
  }
  return (
    <Card className='expense-item'>
        <ExpenseDate date = {data.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${data.price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem