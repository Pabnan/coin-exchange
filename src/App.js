import React,{useState,useEffect} from 'react';
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
export default  function App (props)  {
  const [balance,setBalance]         = useState(10000);
  const [showBalance,setShowBalance] = useState(false);
  const [coinData,setCoinData]       = useState([]);


 const   componentDidMount= async()=>{
    const response = await    axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0,COINS_COUNT).map(coin=> coin.id); 
    const tickerUrl='https://api.coinpaprika.com/v1/tickers/';
    const promises=coinIds.map(id =>  axios.get(tickerUrl+id));
    const coinData=  await   Promise.all(promises) 
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
   
    setCoinData(coinPriceData);
   }
   useEffect(function(){
    if(coinData.length===0){
      componentDidMount();
    } 
   });

   const handleShowBalance= ()=>{
  
   setShowBalance(oldValues=>!oldValues);
     }
   const handleRefresh=async(valueChangeId)=>{
  const response =await axios.get(`https://api.coinpaprika.com/v1/tickers/${valueChangeId}`)
  debugger;
  const newPrice =formatPrice(response.data.quotes.USD.price); 
  
  const newCoinData =coinData.map(function(values) {
       let newValues={...values};
       if(values.key===valueChangeId){
          newValues.price=newPrice
        }
        return newValues;
       });
     setCoinData(newCoinData);
      }; 
  return (
    <Div>
      <ExchangeHeader/>   
      <AccountBalance amount={balance} 
                     showBalance={showBalance }
                   handleShowBalance={handleShowBalance } />
      <CoinList   coinData={coinData} 
                 showBalance={showBalance }
                handleRefresh={handleRefresh}/>                      
    </Div>
  );
}

