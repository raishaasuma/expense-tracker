import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // where does 'enteredExpenseData' prop come from?
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    
    // const expenseData = {
    //   ...enteredExpenseData,
    //   id: Math.random().toString()
    // }
    // props.onAddExpense(expenseData);
    console.log(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
