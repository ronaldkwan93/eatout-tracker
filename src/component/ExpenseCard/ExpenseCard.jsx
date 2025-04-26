import classes from './ExpenseCard.module.scss'

const ExpenseCard = ({expense}) => {
  return (
    <div className={classes.card}>
      <p>{expense.restaurant}</p>
      <p>{expense.date}</p>
      <p>${expense.amount}</p>
    </div>
  );
};

export default ExpenseCard;
