import React from "react";
import AppReducer from "./AppReducer"

let initialState = {
    transactions : []
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
    let addTransaction = (transaction) => {
        dispatch({
            type :'ADD_TRANSACTION',
            payload : transaction
        })
    }
    return (<GlobalContext.Provider value={{transactions :state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}