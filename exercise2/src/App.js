import React from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './components/BankAccount'
function App() {
  return (
    <div className="App">
      <BankAccount first_name = "Charles" balance = "You are hella broke!!!"></BankAccount>
    </div>
  );
}

export default App;
