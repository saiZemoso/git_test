import Items from "./Items";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <Items
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />
      <Items
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <Items
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />
    </Card>
  );
}

export default Expenses;
