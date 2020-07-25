import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div= styled.div`
text-align: center;
  background-color: #61dafb;
  color: white;
`;
const COINS_COUNT=10;
const formatPrice= price =>parseFloat(Number(price).toFixed(4));
class App extends React.Component  {
  state = {
    showBalance:false,
    balance: 10000,
    coinData: [
      // {
      //   name:'Bitcoin' ,
      //   ticker: 'BTC' ,
      //   balance:'1',
      //   price:9999.99
      // },
      // {
      //   name:'Etherium' ,
      //   ticker: 'ETH' ,
      //   balance:'20',
      //   price: 235.99
      // },
      // {
      //   name:'Theter' ,
      //   ticker: 'USDT' ,
      //   balance:'4',
      //   price:1
      // },
      // {
      //   name:'Ripple' ,
      //   ticker: 'XRP' ,
      //   balance:'8',
      //   price:0.2
      // },
      // {
      //   name:'Bitcoin Cash' ,
      //   ticker: 'BCH' ,
      //   balance:'2',
      //   price:298.99
      // },
      
      

    ]
  }
  
   componentDidMount= async()=>{
    const response =  await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0,COINS_COUNT).map(coin=> coin.id); 
    const tickerUrl='https://api.coinpaprika.com/v1/tickers/';
    const promises=coinIds.map(id =>  axios.get(tickerUrl+id));
    const coinData= await Promise.all(promises) 
    const coinPriceData =coinData.map(function(response) {
      const coin= response.data;
      return{
          key:coin.id,
        name:coin.name,
        ticker:coin.symbol,
        balance:0,
        price:formatPrice(coin.quotes.USD.price)
        };
       });
      
   this.setState({coinData:coinPriceData});  
   }
     
   handleShowBalance= ()=>{
    this.setState({showBalance:! this.state.showBalance});
     }

handleRefresh=async(valueChangeId)=>{
  
  const response =await axios.get(`https://api.coinpaprika.com/v1/tickers/${valueChangeId}`)
  const newPrice =formatPrice(response.data.quotes.USD.price); 
  
  const newCoinData =this.state.coinData.map(function(values) {
       let newValues={...values};
       if(values.key===valueChangeId){
          newValues.price=newPrice
        }
        return newValues;
       });
      this.setState({coinData:newCoinData});
      }; 

  render(){
  return (
    <Div>
      <ExchangeHeader/>   
      <AccountBalance amount={this.state.balance} 
                     showBalance={this.state.showBalance }
                   handleShowBalance={this.handleShowBalance } />
      <CoinList   coinData={this.state.coinData} 
                 showBalance={this.state.showBalance }
                handleRefresh={this.handleRefresh}/>                      
    </Div>
  );
}

}
export default App;
