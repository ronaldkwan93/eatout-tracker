import ExpenseCard from "../ExpenseCard/ExpenseCard";

const ExpenseList = ({ data }) => {
  return (
    <div>
      <h4>Expense List</h4>
      {data.map((expense) => (
        <ExpenseCard expense={expense}/>
      ))}
    </div>
  );
};

export default ExpenseList;
