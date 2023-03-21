import React, { useState } from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card'; 

//Expense Item
const ExpenseItem = (data) => {
  const [title,setTitle] = useState(data.title);
  const clickHandler=()=>{
    setTitle("Update Title!")
    console.log("Update title");
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