import "./App.css";
import { react, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "1",
    title: "toilet paper",
    amount: 30.12,
    date: new Date(2022, 1, 12),
  },
  {
    id: "1",
    title: "paper towels",
    amount: 30.12,
    date: new Date(2022, 1, 12),
  },
  {
    id: "1",
    title: "internet",
    amount: 93.42,
    date: new Date(2022, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses(...expenses, newExpense);
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
