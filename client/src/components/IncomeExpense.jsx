import React from 'react'
import {GlobalContext} from "../context/GlobalState.jsx"

const IncomeExpense = () => {
  let {transactions} = React.useContext(GlobalContext)
  let amounts = transactions.map(transaction => transaction.amount)
  let posamt = amounts.filter(amount => amount > 0).reduce((accumulator,singleitem) => (accumulator+=singleitem),0).toFixed(2); 
  let negamt = Math.abs(amounts.filter(amount => amount < 0).reduce((accumulator,singleitem) => (accumulator+=singleitem),0)).toFixed(2);
  return <>
    <div className="ie-container">
        <div>
          <h4> Income </h4>
          <p className="money plus">+<span className="material-symbols-outlined">currency_rupee</span>{posamt}</p>
        </div>
        <div>
          <h4> Expenses </h4>
          <p className="money minus">-<span className="material-symbols-outlined">currency_rupee</span>{negamt}</p>
        </div>
      </div>
    </>
}

export default IncomeExpense;