import React from 'react'

let AddTransaction = () => {
    let [text,setText] = React.useState("");
    let [amount, setAmount] = React.useState(0);
    let textChange = (e) => {
        const newText = e.target.value;
        setText(newText)
    } 
    let amountChange = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount)
    }
  return <>
    <div className='add-form'>
        <h4> Add New Transaction </h4>
        <label className='form-label'> Transaction Name </label>
        <input className="form-control" type="text" value={text} onChange={textChange} placeholder="Enter Transaction Name"></input>
        <label className="form-label"> Transaction Amount</label>
        <input className="form-control" type="number" value={amount} onChange={amountChange} placeholder="Enter Amount" />
        <button className="btn btn-dark">Add Transaction</button>
    </div>
  </>
}

export default AddTransaction;