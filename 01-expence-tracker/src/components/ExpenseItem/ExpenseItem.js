import React from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card'; 
const ExpenseItem = (data) => {
  
  return (
    <Card className='expense-item'>
        <ExpenseDate date = {data.date}/>
        <div className='expense-item__description'>
            <h2>{data.title}</h2>
            <div className='expense-item__price'>${data.price}</div>
        </div>
    </Card>
  )
}

export default ExpenseItem