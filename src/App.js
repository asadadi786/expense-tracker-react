import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionalList } from './Components/TransactionalList';
import { AddTransaction } from './Components/AddTransaction';
import {GlobalProvide } from './Context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvide>
      
      <Header  />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionalList />
        <AddTransaction />
      </div>
    </GlobalProvide>
  );
}

export default App;
