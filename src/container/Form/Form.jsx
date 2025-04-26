import classes from "./Form.module.scss";

const Form = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label htmlFor="amount">Amount($)</label>
        <input type="number" name="amount" />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" />
        <label htmlFor="restaurant">Restaurant</label>
        <input type="text" name="restaurant" />
        <button> + Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
