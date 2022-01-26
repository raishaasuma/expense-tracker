import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
