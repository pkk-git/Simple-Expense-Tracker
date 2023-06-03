import React from 'react'
import {GlobalContext} from "../context/GlobalState.jsx"
import Transaction from "./Transaction.jsx"

let TransactionList = () => {
    let {transactions} = React.useContext(GlobalContext);
    return <>
    <div className="card">
        <div className="card-header">
            Transaction List
        </div>
        <ul className="list-group list-group-flush">
            {transactions.map(transaction => (<Transaction key ={transaction.id} transaction={transaction}/>))}
        </ul>
    </div>
</>
}

export default TransactionList;