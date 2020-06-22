import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';



export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const addNewTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount

        }


        addTransaction(addNewTransaction);
    }

    function changeBackground(e){
        e.target.style.background = 'green';
    }

    function changeBackgroundLeave(e){
        e.target.style.background ='#554897' ;
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                         (negative - expense, positive - income)</label >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn" onMouseOver={changeBackground} onMouseLeave={changeBackgroundLeave}>Add transaction</button>
            </form>
        </>
    )
}
