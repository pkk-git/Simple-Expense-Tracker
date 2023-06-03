import React from 'react'
import {GlobalContext} from "../context/GlobalState.jsx"

let Transaction = (props) => {
    let {deleteTransaction} = React.useContext(GlobalContext)
    let sign = props.transaction.amount > 0 ? "+" : "-";
    let signtext = props.transaction.amount > 0 ? "list-group-item money plus" : "list-group-item money minus";
    return <>
        <li className={signtext}><button onClick={() => deleteTransaction(props.transaction.id)} class="btn btn-danger">x</button><span className='list-text'>{props.transaction.text}</span><span className='lst-amt'>{sign}₹{Math.abs(props.transaction.amount)}</span></li>
    </>
}

export default Transaction;