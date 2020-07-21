import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'

const Div= styled.div`
text-align: center;
  background-color: #61dafb;
  color: white;
`;
class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name:'Bitcoin' ,
          ticker: 'BTC' ,
          price:9999.99
        },
        {
          name:'Etherium' ,
          ticker: 'ETH' ,
          price: 235.99
        },
        {
          name:'Theter' ,
          ticker: 'USDT' ,
          price:1
        },
        {
          name:'Ripple' ,
          ticker: 'XRP' ,
          price:0.2
        },
        {
          name:'Bitcoin Cash' ,
          ticker: 'BCH' ,
          price:298.99
        }
      ]
    }
  }
  render(){
  return (
    <Div >
      <ExchangeHeader />   
      <AccountBalance amount={this.state.balance}/>
      <CoinList        coinData={this.state.coinData}/>                      
    </Div>
  );
}
}
export default App;
