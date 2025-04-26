import Banner from "../component/Banner/Banner"
import ExpenseList from "../component/ExpenseList/ExpenseList"
import Form from "../container/Form/Form"
import data from '../data/data.json'

const Layout = () => {
  return (
    <>
    <Banner data={data}/>
    <Form/>
    <ExpenseList data={data}/>
    </>
      
  )
}

export default Layout
