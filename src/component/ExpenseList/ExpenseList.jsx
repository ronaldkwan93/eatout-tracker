import ExpenseCard from "../ExpenseCard/ExpenseCard";

const ExpenseList = ({ expenses }) => {
    console.log(expenses)
  return (
    <div>
      <h4>Expense List</h4>
      {expenses && expenses.map((expense) => (
        <ExpenseCard expense={expense}/>
      ))}
    </div>
  );
};

export default ExpenseList;
