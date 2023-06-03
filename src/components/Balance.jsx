import React from 'react'
import {GlobalContext} from "../context/GlobalState.jsx"

let Balance = () => {
  let {transactions} = React.useContext(GlobalContext)
  let amounts = transactions.map(transaction => transaction.amount)
  let total = amounts.reduce((accumulator,singleitem) => (accumulator+=singleitem),0).toFixed(2);
  return <>
    <h4>Current Balance</h4>
    <h1 className="balance"><span className="material-symbols-outlined">currency_rupee</span>{total} </h1>
    </>
}

export default Balance;