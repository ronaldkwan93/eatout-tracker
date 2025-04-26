import { useState } from "react";
import classes from "./Form.module.scss";

const Form = ({ handleAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      amount: parseFloat(amount),
      date,
      restaurant,
    };

    console.log(newExpense)

    handleAddExpense(newExpense);

    setAmount("");
    setDate("");
    setRestaurant("");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount($)</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="restaurant">Restaurant</label>
        <input
          type="text"
          name="restaurant"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        />
        <button> + Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
