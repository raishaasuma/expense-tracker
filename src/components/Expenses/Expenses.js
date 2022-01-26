import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const filterYearHandler = (filterYear) => {
    setYear(filterYear);
  }
  console.log(year);
  return (
    <div>
    
      <Card className="expenses">
      <ExpensesFilter selected={year} onSelectFilterYear={filterYearHandler}/>
        <ExpenseItem
          id={props.items[0].id}
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          id={props.items[1].id}
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          id={props.items[2].id}
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
