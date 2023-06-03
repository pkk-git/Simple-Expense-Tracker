import React from 'react'
import {GlobalContext} from "../context/GlobalState.jsx"

let AddTransaction = () => {
    let [text,setText] = React.useState("");
    let [amount, setAmount] = React.useState(0);
    let {addTransaction} = React.useContext(GlobalContext)
    let whenSubmit = (e) => {
        e.preventDefault();
        let newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: parseFloat(amount)
        }
        addTransaction(newTransaction)
    } 
    let textChange = (e) => {
        let newText = e.target.value;
        setText(newText)
    } 
    let amountChange = (e) => {
        let newAmount = e.target.value;
        setAmount(newAmount)
    }
  return <>
    <div className='add-form'>
        <h4> Add New Transaction </h4>
        <form onSubmit={whenSubmit}>
            <label className='form-label'> Transaction Name </label>
            <input className="form-control" type="text" value={text} onChange={textChange} placeholder="Enter Transaction Name"></input>
            <label className="form-label"> Transaction Amount</label>
            <input className="form-control" type="number" value={amount} onChange={amountChange} placeholder="Enter Amount" />
            <button className="btn btn-dark">Add Transaction</button>
        </form>
    </div>
  </>
}

export default AddTransaction;