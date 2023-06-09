import React from "react";
import AppReducer from "./AppReducer"
import axios from 'axios'

let initialState = {
    transactions : [],
    error: null,
    loading: true
}

export let GlobalContext = React.createContext(initialState)
export let GlobalProvider = ({children}) => {
    let [state, dispatch] = React.useReducer(AppReducer,initialState)
    let  getTransactions = async () => {
        try {
            let res = await axios.get('/api/v1/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        }
        catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }
    let deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type :'DELETE_TRANSACTION',
                payload : id
            })
        }
        catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }
    let addTransaction = async (transaction) => {
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }
        try {
            let res = await axios.post('/api/v1/transactions', transaction,config)
            dispatch({
                type :'ADD_TRANSACTION',
                payload : res.data.data
            })
        } 
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }
    return (<GlobalContext.Provider value={{transactions :state.transactions, error:state.error, loading:state.loading, getTransactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}