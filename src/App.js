import "./App.css";
import { react, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "1",
    title: "toilet paper",
    amount: 30.12,
    date: new Date(2020, 1, 12),
  },
  {
    id: "2",
    title: "paper towels",
    amount: 30.12,
    date: new Date(2019, 1, 12),
  },
  {
    id: "3",
    title: "internet",
    amount: 93.42,
    date: new Date(2019, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    });
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
