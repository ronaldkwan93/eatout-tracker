import { useState } from "react";
import Banner from "../component/Banner/Banner";
import ExpenseList from "../component/ExpenseList/ExpenseList";
import Form from "../container/Form/Form";
import data from "../data/data.json";

const Layout = () => {
  const [expenses, setExpenses] = useState([]);
  const handleAddExpense = (newExpense) => {
    setExpenses([...data, newExpense]);
  };
  return (
    <>
      <Banner data={data} />
      <Form handleAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default Layout;
