import Expenses from "./components/Expenses";
import HelloWorld from "./components/HelloWorld";

function App() {
  const expenses = [
    {
      id: "i1",
      title: "car insurance",
      date: new Date(2023, 4, 12),
      amount: 234.43,
    },
    {
      id: "i2",
      title: "health insurance",
      date: new Date(2023, 2, 22),
      amount: 544.43,
    },
    {
      id: "i1",
      title: "shopping",
      date: new Date(2023, 0, 2),
      amount: 1234.43,
    },
  ];
  return (
    <div>
      <h2>Start!</h2>
      <Expenses item={expenses} />
      <HelloWorld name="john" />
      <HelloWorld name="harry" />
      <HelloWorld name="max" />
    </div>
  );
}

export default App;
