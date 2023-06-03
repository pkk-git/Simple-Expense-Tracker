import React from "react";
import AppReducer from "./AppReducer"

let initialState = {
    transactions : [
        {id:1, text:"Groceries", amount:-500},
        {id:2, text:"Bar", amount:-5100},
        {id:3, text:"Salary", amount:100000},
        {id:4, text:"Dinner", amount:-1500}
    ]
}

export let GlobalContext = React.createContext(initialState)
export let GlobalProvider = ({children}) => {
    let [state, dispatch] = React.useReducer(AppReducer,initialState)
    let deleteTransaction = (id) => {
        dispatch({
            type :'DELETE_TRANSACTION',
            payload : id
        })
    }
    return (<GlobalContext.Provider value={{transactions :state.transactions, deleteTransaction}}>
        {children}
    </GlobalContext.Provider>)
}