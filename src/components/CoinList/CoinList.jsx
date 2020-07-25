import React from 'react';
import Coin from '../coin/coin';
import styled from 'styled-components'

const Table= styled.table`
margin: 50px auto 50px auto ;
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList (props) {
    
        const balanceDisplay= props.showBalance ? <th>Balance</th>:null;
        return (
            <Table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  {balanceDisplay}
                  <th>Price</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
          {props.coinData.map(({key, name, ticker,balance, price}) =>  (
           <Coin key={key}
           showBalance={props.showBalance }
           handleRefresh={props.handleRefresh}
            name={name} 
            ticker={ticker} 
            balance={balance}
            price={price} 
            tickerId={key}
            />
           ))}  
         </tbody>
      </Table>
    
        );
    
}



