import React from 'react'
import './NewExpense.css'
import ExpenseFrom from "./ExpenseForm"
//Update 
const NewExpense = () => {
  return (
    <div className='new-expense'>
        <ExpenseFrom/>
    </div>
  )
}

export default NewExpense