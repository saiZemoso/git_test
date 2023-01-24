import "./Items.css";
import Date from "./Date";
import Card from "./Card";
function Items(props) {
  return (
    <Card className="expense-item">
      <div>
        <Date date={props.date} />
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default Items;
