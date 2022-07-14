import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";

const DisplayExpenses = (expenses) => {
  // console.log(expenses.data);
  const data = expenses.data;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={data[0].title}
        amount={data[0].amount}
        date={data[0].date}
      />
      <ExpenseItem
        title={data[1].title}
        amount={data[1].amount}
        date={data[1].date}
      />
      <ExpenseItem
        title={data[2].title}
        amount={data[2].amount}
        date={data[2].date}
      />
    </Card>
  );
};

export default DisplayExpenses;
