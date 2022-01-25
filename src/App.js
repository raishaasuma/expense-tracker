import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
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
  return (
    <div className="App">
      <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
};

export default App;
