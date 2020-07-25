import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Td= styled.td`
background-color: #1dc254;
   border: 1px solid;
   width: 25vh;
   color:white;
`;
export default function Coin (props) {
   const handleClick=(event)=>{
    event.preventDefault();
    props.handleRefresh(props.tickerId);
    
  }
    
      const balanceDisplay= props.showBalance ? <Td>{props.balance}</Td>:null;
      
        return(        
           <tr> 
            <Td> {props.name}   </Td> 
            <Td> {props.ticker} </Td>
                 {balanceDisplay}    
            <Td>${props.price}  </Td>
            <Td>
               <form action='#' method= 'POST'>
              <button onClick= {handleClick}>refresh</button>
              </form>  
            </Td>
          </tr>
        ) ;   
    
}
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    
    price: PropTypes.number.isRequired
  };
