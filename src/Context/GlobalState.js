import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state 
const initialState = {
    transactions: [
        { id: 1, text: 'Gift', amount: -100 },
        { id: 2, text: 'Salary', amount: 1000 },
        { id: 3, text: 'Game', amount: -50 },
        { id: 4, text: 'Trip', amount: -150 }
    ]

}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvide = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    //Delete Transaction Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Delete Transaction Action
    function addTransaction(transaction) {
        console.log(transaction.text);

        if (transaction.text !== '') {

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }
        else 
            alert('Transaction text cant be empty.Please provide some text for Transaction');  
    }

    return (<GlobalContext.Provider value={{
        //passing following transaction initial state and delete.add actions in provider so they are accessable to other components. 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}