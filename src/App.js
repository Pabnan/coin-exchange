import React from 'react';
import Coin from './components/coin/coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1> 
      </header>
      <AccountBalance amount={10000}/>
      <table className="Coin-table">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
             
        <Coin name= "Bitcoin" ticker="BTC"  price = {9999.99} />
        <Coin name= "Ethereum" ticker="ETH" price = {235.99} />
        <Coin name= "Theter" ticker="USDT" price = {1} />
        <Coin name= "Ripple" ticker="XRP" price = {.20} />  
         </tbody>
      </table>
    </div>
  );
}

export default App;
