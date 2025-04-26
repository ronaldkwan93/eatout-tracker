import classes from "./Banner.module.scss";

const Banner = ({ data }) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const monthData = data.filter(expense => {
        const expenseDate = new Date(expense.date);
        return (
            expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear
        );
    } )
    console.log(monthData)

    const monthTotal =monthData.reduce((a,b) => a + b.amount,0).toFixed(2);

    console.log(monthTotal)
  return (
    <div className={classes.banner}>
      <h4 className={classes.header}>Snapshot</h4>
      <div className={classes.container}>
        <p>This Month's total: ${monthTotal}</p>
        {/* filter data 
        - this month
        - total amount

        array => integer


        */}
      </div>
    </div>
  );
};

export default Banner;
