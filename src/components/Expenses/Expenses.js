import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

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
        {filteredExpenses == 0 ? (
          <p>No expenses found!</p>
        ) : (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
