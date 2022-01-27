import { React, useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterYearHandler = (filterYear) => {
    setYear(filterYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });

  console.log(year);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onSelectFilterYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
