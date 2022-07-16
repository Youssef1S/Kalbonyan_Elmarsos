import React, { useState, useTransition } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewItem, setAddNewItem] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.round(Math.random() * 10000).toString(),
    };

    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  const startEditingHandler = (e) => {
    e.preventDefault();
    setAddNewItem(true);
  };

  const stopEditingHandler = (e) => {
    e.preventDefault();
    setAddNewItem(false);
  };

  const showForm = addNewItem ? (
    <ExpenseForm
      onSaveExpenseData={SaveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );
  return <div className="new-expense">{showForm}</div>;
};

export default NewExpense;
